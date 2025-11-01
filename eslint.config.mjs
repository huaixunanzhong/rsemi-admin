import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import { fixupConfigRules } from "@eslint/compat";
import reactJsx from "eslint-plugin-react/configs/jsx-runtime.js";
import react from "eslint-plugin-react/configs/recommended.js";
import { defineConfig } from "eslint/config";
const ignores = ["**/node_modules/**", "dist/", ".*", "**/*.d.ts"];

export default defineConfig(
  // 通用配置
  {
    ignores, // 忽略项
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, eslintConfigPrettier], // 继承规则
    plugins: {
      prettier: eslintPluginPrettier,
      "react-hooks": reactHooks
    },
    languageOptions: {
      ecmaVersion: "latest", // ecma语法支持版本
      sourceType: "module", // 模块化类型
      parser: tseslint.parser, // 解析器
      globals: {
        ...globals.browser
      }
    },
    rules: {
      // 自定义
      "no-var": "error",
      ...reactHooks.configs.recommended.rules
    },
    files: ["**/*.{ts,tsx}"]
  },
  ...fixupConfigRules([
    {
      ...react,
      settings: {
        react: { version: "detect" }
      }
    },
    reactJsx
  ])
);
