 // babel.config.js
module.exports = {
  "presets": ["@babel/preset-env"],
  "plugins": [
      [
          "@babel/plugin-transform-runtime",
          {
              "corejs": 3
          }
      ]
  ]
}