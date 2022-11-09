/*
 * @Author: kasuie
 * @Date: 2022-09-14 23:24:48
 * @LastEditors: kasuie
 * @LastEditTime: 2022-11-09 17:49:42
 * @Description: 
 */
const path = require('path')

module.exports = {
    /** 基本路径  */
    publicPath: process.env.NODE_ENV === 'production' ? '../' : '/',
    // /** 构建时的输出目录  */
    // outputDir: "home",
    devServer: {
      /* 自动打开浏览器 */
      open: true,
      /* 设置为0.0.0.0则所有的地址均能访问 */
      host: '0.0.0.0',
      port: 8086,
      https: false,
      hotOnly: false,
      /* 使用代理 */
      proxy: {
        '/api': {
          target: 'http://localhost:8001', //后端地址
		      // target: 'http://150.158.139.66:8001',
          secure: false,  // 如果是https接口，需要配置这个参数
          ws: true,//是否代理websockets
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
	chainWebpack: config => {
	    config
	      .plugin('html')
	      .tap(args => {
	        args[0].title= 'KASUIEの次元'
	        return args
	      })
	}
}