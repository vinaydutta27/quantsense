const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');const c={};c.window=c;vm.createContext(c);for(const f of ['treasury-risk-lessons.js','treasury-risk-content.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
const lessons=c.TRISK_LESSONS;assert.equal(lessons.length,33);assert.equal(new Set(lessons.map(l=>l.id)).size,33);
for(const l of lessons){assert.equal(c.LEARNING_CONTENT[l.id].questions.length,10,l.id);assert(l.scope&&l.sources.length&&l.simple&&l.formula);const defaults=Object.fromEntries(l.inputs.map(d=>[d.id,d.value]));const scenarios=[defaults,...l.inputs.flatMap(d=>(d.options?d.options.map(x=>x[0]):[d.min,d.max]).map(v=>({...defaults,[d.id]:v}))),...['min','max'].map(k=>Object.fromEntries(l.inputs.map(d=>[d.id,d.options?d.options[k==='min'?0:d.options.length-1][0]:d[k]])))];for(const s of scenarios){const r=l.compute(s);assert(!/NaN|Infinity|undefined/.test(JSON.stringify(r)),l.id);for(const x of r.bars||[])assert(Number.isFinite(x.value),l.id);for(const line of r.series||[])for(const point of line.data)assert(point.every(Number.isFinite),l.id);}}
const calc=(id,v={})=>{const l=lessons.find(l=>l.id===id);return l.compute({...Object.fromEntries(l.inputs.map(d=>[d.id,d.value])),...v});},bar=(r,i)=>r.bars[i].value,near=(x,y)=>assert(Math.abs(x-y)<1e-9,`${x} != ${y}`);
near(bar(calc('balance-sheet'),1),100);near(bar(calc('balance-sheet'),2),29.1);
near(bar(calc('hqla',{l1:60,l2:100,enc:0}),2),100);
near(bar(calc('hqla',{l1:0,l2:100,enc:0}),2),0);
near(bar(calc('lcr',{hqla:25,out:100,inflow:100}),1),25);
near(bar(calc('intraday',{cash:20,payment:50,receipt:50,timing:'late'}),1),-30);
near(bar(calc('intraday',{cash:20,payment:50,receipt:50,timing:'early'}),1),70);
near(bar(calc('intraday',{timing:'late'}),2),bar(calc('intraday',{timing:'early'}),2));
near(bar(calc('settlement',{pvp:100}),2),0);near(bar(calc('counterparty',{cash:0,mtm:10,collateral:10}),2),0);
near(bar(calc('nii',{assets:500,liabilities:500,af:100,lf:100}),2),0);
near(bar(calc('prepayment',{prepay:0}),2),0);near(bar(calc('fx',{hedge:100}),2),0);
near(bar(calc('contingency',{lag:1}),2)-bar(calc('contingency',{lag:3}),2),68);
// £750m loans × 4 + £150m bonds × 3 − £150m term debt × 2 = £3,150m-years.
// Net DV01 = 0.315 − 0.1 = 0.215; a 200bp rise therefore gives −£43m.
const cap=calc('alco');near(bar(cap,0),28.5);near(bar(cap,1),100);near(bar(cap,2),-43);
near(bar(calc('alco',{term:175}),1)-bar(cap,1),12.5);near(bar(calc('alco',{term:175}),0)-bar(cap,0),-.25);
console.log('PASS: 33 lessons / 330 questions; all endpoints finite; balance, HQLA cap, LCR cap, timing, hedge and ALCO benchmarks.');
