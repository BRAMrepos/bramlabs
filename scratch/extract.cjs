const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/designs/New folder';
const outDir = 'C:/Users/hp/.gemini/antigravity/scratch/bramlabs-site/public/designs';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach((f, i) => {
  const content = fs.readFileSync(path.join(srcDir, f), 'utf8');
  const match = content.match(/xlink:href=["']data:image\/png;base64,([^"']+)["']/);
  if (match) {
    const base64Data = match[1];
    const num = String(i + 1).padStart(2, '0');
    const outPath = path.join(outDir, `design-${num}.png`);
    fs.writeFileSync(outPath, Buffer.from(base64Data, 'base64'));
    const stat = fs.statSync(outPath);
    console.log(`Extracted design-${num}.png (${Math.round(stat.size / 1024)} KB) from ${f}`);
  } else {
    console.log(`No base64 image match found in ${f}`);
  }
});
