const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const baseConfig = require('./webpack.base.config.js');

const smp = new SpeedMeasurePlugin();
const productionGzipExtensions = ['js', 'css', 'json', 'txt', 'ico','svg'];
const webpackConf = merge(baseConfig, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    // new BundleAnalyzerPlugin(),
    new CompressionWebpackPlugin({
      // 开启gzip压缩
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      // threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    splitChunks: { // 添加此配置
      chunks: 'all',
      minSize: 10000
    }
  }
})
 module.exports = smp.wrap(webpackConf);
