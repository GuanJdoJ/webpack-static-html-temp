const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        one: "./src/js/one.js",
        two: "./src/js/two.js",
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].boundle.js',
    },
    mode:"development",
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: [
                {
                  loader: "style-loader", // creates style nodes from JS strings
                },
                {
                  loader: "css-loader", // translates CSS into CommonJS
                }
              ],
            },
          ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/html/one.html',
            filename:'one.html',//生成的html页面的名字为one.html
            hash:true,
            chunks:['one']
        }),
        new HtmlWebpackPlugin({
            template:'./src/html/two.html',
            filename:'two.html',//生成的html页面的名字为one.html
            hash:true,
            chunks:['one']
        }),
    ]
}