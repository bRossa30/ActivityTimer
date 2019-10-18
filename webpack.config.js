// Imports: Dependencies
const path = require('path');
require("babel-register");
// Webpack Configuration
const config = {

    // Entry
    entry: ['./src/scripts/index.js'],
    // Output
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        filename: 'bundle.js',
    },
    // Loaders
    module: {
        rules: [
            // JavaScript/JSX Files
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'

                ]
            }
        ]
    },
    // Plugins
    plugins: [],
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        publicPath: '/scripts/'
    },
    devtool: 'source-map'
};
// Exports
module.exports = config;