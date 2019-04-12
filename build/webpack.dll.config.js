const path = require('path');
const webpack = require('webpack');
const CleanWebpaclPlugin = require('clean-webpack-plugin');

const resolve = (dir) => path.join(__dirname, '..', dir);

module.exports = {
  mode:'production',
  entry: {
    vendor: ['vue', 'vue-router','vuex','axios','es6-promise']
  },
  output: {
    path: resolve('src/public'),
    library: '_dll_[name]',
    filename: 'dll/_dll_[name].js'
  },
  plugins: [
    new CleanWebpaclPlugin(),
    new webpack.DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, '../src/public/dll', '[name].manifest.json')
    })
  ]
}