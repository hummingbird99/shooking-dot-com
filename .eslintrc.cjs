module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    sourceType: "module",
    ecmaVersion: 2020,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
  ],
  plugins: ["react", "@typescript-eslint", "react-hooks", "react-refresh"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
};
