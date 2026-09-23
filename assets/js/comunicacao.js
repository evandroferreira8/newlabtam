(function(){
  const esc = (value) => String(value || '').replace(/[&<>"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[char]));

  const news = [
    {
      title: 'LabTam fortalece pesquisa, formação e inovação em tecnologia ambiental',
      tag: 'Institucional',
      text: 'Acompanhe as principais frentes do laboratório em caracterização de biomassa, materiais, sustentabilidade e apoio a projetos multiusuários.',
      image: 'assets/images/equipe-home.jpg',
      href: 'sobre.html'
    },
    {
      title: 'Infraestrutura analítica conecta ciência, energia e sustentabilidade',
      tag: 'Infraestrutura',
      text: 'Equipamentos e métodos do LabTam apoiam pesquisas em materiais, catálise, biomassa, hidrogênio e processos ambientais.',
      image: 'assets/images/sobre_LabTAm2.jpg',
      href: 'equipamentos.html'
    },
    {
      title: 'Equipe multidisciplinar amplia a divulgação científica do LabTam',
      tag: 'Equipe',
      text: 'Pesquisadores, técnicos, pós-graduandos, estudantes e comunicação trabalham juntos para dar visibilidade a resultados e oportunidades.',
      image: 'assets/images/sobre_LabTAm3.jpeg',
      href: 'equipe.html'
    }
  ];

  const social = [
    { name: 'YouTube', handle: '@ufrn.labtam', text: 'Vídeos institucionais, registros de atividades e conteúdos de divulgação científica.', href: 'https://www.youtube.com/@ufrn.labtam' },
    { name: 'Instagram', handle: '@labtam.ufrn', text: 'Bastidores, eventos, chamadas, equipe e rotina do laboratório em formato rápido.', href: 'https://www.instagram.com/labtam.ufrn/' },
    { name: 'LinkedIn', handle: 'LabTam UFRN', text: 'Atualizações institucionais, conexões profissionais e comunicação com parceiros.', href: 'https://www.linkedin.com/company/labtam-ufrn' }
  ];

  const ufrn = [
    { title: 'Portal UFRN', type: 'Institucional', text: 'Publicações, reportagens e notícias que ampliam a circulação institucional das ações do LabTam.', href: 'https://ufrn.br/' },
    { title: 'Centro de Ciências Exatas e da Terra', type: 'CCET', text: 'Contexto acadêmico do LabTam na UFRN e conexão com ensino, pesquisa e extensão.', href: 'https://ccet.ufrn.br/' },
    { title: 'Programas de pós-graduação', type: 'Formação', text: 'Pesquisa e formação avançada conectadas às linhas científicas desenvolvidas no laboratório.', href: 'https://posgraduacao.ufrn.br/' }
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
          <a class="text-link" href="${esc(item.href)}">Acessar conteúdo</a>
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
          <h3>LabTam em vídeo</h3>
          <p>Um ponto de acesso para acompanhar apresentações, registros e conteúdos audiovisuais do Laboratório de Tecnologia Ambiental.</p>
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
