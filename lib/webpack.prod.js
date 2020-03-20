const merge = require('webpack-merge');
const path = require('path');
const cssnano = require('cssnano');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseConfig = require('./webpack.base');

const projectRoot = process.cwd();
const absPath = `${path.join(projectRoot, 'package.json')}`;
const { version } = require(absPath);
process.env.NODE_ENV = 'production';
const config = {
  mode: 'production',
  devtool: 'none',
  output: {
    publicPath: './',
    path: path.join(projectRoot, 'dist', version),
    filename: '[name]/main.[chunkHash:4].js',
    chunkFilename: 'lib/[name].[chunkHash:4].js',
  },
  stats: {
    assets: true,
    children: false,
    modules: false,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 6,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          minChunks: 2,
          priority: -10,
        },
        react: {
          test: /(react|react-dom)/,
          chunks: 'all',
          name: 'react',
        },
        commons: {
          name: 'commons',
          minSize: 10,
          test: /[\\/]src[\\/]/,
          chunks: 'all',
          minChunks: 3,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: cssnano,
    }),
  ],
};
module.exports = merge(baseConfig, config);
