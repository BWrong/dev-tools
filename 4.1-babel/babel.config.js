// const myPlugin = require('./myPlugin');
module.exports = {
  presets: [
    [
      '@babel/env', // 3. 推荐预设
      {
        // targets: { // 4. 添加转换目标环境,覆盖.browserslistrc
        //   browsers: ['last 2 versions', 'safari >= 7'],
        //   node: '12.10'
        // }
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ],
  plugins: [
    // myPlugin, // 2. 自定义插件
    // "@babel/plugin-transform-arrow-functions", //1. 箭头函数
    ["@babel/plugin-transform-runtime"]
  ]
};
