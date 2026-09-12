/* Educational arithmetic for the PRA2026/1 FRTB learning path. */
(() => {
 const sum=a=>a.reduce((s,v)=>s+v,0),sq=a=>sum(a.map(x=>x*x)),root=x=>Math.sqrt(Math.max(0,x)),clip=(x,a,b)=>Math.max(a,Math.min(b,x));
 const scenario=(r,s)=>s==='high'?Math.min(1,1.25*r):s==='low'?Math.max(2*r-1,.75*r):r;
 function linearBucket(ws,rho){return root(sq(ws)+sum(ws.flatMap((x,i)=>ws.map((y,j)=>i===j?0:rho*x*y))));}
 function linearAggregate(buckets,gamma){let ss=buckets.map(b=>sum(b.ws));const raw=()=>sq(buckets.map(b=>b.k))+sum(ss.flatMap((x,i)=>ss.map((y,j)=>i===j?0:gamma*x*y)));let rad=raw(),fallback=rad<0;if(fallback){ss=ss.map((s,i)=>clip(s,-buckets[i].k,buckets[i].k));rad=raw();}return {capital:root(rad),ss,fallback};}
 const psi=(a,b)=>a<0&&b<0?0:1;
 function curvatureBucket(up,down,rho){const k=v=>root(sq(v.map(x=>Math.max(x,0)))+sum(v.flatMap((x,i)=>v.map((y,j)=>i===j?0:rho*x*y*psi(x,y)))));const ku=k(up),kd=k(down);const useUp=ku>kd||(Math.abs(ku-kd)<1e-12&&sum(up)>sum(down));return {k:Math.max(ku,kd),ku,kd,s:sum(useUp?up:down),direction:useUp?'Up':'Down'};}
 function curvatureAggregate(b,gamma){return root(sq(b.map(x=>x.k))+sum(b.flatMap((x,i)=>b.map((y,j)=>i===j?0:gamma*x.s*y.s*psi(x.s,y.s)))));}
 function tail(losses,confidence){const a=[...losses].sort((a,b)=>a-b),n=a.length,mass=n*(1-confidence);if(!n||mass<=0)throw Error('Invalid tail');let remaining=mass,total=0;for(let i=n-1;i>=0&&remaining>1e-10;i--){const w=Math.min(1,remaining);total+=w*a[i];remaining-=w;}return {var:a[Math.max(0,Math.ceil(confidence*n)-1)],es:total/mass};}
 function ranks(a){return a.map(v=>{const count=a.filter(x=>x===v).length;return a.filter(x=>x<v).length+1+(count>1?1/count:0)});}
 function correlation(a,b){const ma=sum(a)/a.length,mb=sum(b)/b.length,aa=a.map(x=>x-ma),bb=b.map(x=>x-mb),den=Math.sqrt(sq(aa)*sq(bb));return den?sum(aa.map((x,i)=>x*bb[i]))/den:NaN;}
 function ks(a,b){return Math.max(...[...a,...b].map(x=>Math.abs(a.filter(v=>v<=x).length/a.length-b.filter(v=>v<=x).length/b.length)));}
 function platZone(r,k,previousSA){return r>.8&&k<.09?'Green':r<.7||k>.12?'Red':previousSA?'Orange':'Yellow';}
 function rfet(days,window=365){const dates=[...new Set(days.filter(d=>Number.isInteger(d)&&d>=0&&d<window))].sort((a,b)=>a-b);let min90=Infinity;for(let start=0;start<=window-90;start++)min90=Math.min(min90,dates.filter(d=>d>=start&&d<start+90).length);return {count:dates.length,min90,route24:dates.length>=24&&min90>=4,route100:dates.length>=100,pass:(dates.length>=24&&min90>=4)||dates.length>=100};}
 const multiplier=n=>1.5+(n<5?0:n===5?.20:n===6?.26:n===7?.33:n===8?.38:n===9?.42:.50);
 const lh=(base,sub)=>root(base*base+sum(sub.map((x,i)=>x*x*[1,2,2,6][i])));
 const ues=(rs,fc,rc)=>rc>0?rs*Math.max(fc/rc,1):null;
 const nmrf=(credit,equity,other)=>root(sq(credit))+root(sq(equity))+root((.6*sum(other))**2+.64*sq(other));
 function drc(longs,shorts){const l=sum(longs.map(x=>x.jtd)),s=sum(shorts.map(x=>Math.abs(x.jtd))),hbr=l+s?l/(l+s):0,wl=sum(longs.map(x=>x.jtd*x.rw)),ws=sum(shorts.map(x=>Math.abs(x.jtd)*x.rw));return {hbr,wl,ws,capital:Math.max(wl-hbr*ws,0)};}
 const maturity=t=>Math.min(1,Math.max(.25,t));
 window.FRTB={sum,sq,root,clip,scenario,linearBucket,linearAggregate,curvatureBucket,curvatureAggregate,tail,ranks,correlation,ks,platZone,rfet,multiplier,lh,ues,nmrf,drc,maturity};
})();
