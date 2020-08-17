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
        filename: 'bundle-[hash].js'
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