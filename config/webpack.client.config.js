const webpack = require('webpack')
const base = require('./webpack.base.config')
const vueConfig = require('./vue-loader.config')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: (base.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HTMLPlugin({
      filename: '_index.html',
      template: 'config/template.html'
    })
  ])
})

if (process.env.NODE_ENV === 'production') {
  vueConfig.loaders = {
    scss: ExtractTextPlugin.extract({
      loader: 'css-loader!sass-loader',
      fallbackLoader: 'vue-style-loader'
    })
  }

  config.plugins.push(
    new ExtractTextPlugin('styles.[hash].css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new SWPrecachePlugin({
      cacheId: 'stephandevries-portfolio',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/]
    })
  )
}

module.exports = config
