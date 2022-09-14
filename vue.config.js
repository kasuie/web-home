const path = require('path')

module.exports = {
    publicPath: '../',
    devServer: {
      /* 自动打开浏览器 */
      open: true,
      /* 设置为0.0.0.0则所有的地址均能访问 */
      host: '0.0.0.0',
      port: 80,
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
	},
	
	// pwa: {
	//     iconPaths: {
	//       favicon32: 'favicon.ico',
	//       favicon16: 'favicon.ico',
	//       appleTouchIcon: 'favicon.ico',
	//       maskIcon: 'favicon.ico',
	//       msTileImage: 'favicon.ico'
	//     }
	// },
  }