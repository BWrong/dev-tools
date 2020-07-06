const path = require('path');
module.exports = {
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')] // 查找优先级从左到右
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader:'replaceLoader',
        options: {
          src: /webpack/ig, // 配置要替换的内容
          to: 'world!' // 配置替换的目标内容
        }
      }
    }]
  }
};