var webpack = require('webpack')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var HtmlWebpackPlugin = require('html-webpack-plugin')
var URL = require('../static/constants')
var path = require('path')
var src = path.join(__dirname, '..' , 'src')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
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
      }, {
        test: /\.css$/,
        // loader: ['style-loader', 'css-loader'],
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
    new ExtractTextPlugin('styles.css')
  ],
  resolve: {
    extensions: ['.css', '.js'],
    alias: {
      css: path.join(src, 'style'),
      components: path.join(src, 'components'),
      pages: path.join(src, 'pages'),
      router: path.join(src, 'router')
    }
  }
}