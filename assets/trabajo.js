/* Comportamiento compartido de las tarjetas de trabajo (portfolio). */
(function () {
  // --- Vídeos: autoplay silencioso + arranque con el primer gesto ---
  // Algunos portátiles bloquean el autoplay (ahorro de energía) y el
  // scroll no cuenta como gesto, por eso también se arrancan al primer
  // clic, tecla, toque o rueda.
  const vids = Array.from(document.querySelectorAll('.pf video'));
  vids.forEach(v => { v.muted = true; v.setAttribute('playsinline', ''); });
  const play = v => { const p = v.play(); if (p) p.catch(() => {}); };
  const playVisible = () => vids.forEach(v => {
    const r = v.getBoundingClientRect();
    if (r.top < innerHeight && r.bottom > 0) play(v);
  });
  playVisible();
  window.addEventListener('scroll', playVisible, { passive: true });
  vids.forEach(v => { v.addEventListener('loadeddata', playVisible); v.addEventListener('canplay', playVisible); });
  const gestures = ['pointerdown', 'click', 'keydown', 'touchstart', 'wheel'];
  const unlock = () => {
    vids.forEach(play);
    gestures.forEach(ev => document.removeEventListener(ev, unlock));
  };
  gestures.forEach(ev => document.addEventListener(ev, unlock, { once: true, passive: true }));

  // --- Antes / después: sliders arrastrables ---
  document.querySelectorAll('.pf-ba').forEach(slider => {
    let dragging = false;
    const setPos = x => {
      const r = slider.getBoundingClientRect();
      const p = Math.max(0, Math.min(100, ((x - r.left) / r.width) * 100));
      slider.style.setProperty('--pos', p);
    };
    const pointX = e => (e.touches ? e.touches[0].clientX : e.clientX);
    slider.addEventListener('mousedown', e => { dragging = true; setPos(pointX(e)); e.preventDefault(); });
    slider.addEventListener('touchstart', e => { dragging = true; setPos(pointX(e)); e.preventDefault(); }, { passive: false });
    window.addEventListener('mousemove', e => { if (dragging) setPos(pointX(e)); });
    window.addEventListener('touchmove', e => { if (dragging) { setPos(pointX(e)); e.preventDefault(); } }, { passive: false });
    ['mouseup', 'touchend', 'touchcancel'].forEach(ev => window.addEventListener(ev, () => { dragging = false; }));
  });
})();
