const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    pathinfo: true
  },
  mode: 'none',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }, {
        minify(file, sourceMap) {
          const extractedComments = [];
          // Custom logic for extract comments
          const {error,map,code,warnings} = require('uglify-module') 
          // Or require('./path/to/uglify-module')
            .minify(
              file, { /* Your options for minification */ },
            );
          return {error, map,code,warnings,extractedComments};
        }
      }),
      new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      canPrint: true
    })
    ],
    splitChunks: {
      chunks: 'async',
      minSize: 3000,
      maxSize: 0,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 5,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([{
      from: './src/assets',
      to: './'
    }])
  ],
  module: {
    rules: [{
        test: /\.(js)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
              sourceMap: true,
              minimize: true,
              localIdentName: "[name]_[local]_[hash:base64]",
              modules: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            mimetype: 'application/font-woff',
            name: 'fonts/[name].[ext]'
          }
        }]
      }, {
        test: /\.(ttf|eot|svg|ttc)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          }
        }]
      }, {
        test: /\.(jpe?g|png|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(mp4|ogg|webm)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'videos/[name].[ext]'
          }
        }]
      }
    ]
  }
}