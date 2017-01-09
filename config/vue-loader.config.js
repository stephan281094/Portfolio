module.exports = {
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['last 3 versions']
    })
  ],
  loaders: {
    scss: 'vue-style-loader!css-loader!sass-loader'
  }
}
