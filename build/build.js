
const webpack = require('webpack')
const proConfig = require('./webpack.pro.config')

const complier = webpack(proConfig, (err, stats) => {
  console.log(err)
  // console.log(stats)
  console.log('after-complier', complier)
})
console.log('complier', complier)
