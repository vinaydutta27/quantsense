const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const c={};c.window=c;vm.createContext(c);
for(const f of ['xva-math','xva-lessons','xva-content'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),c);
const M=c.XVA_MATH,L=c.XVA_LESSONS;
const near=(a,b,t=1e-9)=>assert(Math.abs(a-b)<t,`${a} != ${b}`);
assert.equal(L.length,13);assert.equal(new Set(L.map(l=>l.id)).size,13);
near(M.annuity(0,5),5);near(M.credit(20,0,40,5).value,0);near(M.credit(20,2,100,5).value,0);near(M.credit(20,2,40,0).value,0);
// Independent constant-exposure zero-discount expected-loss benchmark.
near(M.credit(20,2,40,5,0).value,20*.6*(1-Math.exp(-.02*5)));
near(M.credit(40,2,40,5).value,2*M.credit(20,2,40,5).value);
assert(M.credit(20,2,40,10).value>M.credit(20,2,40,5).value);
const f=M.funding(10,10,100,100,5);near(f.net,0);
near(M.wrongWay(10,10,100,5,40).linked,M.wrongWay(10,10,100,5,40).independent);
assert(M.wrongWay(5,30,100,5,40).linked>M.wrongWay(5,30,100,5,40).independent);
near(M.wrongWay(5,30,0,5,40).linked,M.wrongWay(5,30,0,5,40).independent);
let count=0;
for(const l of L){
 const defaults=Object.fromEntries(l.inputs.map(d=>[d.id,d.value]));
 const cases=[defaults];
 for(const d of l.inputs)for(const value of d.options?d.options.map(o=>o[0]):[d.min,d.max])cases.push({...defaults,[d.id]:value});
 for(const s of cases){const r=l.compute(s);for(const bar of r.bars||[])assert(Number.isFinite(bar.value),l.id);for(const series of r.series||[])for(const point of series.data)assert(point.every(Number.isFinite),l.id);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(r)),l.id);assert(r.explanation&&r.rows.length&&r.stats.length);count++;}
 assert.equal(c.LEARNING_CONTENT[l.id].questions.length,10,l.id);
 for(const q of c.LEARNING_CONTENT[l.id].questions)assert(q.length===2&&q[0].endsWith('?')&&q[1].length>35,l.id);
 assert(l.sources.length&&l.scope.length>100);
}
const calc=(id,extra)=>{const l=L.find(l=>l.id===id);return l.compute({...Object.fromEntries(l.inputs.map(d=>[d.id,d.value])),...extra})};
near(calc('colva',{benchmark:3,remuneration:3}).series[0].data.at(-1)[1],0);
near(calc('colva',{collateral:10}).series[0].data.at(-1)[1],-calc('colva',{collateral:-10}).series[0].data.at(-1)[1]);
near(calc('mva',{funding:0}).bars[1].value,0);
near(calc('kva',{hurdle:0}).series[0].data.at(-1)[1],0);
near(calc('tax',{tax:0}).bars[1].value,0);
near(calc('reserves',{reserve:5}).bars[3].value,0);
assert(calc('incremental',{existing:20,trade:-10}).bars[3].value<0);
const bridge=M.bridge({exposure:20,collateral:100,hazard:2,funding:100,im:3,capital:2,years:5});near(bridge.cva,0);near(bridge.fva,0);assert(bridge.mva>0&&bridge.kva>0);
console.log(`PASS: ${count} XVA control scenarios; analytic credit benchmark, sign symmetry, zero limits, wrong-way dependence, portfolio release, 13 lessons and 130 question-answer pairs.`);
