/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');
const webpackConfiguration = require('../webpack.config');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = merge(webpackConfiguration, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
});