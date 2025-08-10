const config = {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  overrides: [
    {
      files: ["**/*.{js,jsx,ts,tsx,html,mdx}"],
      customSyntax: "postcss-html",
    },
    {
      files: ["**/*.scss"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.css"],
      customSyntax: "postcss-css",
    },
  ],
  rules: {
    "no-empty-source": null,
    "at-rule-no-unknown": [
      true,
      { ignoreAtRules: ["tailwind", "apply", "layer", "variants"] },
    ],
  },
};

export default config;
