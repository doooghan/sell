module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/standard"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/multi-word-component-names": 0,
    quotes: "off",
    semi: "off",
    "comma-dangle": "off",
    "space-before-function-paren": 0,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
};
