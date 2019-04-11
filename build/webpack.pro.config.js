
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');

const prodConfig = {
    devtool: '#source-map',
    plugins:[
        new CleanWebpackPlugin(['dist'])
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: { map: { inline: false } }
            })
        ],
        splitChunks: {
            cacheGroups: {
                core:{
                    chunks:'initial',
                    name:'core',
                    enforce:true
                },
                commons: {
                    chunks: 'all',
                    minChunks: 2,
                    name: 'vendor',
                },
          }
        }
    },
    module: {}
       
};

module.exports = merge(baseWebpackConfig,prodConfig);