import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // 除外ファイル
  {
    ignores: ["dist/**", "node_modules/**", "*.min.js"],
  },

  // 基本設定
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // React (client) 設定
  {
    files: ["client/**/*.{ts,tsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // React Hooks: 基本ルールのみ有効化
      // v7の新ルール（React Compiler向け）は一旦無効化
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // React Refresh: shadcn/ui コンポーネントとの互換性のため無効化
      "react-refresh/only-export-components": "off",
    },
  },

  // Server 設定
  {
    files: ["server/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Shared 設定
  {
    files: ["shared/**/*.ts"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
);

