/* IRRBB teaching engine. Amounts: millions; rates: percent; time: years. */
(() => {
 const SCENARIOS=[['up','Parallel up'],['down','Parallel down'],['steep','Steepener'],['flat','Flattener'],['shortUp','Short up'],['shortDown','Short down']];
 // Basel SRP31 Table 2 (2026); PRA2025/20, ICAA 9.11 effective 1 July 2026.
 const SHOCKS={GBP:[275,425,250],USD:[200,300,225],EUR:[225,350,200],JPY:[100,100,100],CHF:[175,250,200],INR:[325,475,225],AUD:[350,425,300],CAD:[200,275,175]};
 const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),sum=a=>a.reduce((x,y)=>x+y,0);
 function shift(t,id,currency='GBP') {const [p,s,l]=SHOCKS[currency],e=Math.exp(-t/4);return ({base:0,up:p,down:-p,shortUp:s*e,shortDown:-s*e,steep:-.65*s*e+.9*l*(1-e),flat:.8*s*e-.6*l*(1-e)})[id]/10000;}
 function zero(t,o,id='base'){const b=(o.short+(o.long-o.short)*(1-Math.exp(-t/5)))/100,r=b+shift(t,id,o.currency);if(id==='base'||o.floor==='none')return r;const floor=o.floor==='zero'?0:Math.min(0,-.01+.0005*t);return Math.max(r,Math.min(b,floor));}
 const df=(t,o,id='base',margin=0)=>Math.exp(-(zero(t,o,id)+margin/100)*t);
 const cprFactor=id=>['up','steep','shortUp'].includes(id)?.8:id==='base'?1:1.2;
 const withdrawalFactor=id=>['up','flat','shortUp'].includes(id)?1.2:id==='base'?1:.8;
 function loan(amount,rate,years,cpr=0){
  const months=Math.round(years*12),r=rate/1200,smm=1-Math.pow(1-clamp(cpr/100,0,1),1/12),pay=Math.abs(r)<1e-12?amount/months:amount*r/(1-Math.pow(1+r,-months));let bal=amount;const rows=[];
  for(let i=1;i<=months;i++){const opening=bal,interest=opening*r,scheduled=Math.min(opening,Math.max(0,pay-interest)),prepay=(opening-scheduled)*smm;let principal=scheduled+prepay;if(i===months)principal=opening;bal=Math.max(0,opening-principal);rows.push({t:i/12,opening,interest,principal,balance:bal});if(bal<1e-10)break;}return rows;
 }
 function flows(row,o,id='base'){
  if(row.type==='swap')return [...flows({...row,type:'fixed',margin:0},o,id),...flows({...row,type:'float',rate:o.short,margin:0,side:row.side==='asset'?'liability':'asset'},o,id)];
  const sign=row.side==='asset'?1:-1,T=row.maturity,out=[],include=o.margins==='include',coupon=row.rate-(include?0:row.margin),spread=include?row.margin:0;
  const push=(t,principal,interest,kind)=>out.push({t,principal:sign*principal,interest:sign*interest,cf:sign*(principal+interest),name:row.name,kind,spread});
  const bullet=(amount,end,kind)=>{let prev=0;for(let t=.25;t<end-1e-9;t+=.25){push(t,0,amount*coupon/100*(t-prev),kind);prev=t;}push(end,amount,amount*coupon/100*(end-prev),kind);};
  if(row.type==='mortgage') {const schedule=loan(row.amount,row.rate,T,row.cpr*cprFactor(id));schedule.forEach(x=>push(x.t,x.principal,x.opening*coupon/1200,'Mortgage cash flow'));}
  else if(row.type==='float') {const reset=Math.min(row.reset,T);bullet(row.amount,reset,'Floating repricing proxy');if(include&&T>reset) {let prev=reset;for(let t=reset+.25;t<T-1e-9;t+=.25){push(t,0,row.amount*row.margin/100*(t-prev),'Non-repricing spread');prev=t;}push(T,0,row.amount*row.margin/100*(T-prev),'Non-repricing spread');}}
  else if(row.type==='nmd'){const core=row.amount*row.core/100;bullet(core,T,'Core deposit proxy');push(1/365,row.amount-core,0,'Non-core overnight');}
  else if(row.type==='term'){const early=row.amount*clamp(row.cpr*withdrawalFactor(id)/100,0,1);push(1/365,early,0,'Early withdrawal');bullet(row.amount-early,T,'Term deposit');}
  else bullet(row.amount,T,'Fixed cash flow');
  return out.filter(x=>Math.abs(x.cf)>1e-12);
 }
 const value=(row,o,id='base')=>sum(flows(row,o,id).map(x=>x.cf*df(x.t,o,id,x.spread)));
 function nii(row,o,id='base'){
  if(row.type==='swap'){const fixed=nii({...row,type:'fixed',margin:0},o,id),floating=nii({...row,type:'float',rate:o.short,margin:0,side:row.side==='asset'?'liability':'asset'},o,id);return fixed.map((x,i)=>({t:x.t,value:x.value+floating[i].value}));}
  const sign=row.side==='asset'?1:-1,H=o.horizon||1,months=Math.round(H*12),out=[];
  const schedule=row.type==='mortgage'?loan(row.amount,row.rate,row.maturity,row.cpr*cprFactor(id)):[];
  const early=row.type==='term'?clamp(row.cpr*withdrawalFactor(id)/100,0,1):0;
  for(let i=0;i<months;i++){
   const t=i/12,alive=t<row.maturity-1e-9;let bal=row.amount,rate=row.rate;
   if(row.type==='mortgage'){bal=alive?(schedule[i]?.opening||0):0;if(o.balance==='constant') {const replacement=row.amount-bal;const replacementRate=row.rate+(zero(row.maturity,o,id)-zero(row.maturity,o,'base'))*100;out.push({t:(i+1)/12,value:sign*(bal*row.rate+replacement*replacementRate)/1200});continue;}}
   else if(row.type==='term')bal*=1-early;
   if(!alive&&row.type!=='nmd'){if(o.balance==='runoff')bal=0;else {bal=row.amount;rate=row.rate+(zero(row.maturity,o,id)-zero(row.maturity,o,'base'))*100;}}
   if(row.type==='float'&&t+1e-9>=row.reset)rate=row.rate+(zero(row.reset,o,id)-zero(row.reset,o,'base'))*100;
   if(row.type==='nmd'){bal=row.amount;if(t+1e-9>=row.reset)rate=Math.max(0,row.rate+row.beta/100*(zero(.25,o,id)-zero(.25,o,'base'))*100);}
   if(row.type==='term'&&o.balance==='constant'&&alive){out.push({t:(i+1)/12,value:sign*(bal*rate+row.amount*early*(row.rate+(zero(row.maturity,o,id)-zero(row.maturity,o,'base'))*100))/1200});continue;}
   out.push({t:(i+1)/12,value:sign*bal*rate/1200});
  }return out;
 }
 function portfolio(rows,o){const baseEve=sum(rows.map(r=>value(r,o))),baseNii=sum(rows.flatMap(r=>nii(r,o)).map(x=>x.value));const scenarios=SCENARIOS.map(([id,label])=>{const eve=sum(rows.map(r=>value(r,o,id))),income=sum(rows.flatMap(r=>nii(r,o,id)).map(x=>x.value));return {id,label,eve,nii:income,deve:eve-baseEve,dnii:income-baseNii};});const worst=scenarios.reduce((a,b)=>a.deve<b.deve?a:b);return {baseEve,baseNii,scenarios,worst,loss:Math.max(0,-worst.deve),ratio:Math.max(0,-worst.deve)/o.tier1};}
 function bond(amount,coupon,T,y){const rows=[];for(let t=1;t<=T;t++)rows.push({t,cf:amount*coupon/100+(t===T?amount:0)});return sum(rows.map(x=>x.cf*Math.exp(-y/100*x.t)));}
 function nmdCaps(category,core,years){const [cap,maxYears]=({transactional:[90,5],retail:[70,4.5],wholesale:[50,4]})[category];return {core:Math.min(core,cap),years:Math.min(years,maxYears),cap,maxYears};}
 const defaults=()=>({currency:'GBP',short:4,long:4,floor:'pra',margins:'exclude',balance:'constant',horizon:1,tier1:15,scenario:'up',view:'eve'});
 const row=(name,type,side,amount,rate,maturity,extra={})=>({name,type,side,amount,rate,maturity,reset:.25,margin:0,cpr:0,core:70,beta:40,...extra});
 const preset=name=>name==='matched'?[row('Fixed loan','fixed','asset',100,4,5),row('Matched funding','fixed','liability',100,4,5)]:name==='floating'?[row('Floating loans','float','asset',100,5,5),row('Retail deposits','nmd','liability',85,2,3,{beta:30,reset:.25})]:[row('Fixed-rate mortgages','mortgage','asset',80,5,10,{cpr:5,margin:1}),row('Floating loans','float','asset',30,5,5,{margin:1}),row('Savings deposits','nmd','liability',75,2,3,{beta:40,core:70,reset:.25}),row('Term funding','term','liability',20,3,2,{cpr:5})];
 window.IRRBB_MATH={SCENARIOS,SHOCKS,clamp,sum,shift,zero,df,loan,flows,value,nii,portfolio,bond,nmdCaps,cprFactor,withdrawalFactor,defaults,row,preset};
})();
