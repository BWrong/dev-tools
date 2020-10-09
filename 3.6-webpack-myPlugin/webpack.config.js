const path = require('path')
const TestWebpackPlugin = require('./test-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]_[hash].js'
    },
    plugins: [
        new TestWebpackPlugin({
            // ...options
        })
    ]
}