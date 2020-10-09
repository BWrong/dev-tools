const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    open: true,
    port: '8080', //默认是8080
    hot: true, // 开启模块热替换
    inline: true, //默认开启 inline 模式，如果设置为false,开启 iframe 模式
    overlay: true, //启用浮层提示
    contentBase: path.join(__dirname, '../public') // 配置额外的静态文件内容的访问路径
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() //需要添加模块热替换插件
  ]
});
