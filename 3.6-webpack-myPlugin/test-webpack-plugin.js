class TestWebpackPlugin {
  // 获取用户给该插件传入的配置
  constructor(options) {}
  // Webpack 会调用此 apply 方法并传入 compiler 对象
  apply(compiler) {
    // emit钩子执行时机在资源输出到output之前
    compiler.hooks.emit.tapAsync('TestWebpackPlugin', (compilation, cb) => {
      // 在输出文件中增加一个文件test.js
      compilation.assets['test.js'] = {
        source() {
          // 文件内容
          return 'console.log("hello world")';
        },
        size() {
          // 文件的长度
          return 27;
        }
      };
      cb(); // 处理完成调用cb
    });
    // 这里可以在compiler的钩子（hook）上注册一些方法，	当webpack执行到特定的钩子时就会执行该阶段注册的方法
    compiler.hooks.done.tap('TestWebpackPlugin', (stats) => {
      console.log('Hello TestWebpackPlugin!');
      // ...
    });
  }
}

module.exports = TestWebpackPlugin;
