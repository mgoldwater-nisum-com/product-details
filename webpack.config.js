const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  context: path.resolve(__dirname, "app"),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader'] },
      {test: /\.js/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.jpg/, use: 'file-loader'}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html' 
  })]
};