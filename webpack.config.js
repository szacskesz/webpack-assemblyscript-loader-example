const path = require("path");
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
  mode: "development",
  target: "web",
  output: {
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, "src/assembly")],
        loader: "as-loader",
        options: {
          bind: true,
        },
      },
      {
        test: /\.ts$/,
        exclude: [path.resolve(__dirname, "src/assembly")],
        loader: "ts-loader",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        path.resolve(__dirname, "src/index.html")
      ]
    }),
  ],
};
