var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var Remarkable = require('remarkable');
module.exports = {
  context: path.join(__dirname, ""),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./js/view.js",
  devServer: {
    inline:true,
    port: 7000
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
};