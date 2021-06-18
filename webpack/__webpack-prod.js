const path = require("path");
const common = require("./__common");

const mode = 'production';

const entry = {
  bundle: [
    path.resolve(__dirname, "../src/js/app.tsx")
  ]
};

const config = common.__config(__dirname, mode)

const output = {
  ...config.output
};

const optimization = {
  ...config.optimization
};

const resolve = {
  ...config.resolve
};

const modules = {
  ...config.modules
};

const plugins = [
  ...config.plugins
];

const devServer = {
  inline: false,
  writeToDisk: true,
  port: 1707,
  stats: {
    chunkModules: false,
    colors: true
  },
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
  devtool: "source-map"
};
