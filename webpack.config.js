const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, './dist'),
        filename: 'dslib.js',
        libraryTarget: "umd",
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
                        presets: ['es2015-ie']
                    }
                }
            }
        ]
    },
    plugins: [],
    watch: true,
    devtool: 'source-map'
}