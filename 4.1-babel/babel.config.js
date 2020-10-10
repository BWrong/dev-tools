const myPlugin = require('./myPlugin');
module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          chrome: '40'
        },

        // "useBuiltIns": "usage",
        // "corejs": 3
      }
    ]
  ],
  plugins: [
    // myPlugin
    // "@babel/plugin-transform-arrow-functions",
    // ["@babel/plugin-transform-runtime"]
  ]
};
