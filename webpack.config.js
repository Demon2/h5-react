var path = require('path');
var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require("html-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    debug: true,
    devtool: 'source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client?reload=true',
        './app/js/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    resolve: {
        alias: {
            'redux': path.join(__dirname, 'node_modules/redux'),
            js: path.join(__dirname, "app/js"),
            style: path.join(__dirname, "app/style"),
            assets: path.join(__dirname, "app/assets"),

            actions: path.join(__dirname, "app/js/actions"),
            components: path.join(__dirname, "app/js/components"),
            middleware: path.join(__dirname, "app/js/middleware"),
            reducers: path.join(__dirname, "app/js/reducers"),
            server: path.join(__dirname, "app/js/server"),
            store: path.join(__dirname, "app/js/store"),
            view: path.join(__dirname, "app/js/view"),

            util: path.join(__dirname, "app/js/util.js"),
            config: path.join(__dirname, "app/js/config.js")
        },
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: path.join(__dirname, 'app', 'js')
            },
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=8192'
            },
            {
                test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000"
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: process.env.DEV_TOOL || false,
            __DEVTOOLS__: process.env.DEV_TOOL || false,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new ExtractTextPlugin("app.css", {
            allChunks: true,
            disable: false
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            title: 'ES题库',
            filename: 'index.html',
            template: 'index.template.html',
            favicon: path.join(__dirname, 'app', 'assets', 'images', 'favicon.ico')
        })
    ]
};
