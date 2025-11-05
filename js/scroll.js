// scroll.js (vervang volledige inhoud door dit)
(function () {
  const LOG = (...args) => console.debug('[static-header]', ...args);

  function init() {
    const hero = document.getElementById('hero-section');           // <-- check dit ID
    const staticHeader = document.querySelector('.static-header');
    const animatedCv = document.getElementById('cv-logo');
    const animatedSalon = document.getElementById('salon-logo');

    if (!staticHeader) {
      LOG('❌ .static-header niet gevonden'); 
      return;
    }
    if (!hero) {
      LOG('⚠️ #hero-section niet gevonden — header blijft verborgen');
      // Eventueel: altijd tonen op pagina’s zonder hero:
      // staticHeader.classList.add('visible');
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      LOG('ℹ️ Reduced motion aan — direct zichtbaar');
      staticHeader.classList.add('visible');
      animatedCv?.classList.add('animated-hidden');
      animatedSalon?.classList.add('animated-hidden');
      return;
    }

    // helper
    const showHeader = () => {
      if (!staticHeader.classList.contains('visible')) {
        staticHeader.classList.add('visible');
        animatedCv?.classList.add('animated-hidden');
        animatedSalon?.classList.add('animated-hidden');
        LOG('✅ header: zichtbaar');
      }
    };
    const hideHeader = () => {
      if (staticHeader.classList.contains('visible')) {
        staticHeader.classList.remove('visible');
        animatedCv?.classList.remove('animated-hidden');
        animatedSalon?.classList.remove('animated-hidden');
        LOG('✅ header: verborgen');
      }
    };

    // IntersectionObserver (triggert wanneer hero <40% in beeld is)
    try {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.intersectionRatio < 0.4) {
            showHeader();
          } else {
            hideHeader();
          }
        });
      }, { threshold: [0, 0.4] });

      io.observe(hero);
      LOG('👀 IntersectionObserver actief');
    } catch (e) {
      LOG('❌ IO faalde, val terug op scroll:', e);
      window.addEventListener('scroll', () => {
        const rect = hero.getBoundingClientRect();
        const ratio = Math.max(0, Math.min(1, rect.height ? rect.bottom / rect.height : 0));
        if (ratio < 0.4) showHeader(); else hideHeader();
      }, { passive: true });
    }

    // Initial state check (bij reload halverwege pagina)
    requestAnimationFrame(() => {
      const rect = hero.getBoundingClientRect();
      const inViewEnough = rect.top < window.innerHeight * 0.6 && rect.bottom > window.innerHeight * 0.4;
      if (!inViewEnough) {
        showHeader();
      } else {
        hideHeader();
      }
    });
  }

  // Wacht tot styles/DOM er zijn (handig bij images/layout)
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(init, 0);
  } else {
    window.addEventListener('DOMContentLoaded', init);
  }
})();