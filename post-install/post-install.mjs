import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Option A: recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesToCopy = [
  { source: "../_editorconfig", target: "./.editorconfig", label: ".editorconfig" },
  { source: "../_eslintrc.js", target: "./.eslintrc.js", label: ".eslintrc.js" },
];

filesToCopy.forEach(({ source, target, label }) => {
  try {
    const src = path.join(__dirname, source);
    const dst = path.join(process.cwd(), target);
    fs.copyFileSync(src, dst);
    console.log(`✅ ${label} was copied and overwritten successfully.`);
  } catch (err) {
    console.error(`\x1b[1m\x1b[31m❌ Failed to copy ${label}:`, err, '\x1b[0m');
  }
});

console.info("\x1b[1m✨ ZL_JS installed with success\x1b[0m");
