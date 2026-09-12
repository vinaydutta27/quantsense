window.LEARNING_CONTENT={};
(()=>{const bank={
 "saccr-map": [
  [
   "Why can a newly traded derivative create exposure even when its market value is zero?",
   "Future market movements may make the derivative a receivable before the counterparty defaults or the position is closed."
  ],
  [
   "Does EAD tell us how likely the counterparty is to default?",
   "No. It measures regulatory exposure; default likelihood enters the separate credit-risk framework."
  ],
  [
   "Why are replacement cost and future exposure both needed?",
   "A position can already be owed money and can also become more valuable before close-out."
  ],
  [
   "Would zero replacement cost prove the trade is safe?",
   "No. Potential future exposure may remain substantial despite no current unsecured receivable."
  ],
  [
   "Is the notional amount necessarily the amount at risk?",
   "No. Notional scales contractual cash flows; SA-CCR adjusts it and combines exposure according to prescribed rules."
  ],
  [
   "Does changing alpha change the economics of a trade?",
   "It changes the regulatory exposure calculation, not the trade's cash flows or its market value."
  ],
  [
   "Why can two identical portfolios have different UK alpha treatment?",
   "The prescribed alpha depends on the counterparty's defined category under the 2027 rule."
  ],
  [
   "Should SA-CCR EAD be added directly to an SA-CVA capital charge?",
   "They are different quantities. EAD feeds credit-risk calculations; SA-CVA already measures a capital requirement."
  ],
  [
   "Why is EAD different from expected loss?",
   "EAD is an exposure measure, without multiplying by a default probability and loss severity to estimate expected loss."
  ],
  [
   "What would you investigate before using this result for reporting?",
   "Confirm scope, netting, collateral, trade mapping, the counterparty category and the applicable calculation date and transition."
  ]
 ],
 "saccr-netting": [
  [
   "Why can a payable reduce exposure in one arrangement but not another?",
   "Only recognised legal netting permits it to offset a receivable before replacement cost is calculated."
  ],
  [
   "Does dealing with one bank imply a single netting set?",
   "No. Separate contracts and enforceability boundaries can create several netting sets with the same counterparty."
  ],
  [
   "Can opposite market values conceal different future risks?",
   "Yes. Two trades may have equal values today while responding differently to rates, currencies or other drivers."
  ],
  [
   "Why is a hedging set smaller than a legal netting set?",
   "It groups only transactions for which the framework recognises the relevant future-risk offsets."
  ],
  [
   "Can a trade belong to more than one risk category?",
   "Yes, when material risk drivers span categories; the rule specifies mapping to each relevant category."
  ],
  [
   "Where does an inflation-driven transaction belong?",
   "It maps to interest-rate risk, with separate inflation hedging sets as specified by the rules."
  ],
  [
   "Does a climate-driven derivative necessarily belong to other risks?",
   "No. The PRA maps climatic-condition drivers to the commodity category."
  ],
  [
   "What happens if the legal netting conditions fail?",
   "Each transaction is treated as its own netting set, so the assumed legal offset cannot be used."
  ],
  [
   "Can the current-value chart show the entire netting benefit?",
   "No. It illustrates replacement cost only; PFE offsets require a separate risk-position calculation."
  ],
  [
   "Why should legal and risk teams agree on the portfolio structure?",
   "Legal boundaries determine permissible aggregation, while risk mapping determines how future exposure is calculated within those boundaries."
  ]
 ],
 "saccr-rc": [
  [
   "Why might RC remain positive after current exposure is fully margined?",
   "The threshold plus minimum transfer amount, less independent collateral, can be the binding replacement-cost term."
  ],
  [
   "What does a higher threshold permit operationally?",
   "It allows more exposure to remain before the firm can call for additional collateral."
  ],
  [
   "How does the minimum transfer amount affect the unsecured gap?",
   "It can delay a small collateral transfer, so the margined RC formula includes it alongside the threshold."
  ],
  [
   "Why is posted collateral entered with a negative sign?",
   "Collateral exposed to the counterparty can increase what is at risk; subtracting a negative recognised amount increases the gap."
  ],
  [
   "Can negative CMV create negative RC?",
   "No. Replacement cost is floored at zero under both displayed treatments."
  ],
  [
   "Why is the largest term used instead of adding the terms?",
   "The terms are alternative measures of the replacement exposure, not independent exposures to accumulate."
  ],
  [
   "Can independent collateral help with both current and threshold terms?",
   "Yes. NICA is subtracted in both terms before their maximum is taken."
  ],
  [
   "Does a post-only margin agreement qualify for the displayed margined formula?",
   "No. A firm unable to receive variation margin uses the specified unmargined treatment, including the relevant VM in NICA."
  ],
  [
   "Why should VM not also be counted as independent collateral?",
   "That would count the same protection twice and could understate exposure."
  ],
  [
   "What changes when several netting sets share a margin agreement?",
   "A dedicated RC formula applies; the single-netting-set formula cannot simply be used on pooled values."
  ]
 ],
 "saccr-collateral": [
  [
   "Why might £10m of securities protect less than £10m of exposure?",
   "Their value can fall before liquidation, so volatility adjustments reduce the recognised amount of received collateral."
  ],
  [
   "Why can a currency mismatch matter even for a stable asset?",
   "The collateral's reporting-currency value can change as the exchange rate moves."
  ],
  [
   "Why do received and posted haircuts move in different directions?",
   "The calculation conservatively reduces received protection and increases exposed posted collateral."
  ],
  [
   "Does every posted collateral item increase NICA exposure?",
   "No. Posted independent collateral that is segregated and bankruptcy remote is excluded under the specified condition."
  ],
  [
   "Does possession of an asset alone establish regulatory recognition?",
   "No. Eligibility, enforceability and the relevant collateral treatment must be established first."
  ],
  [
   "Can the haircut sliders be treated as a menu of permitted regulatory choices?",
   "No. They are illustrative inputs; the actual adjustment must come from the applicable prescribed method."
  ],
  [
   "Why does the liquidation period affect collateral treatment?",
   "A longer period allows more potential changes in collateral value before it can be realised."
  ],
  [
   "What would happen if a collateral item appeared in both VM and NICA?",
   "The same asset would provide duplicate credit in the calculation, understating the unsecured amount."
  ],
  [
   "Does the segregation label automatically establish bankruptcy remoteness?",
   "No. The legal arrangements must actually protect the collateral from the counterparty's insolvency estate."
  ],
  [
   "Why distinguish collateral face value from its signed recognised value?",
   "The signed, adjusted figure determines its exposure effect; the face amount alone does not."
  ]
 ],
 "saccr-pfe": [
  [
   "Why does excess collateral reduce the PFE multiplier?",
   "It provides a cushion against potential future changes before a new unsecured receivable arises."
  ],
  [
   "Why is the multiplier one for non-negative unsecured value?",
   "The prescribed reduction is available only when the net value after applicable collateral is negative."
  ],
  [
   "What does the five-percent floor preserve?",
   "A minimum fraction of a non-zero aggregate add-on remains even with very large excess collateral."
  ],
  [
   "Is the PFE floor five percent of notional?",
   "No. It is five percent of the aggregate add-on, which already reflects trade risk positions and aggregation."
  ],
  [
   "Does the multiplier change the replacement-cost formula?",
   "No. RC and PFE are calculated separately before being combined."
  ],
  [
   "Can a negative market value lower PFE without posted collateral?",
   "Yes. A sufficiently negative unsecured value can produce the reduction through the same multiplier formula."
  ],
  [
   "What happens when the aggregate add-on is zero?",
   "PFE is zero; the app uses a limiting multiplier to avoid dividing by zero in the displayed calculation."
  ],
  [
   "Why does the same collateral cushion have different effects for different add-ons?",
   "The exponential formula scales the cushion relative to the size of the potential-exposure add-on."
  ],
  [
   "Does PFE here mean a chosen confidence percentile from simulated losses?",
   "No. SA-CCR PFE is the prescribed multiplier times an aggregate supervisory add-on."
  ],
  [
   "Why is pooling multiple legal netting sets potentially misleading?",
   "A shared margin agreement has its own PFE treatment and does not permit the single-set formula to be applied indiscriminately."
  ]
 ],
 "saccr-duration": [
  [
   "Why can equal notionals produce unequal adjusted notionals?",
   "The payment horizons differ, so their supervisory duration factors differ."
  ],
  [
   "Is the five-percent parameter a market yield forecast?",
   "No. It is the supervisory discount rate used in the standardised duration formula."
  ],
  [
   "What does moving the start later do while preserving the payment-period length?",
   "It discounts that period further in the formula, reducing supervisory duration."
  ],
  [
   "Why does an already-started transaction use a zero start time?",
   "The calculation measures the remaining relevant payment period from today, rather than including elapsed exposure."
  ],
  [
   "Is option expiry always the correct end date for duration?",
   "No. The underlying instrument can create contractual obligations beyond option expiry."
  ],
  [
   "Why is supervisory duration different from the maturity factor?",
   "Duration adjusts rate or credit notional for the payment period; MF scales the future-risk horizon under margin treatment."
  ],
  [
   "Should an FX trade use this same duration adjustment?",
   "No. FX adjusted notional follows the leg and currency-conversion rules instead."
  ],
  [
   "What complicates the notional of an amortising contract?",
   "Changing deterministic notional values require the specified time-weighted treatment rather than a single arbitrary snapshot."
  ],
  [
   "Can leveraged or repeated cash-flow structures be ignored?",
   "No. The notional rules account for repeated exchanges and contractual multipliers where required."
  ],
  [
   "Why show adjusted notional before applying delta?",
   "It separates the scale and duration of the trade from the direction and optionality of its risk."
  ]
 ],
 "saccr-delta": [
  [
   "Why does selling an option reverse its delta sign?",
   "The seller has the opposite payoff exposure to the buyer for the same contract."
  ],
  [
   "Why can a bought put have a negative supervisory delta?",
   "Its value generally rises when the underlying falls, making it short the underlying risk driver."
  ],
  [
   "Is supervisory delta the same as a trader's live hedge ratio?",
   "Not necessarily. It uses prescribed supervisory volatility and the regulatory formula."
  ],
  [
   "Why does moneyness affect the magnitude of option delta?",
   "The relationship between price and strike changes how strongly the option responds to the underlying."
  ],
  [
   "Why is volatility fixed by the selected asset type here?",
   "The rules prescribe supervisory volatility; the calculator does not substitute an arbitrary market-volatility estimate."
  ],
  [
   "Can a linear trade have a delta magnitude different from one in this framework?",
   "Ordinary linear positions use the specified positive or negative unit delta, unlike the option formula shown."
  ],
  [
   "Does a negative delta imply negative EAD?",
   "No. Signed risk positions create offsets within aggregation; final exposure remains non-negative."
  ],
  [
   "Why is the positive-price assumption important?",
   "The logarithmic formula requires valid shifted price and strike inputs; negative-price treatments need the specified shift rules."
  ],
  [
   "Does a sold option alone always have zero exposure?",
   "No. The zero-exposure exception requires all the conditions for a sold-options-only unmargined netting set."
  ],
  [
   "Which additional inputs turn delta into a trade risk position?",
   "Multiply delta by adjusted notional and the applicable maturity factor before hedging-set aggregation."
  ]
 ],
 "saccr-maturity": [
  [
   "Why does the unmargined factor stop increasing after one year?",
   "The prescribed remaining-maturity horizon is capped at one year in that factor."
  ],
  [
   "Does the cap mean a ten-year swap has the same total add-on as a one-year swap?",
   "No. Supervisory duration can still differ substantially even when the maturity factors are both one."
  ],
  [
   "Why is there a floor for very short unmargined trades?",
   "The rule retains a minimum ten-business-day horizon in the maturity-factor calculation."
  ],
  [
   "Why does margin use a close-out horizon instead of remaining maturity?",
   "Margin reduces exposure repeatedly, leaving the period between the last effective exchange and risk closure particularly relevant."
  ],
  [
   "Does daily margin mean MPOR is one day?",
   "No. Close-out and replacement take time; the applicable regulatory minimum and operational extensions still matter."
  ],
  [
   "Why might a dispute lengthen the relevant risk period?",
   "It can delay effective collateral collection or risk resolution, requiring attention to the MPOR conditions."
  ],
  [
   "Can the MPOR slider be set solely to obtain a lower add-on?",
   "No. It represents an assumed valid period determined under the applicable rules."
  ],
  [
   "Why state the business-days-per-year convention?",
   "The conversion affects both the short-maturity floor and the margined square-root scaling."
  ],
  [
   "Do client-clearing arrangements always use the ordinary bilateral minimum?",
   "Article 279c specifies a five-business-day minimum substitution for the qualifying client/clearing-member transactions."
  ],
  [
   "Can frequent reset clauses affect the remaining maturity used?",
   "Yes. Transactions that settle exposure and reset value to zero follow the specified next-reset treatment."
  ]
 ],
 "saccr-ir": [
  [
   "Why can two opposite rate positions leave a positive add-on?",
   "They may occupy different end-date buckets, where offsets are partial rather than complete."
  ],
  [
   "Why are currencies kept in different rate hedging sets?",
   "Different currency curves can move independently, so their add-ons are calculated separately and summed."
  ],
  [
   "Is a five-year end date in the middle or longest bucket?",
   "It is in the middle bucket; the longest bucket begins strictly above five years."
  ],
  [
   "Why does signed notional differ from the charted risk position?",
   "The chart includes supervisory duration and the applicable maturity factor as well as trade direction."
  ],
  [
   "Can a long-dated trade dominate despite a smaller notional?",
   "Yes. Its duration-adjusted risk position can be larger than a short-dated trade's position."
  ],
  [
   "What changes when the example becomes margined?",
   "The maturity factor switches to the assumed valid ten-day MPOR treatment."
  ],
  [
   "Does the half-percent supervisory factor describe the counterparty's credit quality?",
   "No. It is the interest-rate asset-class factor, not a counterparty risk weight."
  ],
  [
   "Why should inflation positions not be merged indiscriminately with ordinary rates?",
   "The rules establish separate inflation hedging sets within the currency mapping."
  ],
  [
   "Does SA-CCR require FRTB delta, vega and curvature charges for these swaps?",
   "No. This calculation uses supervisory risk positions and the rate add-on formula."
  ],
  [
   "What would you inspect if the offset seems unexpectedly large?",
   "Check legal netting, currency assignment, end-date bucket, direction, duration and maturity factor before trusting the result."
  ]
 ],
 "saccr-fx": [
  [
   "Why does an identical currency pair permit more offset?",
   "Its signed risk positions can net within a common hedging set before the absolute value is taken."
  ],
  [
   "Can two different pairs offset simply because both contain GBP?",
   "No. Different currency pairs remain separate FX hedging sets in this example."
  ],
  [
   "Why take absolute values after pair-level netting?",
   "The add-on measures exposure magnitude while preserving valid offsets within the pair."
  ],
  [
   "Which leg determines adjusted notional when one leg is in reporting currency?",
   "The other leg determines it, with conversion into the reporting currency."
  ],
  [
   "What happens when neither leg is in reporting currency?",
   "The larger of the two converted leg amounts is used under the rule."
  ],
  [
   "Why is currency conversion needed before aggregation?",
   "All risk positions must be measured consistently in the reporting currency."
  ],
  [
   "Does the four-percent factor come from SA-CVA?",
   "No. It is the SA-CCR FX supervisory factor and differs from SA-CVA weights."
  ],
  [
   "What does shortening a trade below one year change here?",
   "It can lower the unmargined maturity factor, subject to the prescribed floor."
  ],
  [
   "Can exact opposite FX positions still have positive replacement cost?",
   "Yes. The add-on calculation and current net market value are different parts of exposure."
  ],
  [
   "What is omitted when these sliders start from adjusted notional?",
   "Actual currency leg amounts and spot conversion have already been assumed completed."
  ]
 ],
 "saccr-credit": [
  [
   "Why distinguish the reference issuer from the trading counterparty?",
   "The credit add-on reflects the underlying issuer's risk driver, while EAD concerns exposure to the derivative counterparty."
  ],
  [
   "Can matching different issuers remove all credit add-on?",
   "No. Distinct entities retain the residual component even when their common-factor contributions offset."
  ],
  [
   "What changes when both positions reference the same entity?",
   "Their risk positions net before the entity contribution and aggregation formula are applied."
  ],
  [
   "Why is the factor loading not a pairwise correlation?",
   "It measures each entity's common-factor exposure; equal loadings imply pairwise correlation equal to their square."
  ],
  [
   "How does a weaker mapped credit quality affect the example?",
   "It increases the supervisory factor for the selected single-name reference entity."
  ],
  [
   "Why does an index receive a different factor loading?",
   "The regulatory treatment distinguishes multi-name references from individual issuers."
  ],
  [
   "Can every unquoted basket use the quoted-index factor?",
   "No. Unquoted multi-name exposures require the relevant constituent-weighted factor treatment."
  ],
  [
   "What information is needed before assigning a credit quality step?",
   "The applicable nominated external assessment or permitted mapping process must be identified."
  ],
  [
   "Does the credit add-on directly measure default loss on the CDS reference name?",
   "It is an SA-CCR future-exposure component, not a standalone default-loss estimate."
  ],
  [
   "Which trade adjustments have already occurred before using these sliders?",
   "Supervisory delta, duration-adjusted notional and maturity factor have been combined into risk positions."
  ]
 ],
 "saccr-equity": [
  [
   "Why do single equities and indices have different factors?",
   "The rules use different supervisory scales for individual-issuer and multi-name equity risk."
  ],
  [
   "Does a stock and an index belong to the same reference entity?",
   "No. Their reference composition differs; a shared market theme is not enough."
  ],
  [
   "Can opposite positions in the same issuer net before aggregation?",
   "Yes, when they belong to the same applicable reference entity and hedging set."
  ],
  [
   "Why can equal opposite positions in distinct equities leave exposure?",
   "The formula retains issuer-specific residual risk that does not cancel with the common factor."
  ],
  [
   "Is an eighty-percent index loading an eighty-percent pairwise correlation?",
   "No. For two such loadings, the common-factor pairwise correlation is their product."
  ],
  [
   "How is equity adjusted notional ordinarily obtained?",
   "Use the prescribed price-times-units or contractual-notional treatment before applying delta and maturity factor."
  ],
  [
   "Can the thirty-two-percent factor be replaced with observed stock volatility?",
   "No. It is a prescribed supervisory factor, distinct from a live volatility estimate."
  ],
  [
   "Does a lower index factor guarantee lower EAD for every portfolio?",
   "No. Position size, grouping, collateral, replacement cost and the rest of the portfolio also affect EAD."
  ],
  [
   "What matters for grouping two multi-name equity transactions?",
   "The rules require the same underlying constituents for the shared reference entity."
  ],
  [
   "Why not offset equity add-on against a negative FX position?",
   "Asset-class add-ons are combined as non-negative amounts, without cross-class diversification."
  ]
 ],
 "saccr-commodity": [
  [
   "Why does oil versus oil offset differently from oil versus gas?",
   "Same-type risk positions net first, while different commodity types retain residual risk within the energy set."
  ],
  [
   "Why does an oil-versus-gold hedge lose the energy-set offset?",
   "Oil and gold belong to different commodity hedging sets whose add-ons are summed."
  ],
  [
   "What makes electricity stand out in the supervisory factors?",
   "Its prescribed factor is forty percent, compared with eighteen percent for other commodities."
  ],
  [
   "Does delivery location automatically create a new reference type?",
   "The rule groups by the underlying commodity's nature irrespective of delivery location and quality."
  ],
  [
   "Is the forty-percent loading a forty-percent pairwise correlation?",
   "No. Its squared value gives the implied sixteen-percent cross-type correlation in this factor formula."
  ],
  [
   "Why can opposite energy contributions leave a positive charge?",
   "The residual component retains differences between distinct energy reference types."
  ],
  [
   "Where are climatic-condition derivatives mapped?",
   "They belong to the commodity category, with a distinct climatic-conditions hedging set."
  ],
  [
   "Can an FRTB commodity bucket be reused unchanged?",
   "No. SA-CCR has its own hedging-set and reference-type definitions."
  ],
  [
   "What does a negative commodity contribution mean?",
   "The risk position is short the driver; aggregation uses that sign for permitted offsets."
  ],
  [
   "What is required before adding this result to the portfolio?",
   "The remaining commodity sets must be calculated and summed, then combined with other risk-category add-ons."
  ]
 ],
 "saccr-other": [
  [
   "Why are volatility trades separated from ordinary trades?",
   "Their primary risk concerns volatility or correlation rather than the level of the ordinary driver."
  ],
  [
   "Does every two-legged trade qualify for the basis coefficient?",
   "No. The specific driver, pair and correlation conditions must be satisfied."
  ],
  [
   "Why is the basis coefficient not a free discount?",
   "It follows regulatory classification of the transaction and cannot be chosen merely to reduce exposure."
  ],
  [
   "Can different basis pairs be put together because both are rate spreads?",
   "The special grouping conditions require the relevant identical pair, not just a shared category."
  ],
  [
   "What does the coefficient of five change?",
   "It scales the hedging-set add-on after the underlying risk positions have been determined."
  ],
  [
   "Does this lab derive the risk position of a variance swap?",
   "No. Its inputs assume valid risk positions have already been calculated."
  ],
  [
   "Why does other risk use identical drivers for ordinary grouping?",
   "Only that matching boundary permits the prescribed within-set offset for this category."
  ],
  [
   "Can the same coefficients apply outside the other-risk category?",
   "Yes. The specified special hedging-set coefficients also apply within the other asset classes."
  ],
  [
   "What happens if the basis driver-pair conditions fail?",
   "The rule requires a different mapping rather than automatically granting the half-factor treatment."
  ],
  [
   "Why should a firm keep records of special hedging sets?",
   "The PRA can request their driver identities, grouping and transaction counts to assess the classification."
  ]
 ],
 "saccr-portfolio": [
  [
   "Why must trade adjustments come before the aggregate add-on?",
   "Raw notionals do not yet reflect supervisory direction, duration or the applicable future-risk horizon."
  ],
  [
   "Why do the six asset-class amounts add without offset?",
   "The framework does not provide diversification across these risk categories at the aggregate add-on stage."
  ],
  [
   "Does independent collateral change every supervisory factor?",
   "No. It affects RC and the multiplier, while the prescribed asset factors remain unchanged."
  ],
  [
   "Why can RC vanish while PFE remains positive?",
   "The current unsecured amount can be non-positive even though future changes remain possible."
  ],
  [
   "What changes if portfolio size doubles but collateral stays fixed?",
   "Trade add-ons grow, while the fixed collateral cushion becomes smaller relative to those add-ons."
  ],
  [
   "Is the credit reference factor the counterparty's RWA risk weight?",
   "No. It concerns the underlying credit driver; counterparty credit-risk weighting occurs after EAD."
  ],
  [
   "Why are all maturity factors one in this unmargined example?",
   "Every trade has a remaining maturity of at least one year, which reaches the factor's cap."
  ],
  [
   "Can EAD be read directly as the required capital amount?",
   "No. It must enter the applicable subsequent credit-risk calculation."
  ],
  [
   "What information would make this a real portfolio calculation?",
   "Actual trades, legal sets, dates, notionals, directions, collateral and all required mapping and eligibility decisions."
  ],
  [
   "Why is the legacy alpha addition absent here?",
   "The example isolates the core calculation; the final transition applet addresses the conditional additional treatment."
  ]
 ],
 "saccr-margin-cap": [
  [
   "Why compare full exposure values instead of individual components?",
   "The cap applies to each complete branch, preserving internally consistent RC and PFE calculations."
  ],
  [
   "Can one take RC from the margined branch and PFE from the unmargined branch?",
   "That would mix treatments and is not the prescribed minimum-of-total-exposures comparison."
  ],
  [
   "When does the cap change the displayed result?",
   "When the valid margined candidate exceeds the valid unmargined comparator for the same set."
  ],
  [
   "Does the cap eliminate the need to calculate margined exposure?",
   "No. Both valid branches are needed to identify which total is smaller."
  ],
  [
   "Can a shared margin agreement merge separate legal netting sets?",
   "No. The rules specify distinct treatment for shared collateral across separate legal sets."
  ],
  [
   "How does one margin agreement across several netting sets affect PFE?",
   "Article 278(2) sums the individual PFE amounts calculated as if unmargined."
  ],
  [
   "What happens with several margin agreements inside one netting set?",
   "Article 274(4) requires the specified sub-netting-set construction for PFE aggregation."
  ],
  [
   "Why group margined trades by common MPOR in that construction?",
   "Different risk periods require separate treatment before their aggregate add-ons are combined."
  ],
  [
   "Can any four arbitrary branch inputs establish a compliant portfolio result?",
   "No. These controls illustrate the cap only; real branch inputs must be valid calculations of the same portfolio."
  ],
  [
   "Why does agreement structure belong in the risk data model?",
   "It changes the actual calculation path, not just the accompanying legal paperwork."
  ]
 ],
 "saccr-alpha": [
  [
   "Why is one alpha not appropriate for every UK counterparty from 2027?",
   "The rule assigns alpha one to specified non-financial and pension-related categories, and one-point-four otherwise."
  ],
  [
   "What date fixes the legacy alpha add-on base?",
   "It is measured from the specified exposure-value difference at 1 January 2027."
  ],
  [
   "Why is the transition not simply another multiplier on current EAD?",
   "The addition uses a frozen starting base while the current core exposure can change independently."
  ],
  [
   "Does every alpha-one counterparty automatically receive a legacy addition?",
   "No. The pre-2027 transaction, referenced counterparty and continuing CVA-transition conditions must apply."
  ],
  [
   "What happens if the relevant CVA transition treatment ceases?",
   "The rule no longer requires the associated declining alpha addition from that date."
  ],
  [
   "How does the legacy addition change between 2027 and 2029?",
   "The applicable share of the frozen add-on falls from sixty to forty to twenty percent."
  ],
  [
   "Does the declining schedule forecast the portfolio's future exposure?",
   "No. Actual RC and PFE can change; the chart holds them constant to isolate the schedule."
  ],
  [
   "Does this conditional add-on apply to leverage-ratio calculation?",
   "Article 274(2B) excludes that treatment for the leverage-ratio calculation."
  ],
  [
   "Why should new and legacy transaction scope be distinguished?",
   "The conditional treatment concerns transactions entered before 1 January 2027 under the specified conditions."
  ],
  [
   "What could make the simple frozen-base shortcut insufficient?",
   "Mixed scopes, exceptional exposure caps or other transaction-specific treatments require the actual two starting exposure calculations."
  ]
 ]
};
for(const l of SACCR_LESSONS) LEARNING_CONTENT[l.id]={intuition:[l.simple,l.scope],questions:bank[l.id]};
})();
