export function startLogoAnimations() {
  const cvLogo = document.getElementById("cv-logo");
  const salonLogo = document.getElementById("salon-logo");

  cvLogo.classList.add("show");

  setTimeout(() => {
    cvLogo.classList.add("move-left");
  }, 1500);

  setTimeout(() => {
    cvLogo.classList.add("glow");
  }, 3000);

  setTimeout(() => {
    salonLogo.classList.add("fade-in");
  }, 2700);
}
