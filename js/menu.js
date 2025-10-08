const flower     = document.getElementById("flower-open");
const cvLogo     = document.querySelector('#hero-section #cv-logo');
const salonLogo  = document.querySelector('#hero-section #salon-logo');
const staticHdr  = document.querySelector('.static-header');

let logoShifted = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // === Scroll naar beneden ===
  if (scrollY > 100 && !logoShifted) {
    logoShifted = true;

    // 1) Static header zichtbaar maken (fade-in from top)
    if (staticHdr) staticHdr.classList.add('visible');

    // 2) Hero-logo's wegfaden zodat je geen dubbele ziet
    [cvLogo, salonLogo].forEach(el => {
      if (!el) return;
      el.classList.add('animated-hidden');
    });

    // 3) Bloem naar eindpositie schuiven (niet terughalen)
    if (flower && !flower.classList.contains("flower-fixed")) {
      flower.classList.add("flower-fixed");
      // Niet verwijderen: anders springt hij terug.
      // flower.classList.remove("move-to-corner", "fade-in");
    }
  }

  // === Scroll terug naar boven ===
  if (scrollY <= 50 && logoShifted) {
    logoShifted = false;

    // 1) Static header verbergen (fade-out naar boven)
    if (staticHdr) staticHdr.classList.remove('visible');

    // 2) Hero-logo's weer tonen
    [cvLogo, salonLogo].forEach(el => {
      if (!el) return;
      el.classList.remove('animated-hidden');
    });

    // 3) Bloem blijft op eindpositie (niets doen)
  }
});
