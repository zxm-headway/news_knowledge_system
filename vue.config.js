const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // 在此处设置 Less 变量
          },
          javascriptEnabled: true
        }
      }
    }
  },
  devServer:{
    // proxy:{
    //   ws:false
    // }
  }
  
})
