const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
for(const pathname of ['/yield.html','/liquidity.html']){
 const c={location:{pathname}};c.window=c;vm.createContext(c);vm.runInContext(fs.readFileSync('dist/treasury-lessons.js','utf8'),c);
 const M=c.TREASURY_MATH;assert(Math.abs(M.boot([4,4,4,4,4])[5]-1/1.04**5)<1e-10);assert.equal(M.hq(60,200),100);assert.equal(M.hq(0,200),0);
 for(const l of c.TREASURY_LESSONS){const d=Object.fromEntries(l.inputs.map(x=>[x.id,x.value]));for(const s of [d,...l.inputs.flatMap(x=>[x.min,x.max].map(v=>({...d,[x.id]:v}))),Object.fromEntries(l.inputs.map(x=>[x.id,x.min])),Object.fromEntries(l.inputs.map(x=>[x.id,x.max]))]){const r=l.compute(s);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(r)),l.id);}assert.equal(c.LEARNING_CONTENT[l.id].questions.length,10);}
 if(pathname.includes('liquidity')){const lab=c.TREASURY_LESSONS[0],r=lab.compute({l1:60,l2:200,stable:200,less:100,other:30,inflows:100});assert.equal(r.stats[2][1],'800.00%');}
}
console.log('PASS: 152 control scenarios, flat-curve analytic benchmark, HQLA caps, inflow-cap benchmark and question counts.');
