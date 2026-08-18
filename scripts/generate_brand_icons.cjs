const fs = require('fs');
const path = require('path');
const sharp = require('../website/node_modules/sharp');

const source = path.join(__dirname, '..', 'website', 'public', 'brand', 'icon-1024.png');
const outputDir = path.join(__dirname, '..', 'website', 'public', 'brand');
const sourceBuffer = fs.readFileSync(source);
const sizes = [
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['icon-1024.png', 1024],
];

(async () => {
  for (const [filename, size] of sizes) {
    await sharp(sourceBuffer)
      .resize(size, size, { fit: 'contain', background: '#FDF9F3' })
      .flatten({ background: '#FDF9F3' })
      .png({ compressionLevel: 9 })
      .toFile(path.join(outputDir, filename));
  }
})();
