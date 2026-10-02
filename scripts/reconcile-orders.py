#!/usr/bin/env python3
"""Aggregate an explicitly normalised Topmate export. No network calls or customer fields."""
import argparse
import csv
import json
from decimal import Decimal, InvalidOperation
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
CATALOGUE = {p['id']: p for p in json.loads((ROOT / 'content/packages.json').read_text())['packages']}
STATUSES = {'paid', 'refunded', 'partially_refunded', 'pending', 'failed', 'cancelled'}
FIELDS = ['product_id', 'package', 'currency', 'settled_orders', 'fully_refunded_orders', 'partially_refunded_orders', 'retained_orders', 'gross_paid_amount', 'refunded_amount', 'net_paid_amount']


def money(value, line):
    try:
        amount = Decimal(value)
    except (InvalidOperation, TypeError):
        raise ValueError(f'Row {line}: amounts must be unformatted decimal numbers.') from None
    if not amount.is_finite() or amount < 0:
        raise ValueError(f'Row {line}: amounts must be finite and nonnegative.')
    return amount


def reconcile(source):
    reader = csv.DictReader(source)
    required = {'transaction_id', 'product_id', 'status', 'amount', 'currency'}
    if not required.issubset(reader.fieldnames or []):
        raise ValueError('Required columns: transaction_id,product_id,status,amount,currency')
    transactions = {}
    totals = {}
    ignored = 0
    for line, raw in enumerate(reader, 2):
        row = {key: (raw.get(key) or '').strip() for key in required | {'refunded_amount'}}
        if not row['transaction_id'] or not row['product_id']:
            raise ValueError(f'Row {line}: transaction and product IDs are required.')
        status = row['status'].lower()
        currency = row['currency'].upper()
        if status not in STATUSES or not re.fullmatch(r'[A-Z]{3}', currency):
            raise ValueError(f'Row {line}: map the status and three-letter currency explicitly before import.')
        amount = money(row['amount'], line)
        refund = money(row['refunded_amount'], line) if row['refunded_amount'] else (amount if status == 'refunded' else Decimal(0))
        if refund > amount or (status == 'refunded' and refund != amount) or (status == 'partially_refunded' and not 0 < refund < amount) or (status not in {'refunded', 'partially_refunded'} and refund != 0):
            raise ValueError(f'Row {line}: status and refunded amount are inconsistent.')
        record = (row['product_id'], status, amount, currency, refund)
        transaction = row['transaction_id']
        if transaction in transactions:
            if transactions[transaction] != record:
                raise ValueError(f'Row {line}: conflicting duplicate transaction; use one final record per order.')
            continue
        transactions[transaction] = record
        if row['product_id'] not in CATALOGUE or status not in {'paid', 'refunded', 'partially_refunded'}:
            ignored += 1
            continue
        key = (row['product_id'], currency)
        if key not in totals:
            totals[key] = dict(product_id=key[0], package=CATALOGUE[key[0]]['title'], currency=currency, settled_orders=0, fully_refunded_orders=0, partially_refunded_orders=0, retained_orders=0, gross_paid_amount=Decimal(0), refunded_amount=Decimal(0), net_paid_amount=Decimal(0))
        total = totals[key]
        total['settled_orders'] += 1
        total['fully_refunded_orders'] += int(status == 'refunded')
        total['partially_refunded_orders'] += int(status == 'partially_refunded')
        total['retained_orders'] += int(status != 'refunded')
        total['gross_paid_amount'] += amount
        total['refunded_amount'] += refund
        total['net_paid_amount'] += amount - refund
    return [totals[key] for key in sorted(totals)], ignored


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('input', type=Path)
    parser.add_argument('--output', type=Path, required=True)
    args = parser.parse_args()
    if args.input.resolve() == args.output.resolve():
        parser.error('Input and output paths must differ.')
    try:
        with args.input.open(newline='', encoding='utf-8-sig') as source:
            rows, ignored = reconcile(source)
        with args.output.open('w', newline='', encoding='utf-8') as dest:
            writer = csv.DictWriter(dest, fieldnames=FIELDS)
            writer.writeheader()
            writer.writerows(rows)
    except (ValueError, OSError) as exc:
        parser.exit(1, f'{exc}\n')
    print(f'Wrote {len(rows)} product/currency totals; ignored {ignored} non-settled or non-package records.')


if __name__ == '__main__':
    main()
