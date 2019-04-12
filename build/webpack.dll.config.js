const path = require('path');
const webpack = require('webpack');
const CleanWebpaclPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: {
        // 将 lodash 模块作为入口编译成动态链接库
        lodash: ['lodash']
    },
    output: {

        path: path.resolve(__dirname, 'public/vendor'),
        // 指定文件名
        filename: '[name].dll.js',
        library: '[name]_dll_lib'
    },
    plugins: [
        new CleanWebpaclPlugin(['vendor'], {
            root: path.resolve(__dirname, 'public')
        }),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'public', 'vendor', '[name].manifest.json'),
            name: '[name]_dll_lib'
        })
    ]
}