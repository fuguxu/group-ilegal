/* eslint-disable new-cap */
const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')

const webpackConfig = require('./webpack.pro.config')
const port = 9000

let compiler = webpack(webpackConfig, () => {
  console.log('编译完成')
})

const app = new express()

app.use(webpackDevMiddleware(compiler, {
  // publicPath: '../dist',
  lazy: true
}))
// app.use(webpackHotMiddleware)
// console.log('************compiler********', compiler)

app.listen(port, (err) => {
  if (err) {
    throw Error(err)
  } else {
    // let url = 'http://localhost:' + port
    console.log('listening on port %s', port)
  }
})
