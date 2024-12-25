const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|jpeg|svg)$/i,
                type: 'asset/resource',
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.png', '.jpg', '.jpeg', '.svg'],
        plugins: [new TsconfigPathsPlugin({
            configFile: "./tsconfig.json"
        })]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        })
    ]
};