const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    main: './src/index.js',
    sub: './src/sub.js'
  },
  output: {
    filename: '[name]_[hash:8].js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
             hmr: true, // 模块热替换，仅需在开发环境开启
             // reloadAll: true,
             // ... 其他配置
          }
       }, 'css-loader', 'postcss-loader', 'less-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2|ico)$/,
        use: [
            {
                loader: 'url-loader', // 仅配置url-loader即可，内部会自动调用file-loader
                options: {
                    limit: 10240, //小于此值的文件会被转换成DataURL
                    name: '[name]_[hash:6].[ext]', // 设置输出文件的名字
                    outputPath: 'assets', // 设置资源输出的目录
                    esModule: false
                }
            }
        ],
        exclude: /node_modules/
    }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'my-cli-main',
      template: './public/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      title: 'my-cli-sub',
      template: './public/index.html',
      filename: 'sub.html',
      chunks: ['sub']
    }),
    new CopyWebpackPlugin({
      patterns: [
        // 将public/static/下的所有文件拷贝到dist/static目录中
        { from: './public/static/*', to: 'static', flatten: true},
        // ... 多个需要拷贝的文件/夹在此继续添加
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[hash:5].css', // 输出文件的名字
      // ... 其他配置
    }),
  ]
};
