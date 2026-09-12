window.SC = (() => {
 const round=(x,n=2)=>Number(x).toFixed(n),money=x=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(x);
 function rng(seed){let a=seed>>>0;return()=>{a+=0x6D2B79F5;let t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}
 function normal(r){return Math.sqrt(-2*Math.log(Math.max(1e-12,r())))*Math.cos(2*Math.PI*r())}
 function brownian(seed,T=1,N=1024){const r=rng(seed),a=[[0,0]];for(let i=1;i<=N;i++)a.push([i*T/N,a[i-1][1]+Math.sqrt(T/N)*normal(r)]);return a}
 function coarse(path,n){const stride=(path.length-1)/n;return Array.from({length:n+1},(_,i)=>path[Math.round(i*stride)])}
 function cdf(x){if(x===0)return .5;const t=1/(1+.2316419*Math.abs(x)),d=.3989422804014327*Math.exp(-x*x/2);let p=1-d*t*(.319381530+t*(-.356563782+t*(1.781477937+t*(-1.821255978+t*1.330274429))));return x>0?p:1-p}
 function bs(S,K,r,sigma,T){if(T<=0)return {price:Math.max(S-K,0),delta:S>K?1:S<K?0:.5};if(S<=0)return{price:0,delta:0};if(sigma<=0)return{price:Math.max(S-K*Math.exp(-r*T),0),delta:S>K*Math.exp(-r*T)?1:0};const d1=(Math.log(S/K)+(r+.5*sigma*sigma)*T)/(sigma*Math.sqrt(T)),d2=d1-sigma*Math.sqrt(T);return{price:S*cdf(d1)-K*Math.exp(-r*T)*cdf(d2),delta:cdf(d1)}}
 function binomial(n,p){let a=[1];for(let i=0;i<n;i++){let b=Array(i+2).fill(0);a.forEach((v,k)=>{b[k]+=v*(1-p);b[k+1]+=v*p});a=b}return a}
 const series=(name,data,color='#20876d',extra={})=>({name,data,color,...extra});
 const samples=(a,b,f,n=100)=>Array.from({length:n+1},(_,i)=>{const x=a+(b-a)*i/n;return[x,f(x)]});
 return {round,money,rng,normal,brownian,coarse,cdf,bs,binomial,series,samples};
})();
