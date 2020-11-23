const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  assetsDir: 'static',
  publicPath: './',
  productionSourceMap: false, // 生产环境的 source map
  devServer: { // 开发调试服务器配置项
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    disableHostCheck: true,
    open: true, // npm run serve后自动打开页面
    hotOnly: true,
    host: '127.0.0.1', // 匹配本机IP地址
    port: 5080, // 开发服务器运行端口号
    compress: true// 启用静态资源压缩算法
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch')
    config.plugins.delete('preload')
    config.resolve.alias
      .set('@', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));
  },
  configureWebpack: config => {
    config.entry.app = ['babel-polyfill', './src/main.js']
  },
  runtimeCompiler: true
}
