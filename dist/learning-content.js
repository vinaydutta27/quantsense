window.LEARNING_CONTENT = {
'compound-growth': {
 intuition: ['Imagine a snowball rolling downhill: its growing size lets it pick up more snow on the next turn. Reinvested returns work similarly. The rate can stay unchanged while the amount earned each year increases, because that rate now applies to a larger balance.', 'The widening gap between the two curves is the effect of earning returns on earlier returns. Move the time slider before changing the rate. This helps separate the power of patience from the appeal of a higher return. The smooth curve assumes the same return every year; real investing rarely follows such a tidy path.'],
 questions: [
 ['Why does the compound curve bend upward even when the return rate stays the same?', 'The rate acts on a growing balance, so the same percentage produces a larger gain.'],
 ['What happens to the snowball analogy if you withdraw every gain?', 'You remove what would have helped generate future returns, moving toward simple-interest behavior.'],
 ['Why might starting earlier matter even with a modest starting amount?', 'Earlier gains have more opportunities to generate gains of their own.'],
 ['What is the widening gap between the two curves telling you?', 'It isolates the additional growth from reinvesting returns, under the shared assumptions.'],
 ['Would doubling the starting amount change the shape of growth or just its scale?', 'With the same rate and horizon, it scales every balance proportionally; the growth pattern stays the same.'],
 ['What would a flat curve mean in this experiment?', 'No growth is occurring. Here, a zero return leaves the initial balance unchanged.'],
 ['Why is a smooth upward curve not a realistic promise about an investment?', 'Returns can vary, losses can occur, and the model excludes fees, taxes and withdrawals.'],
 ['How could small recurring fees interfere with compounding?', 'They reduce the balance that remains invested, including the future returns that balance could earn.'],
 ['Why might a loss early in a journey have effects long afterward?', 'It shrinks the base on which later returns build, unless subsequent contributions or gains offset it.'],
 ['What would you ask before using this chart to plan a real goal?', 'Ask about uncertain returns, inflation, costs, contributions, withdrawals and how much loss the goal can tolerate.']
 ]
},
'risk-return': {
 intuition: ['Think of expected return as the center of a weather forecast and volatility as how wide the forecast stretches. Two forecasts can share the same center while one allows a much broader range of outcomes. Knowing the center alone leaves out how surprising tomorrow might be.', 'Widen the curve while keeping its center fixed. More probability moves toward both unusually good and unusually bad outcomes. A shaded or plotted range describes possibilities across repeated scenarios; it is not a corridor that one investment must stay inside. The bell curve is a teaching assumption, and real market extremes can occur more often.'],
 questions: [
 ['Can two investments have the same expected return but feel very different to hold?', 'Yes. Their uncertainty, potential losses and sequence of outcomes may differ substantially.'],
 ['When the curve spreads out, what happens to unusually good outcomes?', 'They become more plausible along with unusually bad outcomes; volatility includes both directions.'],
 ['Does a positive expected return rule out a losing year?', 'No. An average can be positive even when many possible outcomes are negative.'],
 ['Why does a taller peak not necessarily mean a better investment?', 'A tall peak indicates more concentrated outcomes, not automatically higher returns or suitability.'],
 ['What information does the average hide?', 'It hides dispersion, extreme outcomes, asymmetry and the timing of gains and losses.'],
 ['Is the middle range a boundary that outcomes cannot cross?', 'No. It contains only a specified share of outcomes at a fixed horizon.'],
 ['Why might someone with a near-term expense care about the width of the curve?', 'A loss shortly before the expense may leave too little time or money to recover.'],
 ['What would make a bell curve misleading for market returns?', 'Heavy tails, asymmetry, changing conditions and dependence can make its probabilities inaccurate.'],
 ['If a rare loss occurs, does that automatically disprove the model?', 'No. Rare events can occur under a valid model; systematic mismatches across evidence are more informative.'],
 ['What does increasing expected return while holding volatility fixed assume?', 'It assumes the center can change independently of the spread; actual investment choices may not allow that.']
 ]
},
'diversification': {
 intuition: ['Picture two people carrying a tray. If both stumble in the same direction at the same time, the tray tilts sharply. If their movements partly offset, the tray can be steadier. Diversification is about how holdings move together, not merely how many names appear in an account.', 'The curved line shows the risk of the combination; the straight comparison shows the weighted individual risks. Lower correlation creates a larger gap between them. Moving the allocation all the way to one asset removes the balancing effect, because there is no second holding left to offset its movements.'],
 questions: [
 ['Why might owning many similar assets provide little diversification?', 'They may respond to the same forces and lose value together.'],
 ['What makes an asset useful for diversification beyond its own volatility?', 'Its relationship with the other holdings, especially how their movements co-vary.'],
 ['What happens to the balancing effect when you allocate everything to one asset?', 'It disappears because there is no mix.'],
 ['Why can a riskier asset sometimes reduce a portfolio’s risk when added in a small amount?', 'Its movements may offset enough of the existing asset’s fluctuations to reduce combined volatility.'],
 ['Does a lower-risk mix necessarily offer the highest expected return?', 'No. The allocation that reduces volatility can sacrifice expected return.'],
 ['What is unusual about perfectly negative correlation?', 'The assets move in exactly opposite standardized directions; this exact relationship is rarely stable in practice.'],
 ['Does negative correlation mean a half-and-half mix has no risk?', 'No. Offsetting risk also depends on the assets’ volatilities and the allocation.'],
 ['Why might diversification become less effective during a crisis?', 'Assets that previously moved differently can begin responding together to a common shock.'],
 ['If two assets have little correlation, are they necessarily independent?', 'No. Correlation measures linear association and can miss other forms of dependence.'],
 ['What should you question before relying on the lowest point of this curve?', 'Whether estimated returns, volatilities and correlations are reliable and likely to persist.']
 ]
},
'option-payoffs': {
 intuition: ['A purchased call resembles paying for a reservation that fixes a future purchase price. If the market price later becomes attractive relative to your reserved price, the right has value. If it does not, you can let the right lapse, but the reservation fee is gone.', 'The strike marks where the right starts to have intrinsic value. Break-even comes later because that value first has to recover the premium. The chart shows the buyer’s result at expiration. Before expiration, remaining opportunities can give an option value even when immediate exercise would be unattractive.'],
 questions: [
 ['Why would someone pay for a choice they might never use?', 'The choice preserves upside without requiring the purchase if conditions turn unfavorable.'],
 ['How does a right differ from an obligation in this example?', 'The buyer can decline to exercise, while an obligation would still require performance.'],
 ['Why is the strike not the buyer’s break-even price?', 'The option’s value must also cover the premium paid.'],
 ['Can an option have intrinsic value while its buyer still has a loss?', 'Yes. Its intrinsic value may be smaller than the premium.'],
 ['What happens to the premium when the call expires unused?', 'It remains a cost to the buyer; it is not refunded.'],
 ['Why does a higher premium shift profit downward at every expiration price?', 'The same payoff is reduced by a larger upfront cost.'],
 ['Does limited loss mean the option is low risk?', 'No. Losing the entire premium can still be likely or financially significant.'],
 ['Why is an expiration payoff chart not enough to value a call today?', 'Today’s value also reflects remaining time, uncertainty, interest rates and model assumptions.'],
 ['Who carries the opposite payoff exposure to the buyer?', 'The seller, whose obligations and risk can differ sharply from the buyer’s limited-loss position.'],
 ['What could make a real trade differ from this clean payoff line?', 'Fees, financing, contract size, exercise terms and execution prices can change the realized result.']
 ]
},
'probability': {
 intuition: ['Imagine a shelf of boxes, one for every possible head count. Each bar tells you how much probability belongs in that box. The experiment selects one box, but the distribution describes the whole shelf before you know which box will be selected.', 'Expectation is the balance point of those probability weights. Like the center of a seesaw, it can lie between positions where outcomes actually exist. A mean of two-and-a-half heads is therefore sensible even though no single experiment can produce half a head. Move the coin-bias slider to see the whole collection of possibilities shift.'],
 questions: [
 ['How can an expected head count be an outcome you can never observe?', 'Expectation is a weighted average across possible outcomes, not a predicted single outcome.'],
 ['What does the height of one bar tell you?', 'How likely that particular head count is under the assumptions of the experiment.'],
 ['Does the tallest bar tell you what must happen next?', 'No. It identifies a most likely outcome, which is still only one possibility.'],
 ['What changes when a coin becomes more biased toward heads?', 'More probability moves toward larger head counts.'],
 ['Why must the probability assigned to all boxes account for the whole experiment?', 'One of the listed mutually exclusive counts must occur, so together they cover every possibility.'],
 ['If the last few flips were tails, is a head now owed?', 'No. Independence means past flips do not change the next flip’s probability.'],
 ['What would make the independent-flip model unsuitable?', 'Dependence between flips or a changing chance of heads would violate its assumptions.'],
 ['Why does one surprising experiment not tell you the true coin bias?', 'Random variation can produce unusual outcomes even with an unchanged underlying probability.'],
 ['What is different between adding more flips and repeating the entire experiment?', 'Adding flips changes the count being modeled; repeating gathers evidence about the same count distribution.'],
 ['At the extreme bias settings, what happens to uncertainty?', 'All probability sits on one outcome, so there is no uncertainty about the head count.']
 ]
},
'conditioning': {
 intuition: ['Suppose four envelopes contain the possible sequences of two flips. Learning the first flip rules out some envelopes. Conditional expectation averages only over the envelopes still compatible with what you know. You have changed your information, not reached back in time to alter the experiment.', 'The information available at a given moment acts like the resolution of a camera: some outcomes can be distinguished, while others still look identical. A filtration records how that resolution improves over time. Reveal heads and tails in turn, then notice that uncertainty about the independent second flip survives either reveal.'],
 questions: [
 ['What changes when you learn the first flip: the past outcome or your view of what remains possible?', 'Your information changes; the realized outcome itself is not changed by observing it.'],
 ['Why can the expected total change even if the second coin is independent?', 'You now know one component of the total, while the other remains uncertain.'],
 ['What uncertainty remains after seeing the first flip?', 'The result of the second flip, which still has the original head probability.'],
 ['Why do some probability bars disappear after the reveal?', 'Those totals are incompatible with the observed first flip.'],
 ['Can two people assign different conditional expectations without either being wrong?', 'Yes, if they have different information and use it consistently under the same model.'],
 ['What would learning both flips do to the expected total?', 'It would equal the observed total because no uncertainty about that total remains.'],
 ['How does the camera-resolution analogy describe a sigma-algebra?', 'It describes which outcomes the available information lets you distinguish.'],
 ['Why should a filtration gain information rather than forget earlier observations?', 'The standard filtration represents accumulated information, so earlier distinctions remain available.'],
 ['If you average over all possible first-flip reveals, where should you end up?', 'Back at the original unconditional expectation: learning then averaging preserves the overall mean.'],
 ['What would go wrong if a forecasting rule quietly used the second flip before it occurred?', 'It would use future information and would not represent a forecast based on the stated present information.']
 ]
},
'binomial-pricing': {
 intuition: ['Imagine two machines that deliver exactly the same amount of money in every possible future state. In an ideal market, different prices for those identical deliveries would let someone buy the cheaper machine and sell the more expensive one. Replication applies that idea to an option and a portfolio of shares and cash.', 'First match the difference between the up and down payoffs using shares. Then use borrowing or saving to align their levels. The risk-neutral probability is a convenient bookkeeping weight that reproduces the cost of this hedge. It need not reflect how optimistic anyone feels about the stock.'],
 questions: [
 ['Why should two claims with identical future payments have the same price in this model?', 'A price difference would permit an offsetting trade with a gain and no future payoff risk, under the model’s trading assumptions.'],
 ['Why is forecasting the more likely stock direction unnecessary for this replication?', 'The hedge matches the option in both states, so its cost does not depend on a directional prediction.'],
 ['What job do the shares perform in the replicating portfolio?', 'They match the difference in option payoffs between the two stock outcomes.'],
 ['What job does the cash or borrowing position perform?', 'It shifts the portfolio’s payoff level so both states match the claim.'],
 ['Is the risk-neutral up weight a survey of investors’ beliefs?', 'No. It is determined by prices and the no-arbitrage condition in this model.'],
 ['Why does a strike above both future stock prices make this call worthless?', 'Neither allowed future state gives it a positive payoff.'],
 ['What would an extra, unmodeled stock outcome do to confidence in the hedge?', 'Matching two states would no longer establish that the hedge matches every possible outcome.'],
 ['Why does the interest rate affect an option even though the option is not a deposit?', 'The replication uses financing or saving, so the cash account’s growth affects its cost.'],
 ['Why should you hesitate to interpret the connecting line as many possible future states?', 'The model allows only its two endpoints; the line is a visual connection.'],
 ['What real-world friction could prevent the ideal offsetting trade?', 'Transaction costs, borrowing restrictions, bid–ask spreads or inability to execute both sides can interfere.']
 ]
},
'martingales': {
 intuition: ['Think of a fair game in which your current balance is your best conditional forecast of the next balance. Fairness does not pin the actual path to a horizontal line. A run of good or bad luck can send the balance far away while the next move remains fair given everything already seen.', 'A biased walk contains a predictable push. Compensation removes that push from the accounting record, leaving a process with no expected next-step change. It does not undo actual wins and losses. Compare multiple samples: the martingale property belongs to the conditional rule that generates them, not to how tidy any particular line looks.'],
 questions: [
 ['Can a martingale path rise for many steps in a row?', 'Yes. The property concerns conditional expectations, not the appearance of each realized path.'],
 ['Why is a flat-looking path not proof of a martingale?', 'A path alone does not reveal the conditional probability law governing future changes.'],
 ['What is removed when the raw walk is compensated?', 'Its predictable accumulated drift, not its random fluctuations.'],
 ['Does compensation erase a participant’s actual losses?', 'No. It defines a different recorded process; it does not reverse cash flows.'],
 ['Why does the information available to the observer matter?', 'A process is a martingale relative to an information set; additional information can change conditional forecasts.'],
 ['What does a positive raw drift say about the next move?', 'Its average change is positive under the model, even though an individual move can still be negative.'],
 ['Would a long losing streak make the next independent fair step favorable?', 'No. Independence leaves the next step’s conditional probabilities unchanged.'],
 ['Is having a constant unconditional average enough to establish a martingale?', 'No. The conditional expectation given the available history must also equal the current value.'],
 ['Can you assume any clever stopping rule creates a guaranteed gain from a fair game?', 'No. Valid stopping arguments require conditions; unrestricted strategies can involve unbounded losses or waiting times.'],
 ['What should you look at besides a single sample to understand fairness?', 'The conditional rule, its assumptions, and evidence across repeated paths.']
 ]
},
'scaled-walk': {
 intuition: ['Imagine filling the same minute with more and more tiny, fair jolts. If the jolts stay large, the uncertainty explodes. If they shrink too quickly, the motion washes away. Square-root scaling strikes the balance: individual moves shrink, but their accumulated uncertainty remains visible.', 'The resulting line may look more detailed as you add steps, yet its end-of-horizon spread stays comparable. Brownian motion is the limiting probability model for these increasingly fine walks. The limit describes the family of possible paths; it is not a promise that repeatedly redrawing this applet traces one fixed curve more accurately.'],
 questions: [
 ['Why must the jumps shrink when more steps fit into the same time interval?', 'Otherwise their accumulated variance would increase without maintaining the intended fixed-horizon scale.'],
 ['What would happen if the jumps shrank too quickly?', 'The random fluctuations could collapse toward zero instead of producing a nontrivial Brownian limit.'],
 ['Does a finer walk necessarily finish closer to zero?', 'No. The chosen scaling preserves terminal uncertainty.'],
 ['Why can more detailed motion coexist with a similar final spread?', 'Smaller individual fluctuations are offset by having more of them.'],
 ['Are the straight connecting segments literal continuous coin-flip motion?', 'No. They interpolate discrete observations for display.'],
 ['Does changing the step count refine exactly the same realized path here?', 'No. It constructs a different scaled walk using the experiment’s random sequence.'],
 ['What does convergence of distributions mean intuitively?', 'The probabilities of kinds of outcomes become similar, rather than every sample line becoming identical.'],
 ['Can a sample cross the standard-deviation guide lines?', 'Yes. The guides describe pointwise spread, not walls around every path.'],
 ['What role does fairness play in this particular Brownian approximation?', 'It removes a systematic directional push from the steps.'],
 ['Why would dependent steps require extra care?', 'Dependence changes how uncertainty accumulates, so the simple independent-step reasoning may no longer apply.']
 ]
},
'brownian-motion': {
 intuition: ['Picture a particle being nudged unpredictably while a gentle current carries it along. The current is drift; the strength of the random nudges is diffusion. Increasing drift tilts the average direction. Increasing diffusion makes outcomes more spread out without choosing a direction for them.', 'The expected path is an average over many hypothetical particles, not a track that any one must follow. Even a zero-drift particle can travel far from its starting point. The displayed points are exact samples of the model at chosen times, but the straight lines joining them hide the finer motion between observations.'],
 questions: [
 ['How would stronger drift differ visually from stronger diffusion?', 'Drift changes the mean trend; diffusion changes the scale of random departures around that trend.'],
 ['Does zero drift mean the particle stays near zero?', 'No. Its spread increases with time even when its expected position remains zero.'],
 ['What does the expected path represent?', 'The average position across hypothetical repetitions at each time, not a required individual trajectory.'],
 ['Why is a single upward path not evidence of positive drift by itself?', 'Random fluctuations can create an upward path even under zero or negative drift.'],
 ['What happens when diffusion is switched off?', 'Only the deterministic drift remains, so the sample follows its expected path.'],
 ['Does knowing the entire past reveal the next Brownian increment?', 'No. Under the model, that increment is independent of the prior history and remains random.'],
 ['Why is the spread larger farther into the future?', 'More independent random increments have accumulated.'],
 ['Can a path leave the displayed spread guides and return?', 'Yes. The guides are pointwise summaries and impose no pathwise barrier.'],
 ['Are the straight segments evidence that a Brownian path is smooth?', 'No. They are a display approximation; Brownian paths are rough at arbitrarily fine scales.'],
 ['What kinds of market behavior does this continuous constant-parameter model miss?', 'Jumps, changing volatility and richer dependence can all lie outside this simple model.']
 ]
},
'quadratic-variation': {
 intuition: ['Measuring a rough journey by its final displacement loses all the back-and-forth motion. Squaring each small change before adding it prevents opposing moves from canceling. For Brownian motion, those many tiny squared changes accumulate into a stable amount as the measuring grid becomes finer.', 'This is very different from a smooth road: its squared changes disappear under sufficiently fine measurement. Brownian roughness leaves a lasting contribution. The diagonal in the applet is the theoretical limit; the jagged accumulated sum is what a finite set of observations produces. Refinement is not guaranteed to improve every individual estimate.'],
 questions: [
 ['Why can a path return to its start while accumulating substantial quadratic variation?', 'Opposite moves cancel in displacement but not after each move is squared.'],
 ['What information does final displacement leave out?', 'It leaves out the fluctuations and backtracking that occurred along the way.'],
 ['Why square increments rather than simply add signed changes?', 'Squaring removes their signs, so local motion is retained instead of canceling.'],
 ['Why is Brownian motion different from a smooth curve under finer measurement?', 'Its small fluctuations remain rough enough for squared increments to retain a nonzero limit.'],
 ['Must each grid refinement bring the sampled sum closer to its limit?', 'No. Finite-path errors can move in either direction.'],
 ['Why reuse the same sample while changing the grid?', 'It helps isolate the effect of observation resolution from the effect of drawing a different path.'],
 ['If two paths end at the same point, must their coarse squared sums match?', 'No. Their intermediate movements can differ.'],
 ['Does the limiting rule make the Brownian path itself deterministic?', 'No. A path can be random while one of its limiting variation properties is fixed.'],
 ['What should a discrepancy from the diagonal mean at finite resolution?', 'It is expected sampling-resolution error, not automatically a failure of the theoretical limit.'],
 ['Why does this topic matter for the chain rule later in the path?', 'The surviving squared-change contribution creates the second-order correction in Itô’s formula.']
 ]
},
'ito-integral': {
 intuition: ['Imagine choosing how much exposure to hold just before a random price move. Your gain depends on the exposure chosen and the move that follows. The Itô integral repeats this idea over finer intervals: choose using present information, then experience the next increment.', 'Using the end-of-interval value would quietly let the choice depend on a move that has already happened. That change in timing alters the result for Brownian motion. In this example, the accumulated left-endpoint gains approach the corrected square, not the ordinary-calculus answer.'],
 questions: [
 ['Why must the exposure be chosen before the next random move?', 'A feasible adapted strategy can use current information, not a future increment that is still unknown.'],
 ['What would choosing after seeing the move allow you to do?', 'It could introduce hindsight into the weighting, changing the integral and the meaning of the strategy.'],
 ['Why does endpoint choice matter more here than for a smooth path?', 'Brownian squared increments leave a nonzero contribution, so different timing conventions can produce different limits.'],
 ['Is the integral just the total change in Brownian motion?', 'No. It accumulates increments weighted by the chosen exposure, which can vary along the path.'],
 ['Could an integral with zero expectation finish negative?', 'Yes. Zero expectation concerns averages across possible realizations, not the result of one sample.'],
 ['What does refining the grid change in this experiment?', 'It uses more frequent exposure updates along the same underlying sampled Brownian path.'],
 ['Why can the two plotted lines disagree on a coarse grid?', 'One is a finite left-endpoint sum; the other uses the continuous-time identity.'],
 ['Would using the right endpoint be merely a more accurate version of the same rule?', 'No. It changes the information timing and generally defines a different limiting quantity.'],
 ['How is this related to a trading strategy that finances itself?', 'Gains arise from previously chosen holdings times subsequent price changes, rather than unexplained injections of money.'],
 ['What is the most important question to ask about any proposed stochastic weighting rule?', 'What information was available when the weight was chosen?']
 ]
},
'ito-formula': {
 intuition: ['A curved response treats upward and downward movements asymmetrically. Squaring a value makes both sufficiently large positive and negative values positive. Even when the underlying motion has no preferred direction, its square can therefore gain in expectation.', 'Ordinary calculus would discard tiny squared increments. Brownian motion produces enough of them for their total to survive. Itô’s extra term keeps track of this accumulated interaction between randomness and curvature. The gap between the curves is that contribution, not an arbitrary correction to improve a fit.'],
 questions: [
 ['How can a directionless process produce a quantity with positive expected growth?', 'A curved transformation such as squaring changes how positive and negative fluctuations combine.'],
 ['What does the gap between the two curves represent?', 'The accumulated second-order correction that ordinary calculus would miss.'],
 ['Why is the correction not a numerical patch?', 'It follows from the process’s quadratic variation and the function’s curvature.'],
 ['What would happen to this curvature correction for a straight-line function?', 'Its second derivative is zero, so that particular correction vanishes.'],
 ['Why does greater diffusion strengthen the correction for the square?', 'It increases the accumulated size of squared fluctuations.'],
 ['Can the transformed process grow in expectation while the original remains mean-zero?', 'Yes. Taking a nonlinear function and taking an expectation do not generally commute.'],
 ['Why should you be cautious about applying an ordinary chain rule to a noisy path?', 'Its roughness can preserve terms that ordinary smooth-path reasoning discards.'],
 ['Would turning off randomness leave the same extra correction?', 'No. With zero diffusion, this Brownian correction disappears.'],
 ['Does this example imply every nonlinear function has a positive correction?', 'No. The sign and size depend on curvature; concave regions can produce a negative contribution.'],
 ['What should you look for when transforming a stochastic model?', 'The function’s sensitivity, its curvature, and the amount of local random variation.']
 ]
},
'geometric-brownian': {
 intuition: ['Think of a business whose random gains and losses are proportional to its current size. The same percentage change moves more dollars when the business is larger. Geometric Brownian motion captures that proportional scaling and, when started positive, never crosses zero in finite time.', 'The average future price and the middle-ranked future price are different landmarks. A long upper tail can pull the average above what half the outcomes exceed. Increase volatility while holding the expected return rate fixed: the mean stays in place, but the median falls. That separation is one way to see the effect of compounding uncertain proportional returns.'],
 questions: [
 ['Why do dollar fluctuations tend to grow as the modeled price grows?', 'The random changes are proportional to the current price.'],
 ['How can the mean price exceed the median price?', 'A relatively small share of very large outcomes can pull the average upward.'],
 ['Does a rising expected price mean most paths rise by that amount?', 'No. The mean is not the median or a promise about a typical realized path.'],
 ['Why does increasing volatility change the median while leaving this model’s mean unchanged?', 'Holding the expected return rate fixed preserves the mean, while stronger dispersion lowers the log-growth center.'],
 ['Can a positive GBM price become negative?', 'No, not in this model when started positive, though it can become very small.'],
 ['Does remaining positive protect you from a severe loss?', 'No. A price close to zero can represent an almost total loss.'],
 ['What does turning off volatility do to the mean and median?', 'They coincide with the deterministic growth path.'],
 ['Why should one impressive simulated path not determine your view of the model?', 'It is only one realization and may be unrepresentative of the distribution.'],
 ['What would a sudden price gap reveal about this model’s limitations?', 'GBM has continuous paths, so it cannot literally generate an instantaneous jump.'],
 ['What does keeping the same random sample help you compare?', 'It makes the effect of changing parameters easier to distinguish from a fresh set of random shocks.']
 ]
},
'girsanov': {
 intuition: ['Imagine keeping the same collection of possible stories but changing how heavily each story counts in an average. A change of measure does this with probabilities. It does not rewrite the observed history or create a new stock payoff; it changes the weighting used to evaluate uncertainty.', 'In this model, risk-neutral weighting makes the stock’s expected growth rate match the risk-free rate. Girsanov explains how the corresponding Brownian description adjusts. The original Brownian variable is shifted in distribution under the new measure; the appropriately drift-adjusted variable is then Brownian under that measure.'],
 questions: [
 ['When the measure changes, are possible histories being replaced or reweighted?', 'They are reweighted; equivalent measures agree on events that have zero probability.'],
 ['Why might the same payoff have different expectations under two measures?', 'The measures give different probability weights to the same possible outcomes.'],
 ['Is the risk-neutral measure claiming that investors do not care about risk?', 'No. It is a pricing construction, not a claim about people’s preferences.'],
 ['Does changing measure alter a stock price that has already been observed?', 'No. It changes the probability description, not the realized historical observation.'],
 ['Why does the physical growth forecast not appear as the stock drift under Q?', 'Risk-neutral pricing uses a measure in which the appropriately discounted stock is a martingale under this model.'],
 ['What happens when physical drift already equals the risk-free rate here?', 'The drift adjustment vanishes and the two displayed terminal densities coincide.'],
 ['Why must the reweighting be normalized?', 'The resulting weights must define a probability measure with total probability one.'],
 ['Does equivalence mean every event keeps the same probability?', 'No. It preserves which events have zero probability, not the numerical probabilities of other events.'],
 ['Why is it misleading to call the displayed shifted density a different realized path?', 'A density describes probabilities across outcomes; it is not an individual trajectory.'],
 ['What question should you ask whenever someone says an asset’s expected return is the risk-free rate?', 'Under which probability measure and which modeling assumptions is that expectation taken?']
 ]
},
'black-scholes': {
 intuition: ['Before a call expires, it still has opportunities to become valuable. Its price reflects those future possibilities rather than only what exercise would pay immediately. That is why the price curve is smooth before expiration and approaches a kinked payoff as the remaining opportunity disappears.', 'Delta describes the local tilt of the price curve. A hedge using delta shares responds approximately like the option to a small stock move. As the stock and time change, that tilt changes too, so the ideal replication continually adjusts its holdings. The model’s clean price depends on that frictionless trading ideal.'],
 questions: [
 ['Why can an out-of-the-money call still have value before expiration?', 'There is still a chance that the stock will finish above the strike.'],
 ['What changes as the last remaining time disappears?', 'Future uncertainty about the terminal payoff disappears and value approaches intrinsic payoff.'],
 ['What does delta tell you in plain language?', 'How sensitively the option’s value responds locally to a small change in the stock price.'],
 ['Why is delta not simply the buyer’s probability of profit?', 'It is a derivative of price with respect to stock price, not a probability defined by the buyer’s premium and outcome.'],
 ['Why does the hedge need adjustment rather than a single initial trade?', 'The option’s sensitivity changes with the stock price and remaining time.'],
 ['Why can a larger range of stock outcomes help a purchased call in this model?', 'Its upside payoff benefits from favorable moves while its payoff cannot fall below zero.'],
 ['Does knowing the model price guarantee you can trade at it?', 'No. Market quotes, costs, liquidity and model disagreement affect actual execution.'],
 ['What could leave hedge error even if the formula is implemented correctly?', 'Discrete rebalancing, transaction costs, jumps and changing parameters can break ideal replication.'],
 ['Why is the payoff kink at the strike special at expiration?', 'The payoff’s slope changes abruptly there, so its ordinary derivative at that exact point is undefined.'],
 ['What assumption would you revisit first if market prices repeatedly disagreed with the curve?', 'Investigate inputs and assumptions such as constant volatility, dividends, jumps and trading frictions rather than assuming the market is wrong.']
 ]
},
'feynman-kac': {
 intuition: ['You can estimate the value of a future payoff by imagining many possible futures, valuing the payoff in each, discounting, and averaging. Another route describes how the value must behave locally through a differential equation. Feynman–Kac connects these viewpoints under suitable conditions.', 'Monte Carlo takes only a finite sample of those futures, so its running estimate wiggles around the target. More samples reduce typical sampling uncertainty, but they do not improve the underlying market assumptions. Here exact terminal sampling lets you focus on sampling error without mixing in time-stepping error.'],
 questions: [
 ['What are the two routes to value being compared?', 'A discounted payoff expectation and the analytic value associated with the pricing equation.'],
 ['Why does the Monte Carlo line wiggle as samples are added?', 'Each newly sampled payoff changes the average, sometimes moving it toward the benchmark and sometimes away.'],
 ['Must a larger sample produce a closer estimate on every run?', 'No. Accuracy improves statistically, not monotonically for every realized sequence.'],
 ['What does the reported uncertainty interval describe?', 'Approximate uncertainty from finite Monte Carlo sampling under the chosen model.'],
 ['Would a tiny sampling error prove the model describes real markets?', 'No. A precise computation can still use inaccurate assumptions.'],
 ['Why sample under the pricing measure rather than an arbitrary forecast distribution?', 'The pricing expectation requires the model’s risk-neutral weighting of outcomes.'],
 ['Why discount a future payoff before comparing it with today’s price?', 'A payment at a future date and money available today are valued at different times.'],
 ['Does this applet numerically solve the differential equation?', 'No. It samples the expectation and compares it with a known analytic benchmark.'],
 ['Why is holding the random seed fixed useful when increasing sample count?', 'The larger run extends the same sequence, making the effect of additional observations easier to interpret.'],
 ['What should you investigate if the estimate persistently misses the benchmark by much more than its sampling uncertainty?', 'Check payoff definitions, discounting, random sampling, parameter consistency and implementation errors.']
 ]
},
'stopping-times': {
 intuition: ['Imagine a guard instructed to ring a bell the first time a path reaches a fence. The guard can act immediately using only what has happened so far. Now ask the guard to ring the bell at the path’s eventual highest point: that cannot generally be known until the future unfolds.', 'That difference is the idea behind a stopping time. The applet’s guard only checks at grid times, so a quick crossing and return between checks can go unnoticed. The theoretical hit probability refers to continuous monitoring, while the observed hit is limited by the displayed sampling grid.'],
 questions: [
 ['Why can a first barrier hit be recognized without knowing the future?', 'By the hitting time, the observed path already shows that the barrier has been reached.'],
 ['Why is the time of the eventual maximum generally different?', 'You need later observations to know that no higher value will occur.'],
 ['What changes when the barrier is lowered?', 'Reaching it by a fixed horizon becomes more likely.'],
 ['Does no observed grid crossing prove no continuous crossing occurred?', 'No. The path may cross and return between monitoring times.'],
 ['Why might the displayed stopped line freeze beyond the barrier rather than exactly on it?', 'The first observed grid point can overshoot; the exact continuous Brownian first hit reaches the barrier itself.'],
 ['Can a high hit probability coexist with one sample that never visibly hits?', 'Yes. A probability describes the collection of possible paths, not a guarantee for one sample.'],
 ['Why is more time relevant to a first-hit event?', 'It gives the process more opportunity to reach the barrier.'],
 ['What information would make an exercise rule impossible to implement honestly?', 'Any requirement to use future outcomes that are not yet observable when the decision is made.'],
 ['Does stopping a process automatically make its financial outcome favorable?', 'No. A stopping rule defines when an action occurs; profitability requires separate reasoning and conditions.'],
 ['How could monitoring frequency matter for a real barrier contract?', 'Discrete and continuous monitoring can trigger different events and therefore different payoffs.']
 ]
},
'mean-reversion': {
 intuition: ['Think of a noisy object attached to a spring. The spring pulls toward an anchor, while random disturbances keep nudging the object away. A stronger spring restores the expected position faster, but it does not force every realized move to point toward the anchor.', 'The long-run rate is an anchor for the conditional mean, not a floor or a destination reached permanently. In the Gaussian rate model, shocks can even push rates below zero. Compare the same shocks at different reversion speeds to see how the restoring force competes with randomness.'],
 questions: [
 ['Does mean reversion require every next move to head toward the long-run level?', 'No. The drift points toward that level, while a random shock can dominate the next realized move.'],
 ['How is stronger mean reversion different from lower volatility?', 'One strengthens the restoring drift; the other reduces the scale of new random shocks.'],
 ['Is the long-run level a floor that rates cannot cross?', 'No. The process can move above or below it.'],
 ['Why can the expected path be smooth while the sample path is jagged?', 'The expected path averages away random shocks; an individual realization retains them.'],
 ['What does the half-life describe?', 'How quickly the expected distance from the long-run level shrinks, not when an actual path must return.'],
 ['Can the modeled rate become negative?', 'Yes. Gaussian shocks are not constrained by a zero lower bound.'],
 ['Why does stronger reversion reduce long-run dispersion here?', 'It counteracts deviations more quickly for the same level of incoming noise.'],
 ['What happens if rate volatility is set to zero?', 'The rate follows a deterministic return toward the anchor.'],
 ['Would one apparent return to the average establish genuine mean reversion?', 'No. Random paths can show such episodes; identifying reversion requires broader evidence.'],
 ['Why might a fixed long-run anchor be inadequate for an economy?', 'Policy regimes and structural conditions can change the level toward which rates tend to revert.']
 ]
},
'poisson-jumps': {
 intuition: ['Picture an event counter that stays still until a new arrival clicks it upward. Unlike Brownian motion, change occurs in distinct jumps. Intensity describes the average pace of arrivals, not a timetable: long quiet periods and close clusters can both occur.', 'Subtracting the expected count gives a compensated record. It slopes downward while you wait and jumps upward when an event arrives. Its average is zero across possible histories, even though no individual path needs to sit near zero. With constant intensity, elapsed waiting time alone does not make the next arrival overdue.'],
 questions: [
 ['Does an average arrival rate tell you exactly when the next event will happen?', 'No. It describes the distribution of random arrivals rather than a schedule.'],
 ['Can several events arrive close together even with a constant intensity?', 'Yes. Random clustering can occur without any change in the underlying rate.'],
 ['After a long quiet spell, is an event necessarily due soon?', 'No. Exponential waiting times are memoryless in this constant-intensity model.'],
 ['Why is the event-count path flat between arrivals?', 'The counter changes only when an event occurs.'],
 ['Why does the compensated path slope downward between its jumps?', 'The expected count keeps increasing while the observed count remains unchanged.'],
 ['How can that compensated process be a martingale despite those downward slopes?', 'Possible future jumps offset the downward movement in conditional expectation.'],
 ['What happens to typical waiting times when intensity increases?', 'They become shorter because events arrive at a faster average pace.'],
 ['Does observing more events than expected contradict the model?', 'No. The expected count is an average, and realized counts fluctuate around it.'],
 ['What feature of arrivals would make a basic Poisson process questionable?', 'If events trigger further events or intensity changes with circumstances, independent constant-rate increments may be unsuitable.'],
 ['What is a key visual difference between this process and Brownian motion?', 'The Poisson count has discrete jumps, whereas Brownian paths are continuous even though they are rough.']
 ]
}
};
