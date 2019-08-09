//这个文件 是自己配置webpack 的配置,,它最终会和隐藏的webpack 进行合并
module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'view':'@/view',
      }
    }
  }
}
