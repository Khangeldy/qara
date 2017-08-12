module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({ /* ...options */ }),
    require('css-mqpacker')
  ]
}
