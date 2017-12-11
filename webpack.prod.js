const merge = require('webpack-merge'),
      common = require('./webpack.common'),
      SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      config = require('./config');

const PUBLIC_PATH = 'http://qara.kz/'

module.exports = merge(common, {
  output: {
    publicPath: PUBLIC_PATH
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: true
    }),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'qara',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: PUBLIC_PATH + 'index.html',
        staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
      }
    )
  ]
})
