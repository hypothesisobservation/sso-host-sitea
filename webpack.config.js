const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      scriptLoading: 'module'//webpack es module
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  //webpack es module
  experiments: {
    outputModule: true,
  },
  externalsType: 'module',
  externals: {
    webpackNumbers: 'https://sso-webpack-lib.onrender.com/index.bundle.js',
  },
};