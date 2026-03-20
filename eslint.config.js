import js from "@eslint/js";
import globals from "globals";
import astro from "eslint-plugin-astro";

export default [
  {
    ignores: ["dist/**", ".astro/**", "node_modules/**"],
  },

  js.configs.recommended,
  ...astro.configs["flat/recommended"],

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,astro}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
];
