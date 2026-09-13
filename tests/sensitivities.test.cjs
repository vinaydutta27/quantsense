const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const elements={},el=id=>elements[id]??={innerHTML:'',textContent:'',clientWidth:760,setAttribute(){}},ctx={console,Math,Intl,history:{replaceState(){}},location:{hash:''},document:{getElementById:el,querySelectorAll:()=>[]},addEventListener(){}};ctx.window=ctx;vm.createContext(ctx);
for(const f of ['learning','sc-math','frtb-math','frtb-lessons','frtb-sa','sensitivities-math','sensitivities-lessons','sensitivities-content','frtb'])vm.runInContext(fs.readFileSync('dist/'+f+'.js','utf8'),ctx,{filename:f});
const R=ctx.RISK,L=ctx.FRTB_LESSONS,defaults=l=>Object.fromEntries(l.inputs.map(d=>[d.id,d.value])),close=(a,b,t=1e-6)=>assert(Math.abs(a-b)<t,`${a} != ${b}`);
// External benchmark and put-call parity, with distinct domestic and foreign discounting.
close(R.option(100,100,.05,0,.2,1),10.45058357,1e-4);
close(R.option(100,105,.04,.02,.25,2)-R.option(100,105,.04,.02,.25,2,true),100*Math.exp(-.04)-105*Math.exp(-.08),1e-7);
const g=R.greeks(100,100,.05,0,.2,1);close(g.delta,.63683065,1e-6);close(g.gamma,.01876202,1e-7);close(g.vega,37.52403469,1e-6);
close(R.cds(1e6,.015,.04,.015,5),0);assert(R.cds(1e6,.015,.04,.025,5)>0);
assert(R.bond(1e6,.04,.05,.01,5)<R.bond(1e6,.04,.04,.01,5));
const parCoupon=Math.expm1(.04);close(R.swap(1e6,parCoupon,.04,5),0,1e-7);
let cases=0;
for(const l of L){const d=defaults(l);assert.equal(ctx.LEARNING_CONTENT[l.id].questions.length,10);
 for(const [instrument]of l.inputs.find(x=>x.id==='instrument').options){const start={...d,instrument};const states=[start];for(const input of l.inputs){if(input.when&&!input.when(start))continue;for(const value of input.options?input.options.map(x=>x[0]):[input.min,input.max])states.push({...start,[input.id]:value});}
  for(const s of states){const result=l.compute(s);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(result)),l.id+' '+JSON.stringify(s));assert(result.series.every(line=>line.data.every(pair=>pair.every(Number.isFinite))));cases++;}
 }
 ctx.RISK_APP.configure({lesson:l.id});assert.equal(el('title').textContent,l.title);assert.equal((el('learning').innerHTML.match(/<li>/g)||[]).length,10);
}
const base=defaults(L.find(l=>l.id==='delta'));
const long={...base,instrument:'option'},short={...long,side:'-1'};close(R.value(long),-R.value(short));close(R.risk(long,'spot').first,-R.risk(short,'spot').first);
assert(R.risk({...base,instrument:'bond'},'rate').first<0);assert(R.risk({...base,instrument:'cds',coupon:1.5},'spread').first>0);
const curvature=L.find(l=>l.id==='curvature'),cs=defaults(curvature),parse=r=>r.stats[0][1];assert.equal(parse(curvature.compute(cs)),'£0');assert.notEqual(parse(curvature.compute({...cs,side:'-1'})),'£0');
const gamma=L.find(l=>l.id==='gamma'),gs=defaults(gamma);const gh=gamma.compute({...gs,hedge:100});assert.equal(gh.rows.find(r=>r[0]==='First-order estimate')[1],'£0');
const old=JSON.stringify(ctx.RISK_APP.getState());assert.throws(()=>ctx.RISK_APP.configure({lesson:'gamma',values:{vol:0}}));assert.equal(JSON.stringify(ctx.RISK_APP.getState()),old);
console.log(`PASS: ${cases} instrument/control scenarios, six rendered lessons, 60 questions, option benchmarks, parity, sign conventions, hedge and curvature checks.`);
