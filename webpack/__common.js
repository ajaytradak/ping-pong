const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const __config = (dirname, mode) => {

	const output = {
	  publicPath: "/",
	  path: path.resolve(dirname, "../build"),
	  filename: `[name].js?v=[hash]`,
	  chunkFilename: `partials/[name].chunk.js?v=[hash]`
	};

	const optimization = {
		removeAvailableModules: true,
		minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
    ]
	};

	const resolve = {
	  modules: [
	  	path.resolve(__dirname, '../src', 'js'),
	  	path.resolve(__dirname, '../node_modules')
	  ],
	  extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
	  plugins: [ new TsconfigPathsPlugin({ configFile: path.resolve(dirname, '../tsconfig.json')  })]
	};

	const modules = {
	  rules: [
	    {
	      test: /\.ts(x?)$/,
	      use: [
	        {
	          loader: 'thread-loader',
	          options: {
	            workers: 1,
	            poolRespawn: false
	          }
	        },
	        {
	          loader: "ts-loader",
	          options: {
	            transpileOnly: true,
	            happyPackMode: true
	          }
	        }
	      ],
	      include: [
	        path.resolve(dirname, "../src/js")
	      ],
	      exclude: [
	        path.resolve(dirname, "../node_modules")
	      ]
	    },
	    {
      	test: /\.css$/,
	      use: [
	        { loader: mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader },
	        { loader: 'css-loader' }
	      ],
	      include: [
	        path.resolve(dirname, '../node_modules')
	      ]
	    }
	  ]
	};

	const plugins = [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
	    filename: "css/main.css?v=[hash]"
	  }),
	  new webpack.optimize.ModuleConcatenationPlugin(),
	  new HtmlWebpackPlugin({
	  	title: "Pingpong app",
	    template: path.resolve(__dirname, "../src/index.html"),
	    filename: "index.html",
	    inject: true,
	    xhtml: true,
	    minify: true
	  }),
	  new webpack.SourceMapDevToolPlugin({
	    filename: `[file].map`,
	    exclude: [/vendor/, /css/, /images/],
	    noSources: true
	  }),
	  new ForkTsCheckerWebpackPlugin({
	    watch: [
	      path.resolve(dirname, "../src/js")
	    ],
	    checkSyntacticErrors: true,
	    async: false,
	    tsconfig: path.resolve(dirname, '../tsconfig.json')
	  }),
	  new webpack.HotModuleReplacementPlugin()
	];

	return {
		output: output,
		optimization: optimization,
		resolve: resolve,
		modules: modules,
		plugins: plugins
	};

};

module.exports = {
  __config: __config
};
