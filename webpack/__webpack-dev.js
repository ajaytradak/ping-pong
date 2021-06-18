const path = require("path");
const webpack = require("webpack");
const common = require("./__common");

const mode = 'development';

const entry = [
  "webpack-dev-server/client?http://localhost:8100",
  "./src/js/app.tsx"
];

const config = common.__config(__dirname, mode)

const output = {
  ...config.output
};

const optimization = {
  ...config.optimization
};

const resolve = {
  ...config.resolve,
  alias: { 'react-dom': '@hot-loader/react-dom' }
};

const modules = {
  ...config.modules
};

const plugins = [
  ...config.plugins,
  new webpack.WatchIgnorePlugin([
    /\.js$/,
    path.resolve(__dirname, "../node_modules")
  ])
];

const devServer = {
  inline: true,
  hot: true,
  port: 8100,
  historyApiFallback: true,
  contentBase: "./build"
};

module.exports = {
  mode: mode,
  entry: entry,
  output: output,
  optimization: optimization,
  resolve: resolve,
  module: modules,
  plugins: plugins,
  devServer: devServer,
  devtool: false
};
