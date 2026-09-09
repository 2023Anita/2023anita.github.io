// Small pointer-led movement; touch and reduced-motion retain static depth.
(() => {
  const motion = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  document.querySelectorAll('.hero-grid, .contact-inner, .workstation-panel .terminal-card, .workstation-panel .signal-grid').forEach(panel => {
    const reset = () => {
      panel.style.removeProperty('--depth-x');
      panel.style.removeProperty('--depth-y');
    };
    panel.addEventListener('pointermove', event => {
      if (!motion.matches) return;
      const box = panel.getBoundingClientRect();
      panel.style.setProperty('--depth-x', `${(0.5 - (event.clientY - box.top) / box.height) * 1.5}deg`);
      panel.style.setProperty('--depth-y', `${((event.clientX - box.left) / box.width - 0.5) * 1.5}deg`);
    });
    panel.addEventListener('pointerleave', reset);
    motion.addEventListener('change', reset);
  });

  // A small perimeter particle field keeps motion outside the reading area.
  const workstation = document.querySelector('.workstation-panel');
  const grid = workstation?.querySelector('.signal-grid');
  if (!grid) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'signal-particles';
  canvas.setAttribute('aria-hidden', 'true');
  workstation.append(canvas);
  const context = canvas.getContext('2d');
  if (!context) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0, visible = false, previous = 0, elapsed = 0, width = 0, height = 0;
  let cards = [];
  const measure = () => {
    width = workstation.clientWidth;
    height = workstation.clientHeight;
    const scale = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    context.setTransform(scale, 0, 0, scale, 0, 0);
    cards = [...grid.querySelectorAll('.signal-card')].map(card => ({
      x: grid.offsetLeft + card.offsetLeft + 9,
      y: grid.offsetTop + card.offsetTop + 9,
      w: card.offsetWidth - 18, h: card.offsetHeight - 18
    }));
  };
  const draw = time => {
    frame = 0;
    if (!visible || document.hidden || reduced.matches) return;
    elapsed += previous ? Math.min(time - previous, 50) : 0;
    previous = time;
    context.clearRect(0, 0, width, height);
    cards.forEach((card, index) => {
      const perimeter = 2 * (card.w + card.h);
      for (let i = 0; i < 5; i++) {
        const distance = (elapsed * .018 + perimeter * (i / 5 + index * .13)) % perimeter;
        let x, y;
        if (distance < card.w) { x = distance; y = 0; }
        else if (distance < card.w + card.h) { x = card.w; y = distance - card.w; }
        else if (distance < 2 * card.w + card.h) { x = 2 * card.w + card.h - distance; y = card.h; }
        else { x = 0; y = perimeter - distance; }
        const alpha = .35 + .2 * Math.sin(elapsed / 1700 + i + index);
        context.fillStyle = i === 0 ? `rgba(183,129,78,${alpha})` : `rgba(47,151,147,${alpha})`;
        context.shadowColor = '#63c7b7';
        context.shadowBlur = 6;
        context.beginPath();
        context.arc(card.x + x, card.y + y, i === 0 ? 2 : 1.4, 0, Math.PI * 2);
        context.fill();
      }
    });
    frame = requestAnimationFrame(draw);
  };
  const update = () => {
    cancelAnimationFrame(frame);
    previous = 0;
    context.clearRect(0, 0, width, height);
    if (visible && !document.hidden && !reduced.matches) frame = requestAnimationFrame(draw);
  };
  new ResizeObserver(() => { measure(); update(); }).observe(workstation);
  new MutationObserver(() => { measure(); update(); }).observe(grid, {childList:true});
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); }, {threshold:0}).observe(workstation);
  document.addEventListener('visibilitychange', update);
  reduced.addEventListener('change', update);
  measure();
})();
