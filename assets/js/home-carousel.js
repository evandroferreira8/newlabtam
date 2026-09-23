(function(){
  const photos = [
    { src: 'assets/images/home-carousel-1.jpg', alt: 'Equipe do LabTam em evento científico' },
    { src: 'assets/images/home-carousel-2.jpg', alt: 'Integrantes do LabTam em atividade acadêmica' },
    { src: 'assets/images/home-carousel-3.jpg', alt: 'Equipe do LabTam em reunião institucional' },
    { src: 'assets/images/home-carousel-4.jpg', alt: 'Integrantes do LabTam em registro de equipe' },
    { src: 'assets/images/home-carousel-5.jpg', alt: 'Equipe do LabTam reunida em auditório' }
  ];

  function init(){
    const figure = document.querySelector('.hero-photo');
    if (!figure) return;
    figure.classList.add('hero-photo-carousel');
    figure.innerHTML = '<div class="hero-photo-stack" aria-live="polite"></div><div class="hero-carousel-controls" aria-label="Controles do carrossel"><button class="hero-carousel-btn" type="button" data-dir="prev" aria-label="Foto anterior">‹</button><button class="hero-carousel-btn" type="button" data-dir="next" aria-label="Próxima foto">›</button></div>';
    const stack = figure.querySelector('.hero-photo-stack');
    photos.forEach((photo, index) => {
      const img = document.createElement('img');
      img.src = photo.src;
      img.alt = photo.alt;
      img.decoding = 'async';
      img.loading = index === 0 ? 'eager' : 'lazy';
      img.className = 'hero-slide' + (index === 0 ? ' is-active' : '');
      stack.appendChild(img);
    });

    const slides = figure.querySelectorAll('.hero-slide');
    let current = 0;
    let timer;

    function show(next){
      if (slides.length < 2 || next === current) return;
      slides[current].classList.remove('is-active');
      current = (next + slides.length) % slides.length;
      slides[current].classList.add('is-active');
    }

    function restart(){
      window.clearInterval(timer);
      timer = window.setInterval(() => show(current + 1), 6200);
    }

    figure.querySelectorAll('.hero-carousel-btn').forEach((button) => {
      button.addEventListener('click', () => {
        show(current + (button.dataset.dir === 'next' ? 1 : -1));
        restart();
      });
    });

    restart();
  }

  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
