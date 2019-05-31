const path = require('path')
const webpack = require('webpack')
const CleanWebpaclPlugin = require('clean-webpack-plugin')

const resolve = (dir) => path.join(__dirname, '..', dir)

module.exports = {
  mode: 'production',
  entry: {
    vendor: ['vue/dist/vue.runtime.esm.js', 'vue-router', 'vuex', 'axios'],
    polyfill: ['babel-polyfill']
  },
  output: {
    path: resolve('src/public/dll'),
    library: '_dll_[name]',
    filename: '_dll_[name].js'
  },
  plugins: [
    new CleanWebpaclPlugin(),
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, '../src/public/dll', '[name].manifest.json')
    })
  ]
}
