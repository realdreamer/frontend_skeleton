let path = require('path');
let webpack = require('webpack');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let pathsToClean = [
  'build'
];

let cleanOptions = {
  verbose: true,
  dry: false
};
module.exports = {
  context: __dirname,
  entry: {
    main: path.resolve(__dirname, 'app/js/index.js'),
    style: path.resolve(__dirname, 'app/css/base.scss')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build'
  },
  resolve: {
    extensions: ['.js', '.es6', '.jsx', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },
      {
        test: /\.(scss|scss)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css',
      publicPath: 'build'
    }),
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    port: 9000
  }
};
