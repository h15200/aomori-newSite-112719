module.exports = {
  extends: ["airbnb-base", "plugin:react/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "arrow-parens": ["error", "as-needed"],
    "comma-dangle": 0,
    "import/prefer-default-export": 0,
    "no-console": 1,
    quotes: 0,
    "no-multiple-empty-lines": 0,
    semi: 0,
    "no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none",
      },
    ],
    "operator-linebreak": 0,
  },
  env: {
    browser: true,
  },
};
