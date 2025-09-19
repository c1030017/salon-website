export function skipFlowerAnimation() {
  const flowerClosed = document.getElementById("flower-closed");
  const flowerOpen = document.getElementById("flower-open");

  if (flowerClosed && flowerOpen) {
    flowerClosed.classList.add("hidden"); // eventueel `display: none`
    flowerOpen.classList.remove("fade-in", "move-to-corner");
    flowerOpen.classList.add("force-corner"); // klasse maken in CSS
  }
}



export function startFlowerAnimation() {
  const flowerClosed = document.getElementById("flower-closed");
  const flowerOpen = document.getElementById("flower-open");
  const cvLogo = document.getElementById("cv-logo");
  const salonLogo = document.getElementById("salon-logo");

  // Stap 1: Na 1 seconde begint animatie
  setTimeout(() => {
    flowerClosed.style.opacity = 0;
    flowerOpen.classList.remove("hidden");
    flowerOpen.style.opacity = 1;

    // Stap 2: Open bloem beweegt naar hoek
    setTimeout(() => {
      flowerOpen.classList.add("move-to-corner");
      cvLogo.classList.add("show");

      // Stap 3: CV-logo beweegt naar links + glow
      setTimeout(() => {
        cvLogo.classList.add("move-left");

        setTimeout(() => {
          cvLogo.classList.add("glow");
        }, 1500);

        // Stap 4: Salon-logo verschijnt
        setTimeout(() => {
          salonLogo.classList.add("fade-in");
        }, 1200);

      }, 1500);
    }, 1500);
  }, 1000);
}


