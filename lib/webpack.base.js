/* eslint-disable import/no-unresolved */
const path = require('path');
const glob = require('glob');
const ErrorPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const projectRoot = process.cwd();

function setMPA(entrys = []) {
  const minify = {
    // 是否对大小写敏感，默认false
    caseSensitive: true,

    // 是否简写boolean格式的属性如：disabled="disabled" 简写为disabled  默认false
    collapseBooleanAttributes: true,

    // 是否去除空格，默认false
    collapseWhitespace: true,

    // 是否压缩html里的css（使用clean-css进行的压缩） 默认值false；
    minifyCSS: true,

    // 是否压缩html里的js（使用uglify-js进行的压缩）
    minifyJS: true,

    // Prevents the escaping of the values of attributes
    preventAttributesEscaping: true,

    // 是否移除属性的引号 默认false
    removeAttributeQuotes: true,

    // 是否移除注释 默认false
    removeComments: true,

    // 从脚本和样式删除的注释 默认false
    removeCommentsFromCDATA: true,

    // 是否删除空属性，默认false
    removeEmptyAttributes: true,

    //  若开启此项，生成的html中没有 body 和 head，html也未闭合
    removeOptionalTags: false,

    // 删除多余的属性
    removeRedundantAttributes: true,

    // 删除script的类型属性，在h5下面script的type默认值：text/javascript 默认值false
    removeScriptTypeAttributes: true,

    // 删除style的类型属性， type="text/css" 同上
    removeStyleLinkTypeAttributes: true,

    // 使用短的文档类型，默认false
    useShortDoctype: true,
  };
  const dirs = entrys.map((entry) => {
    const entryInfo = path.parse(entry);
    return {
      lastDir: entryInfo.dir.split('/').slice(-1)[0],
      originPath: entry,
      ...entryInfo,
    };
  });
  const entry = dirs.reduce((root, current) => {
    const obj = { ...root, [current.lastDir]: current.originPath };
    return obj;
  }, {});
  const plugins = dirs.map((entryInfo) => new HtmlWebpackPlugin({
    template: path.join(entryInfo.dir, `${entryInfo.name}.html`),
    filename: `${entryInfo.lastDir}.html`,
    minify,
    chunks: ['react', 'vendors', 'commons', entryInfo.lastDir],
  }));
  return {
    entry,
    plugins,
  };
}
function error() {
  this.hooks.done.tap('done', (stats) => {
    if (stats.compilation.errors && stats.compilation.errors.length && process.argv.indexOf('--watch') === -1) {
      // eslint-disable-next-line no-console
      console.log(stats.compilation.errors);
      process.exit(1);
    }
  });
}
const mpa = setMPA(glob.sync(path.join(projectRoot, './src/*/index.js')));

const config = {
  entry: mpa.entry,
  devtool: 'source-map',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre', // 编译前检查
        use: [{
          loader: 'babel-loader',
        }, 'eslint-loader'],
        exclude: /node_modules/,
        include: [path.join(projectRoot, 'src')],
      },
      {
        test: /\.(png|jpg|git|svg|bmp)/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 80 * 1024, // 小于这个值的图片同意转换成base64，否则原样输出即可
            outputPath: 'images/', // 指定文件的输出目录
          },
        },
      },
      {
        test: /\.(woff|woff2)/, use: 'file-loader',
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  overrideBrowserslist: ['last 2 versions'], // 指定需要兼容的浏览器版本
                }),
              ],
            },
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUni: 75,
              remPrecision: 8,
            },
          },
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    error,
    new ErrorPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]/index.[contentHash:6].css',
    }),
  ].concat(mpa.plugins),
};
module.exports = config;
