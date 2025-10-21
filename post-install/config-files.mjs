import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Option A: recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot =  process.env.INIT_CWD && process.env.INIT_CWD.trim().length > 0
  ? path.resolve(process.env.INIT_CWD)
  : path.resolve(__dirname, "..", "..");

const consumerPkgJsonPath = path.join(projectRoot, "package.json");
if (!fs.existsSync(consumerPkgJsonPath)) {
    console.warn(
    +    "⚠️  Could not locate package.json in consumer project, skipping config copy."
     );
   process.exit(0);

  const filesToCopy = [
       {
        source: path.resolve(__dirname, "../_editorconfig"),
        target: path.join(projectRoot, ".editorconfig"),
        label: ".editorconfig",
      },
    {
      source: path.resolve(__dirname, "../_eslintrc.js"),
        target: path.join(projectRoot, ".eslintrc.js"),
        label: ".eslintrc.js",
      },
];

filesToCopy.forEach(({ source, target, label }) => {
  try {
    fs.copyFileSync(source, target);
    console.log(`✅ ${label} was copied and overwritten successfully.`);
  } catch (err) {
    console.error(`\x1b[1m\x1b[31m❌ Failed to copy ${label}:`, err, '\x1b[0m');
  }
});

console.info("\x1b[1m✨ ZL_JS installed with success\x1b[0m");
