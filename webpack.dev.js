const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const DIST_DIR = path.resolve(__dirname,"dist");
const SRC_DIR = path.resolve(__dirname,"src");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


require("@babel/register");
require("@babel/polyfill");

 module.exports = merge(common, {
	mode: 'development',
	entry: {
	    app: SRC_DIR + "/App.js",
	},
	devtool: 'inline-source-map',
	devServer: {
      contentBase: DIST_DIR,
    },
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
	        title: 'To Do List',
	        template: './src/index.html'
		}),
    ],
	output: {
		filename: '[name].bundle.js',
		path: DIST_DIR,
	},
	resolve: {
	    alias: {
	      src: SRC_DIR
	    }
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: SRC_DIR,
				exclude: /node_modules/,
				use: {
			        loader: 'babel-loader',
			        options: {
			          presets: [
				          "@babel/preset-env",
				          "@babel/preset-react"],
			          plugins: ["@babel/plugin-transform-runtime"]
			        }
		        },
            },
            {
            	test: /\.((c|sa|sc)ss)$/i,

		        use: [
		          'style-loader',
		          {
		            loader: 'css-loader',
		            options: {
						importLoaders: 1,
						modules: true
		            },
		          },
		          {
		            loader: 'sass-loader',
		          },
		        ],
            },
	        {
	          test: /\.(png|svg|jpg|gif)$/,
	          use: [
	            'file-loader',
	          ],
	        },
	        {
	          test: /\.(woff|woff2|eot|ttf|otf)$/,
	          use: [
	            'file-loader',
	          ],
	        },
	    ],
	},
});

