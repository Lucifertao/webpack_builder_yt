
const path = require('path');

process.chdir(path.join(__dirname, 'template'));
const webpack = require('webpack');
const rimraf = require('rimraf');
const prodConfig = require('../../lib/webpack.prod');

rimraf('./dist', () => {
  webpack(prodConfig).run((err, stats) => {
    if (err) {
      process.exit(1);
    } else {
      console.log(stats.toString({
        colors: true,
        modules: false,
        children: false,
      }));
    }
  });
});
