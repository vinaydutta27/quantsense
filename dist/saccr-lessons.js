window.SACCR_LESSONS=[];
window.SACCR_UI=(()=>{
 const m=x=>'£'+Number(x).toFixed(3)+'m',n=x=>Number(x).toFixed(4),pct=x=>(x*100).toFixed(2)+'%';
 const slider=(id,label,min,max,step,value,unit='£m')=>({id,label,min,max,step,value,unit});
 const select=(id,label,options,value)=>({id,label,options,value});
 const bars=(labels,values)=>labels.map((label,i)=>({label,value:values[i],color:['#285e46','#90ad72','#c9984d','#7b999e'][i%4]}));
 const source='https://www.prarulebook.co.uk/pra-rules/counterparty-credit-risk-crr/01-01-2027';
 function add(l){SACCR_LESSONS.push({...l,sources:[[source,l.rule+' · PRA Rulebook at 1 January 2027'],...(l.sources||[])],simpleTitle:l.simpleTitle||'Build the intuition',notes:l.notes||[]});}
 return {m,n,pct,slider,select,bars,add,green:'#285e46',amber:'#c9984d'};
})();
(()=>{
const M=SACCR,{m,slider,select,bars,add}=SACCR_UI;
add({id:'saccr-map',name:'What SA-CCR measures',stage:'01 · Exposure foundations',title:'How much could be exposed when a counterparty fails?',intro:'SA-CCR converts derivative positions into a regulatory exposure value. It combines what is owed today with an allowance for future changes.',chart:'From current exposure to exposure at default',
inputs:[slider('rc','Replacement cost',0,40,1,8),slider('pfe','Potential future exposure',0,40,1,12),select('type','Counterparty category',[['financial','Other counterparty · alpha 1.4'],['nfc','Qualifying non-financial · alpha 1'],['pension','Qualifying pension arrangement · alpha 1']],'financial')],
challenge:'Set replacement cost to zero. Why does exposure at default remain positive?',
formula:'Exposure value (EAD) = α × (replacement cost + potential future exposure)',key:'Alpha is 1.4 generally; Article 274(2) specifies alpha 1 for defined non-financial and pension-related counterparties from 2027.',
simple:'Imagine replacing a derivative after the other party fails. The market value already owed matters, but so do price changes before the position can be closed out. SA-CCR measures that exposure using prescribed rules. It does not predict the probability of default.',
scope:'RC and PFE are direct inputs here. Later applets calculate them from trades and collateral. EAD is not a capital charge or a CVA valuation. Conditional legacy alpha add-ons are shown separately in the final lesson.',
rule:'Articles 273–274',
compute(s){const a=s.type==='financial'?1.4:1,e=a*(s.rc+s.pfe);return {stats:[['Exposure value',m(e)],['Alpha',a.toFixed(1)],['Before alpha',m(s.rc+s.pfe)]],bars:bars(['Replacement cost','Future exposure','Alpha uplift','EAD'],[s.rc,s.pfe,e-s.rc-s.pfe,e]),headers:['Step','Amount','Meaning'],rows:[['RC',m(s.rc),'Current replacement exposure'],['PFE',m(s.pfe),'Allowance for future exposure'],['Alpha',a,'Prescribed counterparty treatment'],['EAD',m(e),'Exposure input to credit-risk calculations']],explanation:'The exposure value is '+m(e)+'. Even if current replacement cost is zero, future market moves can create a receivable. Changing counterparty category changes alpha, not the trade add-on itself.',note:'SA-CCR exposure, SA-CVA risk capital and FRTB market-risk capital answer different questions.'};}});
})();

