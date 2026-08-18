const path = require('path');
const sharp = require('../website/node_modules/sharp');

const assets = [
  ['nirvan-social-portrait.png', 1080, 1920],
  ['nirvan-social-landscape.png', 1920, 1080],
];
const directory = path.join(__dirname, '..', 'docs', '08-ui', 'brand');

(async () => {
  for (const [filename, width, height] of assets) {
    const input = path.join(directory, filename);
    const output = path.join(directory, filename.replace('.png', '-full-hd.png'));
    await sharp(input).resize(width, height, { fit: 'fill' }).png({ compressionLevel: 9 }).toFile(output);
  }
})();
