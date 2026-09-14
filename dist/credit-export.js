(() => {
 const cell=x=>{let v=String(x??'');if(typeof x==='string'&&/^[=+@-]/.test(v))v="'"+v;return '"'+v.replace(/"/g,'""')+'"';};
 function download(name,rows){const url=URL.createObjectURL(new Blob([rows.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
 document.getElementById('credit-export').onclick=()=>{const s=CREDIT_APP.getState(),l=CREDIT_LESSONS.find(x=>x.id===s.lesson),r=l.compute(s.values);download('credit-'+l.id+'.csv',[['Quant$ense synthetic educational calculation',l.name],['Scope',l.scope],['Formula',l.formula],[],['Input','Value'],...Object.entries(s.values),[],...r.stats,[],r.headers,...r.rows,[],['Sources'],...l.sources]);};
 document.getElementById('credit-data').onclick=()=>download('credit-synthetic-cohorts.csv',[['record','cohort','burden','util','arrears','income','duplicate','noise','leak_POST_DEFAULT_UNAVAILABLE','default_outcome'],...CREDIT_MATH.DATA.map((r,i)=>[i+1,r.late?'later_holdout':'earlier_training',...CREDIT_MATH.FEATURES.map(([k])=>r[k]),r.y])]);
})();
