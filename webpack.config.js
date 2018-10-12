const webpack = require('webpack')
const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


module.exports = {
  // babel-polyfill add for Async/await usage pollyfill add dev dependency
  entry:['babel-polyfill', './src/index.js'],
  // Which file types are in our project, and where they are located
  resolve: {
    extensions: ['.js', '.jsx','.css','.min.css']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    sourceMapFilename: 'bundle.map.js'
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
       test: /\.css$/,
       loader: 'style-loader!css-loader'
     },
     {
       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
       loader: 'url-loader',
       options: {
         limit: 10000
       }
     }
    ]
},
plugins: [
    new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  })
],
plugins: [htmlPlugin]
};
