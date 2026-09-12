const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const els={};const el=id=>els[id]??={innerHTML:'',textContent:'',clientWidth:700,setAttribute(){}};
let tool;
const c={console,Math,Number,Object,Array,Promise,Error,Set,history:{replaceState(){}},location:{hash:''},document:{getElementById:el,querySelectorAll:()=>[],modelContext:{registerTool:t=>tool=t}},addEventListener(){}};
c.window=c;vm.createContext(c);
for(const f of ['learning','sc-math','cva-math','cva-lessons','cva-foundations','cva-classes','cva-capital','cva-content','cva'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),c,{filename:f});
const close=(a,b)=>assert(Math.abs(a-b)<1e-8,a+' != '+b),M=c.CVA;
close(M.bucket([100],[100],[.05],1).k,.5);
close(M.bucket([100],[0],[.11],1).k,11);
const b=M.bucket([10,10],[0,0],[1,1],0);close(b.k,Math.sqrt(200));close(b.s,b.k);
close(M.aggregate([{k:10,s:10},{k:10,s:-10}],.5),10);
close(M.value({exposure:0,spread:150,lgd:60,years:5}).value,0);
close(M.value({exposure:20,spread:0,lgd:60,years:5}).value,0);
close(M.positiveNormal(0,1),1/Math.sqrt(2*Math.PI));
assert.equal(c.CVA_LESSONS.length,15);let cases=0;
for(const l of c.CVA_LESSONS){
 const d=Object.fromEntries(l.inputs.map(i=>[i.id,i.value]));
 const check=s=>{const r=l.compute(s);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(r)),l.id);assert(r.rows.length);cases++;};
 check(d);
 for(const i of l.inputs)for(const v of i.options?i.options.map(o=>o[0]):[i.min,i.max])check({...d,[i.id]:v});
 tool.execute({lesson:l.id});assert.equal((els.learning.innerHTML.match(/<li>/g)||[]).length,10);
 assert.equal(c.LEARNING_CONTENT[l.id].questions.length,10);
 assert(els.reading.innerHTML.includes('ps126app1.pdf'));
}
for(const p of c.CVA_CLASSES)for(const mode of p.cp?['delta']:['delta','vega']){
 const z=c.CVA_CLASS_CALC(p,{mode,a:0,b:0,ha:0,hb:0});close(z.k,0);
 const x=c.CVA_CLASS_CALC(p,{mode,a:100,b:60,ha:70,hb:20}).k;
 close(c.CVA_CLASS_CALC(p,{mode,a:200,b:120,ha:140,hb:40}).k,2*x);
}
const fx=c.CVA_CLASSES.find(x=>x.id==='cva-fx');close(c.CVA_CLASS_CALC(fx,{mode:'delta',a:100,b:0,ha:0,hb:0}).k,11);
for(const file of ['cva.html','index.html','stochastic.html','frtb.html','learning-paths.html']){const html=fs.readFileSync('dist/'+file,'utf8');assert(html.includes('href="cva.html"'));for(const [,p]of html.matchAll(/(?:src|href)="([^"#]+)"/g))if(!p.includes('://')&&!p.startsWith('data:')&&p!=='./')assert(fs.existsSync('dist/'+p),p);}
console.log('PASS '+cases+' calculator cases; 15 rendered applets; 150 questions; independent hedge, weight, aggregation and scaling checks. Rendering uses a DOM stub, not visual browser QA.');

