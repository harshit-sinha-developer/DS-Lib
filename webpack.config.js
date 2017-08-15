var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, './dist'),
        filename: 'dslib.js',
        libraryTarget: "var",
        // name of the global var: "Foo"
        library: "DsLib"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    watch: true,
    devtool: 'source-map'
}