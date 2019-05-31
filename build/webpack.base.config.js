
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const env = process.env.NODE_ENV
const DEV = env === 'dev'
const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
const cssModuleOption = {
  modules: true,
  localIdentName: '[local]--[hash:base64:5]',
  // cssModules: {
  camelCase: true,
  sourceMaps: true
  // },
}

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/entry/main.js')
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: DEV ? '[name].js' : 'js/[hash:8].[name].min.js',
    chunkFilename: DEV ? '[id].js' : 'js/[hash:8].[name].min.js',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['.js', '.vue', '.css', '.png', '.jpg'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/html/main.html'),
      filename: 'main.html',
      chunksSortMode: 'dependency',
      // favicon:path.join(__dirname, './src/img/favicon.ico'),
      inject: 'body',
      chunks: ['main', 'core', 'vendor'],
      hash: true,
      minify: {
        removeAttributeQuotes: true// 压缩 去掉引号
      }
    }),
    new webpack.DefinePlugin({
      __DEV__: env === 'dev',
      __PROD__: env === 'prod'
    }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new MiniCssExtractPlugin({
      filename: DEV ? 'css/[name].css' : 'css/[hash:8].[name].min.css',
      chunkFilename: DEV ? 'css/[id].css' : 'css/[hash:8].[id].css',
      allChunks: true
    }),
    new webpack.ProvidePlugin({
      Vue: [path.resolve(__dirname, '../node_modules/vue/dist/vue.esm.js'), 'default']
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../src/public/dll/vendor.manifest')
    }),
    new webpack.DllReferencePlugin({
      manifest: require('../src/public/dll/polyfill.manifest')
    }),
    new AddAssetHtmlPlugin([
      {
        filepath: path.resolve(__dirname, '../src/public/dll/_dll_polyfill.js'),
        outputPath: 'dll',
        publicPath: 'dll',
        includeSourcemap: false
      },
      {
        filepath: path.resolve(__dirname, '../src/public/dll/_dll_vendor.js'),
        outputPath: 'dll',
        publicPath: 'dll',
        includeSourcemap: false
      }
    ]),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader?cacheDirectory'],
      threadPool: happyThreadPool
    })
  ],
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  },
  optimization: { // webpack4.0打包相同代码配置
    // concatenateModules:true,
    splitChunks: {
      cacheGroups: {// 单独提取JS文件引入html
        // core: {
        //     chunks: 'initial',
        //     test: /node_modules/,
        //     name: 'core',// 入口的entry的key
        //     enforce: true
        // },
        commons: {
          chunks: 'all',
          minSize: 1,
          minChunks: 2,
          name: 'vendor'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: cssModuleOption
      },
      {
        test: /\.js$/,
        use: ['happypack/loader?id=babel'],
        exclude: /node_modules/,
        include: [path.join(__dirname, '../src')]
      },
      {
        test: /\.css$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              'css-hot-loader', MiniCssExtractPlugin.loader, 'postcss-loader',
              {
                loader: 'css-loader',
                options: cssModuleOption

              }
            ]
          },
          {
            use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
          }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: cssModuleOption
          },
          {
            loader: 'postcss-loader',
            options: cssModuleOption
          },
          {
            loader: 'sass-loader',
            options: Object.assign({}, cssModuleOption, {
              data: '$globalColor: red;'
            })
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: DEV ? 'img/[name].[ext]' : 'img/[hash:8].[name].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              // disable: true,
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }

        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: DEV ? 'fonts/[name].[ext]' : 'fonts/[hash:8].[name].[ext]'
          }
        }
        ]
      }
    ]
  }
}
