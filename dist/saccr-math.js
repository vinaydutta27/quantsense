window.SACCR=(()=>{
 const sum=a=>a.reduce((a,b)=>a+b,0),sd=(s,e)=>(Math.exp(-.05*s)-Math.exp(-.05*e))/.05;
 const mf=(years,days,margin)=>margin?1.5*Math.sqrt(days/250):Math.sqrt(Math.min(Math.max(years,10/250),1));
 const rc=(v,vm,nica,th,mta,margin)=>Math.max(v-(margin?vm:0)-nica,margin?th+mta-nica:0,0);
 const mult=(z,a)=>z>=0?1:a===0?.05:.05+.95*Math.exp(z/(1.9*a));
 const ead=(s,a,margin)=>{const z=s.v-(margin?s.vm:0)-s.nica,r=rc(s.v,s.vm,s.nica,s.th,s.mta,margin),u=mult(z,a),p=u*a;return {rc:r,z,mult:u,pfe:p,ead:s.alpha*(r+p)};};
 const ir=d=>.005*Math.sqrt(Math.max(0,d[0]**2+d[1]**2+d[2]**2+1.4*d[0]*d[1]+1.4*d[1]*d[2]+.6*d[0]*d[2]));
 const factor=(a,rhos)=>{const sys=sum(a.map((v,i)=>v*rhos[i]));const idio=sum(a.map((v,i)=>(1-rhos[i]**2)*v*v));return {sys, idio,addon:Math.sqrt(sys*sys+idio)};};
 const delta=(p,k,t,vol,kind,buy)=>{const call=kind==='call',z=(Math.log(p/k)+.5*vol*vol*t)/(vol*Math.sqrt(t));return (buy?1:-1)*(call?SC.cdf(z):-SC.cdf(-z));};
 return {sum,sd,mf,rc,mult,ead,ir,factor,delta};
})();

