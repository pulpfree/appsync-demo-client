module.exports = {
  extends: "airbnb",
  env: {
    jest: true
  },
  parser: "babel-eslint",
  plugins: ["react"],
  /*"ecmaFeatures": {
    "classes": true,
    "jsx": true
  },*/
  rules: {
    semi: ["error", "never"],
    "comma-dangle": ["warn", "always-multiline"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
