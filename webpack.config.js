const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Uglify = require("uglifyjs-webpack-plugin");

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src/client/app');
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  watch: false,
  resolve: {
    alias: {
      Config: path.resolve(__dirname, 'src/config'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "src/client"),
    compress: true,
    host: HOST,
    port: DEFAULT_PORT,
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.(scss|css)$/,
        loader: 'style-loader!css-loader?modules&camelCase=dashes&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded&sourceMap'
      }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new Uglify(),
    new ExtractTextPlugin('styles.css')
  ]
}


module.exports = config;
