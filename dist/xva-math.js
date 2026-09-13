/* Deterministic teaching models. Inputs in £m, years, percent and bps as labelled. */
(() => {
  const annuity = (rate, years) => Math.abs(rate) < 1e-10 ? years : -Math.expm1(-rate * years) / rate;
  function credit(exposure, hazardPct, recoveryPct, years, ratePct = 3) {
    const h = hazardPct / 100, r = ratePct / 100, lgd = 1 - recoveryPct / 100;
    return { value: exposure * lgd * h * annuity(r + h, years), pd: -Math.expm1(-h * years) };
  }
  function funding(need, surplus, borrowBps, lendBps, years, ratePct = 3) {
    const a = annuity(ratePct / 100, years);
    const fca = need * borrowBps / 10000 * a, fba = surplus * lendBps / 10000 * a;
    return { fca, fba, net: fca - fba };
  }
  function bridge(s) {
    const unsecured = s.exposure * (1 - s.collateral / 100), a = annuity(.03, s.years);
    const cva = credit(unsecured, s.hazard, 40, s.years).value;
    const dva = credit(unsecured * .35, 1, 40, s.years).value;
    const fva = funding(unsecured, 0, s.funding, 0, s.years).net;
    const mva = s.im * s.funding / 10000 * a, kva = s.capital * .08 * a;
    return { cva, dva, fva, mva, kva, cost: cva - dva + fva + mva + kva };
  }
  function wrongWay(base, stress, dependence, pdPct, recoveryPct) {
    // Two equally likely states, fixed mean PD; dependence redistributes defaults.
    const p = pdPct / 100, d = dependence / 100;
    const quietPD = p * (1 - d), stressPD = p * (1 + d);
    const independent = .5 * (base + stress) * p * (1 - recoveryPct / 100);
    const linked = .5 * (base * quietPD + stress * stressPD) * (1 - recoveryPct / 100);
    return { quietPD, stressPD, independent, linked };
  }
  window.XVA_MATH = { annuity, credit, funding, bridge, wrongWay };
})();
