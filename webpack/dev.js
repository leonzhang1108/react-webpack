
const base = require('./base');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(base, {
  //enable srouce map
  devtool: 'source-map',   
  // 监听打包
  watch: true,
});