(() => {
 const overview=document.getElementById('module-overview'),definitions=document.getElementById('module-definitions');
 if(!overview||!definitions)return;
 const input=document.getElementById('definition-search'),entries=[...definitions.querySelectorAll('.definition-entry')],count=document.getElementById('definition-count');
 function filter(){const q=input.value.trim().toLowerCase();let total=0;for(const entry of entries){entry.hidden=!entry.dataset.search.includes(q);if(!entry.hidden)total++;}count.textContent=total?`${total} of ${entries.length} definitions`:'No definitions match your search. Try another term or clear the search.';}
 input.addEventListener('input',filter);document.getElementById('definition-clear').addEventListener('click',()=>{input.value='';filter();input.focus();});
 function route(){const hash=location.hash;if(hash==='#module-overview')overview.open=true;else if(hash==='#module-definitions'){definitions.open=true;}else if(hash)overview.open=false;}
 route();if(!window.MODULE_INITIAL_HASH)overview.open=true;window.addEventListener('hashchange',route);
 document.querySelector('.module-start').addEventListener('click',()=>{overview.open=false;requestAnimationFrame(()=>document.querySelector('#title,#reg-tools')?.scrollIntoView({block:'start'}));});
 document.getElementById('lessons')?.addEventListener('click',()=>{overview.open=false;});
})();
