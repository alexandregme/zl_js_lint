import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Find the consumer project's root because this script runs from your package's directory
const projectRoot = resolve(process.cwd(), "./"); // Adjust paths if workspaces are deeper/shallower
const pkgPath = resolve(projectRoot, "package.json");

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
