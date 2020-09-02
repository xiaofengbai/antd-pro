const webpack = require("webpack");
const path = require("path");
const common = require("./webpack.common");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Webpackbar = require("webpackbar");
const merge = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(common, {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[contenthash].js",
    chunkFilename: "js/[name].[contenthash].js",
    publicPath: "/",
  },
  devtool: "#cheap-module-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new Webpackbar(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      hot: true,
      chunks: ["app"],
    }),
    new webpack.DefinePlugin({
      "process.env": require("./config/env/prod.env.js"),
    }),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "./static"), to: "static" }],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: process.env.ANALYZING ? "static" : "disabled",
    }),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { safe: true, map: { inline: false } },
      }),
      new UglifyJsPlugin({ sourceMap: true }),
    ],
  },
  performance: {
    hints: false,
  },
  mode: "production",
});
