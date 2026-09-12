const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const elements={},attrs={};let registered;
const el=id=>elements[id]??={textContent:'',innerHTML:'',clientWidth:700,setAttribute(k,v){(attrs[id]??={})[k]=v;}};
const ctx={console,Math,Number,Object,Array,Promise,Error,Set,history:{replaceState(){}},location:{hash:''},document:{getElementById:el,querySelectorAll:()=>[],modelContext:{registerTool:t=>registered=t}},addEventListener(){}};
ctx.window=ctx;vm.createContext(ctx);
for(const f of ['learning','sc-math','saccr-math','saccr-lessons','saccr-foundations','saccr-classes','saccr-portfolio','saccr-content','saccr'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx,{filename:f});
const M=ctx.SACCR,L=ctx.SACCR_LESSONS,close=(a,b,t=1e-8)=>assert(Math.abs(a-b)<t,a+' != '+b),defaults=l=>Object.fromEntries(l.inputs.map(i=>[i.id,i.value]));
// Independent numerical examples and boundary checks.
close(M.rc(12,10,2,3,1,true),2);close(M.rc(-10,0,0,0,0,false),0);close(M.rc(5,0,-3,0,0,false),8);
close(M.mult(0,10),1);close(M.mult(-19,10),.05+.95/Math.E);close(M.mult(-10000,10),.05);close(M.mult(-1,0)*0,0);
close(M.sd(0,5),(1-Math.exp(-.25))/.05);
close(M.mf(0,0,false),.2);close(M.mf(1,0,false),1);close(M.mf(5,0,false),1);close(M.mf(.25,0,false),.5);close(M.mf(0,10,true),.3);close(M.mf(0,40,true),.6);
close(M.ir([100,-100,0]),.005*Math.sqrt(6000));close(M.ir([100,0,-100]),.005*Math.sqrt(14000));
close(M.factor([10,-10],[.5,.5]).addon,Math.sqrt(150));close(M.factor([10,-10],[.4,.4]).addon,Math.sqrt(168));close(M.factor([10],[.8]).addon,10);
close(M.delta(100,100,1,.15,'call',true)-M.delta(100,100,1,.15,'put',true),1,1e-6);
close(M.delta(100,100,1,.15,'call',true),-M.delta(100,100,1,.15,'call',false));
const e=M.ead({v:10,vm:0,nica:0,th:0,mta:0,alpha:1.4},5,false);close(e.ead,21);
assert.equal(L.length,17);assert.equal(new Set(L.map(l=>l.id)).size,17);
let cases=0;const qs=[];
function inspect(l,s){const r=l.compute(s);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(r)),l.id+' invalid output');assert(r.rows.length&&r.headers.length);assert(r.explanation.length>40);if(r.bars)r.bars.forEach(p=>assert(Number.isFinite(p.value)));if(r.series)r.series.forEach(v=>v.data.forEach(p=>assert(p.every(Number.isFinite))));cases++;return r;}
for(const l of L){
 const d=defaults(l);inspect(l,d);
 for(const i of l.inputs)for(const v of i.options?i.options.map(o=>o[0]):[i.min,i.max])inspect(l,{...d,[i.id]:v});
 registered.execute({lesson:l.id});assert.equal((elements.learning.innerHTML.match(/<li>/g)||[]).length,10,l.id);assert(elements.reading.innerHTML.includes('01-01-2027'));assert(!/NaN|undefined/.test(elements.chart.innerHTML));
 const c=ctx.LEARNING_CONTENT[l.id];assert.equal(c.intuition.length,2);assert.equal(c.questions.length,10);for(const [q,a]of c.questions){assert(q.endsWith('?'));assert(a.length>30);qs.push(q);}
 // Test combinations of selector states, not just isolated default toggles.
 let states=[d];for(const i of l.inputs.filter(i=>i.options))states=states.flatMap(s=>i.options.map(([v])=>({...s,[i.id]:v})));
 for(const s of states)inspect(l,s);
}
assert.equal(new Set(qs).size,170);
const alpha=L.find(l=>l.id==='saccr-alpha'),ad=defaults(alpha);
assert.equal(inspect(alpha,{...ad,legacy:'yes',year:'2027'}).stats[0][1],'£34.800m');
assert.equal(inspect(alpha,{...ad,legacy:'yes',year:'2028'}).stats[0][1],'£33.200m');
assert.equal(inspect(alpha,{...ad,legacy:'yes',year:'2029'}).stats[0][1],'£31.600m');
assert.equal(inspect(alpha,{...ad,legacy:'yes',year:'2030'}).stats[0][1],'£30.000m');
assert.equal(inspect(alpha,{...ad,type:'financial',legacy:'yes'}).stats[0][1],'£42.000m');
const cap=L.find(l=>l.id==='saccr-margin-cap');assert.equal(inspect(cap,{mr:20,mp:20,ur:5,up:5}).stats[0][1],'£14.000m');
const fx=L.find(l=>l.id==='saccr-fx');assert.equal(inspect(fx,{a:100,b:-100,pair:'same',years:1}).stats[0][1],'£0.000m');assert.equal(inspect(fx,{a:100,b:-100,pair:'different',years:1}).stats[0][1],'£8.000m');
const port=L.find(l=>l.id==='saccr-portfolio');assert.equal(inspect(port,{...defaults(port),scale:0,v:0,nica:0}).stats[0][1],'£0.000m');
registered.execute({lesson:'saccr-map'});el('f-rc').oninput({target:{value:'10',setAttribute(){}}});assert.equal(ctx.SACCR_APP.getState().stats[0][1],'£30.800m');el('reset').onclick();assert.equal(ctx.SACCR_APP.getState().stats[0][1],'£28.000m');el('next').onclick();assert.equal(ctx.SACCR_APP.getState().lesson,'saccr-netting');
assert.throws(()=>registered.execute({lesson:'missing'}));assert.throws(()=>registered.execute({lesson:'saccr-map',values:{rc:Infinity}}));
for(const file of ['saccr.html','index.html','stochastic.html','frtb.html','cva.html','learning-paths.html']){
 const h=fs.readFileSync('dist/'+file,'utf8');assert(h.includes('href="saccr.html"'),file);
 for(const [,p]of h.matchAll(/(?:src|href)="([^"#]+)"/g))if(!p.includes('://')&&!p.startsWith('data:')&&p!=='./')assert(fs.existsSync('dist/'+p),file+' missing '+p);
}
console.log('PASS: '+cases+' calculator cases; 17 applet renders; 170 unique questions; formula boundaries, selector combinations, slider/reset navigation and links.');
console.log('Rendering checks use a DOM stub, not live visual inspection.');

