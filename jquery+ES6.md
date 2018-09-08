# webpack+jQuery 的ES6环境配置

## 安装jQuery

npm install jquery --save-dev

配置jQuery 
由于 Bootstrap 依赖于 jQuery，所以在代码中 import jQuery from ‘jquery’ 是不够的，这只是解决了自己代码对 jQuery 的依赖，在此处使用了webpack.ProvidePlugin

解决方案： 
在 webpack.base.conf.js 头部添加

var webpack = require('webpack')

在 entry 后边添加

  plugins: [
      new webpack.ProvidePlugin({
          "$": "jquery",
          "jQuery": "jquery",
          "window.jQuery": "jquery"
      })
  ]