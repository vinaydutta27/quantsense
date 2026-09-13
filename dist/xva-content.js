(() => {
 const questions={
 overview:`Why can two banks quote different economics for the same clean trade?|Their funding, collateral agreements, portfolio offsets and capital commitments can differ even when the clean market model is the same.
Why does increasing collateral reduce some bars but leave others unchanged?|The overview reduces unsecured exposure with collateral. Its initial margin and allocated capital are separate inputs, so they do not automatically change.
What does a negative bar mean here?|It subtracts from the clean value from the bank’s perspective. A rightward positive bar is a benefit.
Could a trade with zero current value still have XVA?|Yes. Future positive and negative exposure, funding needs, margin and capital can exist even when today’s clean value is zero.
Why is DVA the only benefit bar in this particular overview?|The other inputs are restricted to costs here. Other frameworks or scenarios can produce funding or collateral carry benefits too.
Why is ColVA absent from the bridge?|The overview assumes collateral earns the same rate as the clean benchmark. The separate ColVA applet relaxes that assumption.
What happens to MVA when you increase initial margin?|The funding expense rises because more cash is tied up. The margin principal itself is still assumed to be returned.
Can we add every number labelled VA in a report?|No. Definitions overlap; a cost may already be included in a clean price, funding charge or tax-aware capital charge.
What does the clean value represent?|It is the agreed baseline before this example’s economic adjustments. Real teams must agree the discounting and collateral conventions of that baseline.
What should you check before comparing this result with a dealer quote?|Match the perspective, agreements, portfolio, exposure model, funding policy and included costs. This bridge is an educational decomposition.`,
 exposure:`Why does a negative trade value not always cancel a positive one?|Offsetting market values do not establish a legal right to settle one net amount. The enforceable netting set is crucial.
Can high notional and low exposure coexist?|Yes. Notional is a contractual reference amount; exposure is the replacement-value claim at risk.
What happens if both trade values are positive?|Netting their values does not provide an offset in that state. Collateral can still reduce the unsecured amount.
What happens if both trade values are negative?|There is no positive derivative claim in this toy state. That does not eliminate obligations to pay or return collateral.
Why do we take the positive part after netting?|The positive net balance is what could be owed to us at close-out under the assumed agreement.
Why is the collateral allocated to Trade A in the separate-set example?|Collateral belongs to a legal arrangement. This explicit allocation avoids using the same collateral twice across separate sets.
Does one low-exposure state establish a low CVA?|No. CVA needs the distribution of future exposures and defaults over the trade’s life.
Why can daily collateral still leave residual risk?|Prices can move after the last margin exchange and before close-out. The applet omits that margin gap.
Can a market hedge remove legal counterparty exposure?|It can reduce market risk while leaving claims against different counterparties that cannot be netted.
What extra information would you need for a portfolio exposure model?|Future market scenarios, trade valuations, legal netting sets, margin rules, collateral and close-out assumptions.`,
 cva:`Why can CVA change before any default occurs?|Market expectations of default and future exposure can change, altering today’s value of possible losses.
Why does full recovery eliminate this example’s CVA?|Default creates no unrecovered exposure under that assumption, although timing and other costs are omitted.
Why does zero hazard eliminate CVA?|The model assigns no chance of default while the claim exists.
Why is hazard not the same as a five-year default probability?|Hazard is an instantaneous intensity. Survival over time transforms it into a cumulative probability.
Why does a longer horizon increase CVA here?|The model keeps exposure alive for longer, creating more opportunities for default losses.
Would longer maturity always increase CVA in a real portfolio?|Not necessarily. Exposure profiles, amortisation, collateral and offsets can change with maturity.
Why does a larger discount rate lower this CVA with other inputs fixed?|The same potential future losses have a smaller present value. Real exposure and discount rates may move together.
Is CVA a fee paid at the instant a counterparty defaults?|It is a present valuation adjustment for possible losses. The realised default outcome is a different event.
Is SA-CVA capital the same number as CVA?|No. CVA is a value; SA-CVA capital addresses risk from changes in that value under prescribed rules.
What fails if default tends to occur in high-exposure markets?|The independence assumption fails. The wrong-way risk lesson shows why multiplying averages can understate loss.`,
 dva:`Why can worsening own credit increase DVA?|Creditors expect less recovery on what we owe, reducing the value of that liability from our perspective.
Does a DVA gain put cash into the treasury account?|No. A valuation movement does not itself deliver spendable cash.
Why would chasing a DVA gain be a bad business objective?|It accompanies a weaker promise, potentially worse funding access and financial distress.
Which exposure matters for DVA?|The magnitude of the negative exposure: the amount the bank might owe the counterparty.
Why does full recovery remove the DVA benefit here?|Creditors are assumed to receive everything owed even on default, leaving no debt reduction benefit.
Is our DVA related to the counterparty’s CVA?|It concerns the same own-credit loss from opposite perspectives when contracts and modelling conventions match.
Can we safely subtract this unilateral DVA from unilateral CVA in every model?|No. A bilateral model must address which party defaults first and what close-out happens then.
Why is DVA excluded from regulatory CVA in the linked SA-CVA context?|Regulatory CVA is unilateral and does not let the bank’s worsening own credit reduce that measure.
Can own credit deterioration also affect funding?|Yes. Funding spreads may widen, so treating DVA and FVA independently can hide overlap and opposing effects.
What would a careful report show alongside a DVA benefit?|Its perspective, own-credit assumptions, cash implications and relationship to funding and accounting conventions.`,
 fva:`Can a valuable derivative still need borrowing?|Yes. Value and timing of cash flows differ; hedges and margin can require cash before receipts arrive.
Why are FCA and FBA shown separately?|Borrowing and reusable surplus can carry different spreads and arise in different states or pools.
Why is segregated initial margin not automatically an FBA source?|It is restricted and unavailable for ordinary treasury reuse under the assumed arrangement.
What happens when the borrowing spread is zero?|This model’s FCA disappears even though the borrowing balance remains.
Why can equal borrowing and surplus balances leave non-zero net FVA?|Their spreads differ, and the model treats them as separate pools or expected states.
Why not net the displayed balances automatically?|The applet assumes they cannot all offset immediately. A real funding model must specify timing and permitted netting.
When could net FVA become a benefit?|When assumed avoided funding benefits exceed borrowing costs under the chosen policy.
Why is the funding spread labelled liquidity-only?|Own-default compensation is excluded to make the example’s separation from DVA explicit.
Can funding FVA overlap with another item labelled FVA?|Yes. Some reports use FVA to mean fair value adjustment. Read definitions before comparing figures.
How could a collateral agreement change FVA?|It changes cash timing, posting obligations and whether receipts are reusable, which affects financing needs.`,
 colva:`Why does receiving collateral not always create a carry benefit?|The remuneration owed to its owner may exceed the benchmark return available on that cash.
Why does reversing collateral reverse the example’s contribution?|The same rate difference now applies to cash posted rather than cash received.
What happens when remuneration equals the benchmark?|The carry mismatch disappears, so this ColVA is zero.
Can collateral lower CVA while creating a carry cost?|Yes. Credit protection and collateral-interest economics are separate effects.
Why specify the clean discounting benchmark?|An adjustment only makes sense relative to a baseline. A different clean-price convention changes what remains to adjust.
What if the clean price already uses the agreed collateral rate?|Adding the same collateral-rate adjustment again would double-count it.
Why does the example assume reusable cash?|Reinvestment at the benchmark supports the received-collateral carry calculation. Segregation changes that story.
Would non-cash collateral work exactly the same way?|No. Haircuts, financing, liquidation risk and eligible collateral terms would matter.
What could an option to switch collateral currencies add?|It can create economic optionality and basis effects beyond this single-rate carry illustration.
Why do we call ColVA a contribution instead of a positive charge?|It can increase or reduce value depending on collateral direction and rate mismatch.`,
 mva:`Why can fully returned initial margin still have a cost?|Financing a refundable balance can generate interest expense while the money is tied up.
How is initial margin different from variation margin?|Variation margin addresses current exposure; initial margin buffers possible changes during the close-out period.
Why does the chart separate margin principal and MVA?|One is a balance held as protection; the other is the present value of financing expense.
What happens if the net funding spread is zero?|The funding cost proxy is zero even though margin is still posted.
Why is the spread net of remuneration?|Interest received on the margin offsets part of its financing cost in this illustration.
Why can volatility increase MVA in practice?|A margin model may demand a larger buffer when potential future moves become larger.
Is the scaling slider a SIMM calculation?|No. It changes an assumed balance to isolate intuition. Actual margin models use sensitivities and detailed rules.
Can collateralisation reduce CVA and raise MVA at once?|Yes. Credit protection can improve while financing the required buffer becomes more expensive.
Why exclude IM from the FVA balance in the overview?|Its financing is already charged through MVA, so charging it there again would duplicate the cost.
What would make a realistic MVA profile different from a constant balance?|Future market states, portfolio changes, netting, margin rules and the remaining trade horizon.`,
 kva:`Is KVA the amount of capital held?|No. It represents the cost of remunerating capital; capital itself is the loss-absorbing resource.
Why does the cost rise with the hurdle rate?|The same capital provider demands more compensation for each year of commitment.
What changes when the hurdle is set to zero?|The remuneration proxy disappears, but the assumed capital balance remains.
Why can a short-lived capital requirement cost less?|It needs to be remunerated for less time under otherwise equal assumptions.
Could a hedge reduce one risk measure while increasing KVA?|Yes. It may add other exposures or capital needs; portfolio-level capital effects matter.
Does this slider calculate FRTB or SA-CVA capital?|No. Allocated capital is an input. The other modules explain those prescribed calculations.
Why is this called a cost proxy?|Full KVA frameworks can include survival, capital funding, retained earnings, feedback and different discounting.
Why might tax matter for capital remuneration?|An after-tax return requirement can imply a larger pre-tax charge.
Can we always add the separate tax applet’s result to KVA?|No. If the capital charge already includes the same tax gross-up, adding it again duplicates the cost.
What should be agreed before comparing two KVA estimates?|Capital allocation, horizon, hurdle definition, tax basis, discounting and treatment of capital in funding.`,
 'wrong-way':`Why hold average default probability fixed?|It isolates the effect of aligning defaults with exposure rather than simply making default more common.
What makes the dependence wrong-way?|Default becomes more likely in the states where the claim is larger.
What happens when the two exposures are equal?|Redistributing default probability does not change expected loss because every default sees the same claim.
What does a negative dependence setting do?|It shifts defaults toward the quiet-labelled state. Whether that helps depends on which state actually has larger exposure.
Is the slider a correlation coefficient?|No. It is a controlled redistribution of conditional default probabilities across two states.
Why can multiplying average exposure by average PD be misleading?|It ignores whether large claims and default events occur together.
Does a stressed label alone establish wrong-way risk?|No. Look at actual exposure values and conditional default probabilities.
Why do the two conditional probabilities not need to add to the average PD?|Each belongs to a state. Their probability-weighted average, with one-half weight each, equals the overall PD.
How could a commodity producer create this pattern?|A market move can both increase the bank’s claim under a derivative and weaken the producer’s ability to pay, depending on the trade direction.
What would a real model need beyond this two-state illustration?|Joint market-credit dynamics, calibration, exposure simulation, collateral and default timing.`,
 incremental:`Why can the same trade have different incremental costs for two banks?|It interacts with different existing portfolios, agreements and financing conditions.
How can a new trade release cost?|It can reduce an existing positive exposure and the associated funding need inside the same netting set.
Does a negative incremental charge guarantee profit?|No. It is a release in a limited model; other risks, execution costs and pricing terms still matter.
Why can a standalone negative-value trade have zero cost here?|This proxy includes only positive-exposure CVA and funding. It deliberately omits own-credit and other economics.
Why is legal netting essential to the displayed benefit?|The model takes the positive part of the combined balance, which requires the assumed enforceable set.
What if the new trade were with another counterparty?|Its economic hedge may remain, but the displayed legal exposure offset would not automatically apply.
Is incremental XVA the same as allocating portfolio XVA?|No. Incremental XVA asks what changes when a trade is added; allocation distributes a total across existing trades.
Can the order of adding trades affect attributed incremental costs?|Yes. Each new trade encounters a different starting portfolio when the cost function is nonlinear.
Why can a trade with low standalone cost be useful to the portfolio?|It may offset a costly existing claim even though it has little positive exposure alone.
What is missing before using this as a dealer pricing engine?|Full scenario exposures, collateral, credit curves, margin, capital, funding policy and an agreed allocation framework.`,
 clearing:`Does clearing remove all credit and liquidity risk?|No. It changes counterparties, protections and commitments; margin, default-fund and liquidity risks remain.
Why can a cleared route have a larger funding cost?|It may require substantial segregated initial margin and default-fund financing.
What does the default fund protect against?|It supports the mutualised default waterfall under the CCP’s rules. The applet uses only an assumed loss proxy.
Why show default-fund funding separately from default-fund loss?|Financing a balance and losing part of it are distinct cash-flow mechanisms.
Should CCVA be added on top of all its components again?|No. It is an umbrella decomposition, not a second charge on the same costs.
Why is the bilateral input called a proxy?|It is an assumed annual credit-cost equivalent and does not reproduce all bilateral economics.
Does a lower displayed cleared cost prove clearing is preferable?|No. The scenario is incomplete and cannot replace a matched portfolio and CCP-specific assessment.
Could clearing improve netting while demanding more margin?|Yes. Multilateral netting and margin requirements affect different parts of the economics.
Is client clearing identical to this member example?|No. A client faces different agreements, fees, exposures and contributions from a direct clearing member.
What should a decision compare in practice?|Matched portfolios, enforceable agreements, margin forecasts, capital, liquidity needs, fees and the actual default waterfall.`,
 reserves:`Why can a model mark differ from an executable price?|Bid–offer costs, liquidity and uncertainty in model inputs or assumptions can affect what can be realised.
Is a model-risk reserve the same as MVA here?|No. MVA means the funding cost of initial margin in this module.
Why subtract an existing same-risk reserve before measuring the extra gap?|The same uncertainty should not be recognised twice.
What happens when the existing reserve exceeds the assumed allowances?|The additional shortfall is floored at zero in this example.
Does this applet implement regulatory AVA rules?|No. It illustrates the additional-gap idea and omits prescribed methods, confidence calibration and aggregation.
Is LVA always a separate liquidity exit charge?|No. Some research uses LVA for liquidity funding economics within the wider XVA system.
Why distinguish accounting reserves from prudential AVAs?|They serve different measurement purposes even when they address related valuation uncertainty.
Can we add arbitrary exit and model allowances safely?|Only after checking overlap. This example assumes the two allowances address different uncertainties.
What would a more liquid market tend to change?|Executable-price uncertainty or exit costs may fall, although model and other risks can remain.
What should you ask when a report simply says FVA?|Whether it means funding valuation adjustment or the broader reporting term fair value adjustment.`,
 tax:`Why does a pre-tax charge equal to the desired retained return fall short?|Part of it is paid as tax, so less remains for the provider.
What happens when the tax rate is zero?|The pre-tax requirement equals the retained target and the gross-up disappears.
Why does the gross-up rise faster as tax increases?|Each extra unit of pre-tax income leaves a smaller fraction after tax.
Does this model capture tax-loss credits?|No. It assumes immediate proportional tax on the target return with no credits or deductions.
Why does timing of tax payments matter in a full model?|Earlier payments and delayed or unusable benefits have different present values.
Can every loss create an immediate usable tax benefit?|No. Actual use depends on applicable rules and the institution’s taxable position.
Why might adding this proxy to KVA double-count tax?|A pre-tax capital remuneration charge may already include the same gross-up.
Does TVA always mean tax valuation adjustment?|No. Some papers use TVA for total valuation adjustment. Read the definition in its source.
Does the tax slider represent the tax rules of a specific country?|No. It is an illustrative effective rate with intentionally simplified timing and treatment.
What is the final habit to take from the XVA path?|Before summing or comparing adjustments, agree their baseline, perspective, definition, assumptions and overlaps.`
 };
 const intuition={
 overview:["Start by asking who provides each scarce resource. The counterparty provides a promise; treasury provides spendable cash; a margin account holds restricted protection; shareholders provide a loss buffer. A trade can consume all four even if its current market value is small.","Try changing one resource at a time. Covering the claim with collateral makes default loss smaller in the overview, while posting more initial margin raises its financing cost. Improving one bar is not the same as improving the whole trade."],
 exposure:["The distinction is between a sum of positive claims and the positive part of a sum. When one trade is a receivable and another is a payable, a legal netting set lets the payable reduce the claim before exposure is measured.","Now imagine repeating that operation in many possible markets. Today's offset can disappear tomorrow, so a one-state hedge does not establish a low expected exposure throughout the life of the portfolio."],
 cva:["Split the future into moments when the counterparty survives and moments when it first defaults. Only a first default while money is owed generates the unrecovered claim. The curve adds those discounted possible losses as the horizon grows.","With flat exposure and hazard, the cumulative curve gradually flattens: fewer counterparties remain alive to default later, and later losses are discounted more. It is an accumulation across a horizon, not a forecast of the mark-to-market CVA on each future date."],
 dva:["Reverse the chair you are sitting in. What is a risky asset to your creditor is a risky liability to you. A reduction in their claim's value becomes a reduction in your liability's value under matching conventions.","Keep the balance sheet and cash account separate in your reasoning. The liability revaluation can improve a reported value while the institution's ability to raise cash worsens. This is why a DVA gain is not evidence of stronger operating performance."],
 fva:["Trace cash rather than profit. A hedge payment may happen today while the customer pays later. Funding that timing gap can be expensive even when the trade has a positive expected payoff.","Next ask whether each receipt is usable. Cash in a restricted account cannot automatically replace an unsecured loan. The different borrowing and benefit spreads let you explore why reversing a position need not reverse its financing cost exactly."],
 colva:["The economic question is the difference between the agreed collateral interest and the return assumed in the starting price. Collateral protection can be unchanged while that difference moves the valuation.","Switching the posting direction is a useful sign check: a carry advantage to the receiver becomes a carry disadvantage to the poster in this simple symmetric setup. If the clean price already reflects the contractual rate, there is no second copy of the same carry to charge."],
 mva:["The amount in the margin account and the price of financing it live on different dimensions: one is a balance; the other is an expense accumulated through time. A large balance can have a small financing cost at a tiny net spread.","Initial margin can reduce losses to a counterparty while using up the poster's liquidity. This is a practical example of risk being transformed: better protection against default does not remove the need to supply cash."],
 kva:["Imagine two trades needing the same capital today. One releases it next month; the other keeps it occupied for years. Their immediate capital balances match, but the opportunity cost of supplying that resource is different.","The hurdle slider expresses the remuneration assumption, not a regulatory percentage. Lowering it changes the economic charge while leaving the input capital balance untouched. A real capital model must separately explain how that balance evolves."],
 'wrong-way':["Imagine sorting possible defaults into two boxes. Moving defaults into the box with the largest receivable raises expected loss even if the total count of defaults stays unchanged. That sorting is the central effect this applet isolates.","Use equal exposures as a control experiment: now moving defaults between boxes cannot matter. This makes the dependence effect visible without needing a correlation formula or a stochastic simulation."],
 incremental:["A portfolio is the context in which a trade consumes resources. Adding a receivable to an existing payable can use up an offset before it creates any positive claim at all. That is why the cost is not generally additive trade by trade.","The difference between before and after answers a pricing question about this new trade. It does not tell you how to divide all historical portfolio costs among existing trades; that allocation needs an additional policy."],
 clearing:["Follow the destinations of the cash: initial margin protects against future moves, the default fund supports mutual protection, fees pay for services, and capital backs losses. Their funding and loss mechanisms are different even though they belong to one clearing arrangement.","The comparison deliberately exposes its assumptions. The lesson is to understand which balances and charges must be measured for each route, rather than assume that moving to a central counterparty makes every cost smaller."],
 reserves:["A price estimate and confidence in that estimate are different things. Better market liquidity may narrow uncertainty about an exit price without resolving disagreement between models; better models may not create an executable market.","Track what has already been recognised for the same uncertainty. An additional prudence gap can shrink as an existing reserve grows even if the underlying uncertainty is unchanged. That does not mean the asset has become safer."],
 tax:["Hold the retained return fixed and think about each pound charged. If part is paid away as tax, only the remainder helps meet the target. The required gross amount must rise as the retained fraction falls.","The naming lesson matters just as much as the arithmetic. Two papers can use TVA for different concepts. A useful XVA comparison starts with full definitions and a check that tax, funding and capital costs have not already been counted elsewhere."]
 };
 window.LEARNING_CONTENT=Object.fromEntries(XVA_LESSONS.map(l=>[l.id,{intuition:intuition[l.id],questions:questions[l.id].split('\n').map(row=>row.split('|'))}]));
})();
