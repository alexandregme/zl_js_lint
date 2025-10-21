import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const projectRoot =  process.env.INIT_CWD && process.env.INIT_CWD.trim().length > 0
  ? path.resolve(process.env.INIT_CWD)
  : path.resolve(__dirname, "..", "..");

const consumerPkgJsonPath = path.join(projectRoot, "package.json");
if (!fs.existsSync(consumerPkgJsonPath)) {
  console.warn(
    +    "⚠️  Could not locate package.json in consumer project, skipping config copy."
  );
  process.exit(0);


const scriptsToAdd = {
  "eslint": "eslint ./ --color --fix",
  "prettier": "prettier --write .",
  "stylelint": "stylelint '**/*.{js,jsx,ts,tsx,html,mdx,css,scss}' --allow-empty-input",
  "lint": "pnpm eslint && pnpm prettier && pnpm stylelint",
  "fresh": "rm -rf node_modules && rm -f pnpm-lock.yaml && pnpm install",
};

const pkgJson = JSON.parse(readFileSync(pkgPath, "utf8"));
pkgJson.scripts = pkgJson.scripts || {};

for (const [key, val] of Object.entries(scriptsToAdd)) {
  pkgJson.scripts[key] = val; // Overwrites existing, or add if missing
}

// Write back the modified package.json
writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + "\n");

console.log("✨ Lint scripts injected into package.json");
