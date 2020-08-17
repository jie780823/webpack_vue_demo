# 一、前端构建工具

1. grunt
2. gulp
3. webpack(主流,https://webpack.js.org/)
4. Fis3（百度）

# 二、webpack是什么

```
webpack 是一个现代 JavaScript 应用程序的静态模块打包器

webpack稳定版本：v4.44
```

# 三、如何使用webpack搭建前端环境

1. 安装node.js( v12.x)

```
注意：如果npm安装一些包由于网速原因，安装慢切换一下镜像源

改成淘宝镜像：
npm config set registry https://registry.npm.taobao.org

查看是否更改过来：
npm config list回车

```

2.创建项目目录并初始化package.json

```
默认创建package.json文件

npm init -y
```

3.安装webpack和webpack-cli

```
npm install webpack webpack-cli --save-dev

简写：
npm i webpack webpack-cli -D
```

4.运行webpack测试

 CommonJS规范：基于服务端模块化规范，node产出

```
抛出：modules.exports
引入：require
```

 ES6 module:

```
import xxx from ''
export default {}
```

5.webpack支持的文件类型

```
默认只支持JS和json文件的引入

注意：如果在JS中要引入其他文件类型：.css,.png,字体文件或其他做任意文件类型，解析时都需求安装合适的loader来进行解析处理
```



6.webpack配置文件

```
默认配置文件名：webpack.config.js

如果想运行其他配置文件
webpack --config webpack.dev.config.js

配置文件是webpack的核心，所有的loader和插件环境，运行环境配置都在配置文件中配置使用
```

例如：

```
//引入webpack,主要用于对webpack内置插件调用时使用
const webpack = require('webpack')
//引入path，对路径进行处理
const path = require('path')

//创建一个配置对象
const config = {
    //配置入口
    entry: './src/main.js',
    //配置出口
    output: {
        //出口路径
        path:path.resolve(__dirname,'dist'),
        //出口文件名
        filename:'bundle.js'
    }

}

module.exports = config;
```

7.配置各种loader(文件解析器)

- 解析css的loader
- 解析图片 file-loader,url-loader
- 解析ES6/7/8/9/10.....  babel

```
第一步：npm install --save-dev babel-loader @babel/core @babel/preset-env 
第二步：在项目根目录下创建一个.babelrc文件，并写入
{
  "presets": ["@babel/preset-env"]
}
第三步：配置loader
module: {
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ]
}
```



8. 自动清理文件

```
npm install clean-webpack-plugin --save-dev

引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

使用:

//创建一个配置对象
const config = {
   .....,
    plugins: [
        new CleanWebpackPlugin()
    ]

}
```



9. 自动注入html

```
npm install --save-dev html-webpack-plugin


//创建一个配置对象
const config = {
    ....,
    plugins: [
        //自动清理
        new CleanWebpackPlugin(),
        //自动注入html
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename:'home.html'
        }),
    ]

}
```



10.运行环境

```
webpack-dev-server

配置文件中：
 devServer: {
        contentBase: path.join(__dirname, "dist"),  //监听运行目录
        port: 9999,  //运行端口号
        hot:true  //热更新
    }
```



11.webpack核心概念：

- 入口：entry：指向项目执行的主入口
- 出口：output 构建输出的文件路径和文件名
- 加载器：loader 转换webpack不识别的文件（资源）类型
- 插件：plugins 为了扩展webpack的功能，例如：清理文件，自动注入Html
- 模式：mode 切换开发环境(development)还是线上(production)环境

12.与vue集成

```
vue-loader:解析vue文件
vue-template-compiler

安装：npm install vue-loader vue-template-compiler -D
配置webpack文件： {test:/\.vue$/,use:['vue-loader']},

实例化vueLoaderPlugin插件
const { VueLoaderPlugin }=require('vue-loader')
添加插件实例化：
 },
    plugins: [
        new VueLoaderPlugin()
    ]
```

13. 与less集成

```
安装：npm install less-loader less -D
配置：
 module: {
        rules: [
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        ]
    },
    
   
```



14.与sass集成

```
安装：npm install sass-loader node-sass -D
配置：
 module: {
        rules: [
            {test:/\.(scss|sass)$/,use:['style-loader','css-loader','sass-loader']},
        ]
    },
sass常用语法：https://www.cnblogs.com/chyingp/p/sass-basic.html
```

15.与vue-router

```
安装:npm install vue-router -D
```



15.与vuex的集成

```
安装:npm install vuex -D
```





```
注意：没有要解析的loader
You may need an appropriate loader to handle this file type
```



16.完整的webpack.config.js文件内容如下：

```
//引入webpack,主要用于对webpack内置插件调用时使用
const webpack = require('webpack')
    //引入path，对路径进行处理
const path = require('path')
    //引入清理插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//引入htmlwebpckPlugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')
    //引入VueLoaderPlugin
const { VueLoaderPlugin } = require('vue-loader')

//创建一个配置对象
const config = {
    //线上线下环境
    mode: 'production',
    //配置入口
    entry: './src/main.js',
    //配置出口
    output: {
        //出口路径
        path: path.resolve(__dirname, 'dist'),
        //出口文件名
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // {test:/\.要解析的文件类型$/,use:['要使用的loader']},
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(scss|sass)$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.vue$/, use: ['vue-loader'] },
            { test: /\.(png|jpg|jpeg|gif)$/, use: ['file-loader'] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    //配置缺少文件类型
    resolve: {
        extensions: ['.js', '.json', '.vue']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new webpack.BannerPlugin('项目的入口'),
        new VueLoaderPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 9999,
        hot: true
    }

}

module.exports = config;
```















