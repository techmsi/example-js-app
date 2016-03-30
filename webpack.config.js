'use strict';

var webpack = require('webpack');
var production = process.env.NODE_ENV === 'production';
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'app-client.js');

var config = {
  debug: !production,
  devtool: production ? false : 'inline-sourcemap',
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST,
    port: process.env.PORT
  },
  entry: [
    'webpack/hot/dev-server', // hot updates
    'webpack-dev-server/client?http://localhost:8080', // refresh
    mainPath // app
  ],
  output: {
    path: buildPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      { test: require.resolve('jquery'), loader: 'imports?jQuery=jquery' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.js?$/, exclude: [nodeModulesPath], loader: 'babel' , query: { presets: ['es2015']} },
      { test: /\.jsx?$/,  exclude: [nodeModulesPath], loader: 'babel' },

      // Needed for bootstrap & other assests
      { test: /\.css$/, loader: 'style!css!autoprefixer?browsers=last 2 versions' },
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
			{ test: /\.(woff|woff2)$/, loader:'url?prefix=font/&limit=5000' },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
