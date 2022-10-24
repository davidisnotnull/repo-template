/**
 * Webpack main configuration file
 */

const path = require('path');
const environment = require('./configuration/environment');

module.exports = {
    entry: {
        app: path.resolve(environment.paths.source, 'js', 'app.js')
    },
    output: {
        filename: 'js/[name].js',
        path: environment.paths.output,
        publicPath: '/dist/'
    },
    resolve: {
        fallback: {
            "fs": false
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'],
        modules: ['src', 'node_modules']
    }
}