const webpack = require('webpack'),
      path = require('path'),
      // ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      config = require('./config');

module.exports = {
  entry: ['./src/App.js'],
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'assets/[name].bundle.js',
    publicPath: config.PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
            test:   /\.sss/,
            loader: "style-loader!css-loader!postcss-loader?parser=sugarss"
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.ejs$/,
        exclude: /node_modules/,
        loader: 'ejs-render-loader'
      }
    ]
  },
  plugins: [
    // new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/ejs/index.ejs'
    })
  ]
}
