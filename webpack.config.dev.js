import webpack from 'webpack'
import path from 'path'


//The webpack-dev-middleware is being used in conjunction with webpack to compile assets in-memory and sever them.
//devtool: ‘inline-source-map’; will provide a path for a file that has an error or warning in the browser’s console. 
//path.resolve(__dirname, 'src/index.js') origin for all of our application code.
//path: path.resolve(__dirname, 'src'), will be bundled to an output file 
//file will be bundled at run time by webpack-dev-middleware. 
export default {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, 'client/index.js') 
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'client'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] }
    ]
  }
}