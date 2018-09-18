const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const isProd = process.env.NODE_ENV === 'production';

module.exports = [
  new UglifyJsPlugin({
    cache: true,
    parallel: true,
    exclude: /\/node_modules/,
    extractComments: isProd ? false : true,
    sourceMap: !isProd ? false : true,
    uglifyOptions: {
      compress: true
    }
  }),
  new OptimizeCSSAssetsPlugin({}),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html',
    inject: 'body',
    xhtml: true,
    minify: !isProd ? {
      caseSensitive: true,
      collapseWhitespace: true,
      keepClosingSlash: true
    } : false
  }),
  new MiniCssExtractPlugin({
    filename: !isProd ? 'css/[name].css' : 'css/[name].[hash].css',
    chunkFilename: !isProd ? 'css/[id].css' : 'css/[id].[hash].css',
  }),
  new CleanWebpackPlugin(['../dist']),
  new CopyWebpackPlugin([{
    from: './src/assets/images',
    to: './images'
  }]),
  new BrotliGzipPlugin({
    asset: '[path].br[query]',
    algorithm: 'brotli',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  new BrotliGzipPlugin({
    asset: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
  })
];