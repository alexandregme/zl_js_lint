const config = {
  plugins: [    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"],
  // Customize group order as needed
  importOrder: [
    "^react$",
    "^(node:.*)$", // Node built-ins (node:fs, node:path, etc.)
    "^@?\\w",      // Packages
    "^@/(.*)$",    // Aliased imports (e.g., @/...)
    "^[./]"        // Relative imports
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true

  //tailwindConfig: './tailwind.config.js'
};
export default config;
