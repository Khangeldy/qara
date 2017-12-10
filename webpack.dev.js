const merge = require('webpack-merge'),
      common = require('./webpack.common'),
      BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge( common, {
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: './dist'
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {baseDir: ['dist']}
    })
  ]
})
