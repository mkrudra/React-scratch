const path = require('path');
const isProd = process.env.NODE_ENV === 'production';
const loaders = require('./webpack.loaders');
const plugins = require('./webpack.plugins');

module.exports = {
  mode: 'production',
  target: "web",
  devtool: (isProd === 'development') ? 'inline-source-map' : false,
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js',
    pathinfo: true,
    publicPath:'/'
  },
  devServer: {    
    compress: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'async'
    }
  },
  plugins: plugins,
  module: {
    rules: 
      loaders    
  }
};