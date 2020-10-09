const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // entry: ['./src/index.js','./src/sub.js'],
  // entry: { main:'./src/index.js', sub:'./src/sub.js'}, // 如果采用多入口模式，output.filename就不能输出到一个文件了，可以使用占位符的方式配置
  // context: path.resolve(__dirname,'src'), // 如果如此设置，则entry中就不用再带上src
  output: {
    filename: 'bundle.js',
    // filename: '[name]_[hash:8].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: './public/index.html',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimize: false
  },
  devServer: {
    open: true,
    port: 8081,
    host: '127.0.0.1',
    hot: true,
    overlay: true
  },
  devtool: 'source-map',
  externals: {
    jquery: '$'
  }
};
