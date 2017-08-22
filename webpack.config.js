// const webpack = require('webpack');
// const path = require('path');
//
// module.exports = {
//     entry: [
//       './src/index.js'
//     ],
//     output: {
//       path: path.resolve(__dirname, 'build'),
//       publicPath: "/assets/",
//       filename: "bundle.js"
//     },
//     module: {
//         loaders: [
//             {
//               test: /\.(eot|woff|woff2|svg|ttf|png)([\?]?.*)$/,
//               loader: "file-loader"
//             },
//             {
//               test: /\.html$/,
//               loader: 'file-loader?name=[name].[ext]',
//             },
//             {
//               test: /\.jsx?$/,
//               exclude: /node_modules/,
//               loader: 'babel-loader',
//               query: {
//                 presets: ['es2015', 'react']
//               }
//             },
//             {
//               test: /\.scss$/,
//               loaders: ['style-loader', 'css-loader?url=false', 'sass-loader']
//             }
//         ],
//     },
//     devServer: {
//     contentBase: "./public",
//     hot: true
//   },
//     plugins: [
//       new webpack.NamedModulesPlugin(),
//       new webpack.NoEmitOnErrorsPlugin(),
//     ]
// };


const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.jsx?/,
       include : APP_DIR,
       loader : 'babel-loader'
     },
     {
        test: /.(scss|css)$/,
        loader: 'style-loader!css-loader?modules&camelCase=dashes&sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded&sourceMap'
      }
   ]
 },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}


module.exports = config;
