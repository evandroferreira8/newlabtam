(function(){
  const photos = [
    { src: 'assets/images/equipe-home.jpg', alt: 'Equipe do LabTam/UFRN' },
    { src: 'assets/images/sobre_LabTAm1.jpg', alt: 'Registro do LabTam/UFRN' },
    { src: 'assets/images/sobre_LabTAm2.jpg', alt: 'Atividade do LabTam/UFRN' },
    { src: 'assets/images/sobre_LabTAm3.jpeg', alt: 'Equipe e infraestrutura do LabTam/UFRN' }
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
    }, 5600);
  }

  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
