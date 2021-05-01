const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry : path.resolve(__dirname , 'src/index.ts'),
    output : {
        path: path.resolve(__dirname , 'dist/'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.ts|.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename : path.resolve(__dirname , './dist/index.html'),
            template : path.resolve(__dirname , './public/index.html'),
        }),
        new MiniCSSExtractPlugin({
            filename: 'css/[fullhash].css',
            linkType: 'text/css'
        })
    ],
    devServer: {
        port: 8080,
        open: true
    }
}