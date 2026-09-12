const fs=require('fs'),vm=require('vm'),assert=require('assert');
const elements={};let registered;const ctx={console,Intl,Math,Number,Object,Array,Promise,Error,history:{replaceState(){}},location:{hash:''},document:{getElementById:id=>elements[id]??={textContent:'',innerHTML:'',setAttribute(){}},querySelectorAll:()=>[],modelContext:{registerTool:t=>registered=t}},addEventListener(){}};ctx.window=ctx;vm.createContext(ctx);for(const f of ['learning-content.js','learning.js','sc-math.js','sc-lessons.js','stochastic.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),ctx);
const M=ctx.SC,L=ctx.SC_LESSONS;const close=(x,y,e=1e-8)=>assert(Math.abs(x-y)<e,`${x} != ${y}`);
assert.equal(L.length,16);assert.equal(new Set(L.map(l=>l.id)).size,16);
for(const p of [0,.01,.5,.99,1]){const a=M.binomial(20,p);close(a.reduce((x,y)=>x+y,0),1);close(a.reduce((x,y,k)=>x+y*k,0),20*p)}
close(M.bs(100,100,.05,.2,1).price,10.45058357,1e-4);close(M.bs(90,100,.03,.2,0).price,0);close(M.bs(110,100,.03,.2,0).price,10);
for(const l of L){const defaults=Object.fromEntries(l.inputs.map(x=>[x[0],x[5]]));const cases=[defaults];for(let bits=0;bits<2**l.inputs.length;bits++)cases.push(Object.fromEntries(l.inputs.map((x,i)=>[x[0],x[(bits>>i)&1?3:2]])));
 for(const values of cases){let r=l.compute(values,42);assert(r.explanation.length>50);for(const series of r.series)for(const p of series.data)assert(p.every(Number.isFinite),l.id+' non-finite point');assert(r.x[1]>r.x[0]);const out=registered.execute({lesson:l.id,values});assert.equal(out.lesson,l.id);assert.equal((elements.learning.innerHTML.match(/<li>/g)||[]).length,10);assert(elements.learning.innerHTML.includes(ctx.LEARNING_CONTENT[l.id].intuition[0].slice(0,35))); assert(!/NaN|Infinity|undefined/.test(elements.chart.innerHTML),l.id+' malformed SVG');}
 console.log('PASS',l.id,'defaults and',cases.length-1,'extreme combinations');}
const st=(id,values)=>registered.execute({lesson:id,values});
let r=st('binomial-pricing',{k:100,r:5});assert.equal(r.results[0][1],'$13.23');
r=st('girsanov',{mu:3,sigma:20});assert.equal(r.results[0][1],'0.000');
r=st('poisson-jumps',{lambda:2,T:3});assert.equal(r.results[1][1],'6.00');
const path=M.brownian(42,2),p=M.coarse(path,128);let integral=0,q=0;for(let i=1;i<p.length;i++){const d=p[i][1]-p[i-1][1];integral+=p[i-1][1]*d;q+=d*d}close(integral,.5*(p.at(-1)[1]**2-q));
const before=elements.title.textContent;for(const input of [{lesson:'bad'},{lesson:'probability',values:{p:101}},{lesson:'probability',values:{p:4}},{lesson:'poisson-jumps',values:{lambda:0}}])assert.throws(()=>registered.execute(input));assert.equal(elements.title.textContent,before);
console.log('PASS analytic benchmarks, Ito discrete identity, tool validation and non-mutation on invalid inputs. Browser/WebMCP live validation unavailable; registry is a test stub.');

const content=ctx.LEARNING_CONTENT;assert.equal(Object.keys(content).length,20);const allQuestions=[];for(const [key,value] of Object.entries(content)){assert.equal(value.questions.length,10,key);assert.equal(value.intuition.length,2,key);for(const [q,a] of value.questions){assert(q.endsWith('?'),key);assert(a.length>25,key);allQuestions.push(q)}}assert.equal(new Set(allQuestions).size,200);console.log('PASS 20 intuitive explanations and 200 distinct conceptual questions with suggested answers.');
