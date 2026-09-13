/* Transparent teaching valuations. Rates and volatility are decimal inputs; values are GBP. */
(() => {
 const cdf=SC.cdf,phi=x=>Math.exp(-x*x/2)/Math.sqrt(2*Math.PI);
 function option(S,K,r,q,vol,T,put=false){
  if(T<=0)return Math.max(put?K-S:S-K,0);
  if(vol<=0)return Math.max(put?K*Math.exp(-r*T)-S*Math.exp(-q*T):S*Math.exp(-q*T)-K*Math.exp(-r*T),0);
  const d1=(Math.log(S/K)+(r-q+vol*vol/2)*T)/(vol*Math.sqrt(T)),d2=d1-vol*Math.sqrt(T);
  return put?K*Math.exp(-r*T)*cdf(-d2)-S*Math.exp(-q*T)*cdf(-d1):S*Math.exp(-q*T)*cdf(d1)-K*Math.exp(-r*T)*cdf(d2);
 }
 function greeks(S,K,r,q,vol,T,put=false){const d1=(Math.log(S/K)+(r-q+vol*vol/2)*T)/(vol*Math.sqrt(T)),df=Math.exp(-q*T);return {delta:df*(cdf(d1)-(put?1:0)),gamma:df*phi(d1)/(S*vol*Math.sqrt(T)),vega:S*df*phi(d1)*Math.sqrt(T)};}
 function annuity(rate,T){return Math.abs(rate)<1e-10?T:-Math.expm1(-rate*T)/rate;}
 function bond(N,c,r,s,T){let v=0;for(let t=1;t<=T;t++)v+=N*c*Math.exp(-(r+s)*t);return v+N*Math.exp(-(r+s)*T);}
 // Continuous premium / default payments and flat hazard: spread = hazard × LGD.
 function cds(N,c,r,s,T,R=.4){return N*(s-c)*annuity(r+s/(1-R),T);}
 function swap(N,c,r,T){let a=0;for(let t=1;t<=T;t++)a+=Math.exp(-r*t);return N*(c*a-(1-Math.exp(-r*T)));}
 function value(s,over={}){const x={...s,...over},N=x.size*1e6,r=x.rate/100,spread=x.spread/10000,T=['option','fxoption'].includes(x.instrument)?x.expiry:x.tenor,position=+x.side;
  switch(x.instrument){
   case 'bond':return position*bond(N,x.coupon/100,r,spread,T);
   case 'swap':return position*swap(N,x.coupon/100,r,T);
   case 'cds':return position*cds(N,x.coupon/100,r,spread,T);
   case 'equity':return position*N*x.spot/100;
   case 'forward':return position*N*(x.spot/100-x.strike/100*Math.exp(-r*T));
   default:return position*N/100*option(x.spot,x.strike,r,x.instrument==='fxoption'?x.foreign/100:0,x.vol/100,T,x.put==='put');
  }
 }
 function risk(s,factor){if(factor==='spot'&&['option','fxoption'].includes(s.instrument)){const g=greeks(s.spot,s.strike,s.rate/100,s.instrument==='fxoption'?s.foreign/100:0,s.vol/100,s.expiry,s.put==='put'),scale=+s.side*s.size*1e6/100;return {value:value(s),first:scale*g.delta,second:scale*g.gamma};}
  const h=factor==='spot'?.01:factor==='vol'?.01:factor==='rate'?.0001:.01;
  const x=s[factor],v=value(s),up=value(s,{[factor]:x+h}),down=value(s,{[factor]:x-h});
  // Derivatives with respect to the displayed units: rate/vol percentage points; spread basis points.
  return {value:v,first:(up-down)/(2*h),second:(up-2*v+down)/(h*h)};
 }
 window.RISK={option,greeks,annuity,bond,swap,cds,value,risk};
})();
