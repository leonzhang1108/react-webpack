
const base = require('./base');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(base, {
  devtool: 'source-map',   //enable srouce map
});