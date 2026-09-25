/* Ajustes globais carregados antes do runtime principal. */

(function(){
  const partners = [
    {name:'UFRN',label:'Universidade Federal do Rio Grande do Norte',logo:'UFRN.png'},
    {name:'ANEEL',label:'Agência Nacional de Energia Elétrica',logo:'ANEEL.png'},
    {name:'ANP',label:'Agência Nacional do Petróleo, Gás Natural e Biocombustíveis',logo:'ANP.png'},
    {name:'CAPES',label:'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior',logo:'CAPES.png'},
    {name:'CNPq',label:'Conselho Nacional de Desenvolvimento Científico e Tecnológico',logo:'CNPQ.png'},
    {name:'FINEP',label:'Financiadora de Estudos e Projetos',logo:'FINEP.png'},
    {name:'FUNPEC',label:'Fundação Norte-Rio-Grandense de Pesquisa e Cultura',logo:'FUNPEC.png'},
    {name:'GALP',label:'Energia',logo:'GAPL.png'},
    {name:'Karoon',label:'Energy',logo:'KAROON.png'},
    {name:'Petrobras',label:'Petróleo Brasileiro S.A.',logo:'PETROBRAS.png'},
    {name:'PRH',label:'Programa de Formação de Recursos Humanos',logo:'PRH.png'},
    {name:'TotalEnergies',label:'Energia',logo:'TOTAL.png'}
  ];

  function injectPolishStyles(){
    if (document.getElementById('labtam-polish-style')) return;
    const style = document.createElement('style');
    style.id = 'labtam-polish-style';
    style.textContent = `
      .footer-contact-list{display:grid;gap:10px;margin-top:2px}
      .footer-contact-item{display:grid;gap:2px;margin:0 0 2px;color:rgba(255,255,255,.92)}
      .footer-contact-item b{font-size:.73rem;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.62)}
      .footer-contact-item a,.footer-contact-item span,.footer-contact-item address{margin:0;color:#fff;line-height:1.45;font-style:normal;display:block}
      .footer-contact-item address{max-width:260px;color:rgba(255,255,255,.86)}
      .partners-logo-carousel{position:relative;overflow:hidden;padding:10px 0;mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
      .partners-logo-track{display:flex;gap:14px;width:max-content;animation:labtam-partners-scroll 42s linear infinite}
      .partners-logo-carousel:hover .partners-logo-track{animation-play-state:paused}
      .partner-logo-card{width:210px;min-height:126px;display:grid;grid-template-rows:68px auto;align-items:center;gap:10px;padding:18px 20px;border-radius:18px;background:#fff;border:1px solid rgba(22,65,148,.11);box-shadow:0 16px 36px rgba(15,40,80,.07)}
      .partner-logo-box{height:68px;display:flex;align-items:center;justify-content:center;padding:4px 6px}
      .partner-logo-box img{display:block;max-width:100%;max-height:62px;width:auto;height:auto;object-fit:contain}
      .partner-logo-meta{display:grid;gap:3px;text-align:center}
      .partner-logo-meta strong{font-family:var(--display);font-size:.92rem;letter-spacing:0;color:var(--ink);line-height:1.12}
      .partner-logo-meta span{font-size:.72rem;line-height:1.25;color:#60758f}
      @keyframes labtam-partners-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      @media(max-width:760px){.footer-contact-item address{max-width:none}.partner-logo-card{width:180px;min-height:114px;grid-template-rows:60px auto;padding:14px}.partner-logo-box{height:60px}.partner-logo-box img{max-height:54px}.partner-logo-meta strong{font-size:.86rem}.partner-logo-meta span{font-size:.68rem}.partners-logo-track{animation-duration:34s}}
      @media(prefers-reduced-motion:reduce){.partners-logo-track{animation:none;flex-wrap:wrap;width:auto}.partners-logo-carousel{mask-image:none}}
    `;
    document.head.appendChild(style);
  }

  function polishNavigation(){
    const navRoots = document.querySelectorAll('.main-nav, .mobile-menu');
    navRoots.forEach((nav) => {
      const newsLink = nav.querySelector('a[href="noticias.html"]');
      const mediaLink = nav.querySelector('a[href="midias.html"]');
      if (newsLink) {
        newsLink.textContent = 'Comunicação';
        newsLink.setAttribute('href', 'comunicacao.html');
      }
      if (mediaLink) mediaLink.remove();
    });

    document.querySelectorAll('a').forEach((link) => {
      const label = link.textContent.trim();
      if (label === 'Redes e mídia' || label === 'Mídias e redes sociais') link.textContent = 'Comunicação';
    });

    if (document.body && document.body.dataset.page === 'comunicacao') {
      document.querySelectorAll('a[href="comunicacao.html"]').forEach((link) => link.classList.add('active'));
    }

    document.querySelectorAll('a[href="noticias.html"], a[href="midias.html"]').forEach((link) => {
      link.setAttribute('href', 'comunicacao.html');
    });
  }

  function polishFooter(){
    const footer = document.querySelector('.footer');
    if (!footer) return false;
    const title = Array.from(footer.querySelectorAll('small')).find((item) => item.textContent.trim().toUpperCase() === 'CONTATO');
    if (!title || !title.parentElement || title.parentElement.querySelector('.footer-contact-list')) return true;
    title.parentElement.innerHTML = `
      <small>CONTATO</small>
      <div class="footer-contact-list">
        <div class="footer-contact-item"><b>E-mail</b><a href="mailto:ufrn.labtam@gmail.com">ufrn.labtam@gmail.com</a></div>
        <div class="footer-contact-item"><b>Telefone</b><a href="tel:+558433422323">+55 (84) 3342-2323 - R 142</a></div>
        <div class="footer-contact-item"><b>Endereço</b><address>Av. Sen. Salgado Filho, Lagoa Nova, Campus Universitário, Natal - RN, 59075-000</address></div>
      </div>
    `;
    return true;
  }

  function rebuildPartners(){
    const strip = document.getElementById('home-partners');
    if (!strip || strip.dataset.enhanced === 'true') return false;
    const cards = partners.map((partner) => `<article class="partner-logo-card"><div class="partner-logo-box"><img src="assets/images/parceiros/${partner.logo}" alt="${partner.name}" loading="lazy"></div><div class="partner-logo-meta"><strong>${partner.name}</strong><span>${partner.label}</span></div></article>`).join('');
    strip.className = 'partners-logo-carousel';
    strip.dataset.enhanced = 'true';
    strip.innerHTML = `<div class="partners-logo-track" aria-label="Parceiros do LabTam">${cards}${cards}</div>`;
    return true;
  }

  function applyPolish(){
    injectPolishStyles();
    polishNavigation();
    polishFooter();
    rebuildPartners();
  }

  function runAfterRuntime(){
    [0, 160, 600, 1400].forEach((delay) => window.setTimeout(applyPolish, delay));
    const observer = new MutationObserver(() => applyPolish());
    observer.observe(document.body, {childList:true, subtree:true});
    window.setTimeout(() => observer.disconnect(), 5000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAfterRuntime);
  } else {
    runAfterRuntime();
  }
})();
