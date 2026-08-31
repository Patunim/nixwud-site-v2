import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const src = path.join('design assets', 'image-gen-1(20260814-224430).png');

async function processEmblem() {
  // Extract square centered emblem with tight balanced padding
  const cropped = await sharp(src)
    .extract({ left: 250, top: 230, width: 754, height: 754 })
    .png()
    .toBuffer();
    
  // Save as production logo
  fs.writeFileSync(path.join('public', 'brand', 'nixwud-logo.png'), cropped);
  
  // Save favicons
  await sharp(cropped).resize(32, 32).png().toFile(path.join('public', 'favicon.png'));
  await sharp(cropped).resize(48, 48).png().toFile(path.join('public', 'favicon.ico'));
  await sharp(cropped).resize(180, 180).png().toFile(path.join('public', 'apple-touch-icon.png'));
  
  const png128 = await sharp(cropped).resize(128, 128).png().toBuffer();
  const b64 = png128.toString('base64');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" role="img" aria-label="Nixwud Consultancy">
  <image href="data:image/png;base64,${b64}" width="128" height="128"/>
</svg>
`;
  fs.writeFileSync(path.join('public', 'favicon.svg'), svg, 'utf8');
  console.log('Successfully cropped and regenerated bold logo and favicons');
}

processEmblem().catch(console.error);
