const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Canvas Keyboard',
            filename: 'index.html',
            inject: 'head',
            cache: false,
            meta: 'width=device-width, initial-scale=1',
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
}