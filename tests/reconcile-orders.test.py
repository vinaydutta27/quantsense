import importlib.util
import io
from pathlib import Path
import unittest
from decimal import Decimal

spec = importlib.util.spec_from_file_location('orders', Path(__file__).resolve().parents[1] / 'scripts/reconcile-orders.py')
orders = importlib.util.module_from_spec(spec)
spec.loader.exec_module(orders)
HEADER = 'transaction_id,product_id,status,amount,currency,refunded_amount\n'


class OrderTests(unittest.TestCase):
    def test_confirmation_deduplication_and_refunds(self):
        result, ignored = orders.reconcile(io.StringIO(HEADER + '\n'.join([
            'a,2307098,paid,999,INR,', 'a,2307098,paid,999,INR,',
            'b,2307098,refunded,999,INR,999', 'c,2307098,partially_refunded,999,INR,200',
            'd,2307098,pending,999,INR,', 'e,2307098,failed,999,INR,',
            'f,2307098,cancelled,999,INR,', 'g,other,paid,500,INR,',
            'h,2307098,paid,12,USD,'
        ])))
        self.assertEqual(ignored, 4)
        self.assertEqual(len(result), 2)
        inr = next(r for r in result if r['currency'] == 'INR')
        self.assertEqual(inr['settled_orders'], 3)
        self.assertEqual(inr['retained_orders'], 2)
        self.assertEqual(inr['net_paid_amount'], Decimal('1798'))
        self.assertEqual(inr['fully_refunded_orders'], 1)
        self.assertEqual(inr['partially_refunded_orders'], 1)
        self.assertNotIn('transaction_id', inr)

    def test_reject_ambiguous_records(self):
        rows = [
            'a,2307098,paid,999,INR,\na,2307098,refunded,999,INR,999',
            'a,2307098,paid,NaN,INR,',
            'a,2307098,partially_refunded,999,INR,',
            'a,2307098,paid,999,INR,20',
            'a,2307098,completed,999,INR,',
            'a,2307098,refunded,999,INR,1500',
        ]
        for row in rows:
            with self.subTest(row=row), self.assertRaises(ValueError):
                orders.reconcile(io.StringIO(HEADER + row))


if __name__ == '__main__':
    unittest.main()
