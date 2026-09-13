const assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
const c={};c.window=c;vm.createContext(c);
for(const f of ['irrbb-math','irrbb-lessons','irrbb-content'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),c);
const M=c.IRRBB_MATH,L=c.IRRBB_LESSONS,o=M.defaults();
const near=(a,b,t=1e-8)=>assert(Math.abs(a-b)<t,`${a} != ${b}`);
assert.equal(L.length,19);assert.equal(new Set(L.map(l=>l.id)).size,19);
near(M.shift(0,'up','GBP'),.0275);near(M.shift(0,'shortUp','GBP'),.0425);
near(M.shift(4,'steep','GBP'),(-.65*425/Math.E+.9*250*(1-1/Math.E))/10000);
near(M.zero(2,{...o,short:0,long:0},'down'),-.009);
near(M.zero(2,{...o,short:-2,long:-2},'down'),-.02);
near(M.zero(20,{...o,short:0,long:0},'down'),0);
// Independent discounted quarterly fixed cash flows.
const fixed=M.row('Bond','fixed','asset',100,4,2);
near(M.value(fixed,o),Array.from({length:8},(_,i)=>(1+(i===7?100:0))*Math.exp(-.04*(i+1)/4)).reduce((a,b)=>a+b,0));
near(M.value({...fixed,side:'liability'},o),-M.value(fixed,o));
near(M.value({...fixed,type:'float',reset:.25},o),101*Math.exp(-.04*.25));
near(M.bond(100,4,2,4),4*Math.exp(-.04)+104*Math.exp(-.08));
for(const cpr of [0,5,40,100])for(const rate of [0,4,10]){const rows=M.loan(100,rate,10,cpr);near(M.sum(rows.map(x=>x.principal)),100);near(rows.at(-1).balance,0);assert(rows.every(x=>x.balance>=0&&x.principal>=0));}
for(const s of M.portfolio(M.preset('matched'),o).scenarios){near(s.deve,0);near(s.dnii,0);}
near(M.sum(M.nii(fixed,o).map(x=>x.value)),4);
near(M.sum(M.nii(fixed,o,'up').map(x=>x.value)),4);
const floating={...fixed,type:'float',reset:.25};
near(M.sum(M.nii(floating,o,'up').map(x=>x.value))-4,100*.0275*.75);
near(M.cprFactor('steep'),.8);near(M.cprFactor('flat'),1.2);
near(M.withdrawalFactor('flat'),1.2);near(M.withdrawalFactor('steep'),.8);
near(M.nmdCaps('retail',90,6).core,70);near(M.nmdCaps('retail',90,6).years,4.5);
const term=M.row('Term','term','liability',100,3,2,{cpr:10});near(M.flows(term,o,'up')[0].principal,-12);
near(M.value({...fixed,margin:0},{...o,margins:'include'}),M.value(fixed,o));
let count=0;
for(const l of L){
 const defaults=Object.fromEntries(l.inputs.map(d=>[d.id,d.value])),cases=[defaults];
 for(const d of l.inputs)for(const value of d.options?d.options.map(x=>x[0]):[d.min,d.max])cases.push({...defaults,[d.id]:value});
 cases.push(Object.fromEntries(l.inputs.map(d=>[d.id,d.options?d.options[0][0]:d.min])),Object.fromEntries(l.inputs.map(d=>[d.id,d.options?d.options.at(-1)[0]:d.max])));
 for(const s of cases){const r=l.compute(s);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(r)),l.id);assert(r.explanation&&r.rows.length&&r.stats.length);for(const b of r.bars||[])assert(Number.isFinite(b.value),l.id);for(const series of r.series||[])for(const point of series.data)assert(point.every(Number.isFinite),l.id);count++;}
 assert.equal(c.LEARNING_CONTENT[l.id].questions.length,10,l.id);
 for(const q of c.LEARNING_CONTENT[l.id].questions)assert(q.length===2&&q[0].endsWith('?')&&q[1].length>35,l.id);
 assert(l.sources.length&&l.scope.length>100,l.id);
}
console.log(`PASS: ${count} IRRBB scenarios, cash-flow and NII benchmarks, shock floors, behavioural scalars, matched-book invariance; 19 lessons and 190 question-answer pairs.`);
