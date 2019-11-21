// Imports: Dependencies
const path = require('path');
const autoprefixer = require('autoprefixer');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

require("babel-register");
// Webpack Configuration

module.exports = (env) => {

    const isProduction = env === 'production';

    return {

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
                        'css-loader', {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer()]
                            }
                        },
                        'sass-loader'

                    ]
                }
            ]
        },
        // Plugins
        plugins: [new BundleAnalyzerPlugin({
            analyzerMode: isProduction ? 'static' : 'disabled'
        })],
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            publicPath: '/scripts/'
        },
        devtool: isProduction ? false : "inline-source-map"
    }
};
