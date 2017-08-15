var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/scripts/LinkedList.js',
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        libraryTarget: "var",
        // name of the global var: "Foo"
        library: "DsLib"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    watch: true,
    devtool: 'source-map'
}