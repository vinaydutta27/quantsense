const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');const x={};x.window=x;vm.createContext(x);
for(const f of ['sc-math','frtb-math','frtb-lessons','frtb-sa','frtb-ima','frtb-content','frtb-explorers','frtb-data-tests','frtb-explorer-content'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),x);
const defaults=id=>Object.fromEntries(x.FRTB_LESSONS.find(l=>l.id===id).inputs.map(d=>[d.id,d.value])),close=(a,b,t=1e-8)=>assert(Math.abs(a-b)<t,`${a} != ${b}`),S=x.FRTB_SANDBOX,D=x.FRTB_DATA_TEST,s={...defaults('optimisation'),tenor:5,hedgeTenor:5};
close(S({...s,hedge:100}).capital,0);assert(S({...s,hedge:100,factor:'other'}).capital>0);
close(S({...s,mode:'maturity',hedge:100,tenor:5,hedgeTenor:5}).capital,0);assert(S({...s,mode:'maturity',hedge:100,tenor:5,hedgeTenor:10}).capital>0);
close(S({...s,mode:'mapping',size:0}).capital,0);
for(const mode of ['netting','maturity','mapping','index'])for(const hedge of [0,5,50,100,150]){const a=S({...s,mode,hedge});assert(Number.isFinite(a.capital));assert(a.capital>=0);close(a.capital,Math.max(...a.scenarios.map(x=>x[1])));close(S({...s,mode,hedge,size:s.size*2}).capital,a.capital*2);}
// All 20 index names are in bucket 5, so the single sensitivity has a 30% weight, not the 15% index weight.
close(S({...s,mode:'index',decompose:'single',hedge:0,size:100}).capital,30);
const map=x.FRTB_TRADE_MAP({trade:'bond',currency:'foreign'});assert(map.delta.includes('GIRR')&&map.delta.includes('CSR')&&map.delta.includes('FX'));assert(map.drc&&!map.rrao);assert(!x.FRTB_TRADE_MAP({trade:'fx',currency:'domestic'}).drc);assert(x.FRTB_TRADE_MAP({trade:'barrier',currency:'domestic'}).rrao);
const d=defaults('data-tests');let checks=0;
for(const [principle]of x.FRTB_LESSONS.find(l=>l.id==='data-tests').inputs[0].options){const start={...d,principle},inputs=x.FRTB_LESSONS.find(l=>l.id==='data-tests').inputs.filter(i=>!i.when||i.when(start));for(const input of inputs)for(const value of input.options?input.options.map(o=>o[0]):[input.min,input.max]){const result=D({...start,[input.id]:value});assert(!/NaN|Infinity|undefined/.test(JSON.stringify(result)),principle+' '+input.id);checks++;}}
assert.equal(D({...d,principle:'preserve',retained:100,rho:60}).stats[2][1],'Within tolerance');assert.equal(D({...d,principle:'preserve',retained:100,rho:-60}).stats[2][1],'Investigate');
assert.equal(D({...d,principle:'freshness',dataDays:7,regDays:14}).stats[0][1],'Meets entered cadence');assert.equal(D({...d,principle:'freshness',dataDays:8}).stats[0][1],'Overdue / unjustified');assert.equal(D({...d,principle:'freshness',dataDays:28,justified:'yes'}).stats[0][1],'Meets entered cadence');assert.equal(D({...d,principle:'freshness',dataDays:29,justified:'yes'}).stats[0][1],'Overdue / unjustified');
assert.equal(D({...d,principle:'construction',target:6,permission:'no'}).stats[2][1],'Action required');assert.equal(D({...d,principle:'proxy',aligned:'no',capitalised:'no'}).stats[2][1],'Basis capital missing');
console.log(`PASS: ${checks} data test cases, cadence boundaries, proxy and extrapolation gates, trade profiles, sandbox scaling, exact hedges and index mapping.`);
