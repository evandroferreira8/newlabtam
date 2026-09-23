(function(){
  const photos = [
    { src: 'assets/images/carousel.png', alt: 'Registros da equipe do LabTam/UFRN' },
    { src: 'assets/images/equipe-home.jpg', alt: 'Equipe do LabTam/UFRN' },
    { src: 'assets/images/materias/materia_1786459290_6a7b349aa08f0.jpeg', alt: 'Atividade de pesquisa e comunicação do LabTam/UFRN' },
    { src: 'assets/images/materias/materia_1786539685_6a7c6ea5c3bdb.jpg', alt: 'Registro institucional relacionado ao LabTam/UFRN' }
  ];

  function init(){
    const figure = document.querySelector('.hero-photo');
    if (!figure) return;
    figure.classList.add('hero-photo-carousel');
    figure.innerHTML = '<div class="hero-photo-stack" aria-live="polite"></div>';
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

    let current = 0;
    window.setInterval(() => {
      const slides = figure.querySelectorAll('.hero-slide');
      if (slides.length < 2) return;
      slides[current].classList.remove('is-active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('is-active');
    }, 6200);
  }

  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
