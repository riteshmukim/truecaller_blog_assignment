const path = require("path");
const webpack = require("webpack");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const WebpackNotifierPlugin = require("webpack-notifier");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",

  output: {
    path: path.resolve(__dirname, "../public"),
    chunkFilename: "[name].js",
    filename: "[name].js",
    publicPath: "/",
  },

  plugins: [
    new webpack.ProgressPlugin(),
    new WebpackNotifierPlugin({
      title: "Blog Watcher",
      alwaysNotify: true,
    }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ["**/*", "!*.html*"],
    // }),
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: "src/client/index.html",
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],

  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        include: [path.resolve(__dirname, "../src/client")],
        loader: "babel-loader",
      },
      {
        test: /.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",

            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg)$/,
        use: ["file-loader"],
      },
    ],
  },
};
