const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const elements={},attrs={};let registered;
const el=id=>elements[id]??=( {textContent:'',innerHTML:'',clientWidth:700,setAttribute(k,v){(attrs[id]??={})[k]=v;}} );
const ctx={console,Math,Number,Object,Array,Promise,Error,Set,history:{replaceState(){}},location:{hash:''},document:{getElementById:el,querySelectorAll:()=>[],modelContext:{registerTool:t=>registered=t}},addEventListener(){}};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['learning.js','sc-math.js','frtb-math.js','frtb-lessons.js','frtb-sa.js','frtb-ima.js','frtb-content.js','frtb-explorers.js','frtb-data-tests.js','frtb-explorer-content.js','frtb.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),ctx,{filename:f});
const F=ctx.FRTB,L=ctx.FRTB_LESSONS,close=(a,b,t=1e-8)=>assert(Math.abs(a-b)<t,`${a} != ${b}`),defaults=l=>Object.fromEntries(l.inputs.map(d=>[d.id,d.value]));
// Independently check regulatory boundaries and arithmetic, not just finite output.
close(F.scenario(.9,'high'),1);close(F.scenario(.9,'low'),.8);close(F.scenario(.2,'low'),.15);
close(F.linearBucket([10,-10],1),0);close(F.linearBucket([10,10],0),Math.sqrt(200));
const fallback=F.linearAggregate([{ws:[1,1],k:Math.sqrt(2)},{ws:[-1,-1],k:Math.sqrt(2)}],1);assert(fallback.fallback);close(fallback.capital,0,1e-7);
const cb=F.curvatureBucket([-4,-6],[-3,-8],.5);close(cb.k,0);assert.equal(cb.direction,'Up');
close(F.curvatureAggregate([{k:0,s:-3},{k:0,s:-4}],.6),0);
const t=F.tail([0,1,2,3],.625);close(t.var,2);close(t.es,8/3);
close(F.lh(10,[0,0,0,10]),Math.sqrt(700));close(F.ues(60,40,32),75);close(F.ues(60,30,40),60);assert.equal(F.ues(60,10,0),null);
close(F.nmrf([3,4],[12],[3,4]),5+12+Math.sqrt(.36*49+.64*25));
assert.equal(F.rfet(Array.from({length:24},(_,i)=>i*15)).pass,true);assert.equal(F.rfet(Array.from({length:24},(_,i)=>i)).pass,false);
assert.equal(F.rfet(Array.from({length:100},(_,i)=>i)).pass,true);assert.equal(F.rfet(Array(100).fill(0)).pass,false);
assert.equal(F.rfet(Array.from({length:23},(_,i)=>i*15)).pass,false);
assert.equal(F.platZone(.81,.08,false),'Green');assert.equal(F.platZone(.8,.08,false),'Yellow');assert.equal(F.platZone(.81,.09,true),'Orange');assert.equal(F.platZone(.7,.12,false),'Yellow');assert.equal(F.platZone(.699,.01,false),'Red');assert.equal(F.platZone(.99,.121,false),'Red');
close(F.correlation(F.ranks([1,2,3]),F.ranks([3,2,1])),-1);close(F.ks([0,1],[0,1]),0);close(F.ks([0,1],[2,3]),1);
assert.deepEqual(Array.from(F.ranks([1,1,2])),[1.5,1.5,3]);
close(F.multiplier(4),1.5);close(F.multiplier(5),1.7);close(F.multiplier(9),1.92);close(F.multiplier(10),2);
close(F.maturity(.01),.25);close(F.maturity(2),1);
close(F.drc([{jtd:100,rw:.06}],[{jtd:50,rw:.06}]).capital,4);close(F.drc([],[{jtd:100,rw:.5}]).capital,0);
assert.equal(L.length,27);assert.equal(new Set(L.map(l=>l.id)).size,27);
let checks=0;
function inspect(l,s){const r=l.compute(s);assert(r.explanation.length>40,l.id);assert(r.rows.length&&r.headers.length,l.id);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(r)),l.id+' malformed result');if(r.bars)r.bars.forEach(d=>assert(Number.isFinite(d.value),l.id));if(r.series)r.series.forEach(line=>line.data.forEach(p=>assert(p.every(Number.isFinite),l.id)));checks++;return r;}
for(const l of L){const d=defaults(l);inspect(l,d);for(const input of l.inputs){const vals=input.options?input.options.map(o=>o[0]):[input.min,input.max];for(const value of vals)inspect(l,{...d,[input.id]:value});}
 // Execute every rendered lesson through the same entry point used by the optional WebMCP tool.
 const response=registered.execute({lesson:l.id});assert.equal(response.lesson,l.id);assert.equal((elements.learning.innerHTML.match(/<li>/g)||[]).length,10);assert(!/NaN|Infinity|undefined/.test(elements.chart.innerHTML));assert(elements.reading.innerHTML.includes('ps126app1.pdf#page='));assert.equal(elements.title.textContent,l.title);
 for(const input of l.inputs.filter(x=>x.options)){for(const [v]of input.options){registered.execute({lesson:l.id,values:{[input.id]:v}});assert(!/NaN|Infinity|undefined/.test(elements.trace.innerHTML));}}
}
for(const c of ctx.FRTB_CLASSES){for(const mode of ['delta','vega','curvature'])for(const scenario of ['low','medium','high']){const l=L.find(l=>l.id===c.id),d={...defaults(l),mode,scenario};inspect(l,d);const zero=ctx.FRTB_SBM(c,{...d,a:0,b:0,c:0,d:0},scenario);close(zero.capital,0);}}
const fx=ctx.FRTB_CLASSES.find(c=>c.id==='fx'),girr=ctx.FRTB_CLASSES.find(c=>c.id==='girr');
close(ctx.FRTB_SBM(fx,{mode:'delta',a:100,b:-100,c:0,d:0},'medium').capital,0);
close(ctx.FRTB_SBM(girr,{mode:'delta',a:100,b:0,c:0,d:0},'medium').capital,1.1/Math.SQRT2);
close(ctx.FRTB_SBM(girr,{mode:'vega',a:100,b:0,c:0,d:0,vol:25},'medium').capital,25);
const bt=L.find(l=>l.id==='backtest');assert.equal(inspect(bt,{...defaults(bt),h99:12,a99:12,hExtra:18,aExtra:18}).stats[0][1],'Pass');assert.equal(inspect(bt,{...defaults(bt),h99:13}).stats[0][1],'Fail');
const cap=L.find(l=>l.id==='capital');assert.equal(inspect(cap,defaults(cap)).stats[0][1],'£68.35m');assert.equal(inspect(cap,{...defaults(cap),es:100,ss:20,sagy:30,all:50}).stats[0][1],'£147.00m');
const rr=L.find(l=>l.id==='rrao');assert.equal(inspect(rr,{...defaults(rr),eligible:'yes'}).stats[0][1],'£1.00m');
const gov=L.find(l=>l.id==='governance');assert.equal(inspect(gov,{...defaults(gov),year:'2028',zone:'Red'}).stats[0][1],'IMA');assert.equal(inspect(gov,{...defaults(gov),year:'steady',zone:'Red'}).stats[0][1],'SA fallback');
const before=ctx.FRTB_APP.getState();for(const bad of [{lesson:'missing'},{lesson:'girr',values:{a:Infinity}},{lesson:'girr',values:{a:1}},{lesson:'plat',values:{previous:'invalid'}}])assert.throws(()=>registered.execute(bad));assert.equal(JSON.stringify(before),JSON.stringify(ctx.FRTB_APP.getState()));
// Exercise real slider and reset callbacks in the DOM stub.
registered.execute({lesson:'frtb-map'});el('f-sbm').oninput({target:{value:'50',setAttribute(){}}});assert.equal(ctx.FRTB_APP.getState().stats[0][1],'£67.00m');el('reset').onclick();assert.equal(ctx.FRTB_APP.getState().stats[0][1],'£57.00m');el('next').onclick();assert.equal(ctx.FRTB_APP.getState().lesson,'trade-capital');
const q=[];for(const l of L){const c=ctx.LEARNING_CONTENT[l.id];assert.equal(c.intuition.length,2);assert.equal(c.questions.length,10);c.questions.forEach(([question,answer])=>{assert(question.endsWith('?'),question);assert(answer.length>25);q.push(question)})}assert.equal(new Set(q).size,270);
// Buildless static checks: all local resources and navigation targets exist.
for(const file of ['index.html','stochastic.html','frtb.html']){const html=fs.readFileSync('dist/'+file,'utf8');assert(html.includes('href="frtb.html"'));for(const [,path]of html.matchAll(/(?:src|href)="([^"#]+)"/g)){if(path.startsWith('data:')||path.includes('://')||path==='./')continue;assert(fs.existsSync('dist/'+path),file+' missing '+path)}}
console.log(`PASS: ${checks} calculator cases; 27 rendered lessons; all 7 × 3 SBM modes; 270 unique conceptual questions; rule boundaries, interactions and local assets.`);
console.log('This suite uses DOM stubs; tests/browser.cjs separately checks live browser interactions and responsive layouts.');
