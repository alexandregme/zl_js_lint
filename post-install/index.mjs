import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all .mjs files in the same directory, except this script itself
const scripts = fs
  .readdirSync(__dirname)
  .filter(
    (fname) =>
      fname.endsWith(".mjs") &&
      fname !== path.basename(__filename)
  )
  .sort(); // Ensures predictable order

for (const script of scripts) {
  const scriptPath = path.join(__dirname, script);
  console.log(`\x1b[1m\x1b[32m⚙️  Running: ${script}\x1b[0m`);

  const result = spawnSync(
    process.execPath, // Node.js executable
    [scriptPath],
    { stdio: "inherit" }
  );

  if (result.status !== 0) {
    console.error(`❌ Script "${script}" exited with code ${result.status}`);
    process.exit(result.status);
  }
}

console.log("✨ All post-install scripts completed successfully.");
