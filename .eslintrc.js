module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: {
    browser: true,
    jquery: true,
  },
  rules: {
    "react/jsx-filename-extension": [
      1, {
        extensions: [".js", ".jsx"],
      }
    ],
  },
};
