'use strict'

const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports = validate({
    devtool: 'source-map',
    mode: 'development',
    performance: { hints: false },
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(__dirname,'src','index')
    ],
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                // set up standard-loader as a preloader
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'standard-loader',
                exclude: /(node_modules|bower_components)/
            },
            {
            test: /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'babel-loader'
        }]
    }
})