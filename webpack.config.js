const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    open: true,
  },
  mode: 'development',
  target: 'web',
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.asc\.ts?$/,
        loader: 'as-loader',
        options: {
          // Options...
        },
      },
      {
        test: /\.ts$/,
        exclude: [/\.asc\.ts?$/],
        loader: 'ts-loader',
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [path.resolve(__dirname, 'src/index.html')],
    }),
  ],
};
