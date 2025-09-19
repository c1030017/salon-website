const flower = document.getElementById("flower-open");
const cvLogo = document.getElementById("cv-logo");
const salonLogo = document.getElementById("salon-logo");

let logoShifted = false;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // === Scroll naar beneden ===
  if (scrollY > 50 && !logoShifted) {
    logoShifted = true;

    // Bloem naar eindpositie schuiven (indien nog niet daar)
    if (flower && !flower.classList.contains("flower-fixed")) {
      flower.classList.add("flower-fixed");
      flower.classList.remove("move-to-corner", "fade-in");
    }

    // Logo's naar hoek
    if (cvLogo) cvLogo.classList.add("scroll-shift");
    if (salonLogo) salonLogo.classList.add("scroll-shift");
  }

  // === Scroll terug naar boven ===
  if (scrollY <= 50 && logoShifted) {
    logoShifted = false;

    // Logo's terug naar animatie-eindpositie
    if (cvLogo) {
      cvLogo.classList.add("returning");
      cvLogo.classList.remove("scroll-shift");
      setTimeout(() => {
        cvLogo.classList.remove("returning");
      }, 800);
    }

    if (salonLogo) {
      salonLogo.classList.add("returning");
      salonLogo.classList.remove("scroll-shift");
      setTimeout(() => {
        salonLogo.classList.remove("returning");
      }, 800);
    }

    // Bloem blijft op eindpositie
  }
});
