// scroll.js
document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero-section');
  const staticHeader = document.querySelector('.static-header');
  const animatedCv = document.getElementById('cv-logo');
  const animatedSalon = document.getElementById('salon-logo');
  const flower = document.querySelector('.flower-container'); // container voor bloem

  if (!hero || !staticHeader) return;

  // Reduced motion respecteren
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    staticHeader.classList.add('visible');
    if (animatedCv) animatedCv.classList.add('animated-hidden');
    if (animatedSalon) animatedSalon.classList.add('animated-hidden');
    return;
  }

  // ====== BLOEM HANDLING ======
  let flowerAtEnd = false;
  const setFlowerEndPosition = () => {
    if (flower && !flowerAtEnd) {
      flower.style.transition = 'transform 0.8s ease';
      flower.style.transform = 'translate(calc(100vw - 150px), calc(100vh - 150px))';
      flowerAtEnd = true;
    }
  };

  // Na animatie bloem fixeren
  const flowerAnim = document.querySelector('.flower-animation');
  if (flowerAnim) {
    flowerAnim.addEventListener('animationend', () => {
      setFlowerEndPosition();
    });
  }

  // ====== SCROLL / INTERSECTION HANDLING ======
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio < 0.4) {
        // Hero uit beeld -> toon statische logos
        staticHeader.classList.add('visible');
        if (animatedCv) animatedCv.classList.add('animated-hidden');
        if (animatedSalon) animatedSalon.classList.add('animated-hidden');

        // Bloem altijd naar eindpositie
        setFlowerEndPosition();

      } else {
        // Hero grotendeels in beeld -> verberg statische logos
        staticHeader.classList.remove('visible');
        if (animatedCv) animatedCv.classList.remove('animated-hidden');
        if (animatedSalon) animatedSalon.classList.remove('animated-hidden');
      }
    });
  }, { threshold: [0, 0.4] });

  observer.observe(hero);

  // ====== PAGE LOAD CHECK ======
  // Bij refresh halverwege pagina checken of hero al uit beeld is
  const rect = hero.getBoundingClientRect();
  if (rect.bottom < window.innerHeight * 0.6) {
    staticHeader.classList.add('visible');
    if (animatedCv) animatedCv.classList.add('animated-hidden');
    if (animatedSalon) animatedSalon.classList.add('animated-hidden');
    setFlowerEndPosition();
  }
});
