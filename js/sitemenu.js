export function initMenu() {
    const menuIcon = document.querySelector('#menu-icon');
    const slideout = document.querySelector('#slideout-menu');
    const closeBtn = document.querySelector('#menu-close');
  
    if (!menuIcon || !slideout || !closeBtn) {
      console.warn('⚠️ Menu-elementen niet gevonden in header.html');
      return;
    }
  
    const setOpen = (open) => {
      slideout.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);   // verberg scrollbar
      menuIcon.setAttribute('aria-expanded', String(open));
    };
  
    // Eén handler voor pointer/touch/click/keyboard
    const activate = (e) => {
      // Keyboard: Enter of Space
      if (e.type === 'keydown' && !['Enter', ' '].includes(e.key)) return;
      // Touch: voorkom ghost click
      if (e.type === 'touchstart') e.preventDefault();
  
      e.stopPropagation();
      setOpen(!slideout.classList.contains('open'));
    };
  
    // Gebruik pointer events waar beschikbaar (dekt touch + mouse)
    const supportsPointer = 'onpointerdown' in window;
  
    if (supportsPointer) {
      menuIcon.addEventListener('pointerdown', activate, { passive: false });
    } else {
      menuIcon.addEventListener('touchstart', activate, { passive: false });
      menuIcon.addEventListener('click', activate);
    }
    menuIcon.addEventListener('keydown', activate);
  
    // Sluit-knop
    closeBtn.addEventListener('click', () => setOpen(false));
  
    // Klik buiten menu → sluit
    document.addEventListener('click', (e) => {
      if (!slideout.contains(e.target) && !menuIcon.contains(e.target)) {
        setOpen(false);
      }
    });
  
    // Esc → sluit
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  
    // Klik op link → sluit
    slideout.addEventListener('click', (e) => {
      if (e.target.closest('a')) setOpen(false);
    });
  }