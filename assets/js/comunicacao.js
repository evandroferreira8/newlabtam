(function(){
  const esc = (value) => String(value || '').replace(/[&<>"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));

  const news = [
    {
      title: 'LabTam fortalece pesquisa, formacao e inovacao em tecnologia ambiental',
      tag: 'Institucional',
      text: 'Acompanhe as principais frentes do laboratorio em caracterizacao de biomassa, materiais, sustentabilidade e apoio a projetos multiusuarios.',
      image: 'assets/images/equipe-home.jpg',
      href: 'sobre.html'
    },
    {
      title: 'Infraestrutura analitica conecta ciencia, energia e sustentabilidade',
      tag: 'Infraestrutura',
      text: 'Equipamentos e metodos do LabTam apoiam pesquisas em materiais, catalise, biomassa, hidrogenio e processos ambientais.',
      image: 'assets/images/sobre_LabTAm2.jpg',
      href: 'equipamentos.html'
    },
    {
      title: 'Equipe multidisciplinar amplia a divulgacao cientifica do LabTam',
      tag: 'Equipe',
      text: 'Pesquisadores, tecnicos, pos-graduandos, estudantes e comunicacao trabalham juntos para dar visibilidade a resultados e oportunidades.',
      image: 'assets/images/sobre_LabTAm3.jpeg',
      href: 'equipe.html'
    }
  ];

  const social = [
    { name: 'YouTube', handle: '@ufrn.labtam', text: 'Videos institucionais, registros de atividades e conteudos de divulgacao cientifica.', href: 'https://www.youtube.com/@ufrn.labtam' },
    { name: 'Instagram', handle: '@labtam.ufrn', text: 'Bastidores, eventos, chamadas, equipe e rotina do laboratorio em formato rapido.', href: 'https://www.instagram.com/labtam.ufrn/' },
    { name: 'LinkedIn', handle: 'LabTam UFRN', text: 'Atualizacoes institucionais, conexoes profissionais e comunicacao com parceiros.', href: 'https://www.linkedin.com/company/labtam-ufrn' }
  ];

  const ufrn = [
    { title: 'Portal UFRN', type: 'Institucional', text: 'Publicacoes, reportagens e noticias que ampliam a circulacao institucional das acoes do LabTam.', href: 'https://ufrn.br/' },
    { title: 'Centro de Ciencias Exatas e da Terra', type: 'CCET', text: 'Contexto academico do LabTam na UFRN e conexao com ensino, pesquisa e extensao.', href: 'https://ccet.ufrn.br/' },
    { title: 'Programas de pos-graduacao', type: 'Formacao', text: 'Pesquisa e formacao avancada conectadas as linhas cientificas desenvolvidas no laboratorio.', href: 'https://posgraduacao.ufrn.br/' }
  ];

  function renderNews(){
    const root = document.getElementById('news-grid');
    if (!root) return;
    root.innerHTML = news.map((item) => `
      <article class="card news-card communication-news-card">
        <img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy">
        <div class="news-card-body">
          <span class="meta">${esc(item.tag)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.text)}</p>
          <a class="text-link" href="${esc(item.href)}">Acessar conteudo</a>
        </div>
      </article>`).join('');
  }

  function renderVideo(){
    const root = document.getElementById('media-featured-video');
    if (!root) return;
    root.innerHTML = `
      <div class="communication-video-card">
        <div class="communication-video-mark" aria-hidden="true"><span></span></div>
        <div>
          <p class="eyebrow">Canal oficial</p>
          <h3>LabTam em video</h3>
          <p>Um ponto de acesso para acompanhar apresentacoes, registros e conteudos audiovisuais do Laboratorio de Tecnologia Ambiental.</p>
          <div class="button-row"><a class="btn btn-primary" href="https://www.youtube.com/@ufrn.labtam" target="_blank" rel="noreferrer">Abrir canal no YouTube</a></div>
        </div>
      </div>`;
  }

  function renderSocial(){
    const root = document.getElementById('media-social-cards');
    if (!root) return;
    root.innerHTML = social.map((item) => `
      <a class="card social-card" href="${esc(item.href)}" target="_blank" rel="noreferrer">
        <span>${esc(item.name)}</span>
        <strong>${esc(item.handle)}</strong>
        <p>${esc(item.text)}</p>
      </a>`).join('');
  }

  function renderUfrn(){
    const root = document.getElementById('media-ufrn-articles');
    if (!root) return;
    root.innerHTML = ufrn.map((item) => `
      <a class="card ufrn-media-card" href="${esc(item.href)}" target="_blank" rel="noreferrer">
        <span class="pub-meta">${esc(item.type)}</span>
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.text)}</p>
      </a>`).join('');
  }

  function init(){
    renderNews();
    renderVideo();
    renderSocial();
    renderUfrn();
  }

  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
