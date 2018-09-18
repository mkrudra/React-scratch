
const isProd = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports =[
  {
    test: /\.html$/,
    use: [{
      loader: "html-loader",
      options: {
        minimize: true
      }
    }]
  },
  {
    test: /\.(js)x?$/,
    loader: 'babel-loader',
    exclude: /\/node_modules/
  },
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          minimize: true,
          sourceMap: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          minimize: true,
          "get($keys)": function (keys) {
            keys = keys.getValue().split(".");
            let result = sassVars;
            let i;
            for (i = 0; i < keys.length; i++) {
              result = result[keys[i]];
            }
            result = sassUtils.castToSass(result);
            return result;
          }
        }
      }
    ]
  },
  {
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    use: [{
      loader: 'url-loader',
      options: {
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
];