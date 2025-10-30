import { startFlowerAnimation } from './animations/flower.js';
import { startLogoAnimations } from './animations/logos.js';

document.addEventListener("DOMContentLoaded", () => {
  fetch('components/header.html')
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML('afterbegin', html);
  })
  .then(() => import('./sitemenu.js'))
  .then(module => {
    module.initMenu(); // activeer het menu
  })
  .catch(err => console.error('Menu laden mislukt:', err));


  // Animaties starten zoals je al had
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    startFlowerAnimation();

    setTimeout(() => {
      startLogoAnimations();
    }, 4000);
  }

});

// Load about section
fetch('sections/about.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('about-placeholder').innerHTML = data;
  });
