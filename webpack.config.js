const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /.ts/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /.less/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
        alias: {
            '@': path.resolve(__dirname, 'src/app/')
        },
    },
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerWebpackPlugin()
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            minify: false,
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ],
    devServer: {
        port: 9000,
        compress: true
    }
}