const flower     = document.getElementById("flower-open");
const cvLogo     = document.querySelector('#hero-section #cv-logo');
const salonLogo  = document.querySelector('#hero-section #salon-logo');
const staticHdr  = document.querySelector('.static-header');

let logoShifted = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 100 && !logoShifted) {
    logoShifted = true;

    staticHdr?.classList.add('visible');

    [cvLogo, salonLogo].forEach(el => el?.classList.add('animated-hidden'));

    if (flower && !flower.classList.contains("flower-fixed")) {
      flower.classList.add("flower-fixed");
    }
  }

  if (scrollY <= 50 && logoShifted) {
    logoShifted = false;

    staticHdr?.classList.remove('visible');

    [cvLogo, salonLogo].forEach(el => el?.classList.remove('animated-hidden'));
  }
});