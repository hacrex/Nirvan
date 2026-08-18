const fs = require('fs');
const path = require('path');
const sharp = require('../website/node_modules/sharp');

const source = path.join(__dirname, '..', 'website', 'public', 'brand', 'nirvan-compact-mark.svg');
const outputDir = path.join(__dirname, '..', 'website', 'public', 'brand');
const svg = fs.readFileSync(source);
const sizes = [
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['icon-1024.png', 1024],
];

(async () => {
  for (const [filename, size] of sizes) {
    await sharp(svg)
      .resize(size, size, { fit: 'contain', background: '#FDF9F3' })
      .flatten({ background: '#FDF9F3' })
      .png({ compressionLevel: 9 })
      .toFile(path.join(outputDir, filename));
  }
})();
