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
};

module.exports = merge(baseWebpackConfig,devConfig);