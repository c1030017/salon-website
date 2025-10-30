// js/prices.js

const data = [
  { id: 1, title: "Ontspanningsmassage", category: "Massage", price: "€75/uur", duration: "45 min", image: "./assets/images/prices/ontspanning.png", desc: "Heerlijk ontspannen of juistklachtgericht. Keuze uit rug, nek, schouders of full body." },
  { id: 2, title: "Head Spa", category: "Speciale Behandelingen", price: "€80/uur", duration: "50 min", image: "./assets/images/prices/headspa.png", desc: "Luxe behandeling vanhoofdhuid en haar metmassage, reiniging enontspanning." },
  { id: 3, title: "Kleine Deelbehandeling", category: "Medische Pedicure", price: "€25", duration: "60 min", image: "./assets/images/prices/deelbehandeling.png", desc: "Gericht op één probleem,zoals eelt, likdoorn ofingegroeide nagel." },
  { id: 4, title: "Plasma lift (huidverstrakking)", category: "Speciale Behandelingen", price: "vanaf €150", duration: "45 min", image: "./assets/images/prices/plasmalift.jpg", desc: "Behandeling met plasmaflits voor huidverjonging en rimpelvermindering.<br><br><ul><li>Oogleden boven of onder: €250</li><li>Oogleden boven & onder samen: €450</li><li>Andere zones (lip, wangen, hals etc.): €150 – €400</li></ul>" },
  { id: 5, title: "Risicovoet behandeling", category: "Medische Pedicure", price: "€60", duration: "60 min", image: "./assets/images/prices/risico.png", desc: "Speciale zorg en screening bijmedische indicatie." },
  { id: 6, title: "Kleine Zones", category: "Ontharing", price: "€15", duration: "60 min", image: "./assets/images/prices/ontharingklein.jpg", desc: "Opties; wenkbrauwen,bovenlip, kin, oksels)" },
  { id: 7, title: "Basis Schoonheidsbehandeling", category: "Schoonheidsbehandelingen", price: "€55", duration: "50 min", image: "./assets/images/prices/basis.jpg", desc: "Eenvoudigegezichtsbehandeling metreiniging en verzorging." },
  { id: 8, title: "Sportmassage", category: "Massage", price: "€70/uur", duration: "45 min", image: "./assets/images/prices/sportmassage.png", desc: "Actieve massage om spierenlos te maken, herstel tebevorderen en blessures tevoorkomen." },
  { id: 9, title: "Orthese", category: "Medische Pedicure", price: "€50", duration: "50 min", image: "./assets/images/prices/orthese.png", desc: "Siliconen hulpmiddel omdrukplekken te verlichten" },
  { id: 10, title: "Middelgrote Zones", category: "Ontharing", price: "€70", duration: "45 min", image: "./assets/images/prices/ontharingmiddel.jpg", desc: "Opties; armen, bikinilijn,borstkas, rug" },
  { id: 11, title: "Voetmassage", category: "Medische Pedicure", price: "€45/30min", duration: "25 min", image: "./assets/images/prices/voetmassage.jpg", desc: "Ontspannende massage vanvoeten en onderbenen." },
  { id: 12, title: "Drenagem linfática", category: "Massage", price: "€85/uur", duration: "45 min", image: "./assets/images/prices/drenagem.jpg", desc: "Zachte massage die hetlymfestelsel stimuleert enhelpt bij vochtophoping endetox." },
  { id: 13, title: "Ingegroeide Nagel", category: "Medische Pedicure", price: "€55", duration: "45 min", image: "./assets/images/prices/ingegroeid.png", desc: "Verlichting van pijn encorrectie met eventuelenagelbeugel." },
  { id: 14, title: "PMU Wenkbrauwen", category: "Permanente Make-up", price: "€350", duration: "40 min", image: "./assets/images/prices/pmu.jpg", desc: "Hairstrokes, perfect gevormdewenkbrauwen." },
  { id: 15, title: "Nagelbeugel Plaatsen", category: "Medische Pedicure", price: "€55 p.st.", duration: "60 min", image: "./assets/images/prices/nagelbeugel.jpg", desc: "Corrigeert groei van de nagelen vermindert druk." },
  { id: 16, title: "Bindweefsel massage", category: "Massage", price: "€90/uur", duration: "55 min", image: "./assets/images/prices/bindweefsel.jpg", desc: " Stimulerende massage gerichtop huidverbetering envermindering van cellulite,met cupping." },
  { id: 17, title: "Retouche / bijwerken PMU", category: "Permanente Make-up", price: "€150", duration: "35 min", image: "./assets/images/prices/retouche.jpg", desc: "Opfrisbehandeling na enkelemaanden of jaren." },
  { id: 18, title: "Volledige Pedicure", category: "Medische Pedicure", price: "€55/uur", duration: "25 min", image: "./assets/images/prices/volledig.jpg", desc: "Knippen, verzorgen vannagels, verwijderen van eelt enlikdoorns, behandeling kloven." },
  { id: 19, title: "Huidreiniging (facial)", category: "Schoonheidsbehandelingen", price: "€85/uur", duration: "55 min", image: "./assets/images/prices/facial.jpg", desc: "Dieptereiniging met stomen,peeling en masker voor eenfrisse huid." },
  { id: 20, title: "Nagelreparatie", category: "Medische Pedicure", price: "€35 per nagel", duration: "60 min", image: "./assets/images/prices/nagelreparatie.jpg", desc: "Herstel of opbouw van eenbeschadigde of afgebrokennagel." },
  { id: 21, title: "Grote Zones", category: "Ontharing", price: "€300", duration: "60 min", image: "./assets/images/prices/ontharinggroot.jpg", desc: "Opties; hele benen, Brazilian, volledig lichaam" },
  { id: 22, title: "Steenmassage", category: "Massage", price: "€35/30min", duration: "60 min", image: "./assets/images/prices/steenmassage.jpg", desc: "Ontspannende behandelingmet verwarmde stenen diespieren diep verwarmen." },
];
// js/prices.js

