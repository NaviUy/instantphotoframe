const path = require('path')

module.exports = {
    mode: 'production',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: 'umd',
        publicPath: 'auto'
    },
    module:{
        rules: [
            {
            test: /\.png$/,
            exclude: /node_modules/,
            use : {
                loader: 'url-loader'
            },
            },
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
                }
            },
            {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.png'],
    }
}
