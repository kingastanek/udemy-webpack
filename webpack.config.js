const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    paht: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPaht: ''
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};