// vue.config.js
const productionMode = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 2552,
  },
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
  css: {
    extract: productionMode,
    sourceMap: productionMode,
  },
  chainWebpack: (config) => {

    // 修改images打包配置
    config.module.rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap((options) => {
        options.limit = 10000;
        options.name = 'image/[name].[hash:8].[ext]';
        options.fallback.options.name = 'image/[name].[hash:8].[ext]';
        return options;
      });
  },

}
