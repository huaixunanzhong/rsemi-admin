import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettier from "eslint-plugin-prettier";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import { fixupConfigRules } from "@eslint/compat";
import reactJsx from "eslint-plugin-react/configs/jsx-runtime.js";
import react from "eslint-plugin-react/configs/recommended.js";
import { defineConfig } from "eslint/config";
import pluginUnusedImports from "eslint-plugin-unused-imports";

const ignores = ["**/node_modules/**", "dist/", ".*", "**/*.d.ts"];

export default defineConfig(
  // 通用配置
  {
    ignores, // 忽略项
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      eslintConfigPrettier
    ], // 继承规则
    plugins: {
      prettier: eslintPluginPrettier,
      "react-hooks": reactHooks,
      import: pluginImport,
      "unused-imports": pluginUnusedImports
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
      "@typescript-eslint/no-explicit-any": "off",
      ...reactHooks.configs.recommended.rules,
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_"
        }
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin", // 内置模块，如 fs/path
            "external", // 外部依赖
            "internal", // 项目内部模块
            "parent",
            "sibling",
            "index",
            // 如果有 type import（TS）
            "type"
          ],
          // ✅ 每组之间空一行
          "newlines-between": "always",
          // ✅ 按字母排序（可选）
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          },
          // ✅ 支持比如 "@/xxx" 作为内部模块
          pathGroups: [
            {
              pattern: "@/**",
              group: "internal",
              position: "after"
            }
          ],
          pathGroupsExcludedImportTypes: ["builtin"]
        }
      ]
    },
    settings: {
      // 支持 TS 和路径别名引入
      "import/resolver": {
        typescript: true
      }
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