// ====== Masonry + Modal Elementen ======
const masonry = document.getElementById("masonry");
const modal = document.getElementById("price-modal");

const modalEls = {
  image: document.getElementById("modal-image"),
  title: document.getElementById("modal-title"),
  desc: document.getElementById("modal-desc"),
  category: document.getElementById("modal-category"),
  price: document.getElementById("modal-price"),
  duration: document.getElementById("modal-duration"),
};

// ====== Helper: categorie naar CSS-class ======
function categoryClass(raw) {
  const key = raw
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // accents weg
    .toLowerCase().trim();

  if (/^massage(s)?$/.test(key)) return 'massage';
  if (key.includes('medische') && key.includes('pedicure')) return 'medische-pedicure';
  if (key.replace(/\s+/g, '').includes('schoonheidsbehandelingen')) return 'schoonheidsbehandelingen';
  if (key.includes('permanente') && (key.includes('make-up') || key.includes('makeup'))) return 'permanente-make-up';
  if (key.includes('speciale')) return 'speciale-behandelingen';
  if (key.includes('ontharing')) return 'ontharing';
  return 'category-default';
}

// ====== Cards Renderen ======
function renderCards(items) {
  const html = items.map(item => `
    <article class="masonry-item">
      <a class="card" href="#" data-id="${item.id}">
        <img class="card__image" src="${item.image}" alt="${item.title}" loading="lazy" />
        <div class="card__overlay top">
          <h3 class="card__title">${item.title}</h3>
        </div>
        <div class="card__overlay bottom">
          <span class="chip card__category ${categoryClass(item.category)}">${item.category}</span>
          <span class="chip card__price">${item.price}</span>
        </div>
      </a>
    </article>
  `).join("");
  masonry.innerHTML = html;
}

// ====== Modal open/dicht ======
function openModal(item) {
  modalEls.image.src = item.image;
  modalEls.image.alt = item.title;
  modalEls.title.textContent = item.title;
  modalEls.desc.innerHTML = item.desc;

  // Reset categorie classes en zet nieuwe
  modalEls.category.className = "chip chip--modal price-modal__category " + categoryClass(item.category);
  modalEls.category.textContent = item.category;

  modalEls.price.textContent = item.price;
  modalEls.duration.textContent = item.duration;

  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// ====== Event Listeners ======
function wireUp(data) {
  // Klik op een kaart -> modal openen
  masonry.addEventListener("click", (e) => {
    const link = e.target.closest("a.card");
    if (!link) return;
    e.preventDefault();
    const id = Number(link.dataset.id);
    const item = data.find(x => x.id === id);
    if (item) openModal(item);
  });

  // Klik op backdrop of close-knop -> modal sluiten
  modal.addEventListener("click", (e) => {
    if (e.target.matches("[data-close]")) closeModal();
  });

  // ESC-toets sluit modal ook maar niet nodig
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
      closeModal();
    }
  });
}

// ====== Init ======
renderCards(data);
wireUp(data);

