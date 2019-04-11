const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');

const devConfig = {
    devtool: '#eval-source-map',
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        inline: true,
        publicPath: '',
        port: 8888,
        host: 'localhost',
        stats: { cached: false, colors: true },
        disableHostCheck: true
    },
    watch: true,
    plugins: [
        new OpenBrowserPlugin({ url: 'http://localhost:8888/main.html' }),
    ],
    optimization: { // webpack4.0打包相同代码配置
        splitChunks: {
            // maxSize:50000,
            cacheGroups: {// 单独提取JS文件引入html
                core: {
                    chunks: 'initial',
                    name: 'core',// 入口的entry的key
                    enforce: true
                },
                commons: {
                    chunks: 'all',
                    minChunks: 2,
                    name: 'vendor',
                },
            }
        }
    },
};

module.exports = merge(baseWebpackConfig,devConfig);