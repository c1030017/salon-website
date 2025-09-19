import { startFlowerAnimation } from './animations/flower.js';
import { startLogoAnimations } from './animations/logos.js';

document.addEventListener("DOMContentLoaded", () => {
  fetch('components/header.html')
    .then(res => res.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
    })
    .then(() => {
  import('./menu.js').then(module => {
    module.markActivePage(); // <-- we roepen straks een functie aan uit menu.js
  });
});


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
