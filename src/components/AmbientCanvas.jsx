import { useEffect, useRef } from 'react';

export function AmbientCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const coarse = matchMedia('(pointer: coarse)');
    if (!canvas || reduce.matches || coarse.matches) return undefined;

    const ctx = canvas.getContext('2d');
    const pointer = { x: window.innerWidth * 0.68, y: window.innerHeight * 0.28, active: false };
    const nodes = [];
    const sparks = [];
    let width = 0;
    let height = 0;
    let animationFrame = 0;

    const color = (alpha) => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      return isDark ? `rgba(79,152,163,${alpha})` : `rgba(1,105,111,${alpha})`;
    };

    const seedNodes = () => {
      nodes.length = 0;
      const count = Math.max(34, Math.min(76, Math.floor((width * height) / 26000)));
      for (let i = 0; i < count; i += 1) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.5,
        });
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seedNodes();
    };

    const addSpark = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      for (let i = 0; i < 2; i += 1) {
        sparks.push({
          x: pointer.x + (Math.random() - 0.5) * 7,
          y: pointer.y + (Math.random() - 0.5) * 7,
          vx: (Math.random() - 0.5) * 0.9,
          vy: (Math.random() - 0.5) * 0.9,
          life: 1,
          size: Math.random() * 2.6 + 1.2,
        });
      }
      if (sparks.length > 120) sparks.splice(0, sparks.length - 120);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i += 1) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j += 1) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 118) {
            ctx.strokeStyle = color((1 - dist / 118) * 0.07);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        const pointerDist = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (pointer.active && pointerDist < 180) {
          ctx.strokeStyle = color((1 - pointerDist / 180) * 0.18);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }

        ctx.fillStyle = color(0.16);
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const spark = sparks[i];
        spark.x += spark.vx;
        spark.y += spark.vy;
        spark.life -= 0.018;
        if (spark.life <= 0) {
          sparks.splice(i, 1);
          continue;
        }
        ctx.fillStyle = color(spark.life * 0.42);
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, spark.size * spark.life, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', addSpark, { passive: true });
    window.addEventListener('pointerleave', () => { pointer.active = false; }, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', addSpark);
    };
  }, []);

  return <canvas className="ambient-canvas" ref={canvasRef} aria-hidden="true" />;
}
