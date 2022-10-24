/**
 * Webpack main configuration file
 */

const path = require('path');
const environment = require('./configuration/environment');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(environment.paths.source, 'js', 'app.js')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                            sassOptions: {
                                outputStyle: "compressed",
                            },
                        },
                    }
                ]
            }
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: environment.paths.output,
        publicPath: '/dist/'
    },
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
        }),
    ],
    resolve: {
        fallback: {
            "fs": false
        },
        extensions: ['*', '.js', '.jsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules']
    }
}