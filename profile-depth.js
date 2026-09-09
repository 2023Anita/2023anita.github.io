// Small pointer-led movement; touch and reduced-motion retain static depth.
(() => {
  const motion = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
  document.querySelectorAll('.hero-grid, .contact-inner').forEach(panel => {
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
})();
