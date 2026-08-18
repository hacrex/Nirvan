const fs = require('fs');
const path = require('path');
const sharp = require('../website/node_modules/sharp');

const repoRoot = path.join(__dirname, '..');
const sourcePath = path.join(repoRoot, 'website', 'public', 'brand', 'nirvan-logo-lockup.png');
const publicBrand = path.join(repoRoot, 'website', 'public', 'brand');
const docsBrand = path.join(repoRoot, 'docs', '08-ui', 'brand');
const sourceBuffer = fs.readFileSync(sourcePath);

async function makeMark(size) {
  return sharp(sourceBuffer)
    .resize(size, size, { fit: 'contain', background: '#FDF9F3' })
    .flatten({ background: '#FDF9F3' })
    .png({ compressionLevel: 9 })
    .toBuffer();
}

async function makeCanvas(width, height, logoWidth, top, left) {
  const logo = await sharp(sourceBuffer)
    .resize(logoWidth, logoWidth, { fit: 'contain' })
    .png({ compressionLevel: 9 })
    .toBuffer();
  return sharp({
    create: {
      width,
      height,
      channels: 3,
      background: '#FDF9F3',
    },
  })
    .composite([{ input: logo, top, left }])
    .png({ compressionLevel: 9 })
    .toBuffer();
}

(async () => {
  const markSizes = [
    ['nirvan-mark-32.png', 32],
    ['nirvan-mark-180.png', 180],
    ['nirvan-mark-192.png', 192],
    ['nirvan-mark-512.png', 512],
    ['nirvan-mark-1024.png', 1024],
  ];

  for (const [filename, size] of markSizes) {
    const buffer = await makeMark(size);
    fs.writeFileSync(path.join(publicBrand, filename), buffer);
  }

  const portrait = await makeCanvas(1080, 1920, 760, 460, 160);
  const landscape = await makeCanvas(1920, 1080, 680, 200, 120);
  fs.writeFileSync(path.join(docsBrand, 'nirvan-social-portrait-full-hd.png'), portrait);
  fs.writeFileSync(path.join(docsBrand, 'nirvan-social-landscape-full-hd.png'), landscape);
  fs.writeFileSync(path.join(publicBrand, 'nirvan-social-landscape.png'), landscape);
})();
