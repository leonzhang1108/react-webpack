var webpack = require('webpack')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var HtmlWebpackPlugin = require('html-webpack-plugin')
var URL = require('../static/constants')
module.exports = {
  entry: {
    bundle: './index.js',
    vendor: ['react', 'react-dom', 'react-router', 'react-router-dom']
  },
  output: {
    path: URL.dist,
    filename: "[hash:8].[name].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      // vendor是包括公共的第三方代码，称为initial chunk
      names: ['vendor']
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: './index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      css: `${__dirname}/src/style`
    }
  }
}