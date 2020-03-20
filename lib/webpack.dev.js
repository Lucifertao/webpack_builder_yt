const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  devtool: 'sourceMap',
  devServer: {
    contentBase: './dist',
    hot: true,
    overlay: {
      errors: true,
    },
    stats: 'errors-only',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
module.exports = merge(baseConfig, config);
