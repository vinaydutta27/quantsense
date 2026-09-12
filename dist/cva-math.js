/* PRA2026/1 Annex K, 5.22–5.24. Loss-positive CVA and positive hedge value are subtracted. */
window.CVA = (() => {
 const sum=a=>a.reduce((a,b)=>a+b,0),clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
 function sqrt(x){if(x < -1e-7)throw Error('Invalid correlation quadratic form');return Math.sqrt(Math.max(0,x));}
 function bucket(cva,hedge,weights,rho){const cv=cva.map((s,i)=>s*weights[i]),hd=hedge.map((s,i)=>s*weights[i]),net=cv.map((v,i)=>v-hd[i]);let market=sum(net.map(x=>x*x));for(let i=0;i<net.length;i++)for(let j=0;j<net.length;j++)if(i!==j)market+=(typeof rho==='number'?rho:rho[i][j])*net[i]*net[j];const disallowance=.01*sum(hd.map(x=>x*x)),k=sqrt(market+disallowance),rawS=sum(net),s=clamp(rawS,-k,k);return {cv,hd,net,market,disallowance,k,s,rawS};}
 function aggregate(b,gamma){let v=sum(b.map(b=>b.k*b.k));for(let i=0;i<b.length;i++)for(let j=0;j<b.length;j++)if(i!==j)v+=(typeof gamma==='number'?gamma:gamma[i][j])*b[i].s*b[j].s;return sqrt(v);}
 function value({exposure,spread,lgd,years,rate=0}){const lambda=spread/10000/(lgd/100),rows=[];for(let i=1;i<=20;i++){const t=years*i/20,prev=years*(i-1)/20,epe=exposure*Math.sqrt(t/years),dp=Math.exp(-lambda*prev)-Math.exp(-lambda*t),discount=Math.exp(-rate/100*t),loss=epe*lgd/100*dp*discount;rows.push({t,epe,dp,discount,loss});}return {value:sum(rows.map(x=>x.loss)),pd:1-Math.exp(-lambda*years),lambda,rows};}
 function positiveNormal(mean,sd){if(sd===0)return Math.max(0,mean);const z=mean/sd;return mean*SC.cdf(z)+sd*Math.exp(-z*z/2)/Math.sqrt(2*Math.PI);}
 return {sum,clamp,sqrt,bucket,aggregate,value,positiveNormal};
})();
