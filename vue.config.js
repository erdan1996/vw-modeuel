module.exports = {
  lintOnSave: true,
  css: {
      loaderOptions: {
          postcss: {
              plugins: [
                  require('postcss-px2rem')({remUnit: 30}), // 换算的基数
              ]
          }
      }
  },
}