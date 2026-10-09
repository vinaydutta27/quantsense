window.MATH_COURSE = {
  "sections": [
    {
      "title": "Numbers, relationships and growth",
      "lessons": [
        {
          "id": "units",
          "title": "Units and basis points",
          "lab": "units",
          "story": "A rate is a proportion, not a cash amount. Before multiplying anything, ask what each number measures. One percent means one part in a hundred; one basis point means one part in ten thousand.",
          "reason": "Multiply a notional by a decimal rate change to obtain a cash change in a simple linear example. Converting units first prevents an error of a hundred times. This example is interest arithmetic, not a bond DV01 calculation.",
          "equation": "cash = notional × basis points / 10,000",
          "example": "On 100 currency units, 25 basis points corresponds to 0.25 units.",
          "experiment": "Double the notional and predict the cash change before moving the control.",
          "question": "Why is 25 basis points not 25 percent?",
          "answer": "A basis point is 0.01 percentage points. Therefore 25 basis points is 0.25 percent.",
          "finance": "Rates, spreads and sensitivity reports require consistent units."
        },
        {
          "id": "fractions",
          "title": "Fractions, weights and averages",
          "lab": "weights",
          "story": "Imagine splitting a pot between two investments. A weight tells you what fraction of the pot belongs to each. A weighted average gives a larger voice to the larger allocation.",
          "reason": "For a fully invested portfolio, the weights sum to one. Multiply each return by its weight, then add. Short positions can make weights negative, but this first experiment uses allocations between zero and one.",
          "equation": "portfolio return = w × r₁ + (1 − w) × r₂",
          "example": "With 25% in an asset returning 8% and 75% returning 4%, the portfolio earns 5%.",
          "experiment": "Move the weight from zero to one and follow the straight line.",
          "question": "Can a long-only weighted average exceed both inputs?",
          "answer": "No. Nonnegative weights summing to one place the result between the inputs.",
          "finance": "Portfolio aggregation begins with weighted sums."
        },
        {
          "id": "signed",
          "title": "Signed quantities and netting",
          "lab": "signed",
          "story": "A positive holding and a negative holding point in opposite directions. Selling an asset short creates a negative position; an upward price move then produces a loss instead of a gain.",
          "reason": "Add signed exposures only when they refer to the same measured quantity and compatible units. A zero net exposure can hide substantial gross positions and does not cancel every kind of risk.",
          "equation": "net = long − short; gross = long + short",
          "example": "A long exposure of 7 and short exposure of 5 give net 2 and gross 12.",
          "experiment": "Match the two positions. Inspect what remains in the gross total.",
          "question": "Does zero net exposure mean there is no liquidity risk?",
          "answer": "No. Separate positions can still require funding, collateral or settlement even when a selected net sensitivity is zero.",
          "finance": "Hedging uses direction as well as magnitude."
        },
        {
          "id": "algebra",
          "title": "Equations as balance",
          "lab": "linear",
          "story": "An equation says two descriptions have the same value. Solving it means finding an input that keeps this balance true. Think of removing equal amounts from both sides of a scale.",
          "reason": "For a straight-line rule, first undo the fixed addition, then undo the multiplication. Division is allowed only by a nonzero coefficient. The visual shows both the rule and the target you are trying to reach.",
          "equation": "a x + b = 10 ⇒ x = (10 − b) / a",
          "example": "If 2x + 4 = 10, subtract 4 to get 2x = 6, then divide by 2 to get x = 3.",
          "experiment": "Change the slope while keeping the target fixed.",
          "question": "What happens when the slope becomes very small?",
          "answer": "A small change in the target requires a large change in the solution. Inverting a nearly flat relationship is unstable.",
          "finance": "Calibration is often an equation solved for an unknown parameter."
        },
        {
          "id": "functions",
          "title": "Functions, domains and composition",
          "lab": "function",
          "story": "A function is a rule that assigns one output to each allowed input. Its domain is the set of inputs for which the rule makes sense. Drawing the graph reveals behaviour that a formula can hide.",
          "reason": "The experiment transforms a parabola by shifting it and changing its height scale. To compose functions, feed the output of the first rule into the second. The order matters: shifting before squaring differs from shifting after squaring.",
          "equation": "f(x) = a(x − b)²",
          "example": "For a = 2 and b = 1, the input x = 3 gives 2(3 − 1)² = 8.",
          "experiment": "Move the horizontal shift and locate the new minimum.",
          "question": "Is squaring reversible without restricting the domain?",
          "answer": "No. Both positive and negative inputs can have the same square. Restricting to nonnegative inputs makes the square-root inverse single-valued.",
          "finance": "Prices are functions of market inputs, with domains imposed by the model."
        },
        {
          "id": "exponents",
          "title": "Repeated growth and compounding",
          "lab": "compound",
          "story": "Simple interest adds the same amount each period. Compound interest also earns interest on earlier interest. Repeated multiplication, rather than repeated addition, creates the curved growth path.",
          "reason": "With n compounding periods per year, divide the annual nominal rate by n and apply that smaller growth factor n times per year. Letting n increase leads to continuous compounding for a fixed nominal rate.",
          "equation": "V(t) = V₀(1 + r/n)^(nt); continuous limit = V₀e^(rt)",
          "example": "100 compounded annually at 10% becomes 121 after two years; simple interest gives 120.",
          "experiment": "Increase the compounding frequency and compare with the continuous limit.",
          "question": "Why does the gap grow with time?",
          "answer": "Interest earned earlier has more opportunities to earn further interest.",
          "finance": "Discounting reverses compounding to value future cash flows today."
        },
        {
          "id": "logs",
          "title": "Logarithms and additive returns",
          "lab": "log",
          "story": "A logarithm answers a reverse growth question: what exponent produced this ratio? Natural logarithms turn multiplication into addition, making a chain of growth factors easier to describe.",
          "reason": "A simple return is a proportional price change. A log return is the natural logarithm of the price ratio. Add log returns across time, then exponentiate to recover the cumulative growth factor. Positive prices are required.",
          "equation": "log return = ln(P₁/P₀); ln(ab) = ln(a) + ln(b)",
          "example": "A 10% rise followed by a 10% fall gives 1.1 × 0.9 = 0.99, a 1% loss.",
          "experiment": "Compare the straight-line approximation r with ln(1 + r).",
          "question": "Why do equal percentage gains and losses fail to cancel?",
          "answer": "The loss is applied to a different base. Log returns capture the multiplicative combination exactly.",
          "finance": "Log returns are central to compounding and positive-price models."
        },
        {
          "id": "sequences",
          "title": "Sequences, series and perpetuities",
          "lab": "series",
          "story": "A sequence is an ordered list; a series adds its terms. Repeatedly taking a fraction of what came before creates a geometric sequence. The sum can approach a finite ceiling even though infinitely many positive terms are added.",
          "reason": "Multiply the partial sum by the common ratio and subtract. Most terms cancel, leaving a compact formula. A geometric infinite sum converges only when the absolute ratio is below one.",
          "equation": "Σ from k=1 to n of q^k = q(1 − q^n)/(1 − q)",
          "example": "For q = 1/2, the first three terms sum to 0.875 and the infinite sum is 1.",
          "experiment": "Increase the number of terms, then move the ratio towards one.",
          "question": "Why does convergence become slower near one?",
          "answer": "Each new term shrinks only slightly, so the remaining tail stays large for longer.",
          "finance": "An equally spaced perpetuity discounts payments into a geometric series."
        }
      ],
      "source": [
        "OpenStax · Algebra and Trigonometry",
        "https://openstax.org/details/books/algebra-and-trigonometry-2e"
      ]
    },
    {
      "title": "Calculus: change and accumulation",
      "lessons": [
        {
          "id": "limits",
          "title": "Limits and approaching a value",
          "lab": "limit",
          "story": "A limit describes what outputs approach as inputs move closer to a point. The function need not be defined at the point itself. Watching nearby values prevents confusing an approaching value with a value actually attained.",
          "reason": "Factor x² − 1 into (x − 1)(x + 1). Away from x = 1 the quotient becomes x + 1, even though the original expression is undefined at one. A limit captures the nearby behaviour.",
          "equation": "lim as h→0 of ((1+h)² − 1)/h = 2",
          "example": "At h = 0.1 the quotient is 2.1; at h = 0.01 it is 2.01.",
          "experiment": "Shrink the step and follow the approach without dividing by zero.",
          "question": "Must a limit equal the function value at the point?",
          "answer": "Only if the function is continuous there. A missing or redefined point can have the same surrounding limit.",
          "finance": "Limits support derivatives, continuous compounding and convergence arguments."
        },
        {
          "id": "continuity",
          "title": "Continuity and payoff kinks",
          "lab": "kink",
          "story": "A continuous graph can be followed without jumping, but it can still have a sharp corner. A call payoff joins a flat region to a rising line at the strike. The value is continuous there while the slope changes abruptly.",
          "reason": "Continuity requires the function value and the approaching values to agree. Differentiability is stronger: slopes from both sides must agree as well. The payoff makes this distinction visible without complicated notation.",
          "equation": "payoff(S) = max(S − K, 0)",
          "example": "At strike 100, prices 99, 100 and 101 produce payoffs 0, 0 and 1.",
          "experiment": "Move the strike and compare the left and right slopes.",
          "question": "Does a continuous payoff have a derivative everywhere?",
          "answer": "No. At the strike, a call payoff has left slope zero and right slope one.",
          "finance": "Kinks explain why some numerical Greeks become delicate near expiry."
        },
        {
          "id": "derivative",
          "title": "Derivatives from a shrinking interval",
          "lab": "derivative",
          "story": "Average speed divides distance by elapsed time. A derivative applies the same idea to a function, then shrinks the interval until it describes a local rate of change. A secant line becomes a tangent.",
          "reason": "For x², expand the numerator before cancelling h. The difference quotient is 2x + h, so its limit is 2x. The derivative is a local statement, not an exact prediction for any finite move.",
          "equation": "f′(x) = lim as h→0 [f(x+h) − f(x)]/h",
          "example": "At x = 2, a step of 0.1 gives slope 4.1; the tangent slope is 4.",
          "experiment": "Reduce the interval and compare the two slopes.",
          "question": "Why does a tangent estimate worsen for larger moves?",
          "answer": "It ignores the changing slope over the interval.",
          "finance": "Delta is a derivative of value with respect to an underlying price."
        },
        {
          "id": "chain",
          "title": "The chain rule as linked changes",
          "lab": "chain",
          "story": "Suppose one input changes an intermediate quantity, which then changes the output. A small movement travels through both relationships. The total local response multiplies the two response rates.",
          "reason": "For f(x) = exp(ax), the inner rule ax changes at rate a. The outer exponential changes at its own current value. Multiplying gives a exp(ax). Units also multiply and cancel through the chain.",
          "equation": "d f(g(x))/dx = f′(g(x))g′(x)",
          "example": "For exp(2x) at x = 0, the inner slope is 2 and outer slope is 1, so the total slope is 2.",
          "experiment": "Increase the inner scaling and watch the curve steepen.",
          "question": "Why is the outer derivative evaluated at the inner output?",
          "answer": "That is the input the outer function actually receives.",
          "finance": "Curve risk propagates through quotes, discount factors and instrument values."
        },
        {
          "id": "product",
          "title": "Product and quotient rules",
          "lab": "product",
          "story": "When both sides of a rectangle grow, the area changes through a strip on each side plus a tiny corner. Dividing by the step and taking a limit makes the corner contribution vanish.",
          "reason": "This explains why the derivative of a product contains two terms. Differentiating a quotient can then be derived by treating the reciprocal as a power and applying the chain rule.",
          "equation": "(uv)′ = u′v + uv′; (u/v)′ = (u′v − uv′)/v²",
          "example": "For u=x and v=x², the product is x³ and the derivative is x² + 2x² = 3x².",
          "experiment": "Compare the two contributions to the product derivative.",
          "question": "Why is multiplying the two derivatives wrong?",
          "answer": "It keeps only the tiny corner effect and loses the first-order strips.",
          "finance": "Discounted values combine a changing payoff estimate and a discount factor."
        },
        {
          "id": "convexity",
          "title": "Curvature and Jensen’s inequality",
          "lab": "convexity",
          "story": "A curved bowl sits below the straight chord connecting two points on it. Averaging the inputs and then applying the curve can therefore differ from averaging the outputs. The order of operations matters.",
          "reason": "For a convex function, the output at a weighted average is no greater than the weighted average output. This holds for nonnegative weights summing to one. Concave functions reverse the inequality.",
          "equation": "f(wx + (1−w)y) ≤ wf(x) + (1−w)f(y)",
          "example": "With x=0, y=2 and equal weights, the square of the average is 1 while the average square is 2.",
          "experiment": "Change the weight and observe the gap vanish at either endpoint.",
          "question": "Does uncertainty always increase the value of any payoff?",
          "answer": "No. The direction depends on convexity and the distribution, with the relevant expectation finite.",
          "finance": "Convex option payoffs help explain the value of dispersion."
        },
        {
          "id": "taylor",
          "title": "Taylor expansions as local models",
          "lab": "taylor",
          "story": "A tangent matches value and slope at one point. A quadratic approximation also matches curvature. Taylor expansion builds increasingly detailed local models from derivatives, rather than claiming a curve is globally polynomial.",
          "reason": "Around zero, exp(x) begins with 1 + x + x²/2. The factorial in each denominator accounts for repeated differentiation. A remainder measures what was left out; small distance alone is not a universal error guarantee.",
          "equation": "e^x = Σ x^k/k!; quadratic approximation = 1 + x + x²/2",
          "example": "At x=0.5, the quadratic gives 1.625 compared with e^0.5 ≈ 1.6487.",
          "experiment": "Increase polynomial order and compare errors near and far from zero.",
          "question": "Why should a risk approximation report the size of the shock?",
          "answer": "A local approximation can be accurate for one shock size and poor for another.",
          "finance": "Delta-gamma approximations are truncated Taylor expansions."
        },
        {
          "id": "integral",
          "title": "Integration by adding thin slices",
          "lab": "integral",
          "story": "To measure accumulated quantity, divide the interval into strips, estimate each strip’s contribution and add. Making the strips narrower leads to the definite integral when the function is integrable.",
          "reason": "A rectangle’s height is the local function value and its width is the input interval. Their product carries the units of the accumulated quantity. Signed areas below zero subtract from the total.",
          "equation": "∫ from 0 to 1 x² dx = 1/3",
          "example": "Four left rectangles give 0.21875; finer partitions approach 0.33333.",
          "experiment": "Increase the rectangle count and compare the estimate with the exact area.",
          "question": "Can a signed integral be zero while the graph is not zero?",
          "answer": "Yes. Positive and negative contributions can cancel.",
          "finance": "Continuous cash flows and probability expectations are accumulated by integration."
        },
        {
          "id": "ftc",
          "title": "Why integration reverses differentiation",
          "lab": "ftc",
          "story": "Let an area grow by moving its upper boundary. A tiny extension adds approximately the boundary height times the extension width. The rate of change of accumulated area is therefore the height of the original curve.",
          "reason": "This is the fundamental theorem of calculus for a continuous integrand. If an antiderivative is known, subtracting its endpoint values computes the definite integral without explicitly summing infinitely many rectangles.",
          "equation": "A(x)=∫₀ˣ t² dt=x³/3; A′(x)=x²",
          "example": "The area to x=2 is 8/3; its instantaneous growth rate there is 4.",
          "experiment": "Move the upper boundary and compare accumulated area with local height.",
          "question": "Why is an arbitrary integration constant irrelevant to a definite integral?",
          "answer": "The same constant is subtracted at the two endpoints.",
          "finance": "Cumulative probabilities and densities are linked by this principle where differentiable."
        },
        {
          "id": "improper",
          "title": "Infinite intervals and tail integrals",
          "lab": "improper",
          "story": "An infinite integration range does not automatically create an infinite answer. A decaying curve can add progressively less area. The question is whether the finite-cutoff integrals approach a finite limit.",
          "reason": "For positive decay rate a, the exponential tail integrates to 1/a. A small rate spreads the same height over a longer region. Truncating at a finite horizon leaves a calculable omitted tail.",
          "equation": "∫₀ᵀ e^(−at)dt=(1−e^(−aT))/a; tail=e^(−aT)/a",
          "example": "For a=1 and T=3, accumulated area is about 0.9502 and the remaining tail is 0.0498.",
          "experiment": "Extend the cutoff and inspect the tail rather than only the visible curve.",
          "question": "Why is a small curve height not enough to dismiss the tail?",
          "answer": "A small height can persist over a very long interval.",
          "finance": "Long-horizon discounting and tail expectations require convergence checks."
        }
      ],
      "source": [
        "OpenStax · Calculus Volume 1",
        "https://openstax.org/books/calculus-volume-1/pages/1-introduction"
      ]
    },
    {
      "title": "Linear algebra: geometry of many risks",
      "lessons": [
        {
          "id": "vectors",
          "title": "Vectors and linear combinations",
          "lab": "vectors",
          "story": "A vector is an ordered collection of quantities. In a picture it can be drawn as an arrow; in a portfolio it can list holdings or exposures. Adding vectors combines each component separately.",
          "reason": "A linear combination scales vectors and then adds them. Using two nonparallel directions can reach every point in a plane. Negative coefficients reverse an arrow instead of creating a new rule.",
          "equation": "v = a(1,0) + b(0,1)",
          "example": "With a=2 and b=3, the resulting vector is (2,3), whose length is √13.",
          "experiment": "Change one coordinate at a time and then both together.",
          "question": "Why must we distinguish vector length from the sum of coordinates?",
          "answer": "Opposing signed coordinates can cancel in a sum even while the vector has substantial magnitude.",
          "finance": "Portfolios and risk-factor exposures are naturally represented as vectors."
        },
        {
          "id": "dot",
          "title": "Dot products and projections",
          "lab": "dot",
          "story": "The dot product measures alignment. Two long arrows pointing at right angles have zero dot product, while parallel arrows reinforce one another. Projection keeps the part of one arrow that lies along another.",
          "reason": "Multiply matching coordinates and add. Dividing by a unit direction’s length is unnecessary because it is already one. For a non-unit direction, divide appropriately to recover the projected vector.",
          "equation": "u·v = Σuᵢvᵢ = ‖u‖‖v‖cos θ",
          "example": "The dot product of (2,1) and (1,3) is 5.",
          "experiment": "Rotate one arrow and find the perpendicular position.",
          "question": "Can a zero dot product mean both vectors are nonzero?",
          "answer": "Yes. Orthogonal vectors have no component along each other.",
          "finance": "Portfolio value is a dot product of holdings and instrument prices."
        },
        {
          "id": "matrix",
          "title": "Matrices transform space",
          "lab": "matrix",
          "story": "A matrix tells you where the coordinate directions move. Once those destinations are known, every other point follows by the same linear-combination rule. A square grid makes the transformation visible.",
          "reason": "The first column is the transformed first basis vector; the second column is the transformed second basis vector. A shear slants the grid without needing a curved mapping. The determinant measures signed area scaling.",
          "equation": "A(x,y) = (x + a y, b y); det(A)=b",
          "example": "For a=1 and b=2, (1,1) maps to (2,2), and areas double.",
          "experiment": "Change shear and vertical scale separately.",
          "question": "Why does shear alone preserve area in this example?",
          "answer": "It changes the slant but not the base-height product; the determinant remains one.",
          "finance": "Matrices map factor changes into many instrument responses at once."
        },
        {
          "id": "systems",
          "title": "Solving simultaneous equations",
          "lab": "systems",
          "story": "Two equations describe two lines. Their intersection gives a pair of values satisfying both relationships at once. If the lines become nearly parallel, the solution becomes sensitive to tiny changes.",
          "reason": "Elimination removes one unknown by subtracting equations. Matrix methods generalise this process to many unknowns. A unique solution requires independent equations; more equations alone do not guarantee more information.",
          "equation": "x+y=2; x+a y=b",
          "example": "For a=2 and b=3, subtraction gives y=1 and then x=1.",
          "experiment": "Move the second slope close to the first and watch the intersection.",
          "question": "Why is a nearly singular system dangerous in calibration?",
          "answer": "Small data errors can cause large changes in the inferred parameters.",
          "finance": "Replication and calibration often solve linear systems."
        },
        {
          "id": "rank",
          "title": "Rank, span and redundancy",
          "lab": "rank",
          "story": "Two arrows may look like two pieces of information but still point along the same line. Their span is the set of combinations they can create. Rank counts the number of independent directions, not the number of columns.",
          "reason": "When one column is a multiple of another, a matrix cannot reach every output direction. Its null space contains input combinations mapped to zero. These combinations describe redundancy in the representation.",
          "equation": "A=[[1,2],[a,b]]; det(A)=b−2a",
          "example": "If a=1 and b=2, the second column is twice the first and the rank is one.",
          "experiment": "Set the determinant to zero, then move slightly away.",
          "question": "Does a tiny nonzero determinant make the system numerically reliable?",
          "answer": "No. Formal invertibility can coexist with severe sensitivity to errors.",
          "finance": "Redundant risk factors can make regression and hedge construction unstable."
        },
        {
          "id": "eigen",
          "title": "Eigenvectors as unchanged directions",
          "lab": "eigen",
          "story": "Most arrows rotate when a matrix transforms them. An eigenvector is special: it stays on the same line and only changes length or direction. Its eigenvalue is the scaling factor.",
          "reason": "For a symmetric two-factor matrix with equal diagonal entries, the common and opposing directions are eigenvectors. Positive and negative correlation change which direction stretches more.",
          "equation": "A=[[1,ρ],[ρ,1]] has eigenvalues 1+ρ and 1−ρ",
          "example": "At ρ=0.8, the common direction scales by 1.8 and the opposing direction by 0.2.",
          "experiment": "Move correlation through zero and see the dominant direction change.",
          "question": "Why is an eigenvector’s sign arbitrary?",
          "answer": "Multiplying it by minus one represents the same line and satisfies the same eigenvalue relation.",
          "finance": "Eigenvectors describe dominant modes of joint market movement."
        },
        {
          "id": "psd",
          "title": "Covariance matrices and nonnegative risk",
          "lab": "psd",
          "story": "A variance cannot be negative. A valid covariance matrix must therefore produce nonnegative variance for every portfolio direction, not merely for a few chosen weights.",
          "reason": "This property is positive semidefiniteness. For two standardised factors, correlation must lie between minus one and one. The quadratic form sums own-risk contributions and the interaction between the factors.",
          "equation": "Var(w₁X+w₂Y)=w₁²+w₂²+2ρw₁w₂",
          "example": "Equal weights with ρ=0 give variance 0.5; with ρ=1 they give variance 1.",
          "experiment": "Vary correlation and inspect the variance of every allocation.",
          "question": "Can individually plausible pairwise correlations form an invalid larger matrix?",
          "answer": "Yes. In higher dimensions, joint positive semidefiniteness imposes additional constraints.",
          "finance": "Portfolio risk and capital aggregation depend on valid covariance structures."
        },
        {
          "id": "cholesky",
          "title": "Cholesky factors and correlated shocks",
          "lab": "cholesky",
          "story": "Start with two independent standardised shocks. Keep the first and mix part of it into the second. The shared piece creates correlation, while an independent remainder preserves total variance.",
          "reason": "For correlation ρ, combine ρZ₁ with √(1−ρ²)Z₂. The squared coefficients add to one. Cholesky factorisation extends this construction to positive-definite covariance matrices; singular cases need care.",
          "equation": "X=Z₁; Y=ρZ₁+√(1−ρ²)Z₂",
          "example": "At ρ=0.6, the coefficients are 0.6 and 0.8, whose squares sum to one.",
          "experiment": "Move correlation from negative to positive and inspect the cloud.",
          "question": "Why is the independent coefficient not simply 1−ρ?",
          "answer": "Variance depends on squared coefficients, not their ordinary sum.",
          "finance": "Simulation generates correlated market shocks using matrix factors."
        },
        {
          "id": "pca",
          "title": "Principal components and explained variance",
          "lab": "pca",
          "story": "A cloud may stretch mainly along one direction. Projecting onto that direction preserves more variation than projecting onto a short direction. Principal component analysis orders orthogonal directions by captured variance.",
          "reason": "For a covariance matrix, eigenvectors provide the component directions and eigenvalues their variances. Centring is essential; scaling changes the question being answered. Explained variance measures reconstruction of variation, not predictive usefulness.",
          "equation": "explained fraction of component i = λᵢ / Σλⱼ",
          "example": "For eigenvalues 1.8 and 0.2, the first component explains 90% of total variance.",
          "experiment": "Increase the magnitude of correlation and watch one mode dominate.",
          "question": "Does high explained variance prove a factor predicts returns?",
          "answer": "No. PCA summarises variation; forecasting requires a separate model and evaluation.",
          "finance": "Yield-curve risk is often described using dominant movement patterns."
        },
        {
          "id": "svd",
          "title": "Singular values and conditioning",
          "lab": "svd",
          "story": "A general linear map can be understood as a rotation, a stretch along perpendicular axes and another rotation. Singular values are the stretch factors. A tiny stretch loses information when measurement errors are present.",
          "reason": "Inverting that tiny stretch magnifies errors. The condition number compares largest and smallest singular values. Truncation or regularisation can reduce instability, but it changes the problem and introduces bias.",
          "equation": "A=UΣVᵀ; condition number=σmax/σmin",
          "example": "For diagonal stretches 2 and 0.1, the condition number is 20.",
          "experiment": "Shrink the smaller stretch and inspect how an input error is amplified.",
          "question": "Why is an exact algebraic inverse not always a good numerical method?",
          "answer": "The data and arithmetic are imperfect, and inversion can magnify both errors.",
          "finance": "Conditioning matters in regressions, calibration and curve construction."
        }
      ],
      "source": [
        "MIT OpenCourseWare · Linear Algebra",
        "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"
      ]
    },
    {
      "title": "Many inputs and optimisation",
      "lessons": [
        {
          "id": "partial",
          "title": "Partial derivatives and slices",
          "lab": "partial",
          "story": "A surface depends on more than one input. To isolate one influence, freeze the other inputs and walk along a slice. The slope on that slice is a partial derivative.",
          "reason": "For f(x,y)=x²+2y², moving in x while holding y fixed gives slope 2x. Holding an input fixed is part of the question; allowing it to move produces a different total response.",
          "equation": "∂f/∂x=2x; ∂f/∂y=4y",
          "example": "At (1,2), the two partial derivatives are 2 and 8.",
          "experiment": "Move the selected point and compare slopes in the two directions.",
          "question": "Why can a reported sensitivity depend on what was held constant?",
          "answer": "Different constraints define different paths through the same surface.",
          "finance": "Greeks isolate price responses to individual model inputs."
        },
        {
          "id": "gradient",
          "title": "Gradients and the steepest direction",
          "lab": "gradient",
          "story": "Collect all partial derivatives into an arrow. Its direction points towards the fastest local increase when distance is measured in the usual Euclidean way. Moving against it gives the steepest local decrease.",
          "reason": "A directional derivative is the dot product of the gradient and a unit direction. Rescaling coordinates changes the geometry, so steepest descent depends on parameter units and scaling.",
          "equation": "∇f=(∂f/∂x,∂f/∂y); Dᵤf=∇f·u",
          "example": "For x²+2y² at (1,1), the gradient is (2,4).",
          "experiment": "Compare a move along a contour with a move across contours.",
          "question": "Why is the gradient perpendicular to a smooth level curve?",
          "answer": "Along a level curve the value does not change, so the directional derivative is zero.",
          "finance": "Optimisers use gradients to adjust model parameters efficiently."
        },
        {
          "id": "hessian",
          "title": "Hessians and cross-effects",
          "lab": "hessian",
          "story": "Local slopes themselves change as you move. The Hessian collects these second derivatives. Its off-diagonal entries show how changing one input affects the sensitivity to another.",
          "reason": "For a smooth function, mixed partials agree under standard continuity conditions. A positive-definite Hessian makes the local quadratic model a bowl; a negative eigenvalue reveals a direction of downward curvature.",
          "equation": "f=x²+y²+ρxy; H=[[2,ρ],[ρ,2]]",
          "example": "At ρ=1, the Hessian eigenvalues are 3 and 1, so the quadratic is a strict bowl.",
          "experiment": "Change the cross-effect and observe rotated contours.",
          "question": "Why are separate one-input gamma measures not the whole story?",
          "answer": "Cross derivatives contribute when inputs move together.",
          "finance": "Multifactor second-order risk includes cross-gamma terms."
        },
        {
          "id": "jacobian",
          "title": "Jacobians and changing coordinates",
          "lab": "jacobian",
          "story": "Changing coordinates can stretch area as well as reposition points. The Jacobian is a matrix of local partial derivatives that describes the small-scale linear transformation.",
          "reason": "Its determinant gives the local signed area factor in two dimensions. Density transforms use the absolute factor because probability mass cannot become negative. The mapping must meet the relevant invertibility conditions.",
          "equation": "For u=ax, v=by: abs(det J)=abs(ab)",
          "example": "If both axes double, area becomes four times as large and a uniform density becomes one quarter as high.",
          "experiment": "Change the two stretches and compare area with density.",
          "question": "Why must density decrease when the same probability fills more area?",
          "answer": "Probability is density times area, and the total mass is preserved.",
          "finance": "Distribution transformations and numerical integration depend on Jacobians."
        },
        {
          "id": "double",
          "title": "Double integrals and joint mass",
          "lab": "double",
          "story": "An area integral stacks tiny columns over a plane. Each column contributes height times its small base area. For a joint density, adding columns over a region gives a probability.",
          "reason": "A valid density is nonnegative and integrates to one. Integrating out one coordinate produces a marginal density. For independent uniforms on the unit square, rectangle probabilities equal their areas.",
          "equation": "P(X≤a,Y≤b)=∫₀ᵃ∫₀ᵇ 1 dy dx=ab",
          "example": "Independent uniform variables satisfy P(X≤0.4,Y≤0.5)=0.2.",
          "experiment": "Resize the highlighted rectangle and compare side lengths with joint mass.",
          "question": "Would the same area rule hold for every joint distribution?",
          "answer": "No. A nonuniform density weights different regions differently.",
          "finance": "Joint integration combines multiple uncertain risk drivers."
        },
        {
          "id": "descent",
          "title": "Gradient descent and step size",
          "lab": "descent",
          "story": "To find the bottom of a bowl, repeatedly move downhill. A short step makes slow progress; a very long step can jump across the bottom and move farther away. The slope gives direction, but step size controls stability.",
          "reason": "For f(x)=x²/2, subtracting η times the gradient gives xnext=(1−η)x. The iterates converge to zero when 0<η<2; at the boundary they can oscillate without shrinking.",
          "equation": "xₖ₊₁=xₖ−ηf′(xₖ)",
          "example": "With x₀=4 and η=0.5, successive values are 2, 1 and 0.5.",
          "experiment": "Move the step size above one, then above two.",
          "question": "Does a decreasing local slope guarantee every step improves the objective?",
          "answer": "No. A large step can overshoot the region described by the local approximation.",
          "finance": "Calibration requires stable optimisation, not just derivative evaluation."
        },
        {
          "id": "lagrange",
          "title": "Constraints and Lagrange multipliers",
          "lab": "lagrange",
          "story": "An unconstrained best choice may be impossible because weights must sum to one or an exposure must match a target. A constraint restricts movement to a curve or surface.",
          "reason": "At a smooth constrained optimum, the objective gradient has no component along an allowed direction. It aligns with the constraint gradient. The multiplier quantifies local sensitivity to the constraint level when regularity holds.",
          "equation": "minimise x²+y² subject to x+y=c ⇒ x=y=c/2",
          "example": "For c=2, the closest point on the line to the origin is (1,1), with objective 2.",
          "experiment": "Move the required total and watch the tangency point.",
          "question": "Why is setting both objective partial derivatives to zero wrong here?",
          "answer": "That gives the unconstrained optimum, which may violate the constraint.",
          "finance": "Portfolio construction often combines an objective with exposure constraints."
        },
        {
          "id": "efficient",
          "title": "Convex portfolios and efficient choices",
          "lab": "efficient",
          "story": "Two assets can combine to reduce volatility when their returns are imperfectly correlated. Plot every allocation by its risk and expected return to see feasible trade-offs instead of guessing a best weight.",
          "reason": "Variance is a quadratic function of weights; expected return is linear. With a positive semidefinite covariance matrix, variance is convex. An efficient choice cannot improve return without increasing risk among the allowed portfolios.",
          "equation": "σp²=w²σ₁²+(1−w)²σ₂²+2w(1−w)ρσ₁σ₂",
          "example": "For two 20% volatility assets with zero correlation, equal weights give about 14.14% volatility.",
          "experiment": "Change correlation and inspect the diversification benefit.",
          "question": "Is the lowest-volatility allocation always the best investment?",
          "answer": "No. The objective, expected returns, constraints and estimation uncertainty also matter.",
          "finance": "Mean-variance geometry clarifies portfolio optimisation assumptions."
        }
      ],
      "source": [
        "Boyd and Vandenberghe · Convex Optimization",
        "https://web.stanford.edu/~boyd/cvxbook/"
      ]
    },
    {
      "title": "Probability: reasoning about uncertainty",
      "lessons": [
        {
          "id": "sets",
          "title": "Outcomes, events and probability",
          "lab": "sets",
          "story": "An outcome is one possible result; an event is a collection of outcomes. Probability assigns mass to events. Start with equally likely points so that probabilities can be counted before introducing densities.",
          "reason": "The union means at least one event occurs. Adding their probabilities counts the overlap twice, so subtract it once. Mutually exclusive means no overlap; it does not mean independent.",
          "equation": "P(A∪B)=P(A)+P(B)−P(A∩B)",
          "example": "On a fair die, A={1,2,3} and B={3,4} have union probability 4/6.",
          "experiment": "Resize two events and inspect the overlap.",
          "question": "Why are two nonempty mutually exclusive events not independent?",
          "answer": "Observing one rules out the other, changing its probability to zero.",
          "finance": "Default events and scenario sets need precise definitions."
        },
        {
          "id": "counting",
          "title": "Counting and combinatorics",
          "lab": "counting",
          "story": "To count sequences, multiply the number of choices at each stage. To count selections where order does not matter, remove the duplicate orderings. This distinction explains the binomial coefficient.",
          "reason": "Choosing k items from n can be counted by ordered selection and then divided by k factorial. Factorials count arrangements of distinct items. The formula also works for choosing none or all.",
          "equation": "C(n,k)=n!/[k!(n−k)!]",
          "example": "Choosing two names from five gives 10 pairs, not 20 ordered lists.",
          "experiment": "Move the selected count towards half the available count.",
          "question": "Why are middle-sized selections usually more numerous?",
          "answer": "There are more ways to mix inclusion and exclusion than to choose almost everything or almost nothing.",
          "finance": "Counting underlies discrete probability models and scenario trees."
        },
        {
          "id": "conditional",
          "title": "Conditional probability as a smaller world",
          "lab": "conditional",
          "story": "Once information is observed, outcomes inconsistent with it are removed. Conditional probability measures the remaining event mass relative to the reduced world, not relative to the original total.",
          "reason": "The numerator is the overlap of the event and the information. The denominator is the information event’s probability, which must be positive. Conditioning can increase or decrease a probability.",
          "equation": "P(A given B)=P(A∩B)/P(B)",
          "example": "If 20 of 100 borrowers are flagged and 5 flagged borrowers default, the observed default fraction among flagged borrowers is 25%.",
          "experiment": "Change the flagged share while keeping its default rate fixed.",
          "question": "Why should the denominator be the flagged group size?",
          "answer": "That is the population remaining after the condition is known.",
          "finance": "Risk estimates are conditional on information and portfolio selection."
        },
        {
          "id": "bayes",
          "title": "Bayes’ rule and base rates",
          "lab": "bayes",
          "story": "A warning signal can be common among bad outcomes and still mostly identify good ones if bad outcomes are rare. Draw the two populations first, then split each by whether the signal appears.",
          "reason": "Bayes’ rule reverses a conditional relationship by accounting for prior prevalence. The evidence probability combines true and false signals. Sensitivity alone does not determine the probability of trouble after a signal.",
          "equation": "P(D given F)=P(F given D)P(D)/[P(F given D)P(D)+P(F given not D)P(not D)]",
          "example": "With 1% prevalence, 90% sensitivity and a 10% false-positive rate, the posterior is about 8.33%.",
          "experiment": "Keep signal quality fixed and increase prevalence.",
          "question": "Why can the same signal mean different things in different portfolios?",
          "answer": "The base rate changes the relative numbers of true and false signals.",
          "finance": "Credit screening and model diagnostics require base-rate awareness."
        },
        {
          "id": "random",
          "title": "Random variables and distributions",
          "lab": "discrete",
          "story": "A random variable assigns a number to each outcome. The distribution describes how much probability lands on each numerical value. It separates the outcome description from the number we choose to measure.",
          "reason": "Different outcomes may map to the same value, so their probabilities add. A discrete distribution lists masses that must be nonnegative and sum to one. The experiment uses a two-outcome payoff.",
          "equation": "P(X=−1)=1−p; P(X=2)=p",
          "example": "At p=0.4, a loss of 1 has probability 0.6 and a gain of 2 has probability 0.4.",
          "experiment": "Move the gain probability and watch probability mass transfer.",
          "question": "Can a random variable’s expected value be an impossible outcome?",
          "answer": "Yes. The mean is a weighted balance point, not necessarily one of the allowed outcomes.",
          "finance": "Financial payoffs are random variables defined on market outcomes."
        },
        {
          "id": "expectation",
          "title": "Expectation as a balance point",
          "lab": "expectation",
          "story": "Place probability mass at each payoff on a number line. The expectation is the balancing location. It summarises the centre but does not describe the spread or guarantee a typical realised result.",
          "reason": "Multiply each value by its probability and add. Linearity of expectation holds even for dependent variables, provided the expectations exist. Independence is not required for adding expected values.",
          "equation": "E[X]=Σpᵢxᵢ",
          "example": "For payoffs −1 and 2 with gain probability 0.4, the expectation is 0.2.",
          "experiment": "Find the probability where the balance point reaches zero.",
          "question": "Does a positive expectation rule out frequent losses?",
          "answer": "No. Frequency and magnitude both matter, and many losing outcomes can be offset by a few large gains.",
          "finance": "Expected losses and expected payoffs begin with weighted outcomes."
        },
        {
          "id": "variance",
          "title": "Variance, standard deviation and scale",
          "lab": "variance",
          "story": "Two distributions can balance at the same point but spread out very differently. Squaring deviations prevents positive and negative differences from cancelling. Their average is the variance.",
          "reason": "Standard deviation takes the square root to restore the original units. Shifting every outcome leaves variance unchanged; multiplying outcomes by a scales variance by a². The experiment contrasts the two-outcome spread with its centre.",
          "equation": "Var(X)=E[(X−E[X])²]=E[X²]−E[X]²",
          "example": "For a fair variable taking −1 and 1, mean is zero and variance is one.",
          "experiment": "Change the probability and observe where dispersion is greatest.",
          "question": "Why is variance measured in squared units?",
          "answer": "Each deviation is squared before averaging. Standard deviation restores the original unit.",
          "finance": "Volatility is a standard deviation with a specified return horizon."
        },
        {
          "id": "covariance",
          "title": "Covariance, correlation and dependence",
          "lab": "correlation",
          "story": "Dependence asks how variables move together. Covariance measures the average product of centred movements. Correlation divides by their standard deviations to remove the units, when both are positive.",
          "reason": "Positive correlation produces an upward-tilted cloud; negative correlation produces a downward tilt. Zero correlation excludes linear association but does not generally imply independence. The displayed cloud is a Gaussian example where zero correlation does imply independence.",
          "equation": "Corr(X,Y)=Cov(X,Y)/(σXσY)",
          "example": "For Y=X² with symmetric X, correlation can be zero even though Y is fully determined by X.",
          "experiment": "Rotate the Gaussian cloud by changing correlation.",
          "question": "Why is correlation not a complete description of dependence?",
          "answer": "Different joint distributions can share a correlation but have different nonlinear and tail behaviour.",
          "finance": "Diversification depends on joint outcomes, especially in stress."
        },
        {
          "id": "binomial",
          "title": "Binomial trials and event counts",
          "lab": "binomial",
          "story": "Repeat a yes-or-no experiment a fixed number of times. The binomial distribution counts how many successes occur when trials are independent and have the same success probability.",
          "reason": "A particular sequence with k successes has probability p^k(1−p)^(n−k). Multiply by the number of sequences with that count. Dependence or varying probabilities changes this model.",
          "equation": "P(K=k)=C(n,k)p^k(1−p)^(n−k)",
          "example": "Two fair trials give count probabilities 1/4, 1/2 and 1/4.",
          "experiment": "Increase the number of trials while keeping probability fixed.",
          "question": "Why is the most likely count not always exactly np?",
          "answer": "Counts must be integers, while the expectation need not be.",
          "finance": "Independent default counts provide a starting point before adding default dependence."
        },
        {
          "id": "poisson",
          "title": "Poisson arrivals and waiting",
          "lab": "poisson",
          "story": "Some events are counted over time rather than over a fixed list of trials. A Poisson model uses a constant arrival intensity and independent increments to describe such counts.",
          "reason": "Over a unit interval the mean and variance both equal the intensity. This equality is a model restriction, not a universal empirical fact. The infinite distribution is displayed with its omitted tail accounted for.",
          "equation": "P(N=k)=e^(−λ)λ^k/k!",
          "example": "At λ=2, the probability of no arrivals is e^−2 ≈ 0.1353.",
          "experiment": "Increase intensity and observe the count distribution shift.",
          "question": "What might variance far above the mean suggest?",
          "answer": "Clustering, changing intensity or another mechanism inconsistent with a simple Poisson count model.",
          "finance": "Arrival models describe jumps, defaults or operational events under explicit assumptions."
        },
        {
          "id": "normal",
          "title": "The normal distribution and standardisation",
          "lab": "normal",
          "story": "A normal distribution is a symmetric bell described by its centre and spread. Standardisation subtracts the centre and divides by the standard deviation, converting different scales to a common one.",
          "reason": "Density is probability per unit, not probability at an exact point. Interval probability is area under the curve. A narrow normal density can exceed one without violating probability rules.",
          "equation": "Z=(X−μ)/σ; φ(z)=e^(−z²/2)/√(2π)",
          "example": "For mean 10 and standard deviation 2, the value 14 is two standard deviations above the mean.",
          "experiment": "Change spread while preserving total area.",
          "question": "Why does a wider bell become shorter?",
          "answer": "The same total probability is spread over a wider range.",
          "finance": "Normal models are useful approximations, but can underrepresent market tails."
        },
        {
          "id": "lognormal",
          "title": "Positive quantities and lognormal models",
          "lab": "lognormal",
          "story": "Exponentiating a normal variable produces a positive, right-skewed variable. Equal moves in logarithms become unequal moves in levels. The long right tail pulls the mean above the median.",
          "reason": "If log X is normal with mean μ and variance σ², the median is exp(μ) and the mean is exp(μ+σ²/2). Parameters of the logarithm are not the mean and variance of the level.",
          "equation": "X=e^(μ+σZ); E[X]=e^(μ+σ²/2)",
          "example": "At μ=0 and σ=1, the median is 1 but the mean is about 1.6487.",
          "experiment": "Increase log-scale volatility and compare mean with median.",
          "question": "Why can the mean rise without changing the median?",
          "answer": "Convex exponentiation amplifies the larger positive outcomes more than the negative ones.",
          "finance": "Geometric Brownian motion has lognormal terminal levels under constant parameters."
        },
        {
          "id": "cdf",
          "title": "Cumulative distributions and quantiles",
          "lab": "cdf",
          "story": "A cumulative distribution adds all probability at or below a threshold. It never decreases and runs from zero towards one. A quantile reverses the question: how far must the threshold move to include a given probability?",
          "reason": "For continuous strictly increasing distributions, inversion is straightforward. For distributions with jumps, define the quantile as the smallest value whose cumulative probability reaches the target.",
          "equation": "F(x)=P(X≤x); qα=inf{x:F(x)≥α}",
          "example": "The standard normal 50th percentile is zero; its 97.5th percentile is about 1.96.",
          "experiment": "Move the probability level and observe how tail quantiles spread apart.",
          "question": "Why does a small change in probability create a large tail movement?",
          "answer": "The density is low there, so a wide interval is needed to collect extra probability.",
          "finance": "Value at risk is a quantile of a specified loss distribution."
        },
        {
          "id": "tails",
          "title": "Tail loss, VaR and expected shortfall",
          "lab": "tails",
          "story": "A quantile marks the entrance to a tail. It does not tell you how severe the losses beyond that entrance are. Expected shortfall averages the upper tail in a way that also handles probability at the boundary.",
          "reason": "For a continuous distribution, upper-tail expected shortfall equals the conditional mean beyond the quantile. The normal experiment shows both measures on a loss axis. Neither is a guaranteed maximum loss.",
          "equation": "For standard normal loss, ESα=φ(zα)/(1−α)",
          "example": "At 97.5%, normal VaR is about 1.960 and ES about 2.338.",
          "experiment": "Increase confidence and compare threshold with average tail severity.",
          "question": "Can two distributions have the same VaR and different expected shortfall?",
          "answer": "Yes. They can share a quantile while differing greatly in losses beyond it.",
          "finance": "Tail measures support risk discussion only with a stated distribution and horizon."
        },
        {
          "id": "lln",
          "title": "The law of large numbers",
          "lab": "lln",
          "story": "An empirical average changes each time a new observation arrives. Individual observations remain noisy even as their average becomes more stable. The law of large numbers concerns that average, not the next outcome.",
          "reason": "For independent identically distributed variables with finite mean, the average converges under the relevant law. In this Bernoulli experiment, the running success fraction approaches the fixed success probability, but need not move closer at every step.",
          "equation": "averageₙ=(X₁+…+Xₙ)/n",
          "example": "After 100 fair trials, 55 successes gives an average of 0.55; it does not change the next trial’s probability.",
          "experiment": "Increase sample size and compare several reproducible samples.",
          "question": "Does a long losing streak make a win more likely on an independent next trial?",
          "answer": "No. Independence prevents the past streak from changing that probability.",
          "finance": "Monte Carlo estimates rely on averaging under appropriate sampling assumptions."
        },
        {
          "id": "clt",
          "title": "The central limit theorem",
          "lab": "clt",
          "story": "A sample mean has its own distribution across repeated samples. The central limit theorem explains why that distribution can become approximately normal after centring and scaling, even when individual observations are not normal.",
          "reason": "For independent identically distributed observations with finite nonzero variance, the standard error of the mean is σ/√n. The approximation can be slow for skewed or heavy-tailed data. The experiment uses Bernoulli sample means.",
          "equation": "√n(average−μ)/σ approaches a standard normal law",
          "example": "For fair Bernoulli observations and n=100, the standard error is 0.05.",
          "experiment": "Increase sample size and watch the distribution of sample means narrow.",
          "question": "Does the theorem say the original observations become normal?",
          "answer": "No. It describes a standardised sum or mean across repeated samples.",
          "finance": "Sampling uncertainty and Monte Carlo error often use this scaling."
        }
      ],
      "source": [
        "MIT OpenCourseWare · Introduction to Probability and Statistics",
        "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/"
      ]
    },
    {
      "title": "Statistics: learning from imperfect data",
      "lessons": [
        {
          "id": "likelihood",
          "title": "Likelihood and parameter estimation",
          "lab": "likelihood",
          "story": "Probability asks about data under a specified model. Likelihood holds the observed data fixed and varies the parameter. The curve reveals which parameter values make those observations more plausible within the model.",
          "reason": "For independent Bernoulli observations, multiply the success and failure probabilities. Taking logarithms turns the product into a sum and preserves its maximiser. Maximum likelihood estimates the probability by the observed success fraction.",
          "equation": "L(p) ∝ p^k(1−p)^(n−k); p̂=k/n",
          "example": "Seven successes in ten trials gives an MLE of 0.7.",
          "experiment": "Increase sample size while keeping the success fraction similar.",
          "question": "Does the highest likelihood prove the model is correct?",
          "answer": "No. It selects a parameter within the chosen model family; model adequacy is a separate question.",
          "finance": "Calibration needs a statistical model and an objective, not only a fitted number."
        },
        {
          "id": "posterior",
          "title": "Bayesian estimation and updating",
          "lab": "posterior",
          "story": "A prior distribution describes uncertainty about a parameter before the new sample. Multiplying by likelihood and normalising produces a posterior. More informative data can reduce the prior’s relative influence.",
          "reason": "For a Bernoulli probability, a beta prior updates by adding observed successes and failures to its shape parameters. These parameters are weights in a mathematical model, not automatically literal historical observations.",
          "equation": "Beta(α,β) + k of n successes → Beta(α+k,β+n−k)",
          "example": "A uniform Beta(1,1) prior with 7 successes in 10 gives Beta(8,4), with posterior mean 2/3.",
          "experiment": "Compare the prior and posterior after changing the observed success count.",
          "question": "Why is the posterior mean not exactly the sample fraction?",
          "answer": "It combines the likelihood with the chosen prior information.",
          "finance": "Bayesian methods make parameter uncertainty explicit."
        },
        {
          "id": "intervals",
          "title": "Confidence intervals and coverage",
          "lab": "intervals",
          "story": "An estimate varies from sample to sample. A confidence procedure produces an interval from each sample. Its confidence level describes the long-run fraction of such intervals that cover a fixed true parameter under the assumptions.",
          "reason": "The normal-mean example assumes known population standard deviation. It uses the sampling standard error, not the spread of individual observations. Unknown variance and dependent data require different treatment.",
          "equation": "95% interval = sample mean ± 1.96σ/√n",
          "example": "If the mean is 2, σ=1 and n=100, the interval is approximately [1.804,2.196].",
          "experiment": "Increase sample size fourfold and compare interval widths.",
          "question": "Does a 95% confidence interval mean 95% of observations lie inside it?",
          "answer": "No. It describes uncertainty in a parameter estimate, not the dispersion of observations.",
          "finance": "Risk estimates should communicate sampling uncertainty as well as point values."
        },
        {
          "id": "testing",
          "title": "Hypothesis tests and p-values",
          "lab": "testing",
          "story": "A hypothesis test compares the observed statistic with what would be expected under a null model. A p-value measures how unusual that statistic or something more extreme would be under the null and the test’s assumptions.",
          "reason": "For a two-sided normal z test, count probability in both tails beyond the absolute observed statistic. Statistical significance does not measure effect size, practical importance or the probability the null is true.",
          "equation": "p=2[1−Φ(abs(z))]",
          "example": "A z statistic of 1.96 gives a two-sided p-value of about 0.05.",
          "experiment": "Move the observed z statistic and watch the two highlighted tails.",
          "question": "Why do repeated unplanned tests create misleading discoveries?",
          "answer": "Even under true nulls, some tests cross the threshold by chance; multiple testing requires a plan or adjustment.",
          "finance": "Backtesting evidence requires careful test interpretation."
        },
        {
          "id": "regression",
          "title": "Least squares as geometric fitting",
          "lab": "regression",
          "story": "A regression line is chosen to make vertical prediction errors collectively small. Squaring errors penalises large misses and yields a smooth objective. A line can fit an association without explaining its cause.",
          "reason": "Ordinary least squares chooses slope and intercept to minimise the sum of squared residuals. For a fixed sample, the fitted residual is orthogonal to the included regressors. Out-of-sample performance remains a separate issue.",
          "equation": "minimise Σ(yᵢ−a−bxᵢ)²",
          "example": "For points (0,1), (1,3), (2,5), the exact fitted line is y=1+2x.",
          "experiment": "Increase the noise in the fixed synthetic sample and inspect residuals.",
          "question": "Why can a high in-sample fit still give poor predictions?",
          "answer": "It can reflect chance, leakage, an unstable relationship or overfitting.",
          "finance": "Factor exposures and forecasting models often use regression."
        },
        {
          "id": "regularisation",
          "title": "Regularisation and the bias-variance trade-off",
          "lab": "ridge",
          "story": "A model can fit small sample quirks too closely. Regularisation adds a cost for large or complex parameters, favouring a more stable estimate. The cost trades some in-sample fit for restraint.",
          "reason": "Ridge regression adds a squared-coefficient penalty. In the centred one-predictor experiment, the slope is the cross-product divided by the predictor sum of squares plus the penalty. Feature scaling affects the penalty’s meaning.",
          "equation": "b̂ridge=Σxᵢyᵢ/(Σxᵢ²+λ)",
          "example": "If the cross-product is 20 and predictor sum of squares is 10, λ=10 shrinks the slope from 2 to 1.",
          "experiment": "Increase the penalty and inspect both slope and residuals.",
          "question": "Can regularisation guarantee better future performance?",
          "answer": "No. Its strength must be assessed on suitable held-out or rolling data.",
          "finance": "Stable risk models need validation as well as fitting."
        },
        {
          "id": "timeseries",
          "title": "Time series and autocorrelation",
          "lab": "ar",
          "story": "Time ordering can carry information that a shuffled sample loses. Autocorrelation measures association between a series and a lagged version of itself. Persistent observations provide less independent information than equally many independent observations.",
          "reason": "An AR(1) model makes the current centred value a multiple of the last plus a new shock. Its shock is independent of the past in this experiment. Lag-k autocorrelation is φ^k in the stationary model.",
          "equation": "Xₜ=φXₜ₋₁+εₜ",
          "example": "With φ=0.8, theoretical lag-two autocorrelation is 0.64.",
          "experiment": "Move persistence through zero and compare smooth clusters with alternating signs.",
          "question": "Why is ordinary independent-data uncertainty inappropriate for persistent observations?",
          "answer": "Observations repeat information, so the effective information differs from the raw count.",
          "finance": "Volatility, spreads and economic series often have temporal dependence."
        },
        {
          "id": "stationarity",
          "title": "Stationarity and mean reversion",
          "lab": "stationarity",
          "story": "A stationary model has stable probabilistic behaviour over time. Weak stationarity requires constant mean, finite constant variance and covariance depending only on the lag. It does not mean the realised path is flat.",
          "reason": "For AR(1) with independent shocks of variance σ², stationary variance is σ²/(1−φ²) when abs(φ)<1. Near one, shocks persist and the stationary variance becomes large. A random walk does not have this stationary variance.",
          "equation": "Var(X)=σ²/(1−φ²), for abs(φ)<1",
          "example": "With σ=1 and φ=0.8, stationary variance is 1/0.36 ≈ 2.778.",
          "experiment": "Move persistence near one and inspect the changing variance.",
          "question": "Does visual fluctuation around a recent average prove stationarity?",
          "answer": "No. Structural changes and limited data can create misleading impressions.",
          "finance": "Mean-reverting models require stability assumptions that should be tested."
        }
      ],
      "source": [
        "MIT OpenCourseWare · Introduction to Probability and Statistics",
        "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/"
      ]
    },
    {
      "title": "Numerical methods: making mathematics computable",
      "lessons": [
        {
          "id": "bisection",
          "title": "Bisection and guaranteed brackets",
          "lab": "bisection",
          "story": "If a continuous function changes sign across an interval, it has a root somewhere inside. Bisection repeatedly halves the interval and retains the half that still brackets a sign change.",
          "reason": "This method needs continuity and a valid initial bracket. It is slower than some local methods but offers a transparent interval error bound. The experiment solves x²=a for a positive target.",
          "equation": "interval width after n steps = initial width / 2^n",
          "example": "For a=2, the root lies between 1 and 2, so repeated halving locates √2.",
          "experiment": "Increase the number of iterations and inspect the remaining bracket.",
          "question": "Does a sign change guarantee a root if the function is discontinuous?",
          "answer": "No. A jump or pole can create a sign change without a zero.",
          "finance": "Implied parameters can be solved robustly when a valid bracket is available."
        },
        {
          "id": "newton",
          "title": "Newton’s method and tangent steps",
          "lab": "newton",
          "story": "Draw a tangent at your current guess and follow it to where it crosses zero. That crossing becomes the next guess. Repeating this can converge rapidly near a well-behaved root.",
          "reason": "Newton’s method divides by the derivative, so a zero or very small derivative is a problem. A poor starting point can diverge or reach an unwanted root. The positive square-root example is deliberately well behaved.",
          "equation": "xnext=x−f(x)/f′(x); for x²=a: xnext=(x+a/x)/2",
          "example": "For a=2 and x₀=1, the next guesses are 1.5 and about 1.4167.",
          "experiment": "Change the initial guess and compare convergence paths.",
          "question": "Why is a small function value not the only useful stopping test?",
          "answer": "Step size, derivative conditioning and the required accuracy of the final quantity also matter.",
          "finance": "Implied volatility and nonlinear calibration use root-finding methods."
        },
        {
          "id": "quadrature",
          "title": "Numerical quadrature and discretisation",
          "lab": "quadrature",
          "story": "An integral may exist even when a convenient antiderivative is unavailable. Numerical quadrature replaces a curved region by simple pieces whose areas can be calculated.",
          "reason": "The trapezoidal rule joins neighbouring endpoints with straight lines. For a smooth convex function, those chords lie above the curve, creating overestimation on each interval. Error depends on both mesh size and smoothness.",
          "equation": "Tₙ=h[f(a)/2 + Σf(a+ih) + f(b)/2]",
          "example": "For x² on [0,1], one trapezoid gives 0.5 while the exact integral is 1/3.",
          "experiment": "Double the number of intervals and compare the error.",
          "question": "Why should you check convergence rather than trust one grid?",
          "answer": "One grid gives no direct evidence that discretisation error is small.",
          "finance": "Valuation integrals and exposure calculations often require numerical integration."
        },
        {
          "id": "montecarlo",
          "title": "Monte Carlo and sampling error",
          "lab": "montecarlo",
          "story": "An integral can be interpreted as an expectation. Sample inputs from the chosen distribution, evaluate the function and average. Monte Carlo exchanges a geometric integration problem for a statistical estimation problem.",
          "reason": "For independent uniform samples on [0,1], the average of X² estimates 1/3. Its standard error scales as one over the square root of sample size. More paths reduce sampling noise but do not fix an incorrect model.",
          "equation": "∫₀¹f(x)dx = E[f(U)], U uniform on [0,1]",
          "example": "For f(U)=U², variance is 1/5−1/9=4/45, so SE=√(4/(45n)).",
          "experiment": "Increase paths and compare the estimate with its uncertainty scale.",
          "question": "How many paths are needed to halve the standard error?",
          "answer": "Roughly four times as many independent paths.",
          "finance": "Monte Carlo values complex payoffs and simulates risk distributions."
        },
        {
          "id": "antithetic",
          "title": "Variance reduction by paired samples",
          "lab": "antithetic",
          "story": "Instead of using unrelated random inputs, pair a uniform draw U with its reflection 1−U. If their payoff errors tend to offset, averaging the pair gives a steadier contribution.",
          "reason": "The pair average retains the same expectation. Its variance depends on covariance between the two payoffs. Antithetic pairing can help monotone payoffs, but is not a universal improvement for every function.",
          "equation": "A=[f(U)+f(1−U)]/2",
          "example": "For f(U)=U, each paired average is exactly 1/2, eliminating sampling variance.",
          "experiment": "Use the quadratic payoff and compare equal-cost independent and paired estimates.",
          "question": "Why must an efficiency comparison use equal computational cost?",
          "answer": "A method should not appear better merely because it evaluated more payoffs.",
          "finance": "Variance reduction can make simulation more efficient without changing the target."
        },
        {
          "id": "differences",
          "title": "Finite differences and error balance",
          "lab": "differences",
          "story": "A numerical derivative measures a finite bump rather than an infinitesimal one. A central difference looks on both sides, cancelling some of the one-sided truncation error.",
          "reason": "For smooth functions, the central-difference truncation error is usually order h². Very small h can instead amplify floating-point cancellation or valuation noise. The best bump balances these effects.",
          "equation": "f′(x)≈[f(x+h)−f(x−h)]/(2h)",
          "example": "For f(x)=e^x at x=0 and h=0.1, the central difference is about 1.00167 versus exact 1.",
          "experiment": "Move the bump across several orders of magnitude.",
          "question": "Why is the smallest possible bump not always the best?",
          "answer": "Subtracting nearly equal numbers loses relative precision, and simulation noise can dominate.",
          "finance": "Numerical Greeks require a defensible bump and convergence study."
        },
        {
          "id": "ode",
          "title": "Differential equations and Euler steps",
          "lab": "ode",
          "story": "A differential equation specifies how a quantity changes rather than directly giving its future value. Starting from an initial value, follow the local slope for a small time step, then update the slope.",
          "reason": "Euler’s method approximates the next value using the current derivative. For exponential growth or decay, the exact solution offers a benchmark. Coarse steps can create instability even when the true solution is stable.",
          "equation": "dy/dt=ay; Euler: ynext=y(1+aΔt); exact y=e^(at) for y₀=1",
          "example": "With a=−1 and Δt=0.5, the first Euler value is 0.5, versus e^−0.5≈0.6065.",
          "experiment": "Compare numerical and exact paths as the step becomes smaller.",
          "question": "Can an unstable numerical path be blamed on the underlying model automatically?",
          "answer": "No. The discretisation itself can create instability.",
          "finance": "Differential equations describe discounting, mean reversion and dynamic systems."
        },
        {
          "id": "pde",
          "title": "Diffusion equations and grid stability",
          "lab": "heat",
          "story": "Diffusion smooths a concentrated shape by moving mass from high regions towards low ones. A partial differential equation describes this change across both space and time.",
          "reason": "An explicit grid update averages neighbouring values with a diffusion-dependent weight. For the one-dimensional heat equation, nonnegative averaging weights require DΔt/Δx²≤1/2. The experiment stays within that stable range and uses zero boundary values.",
          "equation": "u_t=D u_xx; uᵢnext=uᵢ+α(uᵢ₋₁−2uᵢ+uᵢ₊₁)",
          "example": "At α=0.25, weights are 0.25, 0.5 and 0.25, which sum to one.",
          "experiment": "Increase diffusion time and observe the peak flatten.",
          "question": "Why does doubling spatial resolution demand a smaller time step here?",
          "answer": "The stability restriction depends on the square of spatial spacing.",
          "finance": "Option-pricing PDEs share diffusion mathematics, with additional terms and boundary conditions."
        }
      ],
      "source": [
        "MIT OpenCourseWare · Mathematics with Applications in Finance",
        "https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/"
      ]
    },
    {
      "title": "Stochastic models and pricing synthesis",
      "lessons": [
        {
          "id": "filtration",
          "title": "Information through time",
          "lab": "tree",
          "story": "A filtration is an expanding collection of information. At each date, it specifies what outcomes can already be distinguished. A decision adapted to that information cannot use a future branch before it is observed.",
          "reason": "In a two-step tree, the first observation narrows the possible terminal states. Conditional expectations average only within the remaining branch. Moving backwards averages those conditional values again: the tower property.",
          "equation": "E[E[X given information at time 1]]=E[X]",
          "example": "If first-step branches are equally likely with conditional means 2 and 6, today’s mean is 4.",
          "experiment": "Change branch probabilities and compare local and overall expectations.",
          "question": "Why is using a future price in today’s hedge invalid?",
          "answer": "It makes the strategy depend on information unavailable at the decision time.",
          "finance": "Trading strategies must be adapted to the information available when traded."
        },
        {
          "id": "martingale",
          "title": "Martingales and fair conditional values",
          "lab": "martingale",
          "story": "A martingale has no predictable change in conditional expectation under a specified probability measure. It can still fluctuate violently. Fairness concerns the conditional mean, not a guarantee of no loss.",
          "reason": "A symmetric random walk with zero drift is a martingale relative to its natural information. Adding deterministic drift breaks that property. Integrability and the chosen filtration are part of the definition.",
          "equation": "E[Mₜ₊₁ given Fₜ]=Mₜ",
          "example": "A fair ±1 increment has conditional expected change zero, regardless of earlier outcomes.",
          "experiment": "Add drift and distinguish the predictable trend from noise.",
          "question": "Is every asset price a martingale under real-world probabilities?",
          "answer": "No. Risk premia, funding and the chosen numeraire matter.",
          "finance": "Discounted asset prices are martingales under suitable pricing measures and assumptions."
        },
        {
          "id": "brownian",
          "title": "Brownian motion and square-root time",
          "lab": "brownian",
          "story": "To create a continuous-time random model, shorten the time step and shrink each independent shock by the square root of that step. Scaling by the step itself would make random variation disappear in the limit.",
          "reason": "Brownian motion starts at zero and has independent normal increments with variance equal to elapsed time. Paths are continuous but almost surely nowhere differentiable. A plotted finite grid only approximates that path.",
          "equation": "ΔW=√Δt Z; Var(Wₜ)=t",
          "example": "A one-year increment has standard deviation 1; a quarter-year increment has standard deviation 0.5.",
          "experiment": "Refine the grid and compare the total squared increments with elapsed time.",
          "question": "Why cannot we treat Brownian motion like an ordinary smooth curve?",
          "answer": "Its small increments remain too rough for an ordinary pathwise derivative.",
          "finance": "Brownian drivers underpin many continuous-time pricing and risk models."
        },
        {
          "id": "ito",
          "title": "Quadratic variation and Itô’s correction",
          "lab": "ito",
          "story": "Ordinary calculus often discards squared small changes. For Brownian increments, squared changes accumulate to elapsed time rather than disappearing. This leaves an extra curvature term when a nonlinear function is applied.",
          "reason": "Expanding the square of W after each increment gives 2WΔW+(ΔW)². Summing explains why the Itô integral of W is half of W_T²−T. The simulation shows the finite-grid squared-increment sum beside its limit.",
          "equation": "d(W²)=2W dW+dt; ∫₀ᵀW dW=(W_T²−T)/2",
          "example": "At T=1 and W_T=0, the integral is −1/2, not zero.",
          "experiment": "Refine the partition and compare discrete correction with time.",
          "question": "Why is the ordinary chain rule missing a term here?",
          "answer": "Brownian quadratic variation survives in the limit and multiplies the second derivative.",
          "finance": "Itô’s formula links stochastic state models to derivative valuation."
        },
        {
          "id": "gbm",
          "title": "Geometric Brownian motion",
          "lab": "gbm",
          "story": "A constant absolute noise scale can make prices negative. Geometric Brownian motion instead scales both drift and noise by the current level, producing positive prices for positive starting values.",
          "reason": "Applying Itô’s formula to the logarithm subtracts half the variance rate from its drift. The level expectation grows at μ, while the median grows at μ−σ²/2. These are different summaries of a skewed distribution.",
          "equation": "Sₜ=S₀ exp[(μ−σ²/2)t+σWₜ]",
          "example": "With μ=0 and positive σ, the expected level stays S₀ but the median falls below S₀.",
          "experiment": "Raise volatility and compare the simulated path, theoretical mean and median.",
          "question": "Why can the average stay flat while the median falls?",
          "answer": "A longer right tail offsets the lower typical level in the arithmetic mean.",
          "finance": "The Black–Scholes model assumes this constant-parameter diffusion for the underlying."
        },
        {
          "id": "measure",
          "title": "Pricing probabilities and no arbitrage",
          "lab": "measure",
          "story": "A replicable payoff can be valued by the cost of the portfolio that reproduces it. Rewriting that cost as a discounted expectation introduces a pricing probability. It is not necessarily a forecast of the actual up move.",
          "reason": "In a one-period binomial market, the risk-free gross return must lie strictly between the down and up factors for the usual no-arbitrage model. The resulting risk-neutral probability then lies between zero and one.",
          "equation": "q=(R−d)/(u−d); price=[qCu+(1−q)Cd]/R",
          "example": "With u=1.2, d=0.8 and R=1.05, q=0.625.",
          "experiment": "Change the risk-free rate within the admissible interval.",
          "question": "Why does the real-world up probability not enter the replicating price?",
          "answer": "The replicating portfolio fixes the payoff in either state, so its cost is determined by traded prices.",
          "finance": "Change of measure connects no-arbitrage pricing with conditional expectations."
        },
        {
          "id": "replication",
          "title": "Replication from two equations",
          "lab": "replication",
          "story": "Hold some stock and some cash so that their combined future value equals the option payoff in both states. Once both outcomes match, the portfolio reproduces the payoff and gives its no-arbitrage price.",
          "reason": "Subtract the down-state equation from the up-state equation to solve the stock holding. Substitute back to find the present cash position. Negative cash means borrowing in this simplified frictionless model.",
          "equation": "Δ=(Cu−Cd)/(Su−Sd); B=(Cd−ΔSd)/R; V=ΔS₀+B",
          "example": "With S₀=100, u=1.2, d=0.8, K=100 and R=1.05, Δ=0.5 and V≈11.9048.",
          "experiment": "Change strike and inspect how the stock and cash positions adapt.",
          "question": "What makes this hedge different from merely matching the expected payoff?",
          "answer": "It matches each possible terminal state, not just their probability-weighted average.",
          "finance": "Replication is the bridge between algebra, probability and derivative pricing."
        },
        {
          "id": "blackscholes",
          "title": "Black–Scholes as a synthesis",
          "lab": "blackscholes",
          "story": "The final lab combines compounding, normal probabilities, derivatives and replication. Under the model, continuous rebalancing removes the underlying Brownian risk from a stock-option hedge, leading to a pricing equation.",
          "reason": "For a European call on a non-dividend-paying asset with constant volatility and rate, the closed form can be viewed as two probability-weighted present-value terms. Trading frictions, jumps and stochastic volatility are outside this model. This lesson is a synthesis, not a derivation of every pricing theorem.",
          "equation": "C=SΦ(d₁)−Ke^(−rT)Φ(d₂); d₁=[ln(S/K)+(r+σ²/2)T]/(σ√T); d₂=d₁−σ√T",
          "example": "At S=K=100, r=5%, σ=20% and T=1, the call is about 10.4506.",
          "experiment": "Change volatility and maturity, then explain the difference between value and payoff.",
          "question": "Why is a model price not a guarantee of a future trading profit?",
          "answer": "Replication assumptions and parameters may fail, and trading has costs and constraints.",
          "finance": "Continue into the Stochastic Calculus and Risk Sensitivities modules for further financial applications."
        }
      ],
      "source": [
        "Carnegie Mellon · Continuous Time Finance",
        "https://www.math.cmu.edu/~gautam/c/2024-420/"
      ]
    },
    {
      "title": "Advanced connections: transforms, tails and inference",
      "lessons": [
        {
          "id": "complex",
          "title": "Complex numbers as rotations",
          "lab": "complex",
          "story": "A complex number combines a horizontal real part and a vertical imaginary part. Multiplying by the imaginary unit rotates a point by a quarter turn. This geometric interpretation makes complex arithmetic less mysterious.",
          "reason": "Represent a point by its distance from the origin and its angle. Multiplication multiplies distances and adds angles. Euler’s identity links that polar representation to the exponential, making oscillations easy to manipulate.",
          "equation": "e^(iθ)=cos θ+i sin θ; i²=−1",
          "example": "Multiplying 1 by i gives i; multiplying again gives −1, a half turn from the start.",
          "experiment": "Rotate the point and inspect its real and imaginary coordinates.",
          "question": "Does an imaginary component mean the calculation has no practical meaning?",
          "answer": "No. It is a coordinate in a two-dimensional number system, useful for oscillations and transforms.",
          "finance": "Complex exponentials encode the frequency representation of distributions and pricing kernels."
        },
        {
          "id": "fourier",
          "title": "Fourier series and frequency mixtures",
          "lab": "fourier",
          "story": "A complicated repeating pattern can be built by adding smooth waves. Each frequency contributes a different scale of variation. A Fourier series describes the pattern through these wave weights instead of point-by-point heights.",
          "reason": "The experiment adds odd sine harmonics to approximate a square wave. Away from the jumps the approximation improves; near jumps an overshoot persists as the transition narrows. More terms do not remove every local artefact.",
          "equation": "square-wave series = (4/π) Σ sin((2k+1)x)/(2k+1)",
          "example": "The first harmonic is 4 sin(x)/π. Adding the third harmonic sharpens the transition but creates ripples.",
          "experiment": "Increase harmonic count and watch the overshoot near a jump.",
          "question": "Why is convergence near a discontinuity different from smooth regions?",
          "answer": "A sum of smooth waves must approximate a jump through increasingly narrow oscillations; pointwise and uniform convergence differ.",
          "finance": "Fourier methods transform some pricing problems into numerical integration in frequency space.",
          "source": [
            "MIT OpenCourseWare · Fourier Analysis",
            "https://ocw.mit.edu/courses/18-103-fourier-analysis-fall-2013/"
          ]
        },
        {
          "id": "characteristic",
          "title": "Characteristic functions and distributions",
          "lab": "characteristic",
          "story": "A characteristic function averages a rotating complex arrow whose angle depends on a random variable. Contributions can reinforce or cancel at each frequency. The resulting function encodes the distribution in a different form.",
          "reason": "For a normal variable, the complex phase reflects the mean and the decaying magnitude reflects variance. Unlike a moment-generating function, a characteristic function always exists because the complex exponential has magnitude one.",
          "equation": "φX(u)=E[e^(iuX)]; normal φX(u)=exp(iμu−σ²u²/2)",
          "example": "For a standard normal variable at frequency 1, the characteristic function is e^−1/2≈0.6065.",
          "experiment": "Increase spread and observe faster decay across frequencies.",
          "question": "Does every distribution have a finite moment-generating function near zero?",
          "answer": "No. Heavy-tailed distributions may not, even though their characteristic functions exist.",
          "finance": "Transform-based pricing can use characteristic functions when a convenient density is unavailable."
        },
        {
          "id": "copula",
          "title": "Copulas separate margins from dependence",
          "lab": "copula",
          "story": "Transform each continuous variable through its own cumulative distribution. The transformed values are uniform on [0,1], leaving a picture of dependence separated from the original scales.",
          "reason": "A copula joins marginal distributions into a joint distribution. The Gaussian copula experiment transforms correlated normal draws to uniform coordinates. Correlation is not a full description of tail dependence; for absolute correlation below one this copula has zero asymptotic tail dependence.",
          "equation": "U=Φ(Z₁), V=Φ(Z₂); joint distribution = C(FX(x),FY(y))",
          "example": "Independent uniforms put 1% probability in the square where both exceed 0.9.",
          "experiment": "Increase correlation and inspect how points collect near the diagonal.",
          "question": "Why does matching ordinary correlation not guarantee matching joint extremes?",
          "answer": "Different copula families can have similar central association and different tail dependence.",
          "finance": "Joint-default and multi-asset risk models need dependence assumptions beyond marginal distributions.",
          "source": [
            "MathWorks · Correlated Samples Using Copulas",
            "https://www.mathworks.com/help/stats/copulas-generate-correlated-samples.html"
          ]
        },
        {
          "id": "extremes",
          "title": "Heavy tails and extreme losses",
          "lab": "pareto",
          "story": "A power-law tail declines much more slowly than an exponential tail. Large observations can dominate averages, and some moments may not exist at all. A stable-looking finite sample cannot establish that the theoretical variance is finite.",
          "reason": "For a Pareto distribution with minimum one, survival probability is x raised to minus the shape. The mean exists only above shape one and variance only above shape two. The controls include infinite-variance cases while keeping the mean finite.",
          "equation": "P(X>x)=x^(−α); qₚ=(1−p)^(−1/α); ESₚ=αqₚ/(α−1)",
          "example": "At shape 2 and confidence 99%, VaR is 10 and expected shortfall is 20, while variance is infinite.",
          "experiment": "Reduce tail shape and compare the tail quantile with expected shortfall.",
          "question": "Why may a normal standard-error formula be inappropriate here?",
          "answer": "The finite-variance assumption can fail, invalidating the usual square-root-n normal approximation.",
          "finance": "Extreme-value reasoning highlights how strongly tail-risk estimates depend on distributional assumptions.",
          "source": [
            "NIST · Probability Distributions",
            "https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/probdist.htm"
          ]
        },
        {
          "id": "bootstrap",
          "title": "Bootstrap resampling and uncertainty",
          "lab": "bootstrap",
          "story": "A dataset is only one realised sample. The nonparametric bootstrap treats its empirical distribution as a stand-in population and repeatedly samples from it with replacement. Recomputed estimates form an approximate uncertainty distribution.",
          "reason": "The ordinary bootstrap assumes the observations are suitable independent samples. Resampling without replacement would simply permute the data and leave a full-sample mean unchanged. Dependence, extremes and small samples require particular care.",
          "equation": "Bootstrap sample: n independent draws from the n observed values, with replacement",
          "example": "For data [1,2,3], a possible resample is [1,1,3], whose mean is 5/3 rather than 2.",
          "experiment": "Increase resample count and compare the percentile bounds across seeds.",
          "question": "Can resampling reveal an extreme event absent from the observed data?",
          "answer": "Not directly. The empirical distribution contains only the observed values.",
          "finance": "Resampling supports uncertainty assessment, but cannot fix unrepresentative training data.",
          "source": [
            "MIT OpenCourseWare · Introduction to Probability and Statistics",
            "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/"
          ]
        },
        {
          "id": "kalman",
          "title": "Kalman filtering and hidden states",
          "lab": "kalman",
          "story": "A noisy observation and an imperfect prediction each contain information about an unobserved state. A Kalman update blends them according to their uncertainty. More reliable information receives more weight.",
          "reason": "In the scalar identity-observation case, gain equals predicted variance divided by predicted plus measurement variance. The update shifts the predicted mean towards the observation. Exact Gaussian interpretation requires a correctly specified linear Gaussian model.",
          "equation": "K=P/(P+R); updated mean=m+K(y−m); updated variance=(1−K)P",
          "example": "If P=R=1, predicted mean is 0 and observation is 2, the updated mean is 1 and variance is 0.5.",
          "experiment": "Increase measurement noise and inspect how the posterior trusts the prediction more.",
          "question": "Why is the gain determined by uncertainty rather than the observation’s magnitude alone?",
          "answer": "The update balances relative reliability, while the innovation measures disagreement.",
          "finance": "State-space models infer latent economic factors or evolving parameters from noisy measurements.",
          "source": [
            "Kalman Filter · The Kalman Gain",
            "https://kalmanfilter.net/kalmanGain.html"
          ]
        },
        {
          "id": "kkt",
          "title": "Inequality constraints and active boundaries",
          "lab": "kkt",
          "story": "An optimum can occur at a boundary even when the objective slope is not zero. At that point, the direction that would improve the objective may be forbidden. Active constraints describe the boundaries that are binding.",
          "reason": "Minimise (x−a)² subject to x≥0. If a is positive the unconstrained optimum is feasible; if a is negative the best allowed point is zero. Complementary slackness means a nonbinding inequality has a zero multiplier.",
          "equation": "x*=max(a,0); with constraint −x≤0, multiplier λ=2max(−a,0)",
          "example": "For a=−2, the constrained solution is zero and multiplier is 4.",
          "experiment": "Move the unconstrained target across the boundary and watch the multiplier switch on.",
          "question": "Does a nonzero gradient at the constrained solution prove failure?",
          "answer": "No. There may be no feasible improving direction. Under suitable convexity and constraint conditions, KKT conditions certify optimality.",
          "finance": "Long-only weights, exposure caps and positivity constraints turn unconstrained fitting into constrained optimisation.",
          "source": [
            "Boyd and Vandenberghe · Convex Optimization",
            "https://web.stanford.edu/~boyd/cvxbook/"
          ]
        }
      ],
      "source": [
        "MIT OpenCourseWare · Probability and Random Variables",
        "https://ocw.mit.edu/courses/18-440-probability-and-random-variables-spring-2014/"
      ]
    }
  ],
  "glossary": [
    {
      "term": "Absolute value",
      "definition": "The distance of a number from zero, ignoring its sign."
    },
    {
      "term": "Adapted",
      "definition": "A process is adapted when its value at each date uses only the information available at that date."
    },
    {
      "term": "Algebra",
      "definition": "The use of symbols and equality-preserving operations to describe and solve relationships."
    },
    {
      "term": "Antiderivative",
      "definition": "A function whose derivative equals a specified function. Antiderivatives on an interval differ by an additive constant."
    },
    {
      "term": "Arbitrage",
      "definition": "A trading opportunity with no initial net cost, no possible loss and a positive chance of gain, under a specified market model."
    },
    {
      "term": "Autocorrelation",
      "definition": "The correlation of a series with a lagged version of itself."
    },
    {
      "term": "Basis",
      "definition": "A set of independent vectors whose linear combinations span the space being described."
    },
    {
      "term": "Basis point",
      "definition": "One hundredth of a percentage point, or 0.0001 as a decimal rate."
    },
    {
      "term": "Bayesian",
      "definition": "An approach that combines a prior distribution with a likelihood to obtain a posterior distribution."
    },
    {
      "term": "Bernoulli",
      "definition": "A distribution with two outcomes, conventionally one with probability p and zero with probability 1−p."
    },
    {
      "term": "Beta distribution",
      "definition": "A probability distribution on [0,1] controlled by two positive shape parameters. It is conjugate to a Bernoulli likelihood."
    },
    {
      "term": "Binomial",
      "definition": "The distribution of the number of successes in a fixed number of independent trials with common success probability."
    },
    {
      "term": "Boundary condition",
      "definition": "A required value or relationship at the edge of a differential-equation domain."
    },
    {
      "term": "Brownian motion",
      "definition": "A continuous process starting at zero with independent normal increments of mean zero and variance equal to elapsed time."
    },
    {
      "term": "Calibration",
      "definition": "Choosing model parameters to fit specified observations or target quantities under a stated objective."
    },
    {
      "term": "Capital",
      "definition": "Financial resources held to absorb losses; a capital charge is different from the underlying exposure or valuation adjustment."
    },
    {
      "term": "CDF",
      "definition": "A cumulative distribution function gives the probability that a random variable is at or below a specified value."
    },
    {
      "term": "Chain rule",
      "definition": "The derivative rule for a composition: multiply the outer derivative, evaluated at the inner output, by the inner derivative."
    },
    {
      "term": "Cholesky factorisation",
      "definition": "Writing a positive-definite symmetric matrix as a lower triangular matrix times its transpose."
    },
    {
      "term": "Compounding",
      "definition": "Applying growth repeatedly to a balance that includes previously accumulated growth."
    },
    {
      "term": "Concave",
      "definition": "A function is concave when the line segment between any two graph points lies at or below the graph over a convex domain."
    },
    {
      "term": "Conditional expectation",
      "definition": "An average of a random variable given specified information; it can itself be a random variable before that information is observed."
    },
    {
      "term": "Conditional probability",
      "definition": "Probability within the reduced set of outcomes consistent with an observed event of positive probability."
    },
    {
      "term": "Condition number",
      "definition": "A measure of sensitivity to input errors; the spectral condition number of an invertible matrix is its largest singular value divided by its smallest."
    },
    {
      "term": "Confidence interval",
      "definition": "An interval generated by a procedure with a stated repeated-sampling coverage under its assumptions."
    },
    {
      "term": "Conjugate prior",
      "definition": "A prior family that yields a posterior in the same family after updating with a specified likelihood."
    },
    {
      "term": "Continuity",
      "definition": "At a point, nearby function values approach the function value at that point."
    },
    {
      "term": "Convergence",
      "definition": "Approach to a limiting value, function or distribution in a specified mathematical sense."
    },
    {
      "term": "Convex",
      "definition": "A function is convex when its value at any weighted average of two inputs is no greater than the corresponding weighted average of outputs, on a convex domain."
    },
    {
      "term": "Correlation",
      "definition": "Covariance divided by the product of positive standard deviations. It measures linear association, not every form of dependence."
    },
    {
      "term": "Covariance",
      "definition": "The expected product of two variables’ deviations from their respective means, when the required moments exist."
    },
    {
      "term": "Curvature",
      "definition": "How slope changes locally. In these calculus lessons it refers to second-derivative behaviour, not a specific regulatory curvature charge."
    },
    {
      "term": "Default",
      "definition": "Failure to meet a defined contractual obligation; its precise definition depends on the application."
    },
    {
      "term": "Delta",
      "definition": "A derivative of an instrument’s value with respect to the underlying price under a stated pricing model."
    },
    {
      "term": "Density",
      "definition": "Probability per unit of input. Integrating it over an interval gives probability for a continuous distribution."
    },
    {
      "term": "Derivative",
      "definition": "The limit of a function’s change divided by its input change, when that limit exists."
    },
    {
      "term": "Determinant",
      "definition": "A scalar associated with a square matrix that gives signed volume scaling and is zero for a singular matrix."
    },
    {
      "term": "Diffusion",
      "definition": "Random spreading or its associated smoothing equation; context determines whether the term refers to a process or a differential operator."
    },
    {
      "term": "Discount factor",
      "definition": "The present value of one unit paid at a specified future date under a stated discounting convention."
    },
    {
      "term": "Domain",
      "definition": "The allowed inputs of a function."
    },
    {
      "term": "Drift",
      "definition": "The coefficient of predictable time change in the specified stochastic model."
    },
    {
      "term": "Eigenvalue",
      "definition": "The factor by which a matrix scales an associated nonzero eigenvector."
    },
    {
      "term": "Eigenvector",
      "definition": "A nonzero vector whose direction is preserved up to sign by a matrix transformation."
    },
    {
      "term": "Euler method",
      "definition": "A first-order numerical method that advances a differential equation using its current slope."
    },
    {
      "term": "Expected shortfall",
      "definition": "The average of upper loss quantiles beyond a confidence level; for a continuous distribution it is the conditional mean beyond VaR."
    },
    {
      "term": "Expectation",
      "definition": "A probability-weighted average, defined by a sum or integral when the relevant integrability conditions hold."
    },
    {
      "term": "Exponential",
      "definition": "The function e^x, whose derivative equals itself. It describes constant proportional growth."
    },
    {
      "term": "Factorial",
      "definition": "For a positive integer n, n! is the product of integers from one to n; 0! is defined as one."
    },
    {
      "term": "Filtration",
      "definition": "An increasing family of information sets, formally sigma-algebras, indexed by time."
    },
    {
      "term": "Finite difference",
      "definition": "An approximation to a derivative using values at nearby inputs separated by a finite step."
    },
    {
      "term": "Gamma",
      "definition": "The second derivative of an instrument’s value with respect to the underlying price under a stated model."
    },
    {
      "term": "Gradient",
      "definition": "The vector of a scalar function’s partial derivatives."
    },
    {
      "term": "Hedge",
      "definition": "A position intended to offset a specified risk. It need not remove every risk or work equally for all shock sizes."
    },
    {
      "term": "Hessian",
      "definition": "The matrix of second partial derivatives of a scalar function."
    },
    {
      "term": "IID",
      "definition": "Independent and identically distributed. Each variable has the same distribution and the joint probabilities factorise across variables."
    },
    {
      "term": "Independent",
      "definition": "Knowing the outcome of one variable does not change the distribution of another; formally, joint probabilities factorise."
    },
    {
      "term": "Initial condition",
      "definition": "The starting value required to specify a dynamic equation’s solution."
    },
    {
      "term": "Integral",
      "definition": "A limit of accumulated contributions; definite integration can measure signed area, mass or other accumulated quantities."
    },
    {
      "term": "Integrable",
      "definition": "For expectations here, a variable is integrable when the expectation of its absolute value is finite."
    },
    {
      "term": "Intensity",
      "definition": "The expected event rate per unit time in a specified arrival model."
    },
    {
      "term": "Interpolation",
      "definition": "Estimating values between known input points according to a stated rule."
    },
    {
      "term": "Itô integral",
      "definition": "A stochastic integral defined from nonanticipating sums under suitable conditions. Its rules differ from integration along smooth paths."
    },
    {
      "term": "Jacobian",
      "definition": "The matrix of first partial derivatives of a vector-valued transformation."
    },
    {
      "term": "Jensen’s inequality",
      "definition": "A convex function of an expectation is no greater than the expectation of that function, when the quantities are defined."
    },
    {
      "term": "Lagrange multiplier",
      "definition": "An auxiliary variable used to express first-order conditions for a constrained optimum; it can measure local constraint sensitivity under regularity conditions."
    },
    {
      "term": "Likelihood",
      "definition": "The data probability or density viewed as a function of a model parameter, with the observed data fixed."
    },
    {
      "term": "Limit",
      "definition": "The value approached as an input, index or other quantity approaches a specified point or boundary."
    },
    {
      "term": "Linear combination",
      "definition": "A sum of vectors or quantities multiplied by scalar coefficients."
    },
    {
      "term": "Logarithm",
      "definition": "The inverse of exponentiation. The natural logarithm ln uses base e and is defined for positive real inputs."
    },
    {
      "term": "Lognormal",
      "definition": "A positive distribution whose natural logarithm is normally distributed."
    },
    {
      "term": "Marginal distribution",
      "definition": "The distribution of one variable obtained by summing or integrating a joint distribution over the other variables."
    },
    {
      "term": "Martingale",
      "definition": "An adapted integrable process whose conditional expected future value equals its present value under the specified measure and filtration."
    },
    {
      "term": "Matrix",
      "definition": "A rectangular array representing a linear map or a collection of coefficients."
    },
    {
      "term": "Mean",
      "definition": "The expectation of a distribution, or the arithmetic average of a sample, depending on context."
    },
    {
      "term": "Mean reversion",
      "definition": "A tendency in a model for deviations from a long-run level to pull back towards that level."
    },
    {
      "term": "Median",
      "definition": "A central quantile with at least half the probability at or below it and at least half at or above it."
    },
    {
      "term": "Mixed partial",
      "definition": "A second derivative taken with respect to two different inputs."
    },
    {
      "term": "Moment",
      "definition": "An expectation of a power of a variable, such as a mean or second moment, when finite."
    },
    {
      "term": "Monte Carlo",
      "definition": "Estimation of an expectation by averaging simulated samples."
    },
    {
      "term": "Normal distribution",
      "definition": "A symmetric continuous distribution specified by its mean and positive standard deviation."
    },
    {
      "term": "Notional",
      "definition": "A reference amount used to calculate contractual payments; it need not equal market value or loss exposure."
    },
    {
      "term": "Null hypothesis",
      "definition": "The reference statistical claim under which a test statistic’s distribution is calculated."
    },
    {
      "term": "Null space",
      "definition": "The set of input vectors mapped to zero by a linear transformation."
    },
    {
      "term": "Numeraire",
      "definition": "A strictly positive traded asset used as the unit in which other asset values are expressed in a pricing framework."
    },
    {
      "term": "Objective",
      "definition": "The quantity an optimisation problem seeks to minimise or maximise."
    },
    {
      "term": "Orthogonal",
      "definition": "Perpendicular in Euclidean geometry, or having zero inner product in a specified inner-product space."
    },
    {
      "term": "Overfitting",
      "definition": "Fitting sample-specific noise or quirks in a way that harms generalisation beyond the training data."
    },
    {
      "term": "P-value",
      "definition": "Under the null model, the probability of a test statistic at least as extreme as the observed statistic, according to the chosen test."
    },
    {
      "term": "Partial derivative",
      "definition": "A derivative with respect to one input while holding the others fixed."
    },
    {
      "term": "Payoff",
      "definition": "The contractual value or payment at a specified future outcome or date, before any required discounting."
    },
    {
      "term": "PCA",
      "definition": "Principal component analysis: an orthogonal decomposition ordering directions by explained variance in a centred dataset or covariance matrix."
    },
    {
      "term": "Positive definite",
      "definition": "A symmetric matrix is positive definite when its quadratic form is strictly positive for every nonzero vector."
    },
    {
      "term": "Positive semidefinite",
      "definition": "A symmetric matrix is positive semidefinite when its quadratic form is nonnegative for every vector."
    },
    {
      "term": "Posterior",
      "definition": "The distribution of a parameter after combining a prior and a likelihood and normalising."
    },
    {
      "term": "Prior",
      "definition": "A distribution representing parameter uncertainty before the observations used in an update."
    },
    {
      "term": "Projection",
      "definition": "The component of a vector lying in a specified direction or subspace under a chosen inner product."
    },
    {
      "term": "Quadratic form",
      "definition": "A scalar expression xᵀAx; covariance matrices use it to calculate portfolio variance."
    },
    {
      "term": "Quadratic variation",
      "definition": "The limit, in the relevant sense, of sums of squared increments over increasingly fine partitions."
    },
    {
      "term": "Quantile",
      "definition": "The smallest threshold at which a cumulative distribution reaches a specified probability level."
    },
    {
      "term": "Rank",
      "definition": "The dimension of a matrix’s column space, equal to the number of independent directions it spans."
    },
    {
      "term": "Regression",
      "definition": "A model or fitting method describing how an outcome varies with explanatory inputs; association alone does not establish causation."
    },
    {
      "term": "Regularisation",
      "definition": "A penalty or restriction introduced to stabilise fitting or control model complexity."
    },
    {
      "term": "Replication",
      "definition": "Constructing a portfolio whose payoff matches a claim in every state considered by the model."
    },
    {
      "term": "Residual",
      "definition": "The difference between an observed value and its fitted prediction."
    },
    {
      "term": "Risk-neutral measure",
      "definition": "A pricing probability measure under which appropriately discounted traded asset prices are martingales under the model’s assumptions."
    },
    {
      "term": "Root",
      "definition": "An input where a function equals zero."
    },
    {
      "term": "Scalar",
      "definition": "A single numerical coefficient, in contrast to a vector or matrix."
    },
    {
      "term": "Secant",
      "definition": "A line joining two points on a graph; its slope is an average rate of change."
    },
    {
      "term": "Seed",
      "definition": "An initial state used to reproduce a pseudorandom sequence. Reproducibility does not remove sampling error."
    },
    {
      "term": "Sigma-algebra",
      "definition": "A collection of events closed under complements and countable unions, specifying which events are measurable."
    },
    {
      "term": "Singular",
      "definition": "A square matrix is singular when it has no inverse, equivalently when its determinant is zero."
    },
    {
      "term": "Singular value",
      "definition": "A nonnegative stretch factor in the singular value decomposition of a matrix."
    },
    {
      "term": "Span",
      "definition": "The set of all linear combinations of a collection of vectors."
    },
    {
      "term": "Standard deviation",
      "definition": "The positive square root of variance, in the original variable’s units."
    },
    {
      "term": "Standard error",
      "definition": "The standard deviation of an estimator’s sampling distribution, which differs from individual-observation spread."
    },
    {
      "term": "Stationarity",
      "definition": "Stability of a process’s distributional characteristics over time; weak stationarity specifies stable first and second moments."
    },
    {
      "term": "Stochastic",
      "definition": "Involving randomness described by a probability model."
    },
    {
      "term": "Strike",
      "definition": "The contractual exercise price of an option."
    },
    {
      "term": "Tangent",
      "definition": "A line matching a differentiable graph’s value and local slope at a point."
    },
    {
      "term": "Taylor expansion",
      "definition": "A local approximation built from a function’s derivatives at a reference point, with a remainder that must be controlled."
    },
    {
      "term": "Transpose",
      "definition": "The matrix formed by interchanging rows and columns, denoted by a superscript T."
    },
    {
      "term": "Truncation error",
      "definition": "Error from cutting off an infinite process or replacing a limit with a finite approximation."
    },
    {
      "term": "Variance",
      "definition": "The expected squared deviation from a mean, if finite."
    },
    {
      "term": "Vector",
      "definition": "An ordered collection of quantities supporting addition and scalar multiplication."
    },
    {
      "term": "Volatility",
      "definition": "A standard deviation or diffusion scale defined for a particular quantity and time convention."
    },
    {
      "term": "Weight",
      "definition": "A coefficient determining a quantity’s contribution to a sum; portfolio weights may be constrained or signed."
    },
    {
      "term": "Bootstrap",
      "definition": "Resampling from an observed sample, usually with replacement, to approximate the sampling distribution of an estimator under suitable assumptions."
    },
    {
      "term": "Characteristic function",
      "definition": "The expectation of exp(iuX) as a function of frequency u. It always exists and uniquely determines a probability distribution."
    },
    {
      "term": "Complementary slackness",
      "definition": "A condition in constrained optimisation requiring each inequality multiplier times its constraint value to be zero at a KKT solution."
    },
    {
      "term": "Complex number",
      "definition": "A number with real and imaginary components, written a+ib where i²=−1."
    },
    {
      "term": "Copula",
      "definition": "A joint cumulative distribution with uniform margins that describes how marginal distributions are joined by dependence."
    },
    {
      "term": "Empirical distribution",
      "definition": "The distribution that places equal probability on each observed sample point, including repeated values."
    },
    {
      "term": "Fourier series",
      "definition": "A representation of a periodic function as a sum of sinusoidal components under specified convergence conditions."
    },
    {
      "term": "Harmonic",
      "definition": "A sinusoidal component with frequency equal to an integer multiple of a fundamental frequency."
    },
    {
      "term": "Imaginary unit",
      "definition": "The number i satisfying i²=−1, represented geometrically by a quarter-turn rotation under multiplication."
    },
    {
      "term": "Innovation",
      "definition": "In state estimation, the difference between a new observation and its predicted value."
    },
    {
      "term": "Kalman gain",
      "definition": "The coefficient controlling how a state estimate adjusts to an observation’s innovation, based on predicted and measurement uncertainty."
    },
    {
      "term": "KKT conditions",
      "definition": "Karush–Kuhn–Tucker conditions combine stationarity, primal feasibility, dual feasibility and complementary slackness for constrained optimisation, with appropriate assumptions."
    },
    {
      "term": "Moment-generating function",
      "definition": "The expectation of exp(tX) where finite. It may not exist on any open interval around zero."
    },
    {
      "term": "Pareto distribution",
      "definition": "A power-law distribution with survival probability (minimum/x)^α above a positive minimum, with moment existence determined by its positive shape α."
    },
    {
      "term": "Percentile",
      "definition": "A quantile whose probability level is expressed as a percentage."
    },
    {
      "term": "Process noise",
      "definition": "Uncertainty introduced as a state evolves between observations, separate from measurement error."
    },
    {
      "term": "Tail dependence",
      "definition": "The limiting tendency for one variable to be extreme given that another is extreme, defined separately for upper or lower tails."
    },
    {
      "term": "Uniform distribution",
      "definition": "A distribution assigning equal probability density across its interval; probabilities are proportional to interval length."
    }
  ],
  "version": "2026-10-09"
};
