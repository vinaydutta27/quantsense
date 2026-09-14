(() => {
 const text={
 portfolio:`Why can equal loan balances produce different losses?|Different borrowers have different default risks, contracts expose different amounts and collateral changes recoveries.
 Why can cards have exposure beyond today’s balance?|Unused limits can be drawn before default, increasing EAD.
 Does a mortgage always have low LGD?|No. Property prices, senior claims, disposal costs and recovery delays can leave substantial loss.
 Can a sovereign be analysed with the same variables as a consumer?|No. Fiscal capacity, external liquidity and currency constraints differ from household affordability and payment behaviour.
 Is the lifetime loss bar automatically the accounting allowance?|No. Accounting scope, staging and probability-weighted forward-looking assumptions must first be established.`,
 pd:`Why do surviving borrowers matter?|Only borrowers that have not already defaulted can experience their first default in the next interval.
 Can annual conditional PDs simply be added?|No. They refer to different surviving populations and must be survival-weighted.
 What should cumulative PD plus survival equal?|One hundred percent when default and survival exhaust the modelled outcomes.
 Does a falling marginal PD prove improving borrowers?|No. It can reflect depletion of the surviving population even with unchanged conditional PD.
 Can prepayment affect the observed default curve?|Yes. It changes exposure and observation, so competing exits need appropriate treatment.`,
 lgd:`Why can a late recovery be worse than an immediate recovery?|The delayed cash has lower present value and may involve additional costs.
 Is recovery percentage the complement of economic LGD?|Only under matching timing and cost conventions; gross cash recovery alone is insufficient.
 Can economic loss exceed the defaulted principal?|Yes. Workout costs can make net recoveries negative.
 Why do incomplete workouts matter for model estimation?|Unresolved cases may still generate recoveries or costs, so treating them as finished biases severity estimates.
 Must accounting and prudential LGDs be identical?|No. Their objectives, discounting and calibration conventions can differ.`,
 ead:`Can an undrawn line create credit loss?|Yes. The borrower may draw it before default.
 Does a CCF of zero mean the whole facility is risk-free?|No. Any drawn balance remains exposed, and the zero additional draw assumption requires evidence.
 Why might utilisation rise near default?|A borrower under liquidity pressure may use available credit while it remains accessible.
 Is a behavioural CCF automatically a regulatory factor?|No. Estimated draw behaviour and prescribed exposure factors serve different purposes.
 Could EAD exceed the current facility limit in reality?|Accrued interest, over-limit usage and contract terms can matter, although this model excludes them.`,
 dependence:`Why does expected loss stay fixed as dependence rises?|Each loan’s unconditional PD, EAD and LGD stay fixed; only the joint arrangement of defaults changes.
 What makes the bad regime important?|It gives many borrowers a higher conditional default probability at the same time.
 Can more names remove all shared risk?|No. More names can reduce idiosyncratic variation while common regime risk remains.
 Why does VaR sometimes jump rather than move smoothly?|A finite loan pool has discrete default counts and therefore discrete possible losses.
 Why inspect ES as well as VaR?|ES describes severity across the worst tail mass, whereas VaR marks a loss quantile.`,
 concentration:`Why can expected loss hide concentration?|The same average loss can be spread across many small loans or concentrated in one large exposure.
 What does the effective number of names represent?|It translates exposure concentration into the number of equally weighted names with the same HHI.
 Does HHI measure default dependence?|No. HHI measures exposure shares; dependence is a separate relationship between default events.
 Can sector concentration matter with many borrowers?|Yes. Many names can share the same economic vulnerability.
 What is lost when large exposures are split into artificial records?|The common borrower identity and indivisible default event can be obscured.`,
 migration:`Can a downgrade matter before default?|Yes. It can change expected future losses, pricing, monitoring and limits.
 Why must each matrix row sum to one?|The row allocates all possible next-period states for a borrower starting in that state.
 Why is default absorbing here?|The model tracks first default and does not represent subsequent cures or recoveries as rating upgrades.
 Does a constant matrix guarantee a good long-term projection?|No. Economic conditions and borrower composition can change transition behaviour.
 Why might a strong borrower eventually default through a weak grade?|Deterioration can occur in stages, so repeated migration creates indirect paths to default.`,
 mortgage:`Why can a low initial LTV be misleading in stress?|Collateral prices can fall, and disposal costs or prior claims reduce recoveries.
 Does better collateral eliminate SICR?|No. SICR concerns change in default risk, not merely the amount lost after default.
 Why might PD and LGD rise together?|The same recession can weaken borrower income and property sale values.
 What does loan seniority change?|Senior claims can consume collateral proceeds before a junior lender receives anything.
 Why distinguish affordability from collateral value?|Affordability supports timely repayment; collateral is a recovery source after repayment fails.`,
 corporate:`Why is debt service coverage useful?|It compares cash available for repayment with interest and principal actually due.
 Can positive accounting profit coexist with a cash shortfall?|Yes. Cash timing, working capital and non-cash accounting items can differ from profit.
 Why does a bullet maturity create refinancing risk?|A large principal repayment may depend on obtaining new funding at that date.
 Why are occupancy and sponsor strength relevant for projects?|They affect cash generation and the support available when a specialised project underperforms.
 Is the displayed PD a fitted corporate rating?|No. It is an explicitly invented response curve that illustrates direction, not a validated rating system.`,
 mitigation:`Why can a guarantee fail when most needed?|The guarantor may be exposed to the same stress as the borrower.
 Why use conditional guarantor non-payment?|The relevant event is inability to pay when the borrower has already defaulted.
 Does economic loss reduction ensure regulatory recognition?|No. Recognition also depends on legal, eligibility and framework requirements.
 Why do maturity and currency mismatches matter?|Protection can expire early or pay in a currency that no longer matches the exposure.
 Can the same protection be counted twice?|It must not be duplicated across collateral, LGD adjustments and separate guarantee benefits.`,
 pricing:`Why can high spread coexist with poor profitability?|Expected losses and operating or capital costs can exceed the extra revenue.
 Is allocated capital itself an annual expense?|No. The annual hurdle cost is remuneration on the allocated balance.
 What happens if PD rises without repricing?|Expected credit cost increases, reducing risk-adjusted contribution.
 Does a profitable estimate justify every loan?|No. Limits, uncertainty, responsible lending and strategic constraints also matter.
 Why distinguish expected loss from realised loss?|Expected loss is an average across outcomes; the actual year can be substantially better or worse.`,
 capital:`Why is RWA not the same as cash loss?|RWA is a regulatory exposure measure used in capital requirements, not a forecast of money lost.
 Is accounting ECL an economic-capital estimate?|No. They measure different aspects of risk using different conventions.
 Can allowance increase with no change in the displayed risk weight?|Yes. Accounting forecasts can change even when a simplified regulatory category remains unchanged.
 Why specify jurisdiction and effective date?|Capital rules, implementation dates and eligibility differ across frameworks and periods.
 Why is an IRB PD not automatically an IFRS 9 PD?|Calibration objectives, horizons, forward-looking treatment and regulatory constraints can differ.`,
 data:`Why distinguish accounting date from availability date?|A fact describing the past may not yet have been reported at the scoring date.
 Is a collection flag a valid origination input?|No. A flag created after default contains information unavailable at origination.
 Why separate observation and outcome windows?|Inputs must precede the decision while the target measures what happens afterwards.
 Can temporal splitting fix feature leakage by itself?|No. A future outcome copied into both cohorts still leaks in both cohorts.
 What should data lineage document?|Sources, transformations, timestamps, definitions, exclusions and reconciliations.`,
 variables:`Why can adding a variable reduce model usefulness?|It may introduce noise, redundancy, instability or information unavailable when the score is used.
 Does high information value guarantee selection?|No. It may reflect leakage, sparse bins or a relationship already captured elsewhere.
 Why fit imputation and scaling only on training data?|Using later data to choose transformations can leak information into development.
 What does a duplicate affordability proxy teach?|Closely related variables can divide a similar signal across coefficients without adding much new evidence.
 Why keep a challenger model?|It tests whether the chosen approach adds useful, stable information over a simpler alternative.`,
 woe:`Why does the sign of WoE depend on convention?|Reversing default and non-default distributions reverses the log ratio.
 Why smooth empty cells?|Without smoothing, a zero count can produce an infinite log ratio from a small sample.
 Does smoothing create genuine observations?|No. It regularises an estimate and must be disclosed as a modelling choice.
 Why inspect missing values separately?|Missingness can indicate a distinct data process or customer segment rather than a typical numeric value.
 Can binning hide a nonlinear pattern?|Yes. Coarse boundaries can average together customers with different risk relationships.`,
 scorecard:`Why do coefficients act on log odds?|The logistic link converts an unrestricted linear predictor into a probability between zero and one.
 Does a positive coefficient prove causation?|No. It describes a conditional statistical association in the fitted sample.
 Why does standardisation affect coefficient size?|The coefficient then refers to a change in units of the training standard deviation.
 Can the same input change produce different PD changes?|Yes. The logistic curve responds differently depending on the starting log odds.
 What should a reason explanation avoid?|It should not confuse a model association with proof of individual behaviour or a causal claim.`,
 validation:`Does AUC change when only the decision threshold changes?|No. The ranking remains unchanged; the threshold changes classification counts.
 What does a false negative represent here?|A later default whose score was below the selected flag threshold.
 Why can accuracy be misleading with rare defaults?|A model that labels almost everyone non-default may appear accurate while missing important events.
 Why can a leakage model look good on a later cohort?|The same unavailable outcome information can be present in that cohort too.
 Should the cutoff be chosen from AUC alone?|No. Error costs, constraints, calibration, stability and intended use need consideration.`,
 calibration:`Can ranking stay unchanged while probabilities improve?|Yes. An intercept adjustment can move probability levels without changing borrower order.
 Why compare predicted and observed rates within groups?|Aggregate averages can hide systematic overprediction in one segment and underprediction in another.
 Is a low Brier score sufficient for approval?|No. It combines probability errors but does not verify data availability, fairness or correct use.
 Why distinguish PIT from long-run calibration?|Current-condition risk and cycle-average calibration answer different questions.
 Should the holdout be repeatedly used to tune the model?|Repeated tuning on the holdout can turn it into development data and weaken independent assessment.`,
 drift:`Can portfolio PD rise even if segment risk stays fixed?|Yes. A larger share of high-risk customers changes the weighted average.
 Does high PSI prove discrimination has failed?|No. Distribution change does not directly measure the relation between scores and outcomes.
 Are common PSI cutoffs universal regulatory limits?|No. Materiality depends on context, binning, sample size and intended model use.
 Why monitor both inputs and outcomes?|Input shifts can provide early warning while outcomes reveal performance after the observation horizon.
 Can a stable PSI conceal model deterioration?|Yes. The input mix can stay stable while the risk relationship changes.`,
 bias:`Why are accepted applicants a selected sample?|An approval policy determines which applicants receive loans and generate observable loan outcomes.
 Can rejected applicants safely be labelled bad?|No. Rejection is a policy decision, not an observed default outcome.
 Why is rejected truth visible in this applet?|The data are simulated, so all outcomes are known by construction for demonstration.
 Does excluding sensitive attributes eliminate proxy risk?|No. Other inputs can encode related information and require responsible-use review.
 Why reassess a model after changing approval policy?|The population reaching the book and the meaning of the observed sample can change.`,
 vintages:`Why do recent vintages show fewer cumulative defaults?|They have had less time to default, even if their underlying hazard is unchanged.
 What is right censoring?|Observation ends before the full event window or workout has completed.
 Why compare months on book?|It aligns exposure time and makes vintage comparisons more meaningful.
 Does early repayment mean the borrower defaulted?|No. It is a different exit that affects exposure and observation.
 Why can incomplete recoveries distort LGD?|Cash still expected from unresolved workouts is not yet observed.`,
 scope:`Does every financial asset receive a separate ECL allowance?|No. Scope and measurement category determine how credit losses enter accounting.
 Are debt FVOCI and equity FVOCI the same impairment route?|No. Debt FVOCI is subject to ECL; the equity FVOCI designation is different.
 Why can trade receivables use lifetime ECL without SICR tracking?|The simplified approach applies to qualifying receivables without the general staging assessment.
 Are all lease receivables automatically under the simplified approach?|The relevant accounting policy election and requirements must be checked; this lesson explicitly assumes that election.
 What else determines debt classification?|The business model and contractual cash-flow characteristics, including the SPPI assessment.`,
 ecl:`Does Stage 1 ignore shortfalls after month twelve?|No. It includes lifetime shortfalls arising from defaults possible during the first twelve months.
 Why survival-weight annual default probabilities?|A borrower cannot default for the first time after it has already defaulted in an earlier interval.
 Why can amortisation reduce later loss contributions?|Less balance remains exposed when later default events occur.
 Why specify whether LGD is already discounted?|Discounting a severity that already includes the same timing adjustment can count discounting twice.
 What happens when remaining life is one year?|In this model the first-year and lifetime sets of default events coincide.`,
 sicr:`Why can equal current PDs lead to different stages?|The change from the origination benchmark can differ materially.
 Does a rise in LGD alone establish SICR?|No. SICR assesses increased default risk, although other evidence may indicate deterioration too.
 Must a bank wait for missed payments to recognise SICR?|No. Reasonable forward-looking and qualitative evidence can identify deterioration earlier.
 Are the applet’s doubling and absolute-increase thresholds prescribed?|No. They are visible teaching-policy choices, not universal IFRS 9 cutoffs.
 Does a cure automatically follow one timely payment?|No. Sustainable improvement and relevant evidence must support reassessment under policy.`,
 scenarios:`Why can a less likely downside affect ECL substantially?|Its conditional losses may be much larger than in the most likely state.
 Why normalise relative weights?|Scenario probabilities must represent a complete distribution for the weighted calculation.
 Why not average PD and LGD first?|Their interaction, survival and other nonlinearities can make loss at averaged inputs differ from average loss.
 Is the worst-case scenario the expected loss?|No. ECL is an unbiased probability-weighted estimate, not simply the worst conditional loss.
 How should zero total weights be handled?|Treat the specification as invalid; the app’s equal-weight fallback is only a visible demonstration.`,
 stage3:`Why focus on recoveries after credit impairment?|The loss measurement depends on the cash expected from the impaired asset and when it will arrive.
 Why is gross interest shown only as a comparison?|The general-model credit-impaired interest basis uses net amortised cost in the relevant subsequent periods.
 Does a high expected recovery remove credit impairment automatically?|No. Recoverability and impairment evidence are related but distinct assessments.
 Why discount using the original EIR in this fixed-rate example?|It maintains the accounting measurement basis rather than revaluing at a newly chosen market yield.
 Are the recovery cash flows already probability-weighted?|Yes in this applet; multiplying them by another performing PD would change their meaning.`,
 revolving:`Does a short cancellation notice always limit exposure life?|No. Qualifying revolving arrangements can leave exposure beyond that notice period in practice.
 Why does actual risk management matter?|The timing of detection, limit reduction and cancellation affects the period of unmitigated exposure.
 Can undrawn balances affect lifetime ECL?|Yes. Expected future drawings can be exposed before effective mitigation.
 Is every commitment entitled to a behavioural-life exception?|No. The specific scope and conditions must be assessed.
 Why validate assumed behavioural life?|A longer horizon can materially change loss estimates and must be supported by experience and policy.`,
 matrix:`Are the bucket percentages annual PDs?|No. They are assumed lifetime loss rates for receivables in each bucket.
 Why might separate customer matrices be needed?|Different sectors, locations or protections can have materially different loss patterns.
 Does a historical average automatically capture current conditions?|No. Forward-looking information and changes in customer mix need assessment.
 Why can current receivables still carry an allowance?|Lifetime loss can occur even before any payment is overdue.
 Does the simplified approach mean no judgement?|No. Segmentation, data, forward-looking adjustments and estimation still require judgement.`,
 poci:`Why is no ordinary initial Stage 1 allowance added here?|Initial expected losses are already embedded in the credit-adjusted yield and initial measurement.
 Can a favourable revision be recognised?|Yes. Subsequent cumulative lifetime ECL changes can be favourable as well as adverse.
 Which discount rate is used?|The credit-adjusted EIR for the POCI asset, not a fresh market rate.
 Is the applet a full period-by-period amortised-cost ledger?|No. It compares expectations at one date to isolate the effect of a recovery revision.
 Does buying at a discount always prove POCI status?|No. Credit-impairment evidence and the reason for the discount must be assessed.`,
 modifications:`Why can modifying a contract create a gain or loss?|The present value of the modified contractual cash flows may differ from the existing carrying amount.
 Does forbearance automatically eliminate SICR?|No. A concession can itself reflect financial difficulty, and sustainable improvement needs evidence.
 Why separate derecognition assessment?|A derecognised asset and a continuing modified asset follow different recognition paths.
 Can a new asset after derecognition be POCI?|Potentially, if it is credit-impaired at initial recognition under the applicable requirements.
 Why use the original EIR for this continuing asset?|The non-derecognised modification calculation preserves that measurement basis.`,
 allowance:`Can falling allowance signal worsening credit?|Yes. Write-offs can reduce allowance even after severe losses.
 Is a write-off necessarily the end of enforcement?|No. Recovery or enforcement activity can continue even after an accounting write-off.
 What does a release represent in this bridge?|A reduction in estimated allowance distinct from using it against a written-off balance.
 Why cap write-offs in this teaching bridge?|It keeps the allowance-only stock non-negative; real cases exceeding it require additional accounting entries.
 Why reconcile stage effects separately in real reporting?|Transfers and remeasurement can explain large allowance changes that a closing balance alone hides.`,
 overlays:`What makes an overlay defensible?|A named limitation, supporting evidence, clear ownership and a plan to review or remediate it.
 Can an overlay duplicate modelled risk?|Yes. Overlap must be examined as models and data improve.
 Is conservatism by itself an IFRS 9 objective?|No. The estimate should be unbiased and probability-weighted, supported by appropriate information.
 Why give an adjustment an expiry or review trigger?|It prevents temporary judgement from persisting without reassessment.
 Does an evidence slider replace expert judgement?|No. It is only an illustrative sensitivity, not a prescribed accounting calculation.`,
 stress:`Why can PD and LGD deteriorate together?|A shared economic shock can reduce repayment capacity and collateral or recovery value.
 Is conditional stress ECL the reported expected allowance?|Not automatically. Expected measurement needs probability weighting and applicable accounting assumptions.
 Why challenge macro coefficients?|An estimated or assumed response may be unstable, nonlinear or unsupported outside the observed range.
 Does a severe scenario establish its probability?|No. Severity and likelihood are separate modelling choices.
 Why examine portfolio-specific macro channels?|Unemployment, property prices, rates and sector demand affect different borrowers through different mechanisms.`,
 governance:`Do completed checkboxes certify regulatory compliance?|No. They record selected evidence areas, not the quality or adequacy of the evidence itself.
 Why require independent validation?|It challenges assumptions, data, implementation and performance beyond the developer’s assessment.
 What should happen after material model change?|Appropriate validation, approval, documentation and monitoring should reflect the changed model and use.
 Why identify intended and prohibited uses?|A model can be reliable for one decision and unsuitable for another horizon, population or purpose.
 Which specialist areas need further depth?|Regulatory IRB implementation, securitisation, sovereign and financial-institution models, legal recognition and institution-specific accounting need fuller treatment.`
 };
 CREDIT_LESSONS.sort((a,b)=>a.stage.localeCompare(b.stage));
 window.LEARNING_CONTENT=Object.fromEntries(CREDIT_LESSONS.map(l=>{const specific=text[l.id].split('\n').map(x=>x.trim().split('|'));return [l.id,{intuition:[l.simple,specific[0][1]+' '+specific[1][1]],questions:[...specific,
 ['What experiment should I try first?',l.challenge+' Predict the result first, then compare the chart with the calculation trace.'],
 ['Which assumptions limit this particular result?',l.scope],
 ['How would I explain the main mechanism in plain language?',l.simple],
 ['How can I investigate an unexpected result in this applet?','Reset to the default case, change one input, and trace its effect through the intermediate rows. Check probability units, timing and signs before drawing a conclusion.'],
 ['What should accompany a screenshot of this calculation?','Record the input values, selected portfolio or scenario, conventions and source scope. The same headline figure can arise from very different risk assumptions.']
 ]}];}));
})();
