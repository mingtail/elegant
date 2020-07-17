// vue.config.js
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  devServer: {
    port: 2552,
  },
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: debug,
  
  chainWebpack: (config) => {

    // 修改images打包配置
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => Object.assign(options, { limit: 10240 }))

    // terser插件: 移除console
    if (!debug) {
      config.optimization.minimizer('terser').tap((args) => {
        args[0].terserOptions.compress.drop_console = true
        return args
      })
    }
  }

}
