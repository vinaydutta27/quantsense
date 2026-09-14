/* Educational two-factor building blocks; no complete calibration or production engine. */
(() => {
 const sum=a=>a.reduce((s,x)=>s+x,0), clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
 const cr=(s,t)=>Math.max(1,Math.sqrt(Math.abs(s)/t));
 const pair=(a,b,r)=>Math.sqrt(Math.max(0,a*a+b*b+2*r*a*b));
 function bucket(s,rw,t,rho,shared=false){const c=shared?[cr(sum(s),t),cr(sum(s),t)]:s.map(x=>cr(x,t));const w=s.map((x,i)=>x*rw*c[i]),f=shared?1:Math.min(...c)/Math.max(...c),k=pair(...w,rho*f);return {c,w,f,k,s:clamp(sum(w),-k,k)};}
 function curvature(a,b,daysA,daysB,rho,hvr=1){const ca=a*.5*Math.min(1,14/daysA),cb=b*.5*Math.min(1,14/daysB),net=ca+cb,gross=Math.abs(ca)+Math.abs(cb),theta=gross?Math.min(net/gross,0):0,lambda=(2.5758293035489004**2-1)*(1+theta)-theta,k=pair(ca,cb,rho*rho);return {ca,cb,net,gross,theta,lambda,k,margin:Math.max(net+lambda*k,0)/(hvr*hvr)};}
 window.SIMM_MATH={sum,clamp,cr,pair,bucket,curvature};
})();
