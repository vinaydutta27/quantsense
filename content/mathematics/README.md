# Mathematics for quantitative finance

Published course source, prepared 9 October 2026.

- `lessons.txt` contains 84 original lessons in nine ordered chapters. The eleven pipe-separated fields are ID, title, experiment ID, first-principles explanation, reasoning, equation, worked example, experiment prompt, conceptual question, answer, and finance connection.
- `glossary.txt` contains 144 definitions.
- `page.html` supplies the course overview, notation guide and nine chapter projects with worked solutions.
- Run `node scripts/build-mathematics.cjs` from the repository root after editing these files. It builds the published content and page, using the existing module navigation and analytics convention.
- Experiment logic is in `dist/mathematics-engine.js`; the renderer is in `dist/mathematics.js`. No mathematical library or external API is needed at runtime.

## Pedagogy and scope

Each lesson starts with a concrete question, then offers a controlled visual experiment, reasoning, notation, a worked reference example, live calculation steps, a conceptual question and a numerical check. The reference example is separate from the live controls. Learners mark their own understanding; progress is not a qualification or proof of competence.

The sequence covers core undergraduate mathematics and selected advanced tools used in quantitative finance. The overview explicitly distinguishes it from a complete graduate programme or a production modelling engine. Source links are mathematical references, not endorsements; source text and illustrations are not reproduced.

## Verification

`tests/mathematics.test.cjs` checks all lesson schemas, 540 mixed endpoint/default input combinations, 33 analytical benchmarks and reproducible simulations. Benchmarks include weighted returns, limits, quadrature, rank, variance, Bayes, quantiles, expected shortfall, replication, Black–Scholes, Pareto tails and Kalman updates. Discrete Itô sums are checked against their finite-grid identity.

`tests/mathematics-browser.cjs` exercises all 84 lessons, controls, reset, practice answers, saved progress, search, glossary and responsive layout in an isolated browser. `tests/navigation.test.cjs` verifies the course is discoverable in the Foundations catalogue while retaining existing utility navigation. Formula tests are not an independent audit of every explanatory sentence.

All randomness uses a visible seed. Grid changes regenerate increments rather than pretending to refine the same Brownian path. A normal CDF series is evaluated in double precision, with far tails rounded. Finance examples disclose simplified assumptions. No financial advice or regulatory certification is implied.
