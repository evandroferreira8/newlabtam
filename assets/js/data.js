/* Os dados do site são carregados pelo runtime principal. */

(function(){
  const runAfterRuntime = () => {
    window.setTimeout(() => {
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

      if (document.body && document.body.dataset.page === 'comunicacao') {
        document.querySelectorAll('a[href="comunicacao.html"]').forEach((link) => link.classList.add('active'));
      }

      document.querySelectorAll('a[href="noticias.html"], a[href="midias.html"]').forEach((link) => {
        link.setAttribute('href', 'comunicacao.html');
      });
    }, 0);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAfterRuntime);
  } else {
    runAfterRuntime();
  }
})();
