const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),c={};c.window=c;vm.createContext(c);for(const f of ['simm-math.js','simm-lessons.js','simm-content.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);console.log(c.SIMM_LESSONS.length+' lessons');for(const l of c.SIMM_LESSONS){assert.equal(c.LEARNING_CONTENT[l.id].questions.length,10,l.id);const defaults=Object.fromEntries(l.inputs.map(x=>[x.id,x.value]));for(const s of [defaults,...l.inputs.flatMap(x=>(x.options?x.options.map(o=>o[0]):[x.min,x.max]).map(v=>({...defaults,[x.id]:v}))),Object.fromEntries(l.inputs.map(x=>[x.id,x.options?x.options.at(-1)[0]:x.max]))]){const r=l.compute(s);assert(!/NaN|undefined|Infinity/.test(JSON.stringify(r)),l.id);for(const b of r.bars||[])assert(Number.isFinite(b.value),l.id);}}console.log('All cases finite; all lessons have 10 questions');
const M=c.SIMM_MATH,near=(a,b)=>assert(Math.abs(a-b)<1e-9,`${a} != ${b}`);
near(M.cr(20,5),2);near(M.cr(-20,5),2);near(M.cr(0,5),1);
near(M.pair(10,-10,1),0);near(M.pair(3,4,0),5);near(M.pair(3,4,1),7);
let r=M.bucket([10,-10],1,5,.5,true);near(r.c[0],1);near(r.k,10);near(r.s,0);
r=M.bucket([20,-5],1,5,1,false);near(r.f,.5);near(r.k,Math.sqrt(1425));
r=M.curvature(10,-10,14,14,1);near(r.margin,0);r=M.curvature(10,0,14,14,0);near(r.margin,5*2.5758293035489004**2);near(M.curvature(10,0,14,14,0,.74).margin,r.margin/.74**2);near(M.curvature(0,0,14,14,0).margin,0);
console.log('PASS: exact offsets, concentration, covariance and curvature benchmarks');
