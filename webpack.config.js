const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
  context: path.resolve(__dirname, "app"),
  entry: './driver.js',
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
      {test: /\.html$/, loader: 'html-loader'},
      { test: /\.hbs$/, loader: "handlebars-loader" },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader','sass-loader'] },
      {test: /\.js/, exclude: /node_modules/, use: 'babel-loader'},
      {test: /\.jpg/, use: 'file-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html' 
    })
  ],
  resolve: {
    alias: {
       handlebars: 'handlebars/dist/handlebars.min.js'
    }
  }
};