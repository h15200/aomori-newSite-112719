module.exports = { 
  "extends": [
    "airbnb-base",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaFeatures":{
      "jsx": true
    }
  },
  "rules": {
    "arrow-parens": [
      "error", "as-needed"
    ],
    "comma-dangle": 0,
    "no-console": 1,
    "quotes": 0,
    "no-multiple-empty-lines": 0,
    "semi": 0,
    "no-unused-vars": [
      "error",
      {
        "vars": "local",
        "args": "none"
      }
    ]
  },
  "env": {
    "browser": true
  },
}
