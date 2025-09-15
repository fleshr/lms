import eslint from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import vitestPlugin from "@vitest/eslint-plugin";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";
import storybookPlugin from "eslint-plugin-storybook";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  // @ts-expect-error https://github.com/vercel/next.js/discussions/49337
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  nextPlugin.flatConfig.recommended,
  {
    settings: { react: { version: "19.1" } },
    ...reactPlugin.configs.flat.recommended,
  },
  reactPlugin.configs.flat["jsx-runtime"],
  hooksPlugin.configs["recommended-latest"],
  storybookPlugin.configs["flat/recommended"],
  eslintPluginPrettierRecommended,
  {
    files: ["**/*.test.tsx", "**/*.test.ts"],
    ...vitestPlugin.configs.recommended,
  },
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "drizzle/**",
      "html-report/**",
      ".testplane/**",
      ".swc/**",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-misused-promises": "warn",
    },
  },
]);

export default eslintConfig;
