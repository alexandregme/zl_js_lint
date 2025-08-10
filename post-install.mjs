import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Option A: recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "_editorconfig");
const target = path.join(process.cwd(), ".editorconfig");

try {
  fs.copyFileSync(source, target);
  console.log("✅ .editorconfig was copied and overwritten successfully.");
} catch (err) {
  console.error("❌ Failed to copy .editorconfig:", err);
} finally {
  console.info("✨ ZL_JS installed with success");
}
