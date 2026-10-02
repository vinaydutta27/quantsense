# Package storefront and measurement

Implemented 2 October 2026 on the existing GitHub Pages site.

## Content maintenance

- Edit `content/packages.json`, then run `node scripts/build-packages.cjs`.
- It generates the homepage, package shop, 12 product pages and browser catalogue. It also adds package discovery to existing navigation and extends the sitemap.
- ₹999 prices were checked against the public QuantSense Topmate storefront on 2 October 2026. Keep this configuration and the Topmate listing in sync. The site points to Topmate for final amounts and purchase terms.
- The complete free learning directory is preserved from `dist/learning-paths.html`.
- Edit `content/career-goals.json` and rebuild to maintain goal-based discovery on the homepage and package shop. The three goals provide six ordered paths: four interview areas, practical modelling and treasury expertise. Each route explains one package recommendation, includes its starting knowledge, and links to free lessons and the package preview. The modelling route recommends the Yield Curves package for its first practical stage; a single purchase covers that subject.
- Goal selection supports keyboard navigation and shareable URL fragments such as `#goal-modelling` or `#goal-interview-credit-risk`. Every path stays readable when JavaScript is disabled.
- Module offers use `dist/learning-package.js`; they do not change the calculator mathematics.
- Team wording is the owner's supplied description: “We are a group of bankers working in these fields.” No unverified employers, credentials or endorsements have been added.

## Samples and source editions

Only selected FRTB and Treasury materials are published. Originals are QuantSense's v0.9 review packs, regulatory snapshot 19 September 2026. The website explicitly identifies that edition and explains that the current paid pack can differ.

- FRTB handbook: original pages 4–7; Treasury handbook: original pages 3–4.
- Five flashcards and one worked case from each review pack, in accessible HTML.
- One adapted calculator from each review-edition offline lab. Run `node scripts/build-sample-labs.cjs` to rebuild them.
- The other ten product pages link to their actual free interactive module, clearly described as free website content. Current paid-file samples still require the corresponding originals; no paid sample is fabricated.
- Full paid archives and full paid labs are not committed or published.

## Analytics

The existing GA4 property `G-7S3F8C64KY` is retained. Custom interaction events run only after analytics consent. Preferences can be reopened on the Privacy page and storefront footer. No contact values, search text, readiness answers, slider values, names or email addresses are added to event parameters. The readiness event includes only a count.

| Event | Meaning |
| --- | --- |
| `view_item_list` | A package card becomes visible; item list is homepage or shop |
| `select_item` | Visitor follows a package details link |
| `view_item` | Package hero becomes visible |
| `package_offer_view` | Module introduction, lesson-end or product-footer offer becomes visible |
| `package_preview_click` | Visitor chooses the preview route |
| `package_sample_view` | Embedded sample calculator becomes visible |
| `package_sample_open` | Sample PDF, download, free lesson, solution or flashcard opened |
| `package_readiness_check` | Starting-knowledge checklist changed; count only |
| `package_checkout_click` | Outbound click to a Topmate product listing |
| `career_goal_select` | Visitor chooses interview preparation, modelling or treasury |
| `career_goal_focus_select` | Visitor selects an interview area |
| `career_path_step` | Visitor follows a free lesson or starts the selected path; this does not indicate completion |

An outbound listing click is **not** a checkout start or confirmed purchase. No `purchase`, `begin_checkout` or revenue event is emitted by this static site.

### GA4 account setup still needed

In the existing GA4 account, register event-scoped custom dimensions for `package_id`, `placement`, `sample_type`, and `destination`. Standard ecommerce item fields already identify the products. Create an exploration for product views → sample interactions → Topmate clicks, broken down by item and traffic source. Count users/sessions for funnel rates, not raw repeated clicks. Use click-through as a leading indicator; optimise confirmed paid orders and revenue using Topmate records.

No GA4 or Topmate administrative integration has been configured in this change. If Topmate supports a verified paid-order integration for this account, connect that to a server-side purchase handler with transaction-ID deduplication and refund handling. Do not expose an API secret in browser JavaScript. Confirm consent requirements and cross-domain identifiers before trying to attribute purchases to an individual website session. Do not upload customers' contact details to GA4.

Goal events use only fixed catalogue IDs: `goal_id`, `path_id`, `module_id`, the numeric `step`, and `placement`. Register the ID fields as event-scoped custom dimensions if needed for GA4 reports. Goal recommendations use existing package events with placements such as `homepage_goal_interview_market-risk`, so their package clicks and Topmate visits can be compared with general browsing. Goal events follow the same analytics consent setting.

### Reconcile confirmed orders now

`scripts/reconcile-orders.py` accepts a locally prepared CSV derived from a Topmate export. Its required columns are `transaction_id,product_id,status,amount,currency` and optional `refunded_amount`. Map only confirmed settled orders to `paid`; map fully refunded orders to `refunded`, and partial refunds to `partially_refunded` with an exact refunded amount. `amount` is the gross paid amount in major currency units, not a formatted price string. Use the paid amount consistently rather than guessing it from the catalogue. Pending, failed and cancelled orders do not count as sales.

The script validates all rows, deduplicates identical transaction records, rejects conflicting duplicates, and produces aggregate order/revenue totals by product and currency. It never sends records anywhere, attributes orders to website clicks, or writes personal fields to the result. Keep source exports outside this repository.

Example: `python3 scripts/reconcile-orders.py /private/path/orders-normalised.csv --output /private/path/package-sales.csv`

Compare weekly paid orders, refund-adjusted revenue and outbound clicks per package. A change in click-through alone is not evidence of higher sales. Once sufficient traffic exists, test the featured package order or hero copy one change at a time against the confirmed-order baseline.

## Publishing and checks

Commit changes to `main` to run the existing GitHub Pages workflow. The domain remains `quantsense.co`. The legacy `.openai/hosting.json` is not used to deploy this site.

Run `node tests/package-funnel.test.cjs` for buyer journeys, consent, sample calculations, product routing, mobile layout and module functionality. Supply `PLAYWRIGHT_CHROMIUM_EXECUTABLE` if using a system Chromium. `python3 tests/reconcile-orders.test.py` checks payment status, deduplication and refund reconciliation.

Run `node tests/career-goals.test.cjs` for goal recommendations, ordered links, interview areas, keyboard and fragment navigation, layouts from 320px to desktop, consent and the no-JavaScript fallback.
