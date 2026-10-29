/* Enlaces personales aprobados por Alberto. No contiene acceso a cuentas de bróker. */
(() => {
  'use strict';
  const rows = Object.freeze([
    {id:'webull',name:'Webull',order:'01',intro:'Gráficos, listas y práctica en Paper Trading.',help:'https://www.webull.com/help/faq/11069-Paper-Trading',url:'https://www.webull.com/s/3Kha1b7x62Z6iQgoDX',code:null},
    {id:'robinhood',name:'Robinhood',order:'02',intro:'Listas, ficha del activo y lectura del ticket de órdenes.',help:'https://robinhood.com/us/en/support/articles/360001213963/',url:'https://join.robinhood.com/albertf-2c7b2a',code:null},
    {id:'tastytrade',name:'tastytrade',order:'03',intro:'Navegación, watchlists y revisión de la operación.',help:'https://courses.tastytrade.com/pages/course-collections',url:null,code:null}
  ]);
  const esc = v => String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const domains = {webull:['www.webull.com','webull.com','a.webull.com'],robinhood:['join.robinhood.com','robinhood.com','www.robinhood.com'],tastytrade:['tastytrade.com','www.tastytrade.com','start.tastytrade.com','my.tastytrade.com']};
  function referralUrl(row) {
    if(!row.url)return null;
    try{const u=new URL(row.url);return u.protocol==='https:'&&domains[row.id].includes(u.hostname)&&!u.username&&!u.password?u.href:null}catch{return null}
  }
  function card(row,compact,detailed=false) {
    const url=referralUrl(row);
    return `<article class="gb-card" data-broker="${row.id}"><div class="gb-brand"><span class="gb-order">${row.order}</span><h3>${esc(row.name)}</h3></div>${compact?'':`<p>${esc(row.intro)}</p>`}<div class="gb-actions"><a class="gb-guide" href="${detailed?esc(row.help):'plataformas.html#'+row.id}" ${detailed?'target="_blank" rel="noopener noreferrer"':''}>${detailed?'Ayuda oficial':compact?'Ver guía':'Aprender la plataforma'} <span aria-hidden="true">↗</span></a>${url?`<a class="gb-referral" href="${esc(url)}" target="_blank" rel="sponsored noopener noreferrer" aria-label="Abrir ${esc(row.name)} con el referido personal de Alberto">${compact?'Referido de Alberto':'Ir con el referido de Alberto'} <span aria-hidden="true">↗</span></a>`:''}${!url&&row.code?`<p class="gb-code">Código personal de Alberto: <strong>${esc(row.code)}</strong></p>`:''}</div></article>`;
  }
  function render(compact=false,onlyId=null){
    const selected=onlyId?rows.filter(r=>r.id===onlyId):rows;
    if(!selected.length)return '';
    const hasReferral=selected.some(r=>referralUrl(r)||r.code);
    return `<section class="gb-section ${compact?'gb-compact':''}" aria-label="Brókeres y plataformas"><div class="gb-heading"><div><span class="gb-kicker">PLATAFORMAS DEL CURSO</span><h2>${onlyId?'Recursos de '+esc(selected[0].name):compact?'Conoce los brókeres':'Aprende la plataforma antes de utilizarla'}</h2></div>${compact||onlyId?'':`<a class="gb-all" href="plataformas.html">Ver el capítulo completo ↗</a>`}</div>${compact||onlyId?'':`<p class="gb-intro">Webull primero, Robinhood después y tastytrade como tercera plataforma. Empieza por las guías y el ejercicio de práctica.</p>`}<div class="gb-grid">${selected.map(r=>card(r,compact,!!onlyId)).join('')}</div><p class="gb-disclosure">${hasReferral?'Enlaces de referido: Alberto puede recibir una recompensa si cumples las condiciones del bróker. Revisa elegibilidad, país y términos de la oferta. Usarlos es opcional; no necesitas abrir ni financiar una cuenta para estudiar.':'Recursos oficiales de la plataforma. No necesitas abrir ni financiar una cuenta para estudiar.'}</p></section>`;
  }
  window.GemaBrokers=Object.freeze({render,rows,referralUrl});
  document.addEventListener('DOMContentLoaded',()=>document.querySelectorAll('[data-gema-brokers]').forEach(el=>{el.innerHTML=render(el.dataset.compact==='true',el.dataset.only||null)}));
})();
