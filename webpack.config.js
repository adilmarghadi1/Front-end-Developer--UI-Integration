const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: { index: path.resolve(__dirname, "source", "index.js") },
    output: { path: path.resolve(__dirname, "build"), filename: "main.js" },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            
           
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "source", "index.html")
        })
    ],
    
};