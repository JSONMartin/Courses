const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const CSS_FILE_NAME = 'style.css';
const BUNDLE_FILE_NAME = 'bundle.js';

const config = {
  entry: './src/index.js', // Required (relative path)
  output: {
    path: path.resolve(__dirname, 'build'), // Reference to directory that the output should be saved to (non-relative path, full location required). Can be dist, build, etc
    filename: BUNDLE_FILE_NAME,
    publicPath: 'build/'
  },
  module: {
    rules: [ // Rules == Loader
      {
        use: 'babel-loader',
        test: /\.js$/, // Assigned a regex expression
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin(CSS_FILE_NAME)
  ]
};

module.exports = config;
