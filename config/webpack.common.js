const webpack = require('webpack');
const helpers = require('./helpers');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CheckerPlugin} = require('awesome-typescript-loader');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      lodash: "lodash-es",
      jquery: "jquery/src/jquery",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          'angular2-router-loader?loader=system',
        ],
        exclude: [/\.spec\.ts$/]
      },
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader'},
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency',
    }),
    new CheckerPlugin(),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new webpack.ProvidePlugin({
      Util: "exports?Util!bootstrap/js/dist/util",
      Collapse: "exports?Collapse!bootstrap/js/dist/collapse",
    }),
  ],
  node: {
    global: true,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
  }
};
