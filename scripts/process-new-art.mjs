import fs from "fs";

const items = [
  {
    src: "C:/Users/hp/.gemini/antigravity-ide/brain/1017a79f-0b07-45c0-b3cd-0d6b6b70c463/deep_work_state_matrix_art_1785579990221.png",
    slug: "deep-work-matrix",
  },
  {
    src: "C:/Users/hp/.gemini/antigravity-ide/brain/1017a79f-0b07-45c0-b3cd-0d6b6b70c463/thread_concurrency_art_1785580031533.png",
    slug: "thread-concurrency",
  },
  {
    src: "C:/Users/hp/.gemini/antigravity-ide/brain/1017a79f-0b07-45c0-b3cd-0d6b6b70c463/circadian_overclock_art_1785580070054.png",
    slug: "circadian-overclock",
  },
];

for (const item of items) {
  const buf = fs.readFileSync(item.src);
  const base64 = buf.toString("base64");

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="1024" height="1024">
  <image href="data:image/jpeg;base64,${base64}" x="0" y="0" width="1024" height="1024" />
</svg>`;

  const detailSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="200 200 624 624" width="800" height="800">
  <image href="data:image/jpeg;base64,${base64}" x="0" y="0" width="1024" height="1024" />
</svg>`;

  fs.writeFileSync(`public/designs/${item.slug}-art.svg`, svgContent);
  fs.writeFileSync(`public/designs/${item.slug}-detail.svg`, detailSvgContent);
  console.log("✓ Processed SVG & detail for", item.slug);
}
console.log("All 3 new designs converted to SVG successfully!");
