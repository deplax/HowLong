const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');
const port = process.env.PORT || 8080;
const srcDir = path.join(__dirname, ".", "src");

module.exports = {
  entry: {
    background: path.join(srcDir, 'background.ts')
  },
  output: {
    path: path.join(__dirname, './dist/js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new CopyPlugin({patterns: [{from: "js/", to: path.join(__dirname, ".", "extension"), context: "dist"}]}),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    open: true,
    historyApiFallback: true
  }
};
