(() => {
  const SHEET_ID = '1_2vm_NG2XAzm16iEDAmZ0ORetBDLplbl9JdImGWerr0';
  const SHEET_GID = '0';
  const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&gid=${SHEET_GID}`;

  const fallback = [
    ['Marcus Melo',20,1],['Joyce',28,1],['Amanda Júlia',28,1],
    ['Rodolfo',17,2],['Edla',26,2],
    ['Larissa',9,3],['Emily',13,3],['Isabelle',14,3],['Tomaz',20,3],
    ['Seminha',6,4],['Gabriel Joaquim',18,4],['Felipe Barbosa',18,4],
    ['Artejose',24,5],
    ['Jeniffer',3,6],['Ingrid',3,6],['Amanda Ravena',6,6],['Gabriela Lemos',9,6],['Marcos Felipe',16,6],['Yuri',22,6],['Vanessa',25,6],['Rebecca',27,6],
    ['Lalyson',8,7],['Amanda Luísa',14,7],
    ['José Luiz',3,8],['Renata',5,8],['Gislane',5,8],['Lídia Gabriela',18,8],['Willian',19,8],['Beatriz Anjos',23,8],
    ['Rayla',1,9],['Maria Antonia',13,9],['Dulce Melo',16,9],['Julio',16,9],['Gineide',21,9],['Sophia',28,9],['Evandro',30,9],
    ['Joemil',1,10],['Vivinha',4,10],['Karine',31,10],
    ['Rodrigo Melo',3,11],['Rodrigo Santiago',4,11],['Tiago Costa - Batata',13,11],['Kauã',25,11],['Iara',27,11],
    ['Leonardo',6,12],['Angelo',12,12],['Viviane',14,12],['Marquinhos',23,12]
  ].map(([name,day,month]) => ({name,day,month}));

  const monthNames = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
  const monthShort = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
  const monthLookup = {
    jan:1,janeiro:1,fev:2,fevereiro:2,mar:3,'março':3,marco:3,abr:4,abril:4,
    mai:5,maio:5,jun:6,junho:6,jul:7,julho:7,ago:8,agosto:8,set:9,setembro:9,
    out:10,outubro:10,nov:11,novembro:11,dez:12,dezembro:12
  };

  function parseCSV(text){
    const rows=[]; let row=[], cell='', quoted=false;
    for(let i=0;i<text.length;i++){
      const c=text[i];
      if(c==='"'){
        if(quoted && text[i+1]==='"'){ cell+='"'; i++; }
        else quoted=!quoted;
      } else if(c===',' && !quoted){ row.push(cell); cell=''; }
      else if((c==='\n' || c==='\r') && !quoted){
        if(c==='\r' && text[i+1]==='\n') i++;
        row.push(cell); if(row.some(v=>v.trim())) rows.push(row); row=[]; cell='';
      } else cell+=c;
    }
    row.push(cell); if(row.some(v=>v.trim())) rows.push(row);
    return rows;
  }

  function parseDate(value){
    const s=String(value||'').trim().toLowerCase().replace(/\.$/,'');
    if(!s) return null;
    let m=s.match(/^(\d{1,2})\s*\/\s*(\d{1,2})$/);
    if(m) return {day:+m[1],month:+m[2]};
    m=s.match(/^(\d{1,2})\s*\/\s*([a-zçãé]+)$/i);
    if(m) return {day:+m[1],month:monthLookup[m[2].slice(0,3)] || monthLookup[m[2]]};
    return null;
  }

  function normalizeFromSheet(rows){
    const people=[];
    rows.forEach((r)=>{
      [[1,2],[5,7]].forEach(([nameCol,dateCol])=>{
        const name=(r[nameCol]||'').trim();
        const date=parseDate(r[dateCol]);
        if(name && date && date.day && date.month) people.push({name, ...date});
      });
    });
    const unique=new Map();
    people.forEach(p=>unique.set(`${p.name.toLowerCase()}-${p.day}-${p.month}`,p));
    return [...unique.values()];
  }

  function nextOccurrence(person, now){
    const year=now.getFullYear();
    let d=new Date(year,person.month-1,person.day,12);
    const today=new Date(year,now.getMonth(),now.getDate(),12);
    if(d<today) d=new Date(year+1,person.month-1,person.day,12);
    return d;
  }

  function formatDate(p){
    return `${String(p.day).padStart(2,'0')}/${String(p.month).padStart(2,'0')}`;
  }

  function daysUntil(date, now){
    const a=new Date(now.getFullYear(),now.getMonth(),now.getDate(),12);
    return Math.round((date-a)/86400000);
  }

  function render(people, source){
    const host=document.getElementById('birthday-widget');
    const homeHost=document.getElementById('home-birthday-widget');
    if(!host && !homeHost) return;
    const now=new Date();
    const ordered=people.map(p=>({...p,next:nextOccurrence(p,now)})).sort((a,b)=>a.next-b.next || a.name.localeCompare(b.name,'pt-BR'));
    const first=ordered[0];
    const upcoming=ordered.slice(1,4);
    const delta=daysUntil(first.next,now);
    const label=delta===0?'Hoje é aniversário':delta===1?'Amanhã é aniversário':`Próximo aniversário · faltam ${delta} dias`;

    if(host) host.innerHTML=`
      <div class="birthday-panel">
        <div class="birthday-grid">
          <div class="birthday-main">
            <p class="birthday-kicker">Datas da equipe</p>
            <h2 class="birthday-title">Aniversários do LabTam</h2>
            <p class="birthday-intro">Um calendário simples para acompanhar as datas de quem faz o laboratório.</p>
            <div class="birthday-feature">
              <div class="birthday-date-badge"><strong>${String(first.day).padStart(2,'0')}</strong><span>${monthShort[first.month-1]}</span></div>
              <div>
                <p class="birthday-feature-label">${label}</p>
                <h3 class="birthday-feature-name">${first.name}</h3>
                <p class="birthday-feature-meta">${first.day} de ${monthNames[first.month-1]}</p>
              </div>
            </div>
            <div class="birthday-actions">
              <button class="birthday-button" type="button" data-birthday-open>Ver calendário completo</button>
            </div>
          </div>
          <aside class="birthday-upcoming" aria-label="Próximos aniversários">
            <h3>Próximos</h3>
            <ul class="birthday-list">
              ${upcoming.map(p=>`<li><strong>${p.name}</strong><time datetime="${p.next.toISOString().slice(0,10)}">${formatDate(p)}</time></li>`).join('')}
            </ul>
            <p class="birthday-status">${source==='sheet'?'Dados carregados da agenda do LabTam.':'Agenda do LabTam disponível.'}</p>
          </aside>
        </div>
      </div>
    `;

    if(homeHost){
      homeHost.innerHTML=`
        <article class="home-birthday-card">
          <div class="home-birthday-date"><strong>${String(first.day).padStart(2,'0')}</strong><span>${monthShort[first.month-1]}</span></div>
          <div class="home-birthday-copy">
            <p>${delta===0?'Hoje no LabTam':delta===1?'Amanhã no LabTam':'Próximo aniversário'}</p>
            <h2>${first.name}</h2>
            <small>${first.day} de ${monthNames[first.month-1]}${delta>1?` · faltam ${delta} dias`:''}</small>
          </div>
          <a class="btn btn-secondary home-birthday-link" href="equipe.html#aniversarios">Ver aniversários</a>
        </article>
      `;
    }

    const calendar=document.getElementById('birthday-calendar');
    if(calendar){
      calendar.innerHTML=monthNames.map((month,index)=>{
        const items=people.filter(p=>p.month===index+1).sort((a,b)=>a.day-b.day || a.name.localeCompare(b.name,'pt-BR'));
        return `<section class="birthday-month ${now.getMonth()===index?'is-current':''}">
          <h3>${month.charAt(0).toUpperCase()+month.slice(1)} ${now.getMonth()===index?'<span>Mês atual</span>':''}</h3>
          ${items.length?`<ul>${items.map(p=>`<li><span>${p.name}</span><time>${String(p.day).padStart(2,'0')}/${String(p.month).padStart(2,'0')}</time></li>`).join('')}</ul>`:'<p class="birthday-empty">Nenhuma data cadastrada.</p>'}
        </section>`;
      }).join('');
    }
  }

  function bindModal(){
    const modal=document.getElementById('birthday-modal');
    if(!modal) return;
    const open=()=>{ modal.hidden=false; document.body.classList.add('birthday-modal-open'); const b=modal.querySelector('.birthday-close'); if(b) b.focus(); };
    const close=()=>{ modal.hidden=true; document.body.classList.remove('birthday-modal-open'); };
    document.addEventListener('click',(e)=>{
      if(e.target.closest('[data-birthday-open]')) open();
      if(e.target.closest('[data-birthday-close]')) close();
    });
    document.addEventListener('keydown',(e)=>{ if(e.key==='Escape' && !modal.hidden) close(); });
  }

  async function load(){
    bindModal();
    try{
      const controller=new AbortController();
      const timer=setTimeout(()=>controller.abort(),4500);
      const res=await fetch(CSV_URL,{signal:controller.signal,cache:'no-store'});
      clearTimeout(timer);
      if(!res.ok) throw new Error('sheet unavailable');
      const parsed=normalizeFromSheet(parseCSV(await res.text()));
      if(parsed.length<5) throw new Error('invalid sheet data');
      render(parsed,'sheet');
    }catch(_){
      render(fallback,'fallback');
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',load);
  else load();
})();
