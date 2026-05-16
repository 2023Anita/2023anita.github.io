import * as THREE from 'three';
import QRCode from 'qrcode';

export function createBadgeTexture({ dark = false } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = 900;
  canvas.height = 1200;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  const draw = () => {
    const ctx = canvas.getContext('2d');
    const bg = dark ? '#141a1b' : '#f5f7f4';
    const panel = dark ? '#1d2a2b' : '#ffffff';
    const ink = dark ? '#ecf4f2' : '#162223';
    const muted = dark ? '#a9bab7' : '#65706d';
    const teal = dark ? '#78c8cf' : '#01696f';
    const line = dark ? 'rgba(120,200,207,0.22)' : 'rgba(1,105,111,0.16)';

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    roundRect(ctx, 0, 0, 900, 1200, 62);
    ctx.fillStyle = bg;
    ctx.fill();

    const glow = ctx.createRadialGradient(700, 90, 40, 700, 90, 560);
    glow.addColorStop(0, dark ? 'rgba(120,200,207,0.32)' : 'rgba(1,105,111,0.18)');
    glow.addColorStop(1, 'rgba(1,105,111,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, 900, 1200);

    ctx.strokeStyle = line;
    ctx.lineWidth = 2;
    for (let x = 70; x < 850; x += 58) {
      ctx.beginPath();
      ctx.moveTo(x, 70);
      ctx.lineTo(x, 1130);
      ctx.stroke();
    }
    for (let y = 90; y < 1130; y += 58) {
      ctx.beginPath();
      ctx.moveTo(60, y);
      ctx.lineTo(840, y);
      ctx.stroke();
    }

    ctx.fillStyle = teal;
    ctx.font = '700 34px "DM Sans", sans-serif';
    ctx.fillText('MEDICAL AI EXPERT', 78, 108);
    ctx.fillStyle = muted;
    ctx.font = '500 24px "DM Sans", sans-serif';
    ctx.fillText('INTERACTIVE PROFILE BADGE', 78, 148);

    roundRect(ctx, 70, 200, 760, 520, 42);
    ctx.fillStyle = panel;
    ctx.fill();
    ctx.strokeStyle = line;
    ctx.stroke();

    ctx.fillStyle = ink;
    ctx.font = 'italic 94px Georgia, serif';
    ctx.fillText('Lixin Yin', 118, 340);
    ctx.font = '600 58px "Noto Sans SC", sans-serif';
    ctx.fillText('殷利鑫', 118, 418);
    ctx.fillStyle = teal;
    ctx.font = '600 33px "DM Sans", sans-serif';
    ctx.fillText('Anesthesiologist · Medical AI', 118, 496);
    ctx.fillStyle = muted;
    ctx.font = '500 28px "DM Sans", sans-serif';
    ctx.fillText("Jiangyin People's Hospital", 118, 548);
    ctx.fillText('Clinical Decision Support · AI Agents', 118, 596);

    drawChip(ctx, 'Kaggle Life Science', 118, 642, teal, dark);
    drawChip(ctx, 'Anesthesia Safety', 360, 642, teal, dark);
    drawChip(ctx, 'Medical AI Tools', 598, 642, teal, dark);

    roundRect(ctx, 90, 795, 270, 270, 32);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    drawQrFallback(ctx, 113, 818, 224);

    ctx.fillStyle = ink;
    ctx.font = '700 38px "DM Sans", sans-serif';
    ctx.fillText('github.com/2023Anita', 408, 860);
    ctx.fillStyle = muted;
    ctx.font = '500 26px "DM Sans", sans-serif';
    wrapText(ctx, 'Scan for portfolio, AI medical projects, awards, and collaboration contact.', 408, 916, 360, 36);

    ctx.strokeStyle = teal;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(78, 1130);
    ctx.lineTo(820, 1130);
    ctx.stroke();

    texture.needsUpdate = true;

    const qr = document.createElement('canvas');
    QRCode.toCanvas(
      qr,
      'https://2023anita.github.io/',
      {
        width: 224,
        margin: 1,
        color: { dark: '#111817', light: '#ffffff' },
        errorCorrectionLevel: 'M',
      },
      (error) => {
        if (!error) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(105, 810, 240, 240);
          ctx.drawImage(qr, 113, 818, 224, 224);
          texture.needsUpdate = true;
        }
      },
    );
  };

  draw();
  return texture;
}

function drawQrFallback(ctx, x, y, size) {
  ctx.fillStyle = '#111817';
  const cell = size / 7;
  const pattern = [
    [1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1],
  ];
  pattern.forEach((row, rowIndex) => {
    row.forEach((value, colIndex) => {
      if (value) ctx.fillRect(x + colIndex * cell, y + rowIndex * cell, cell * 0.74, cell * 0.74);
    });
  });
}

function drawChip(ctx, text, x, y, teal, dark) {
  ctx.font = '700 22px "DM Sans", sans-serif';
  const width = ctx.measureText(text).width + 34;
  roundRect(ctx, x, y - 28, width, 42, 21);
  ctx.fillStyle = dark ? 'rgba(120,200,207,0.18)' : 'rgba(1,105,111,0.12)';
  ctx.fill();
  ctx.fillStyle = teal;
  ctx.fillText(text, x + 17, y);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  for (const word of words) {
    const testLine = `${line}${word} `;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, y);
      line = `${word} `;
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}
