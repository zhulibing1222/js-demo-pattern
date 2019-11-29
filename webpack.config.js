const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: "cheap-module-eval-source-map",
    entry: './src/demo/js/main.js',
    devServer: {
        contentBase: './dist',
        port: 8080,
        hot: true,
        proxy: {
            '/api/*': {
                target: 'http://localhost:8090'
            }
        }
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use: 'html-loader'
            // },
            // {
            //     test: /\.js$/,
            //     exclude: /(node_modules)/,
            //     loader: 'babel-loader'
            // },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/demo/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
