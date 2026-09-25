(()=>{
  const grid=document.getElementById('ods-grid');
  const panel=document.getElementById('ods-panel');
  if(!grid||!panel)return;
  const ods=[
    {id:4,title:'Educação de Qualidade',color:'#c5192d',summary:'Assegurar a educação inclusiva, equitativa e de qualidade, promovendo oportunidades de aprendizagem ao longo da vida.',relation:'No LabTam, esse objetivo aparece na formação científica, na iniciação à pesquisa, na capacitação técnica e na divulgação do conhecimento produzido no laboratório.'},
    {id:5,title:'Igualdade de Gênero',color:'#ff3a21',summary:'Alcançar a igualdade de gênero e fortalecer a participação de meninas e mulheres em todos os espaços da sociedade.',relation:'A atuação do LabTam valoriza a presença feminina na ciência, na pesquisa aplicada, na liderança acadêmica e na construção de equipes diversas.'},
    {id:7,title:'Energia Limpa e Acessível',color:'#fcc30b',summary:'Garantir acesso confiável, sustentável, moderno e a preço acessível à energia para todas as pessoas.',relation:'As pesquisas do laboratório dialogam com soluções energéticas, hidrogênio, biomassa, materiais e processos voltados a tecnologias mais sustentáveis.'},
    {id:9,title:'Indústria, Inovação e Infraestrutura',color:'#fd6925',summary:'Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.',relation:'O LabTam contribui com desenvolvimento tecnológico, caracterização de materiais, infraestrutura analítica e aproximação entre universidade, setor produtivo e sociedade.'},
    {id:13,title:'Ação Contra a Mudança Global do Clima',color:'#3f7e44',summary:'Tomar medidas urgentes para combater a mudança do clima e seus impactos.',relation:'Projetos ligados a mitigação ambiental, captura de CO2, processos sustentáveis e redução de impactos climáticos se conectam diretamente a esse objetivo.'},
    {id:14,title:'Vida na Água',color:'#0a97d9',summary:'Conservar e usar de forma sustentável oceanos, mares e recursos marinhos para o desenvolvimento sustentável.',relation:'O ODS 14 se relaciona às pesquisas que apoiam monitoramento, conservação e proteção de ambientes aquáticos e recursos hídricos.'},
    {id:15,title:'Vida Terrestre',color:'#56c02b',summary:'Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, combatendo a degradação ambiental.',relation:'O laboratório se conecta a esse objetivo por meio de estudos sobre sustentabilidade, biodiversidade, biomassa e redução de impactos em ecossistemas terrestres.'},
    {id:17,title:'Parcerias e Meios de Implementação',color:'#19486a',summary:'Fortalecer os meios de implementação e revitalizar parcerias para o desenvolvimento sustentável.',relation:'A atuação do LabTam depende de cooperação entre universidade, instituições públicas, empresas, comunidades, redes de pesquisa e parceiros estratégicos.'}
  ].map(item=>({...item,icon:`assets/images/ods/icons/${item.id}.png`,photo:`assets/images/ods/photos/${item.id}.jpg`}));
  const esc=(s)=>String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  function drawCards(){
    grid.innerHTML=ods.map((item,index)=>`<button class="ods-card${index===0?' active':''}" type="button" data-ods="${item.id}" aria-pressed="${index===0?'true':'false'}"><img class="ods-official-icon" src="${esc(item.icon)}" alt="ODS ${item.id}: ${esc(item.title)}" loading="lazy"></button>`).join('');
    grid.querySelectorAll('.ods-card').forEach(button=>button.addEventListener('click',()=>select(Number(button.dataset.ods))));
  }
  function select(id){
    const item=ods.find(x=>x.id===id)||ods[0];
    grid.querySelectorAll('.ods-card').forEach(button=>{const active=Number(button.dataset.ods)===item.id;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    panel.dataset.ods=item.id;
    panel.style.setProperty('--ods-color',item.color);
    panel.innerHTML=`<figure class="ods-photo"><img src="${esc(item.photo)}" alt="Equipe do LabTam segurando o ODS ${item.id}: ${esc(item.title)}" loading="lazy"></figure><div class="ods-copy"><p class="eyebrow">ODS ${item.id}</p><h3>${esc(item.title)}</h3><p>${esc(item.summary)}</p><div class="ods-relation"><strong>Conexão com o LabTam</strong><span>${esc(item.relation)}</span></div><a class="text-link" href="https://brasil.un.org/pt-br/sdgs" target="_blank" rel="noreferrer">Saiba mais na ONU Brasil →</a></div>`;
  }
  drawCards();
  select(4);
})();
