// Regenerates the social preview image (public/og.png): node scripts/og.mjs
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#fafafa"/>
  <g font-family="Segoe UI, Inter, Helvetica, Arial, sans-serif">
    <text x="96" y="292" font-size="76" font-weight="600" fill="#171717" letter-spacing="-1.5">Harvey Wirth</text>
    <text x="96" y="358" font-size="34" fill="#6b6b6b">Software Engineer · M.Sc. Computer Science Student</text>
    <line x1="96" y1="478" x2="1104" y2="478" stroke="#e5e5e5" stroke-width="2"/>
    <text x="96" y="534" font-size="26" fill="#6b6b6b">harveywirth.de</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(fileURLToPath(new URL('../public/og.png', import.meta.url)));
