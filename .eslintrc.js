module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/standard",
    "prettier/react",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: [
    "prettier",
    "react",
    "react-hooks"
  ],
  rules: {
    "react/prop-types": 0
  },
};
