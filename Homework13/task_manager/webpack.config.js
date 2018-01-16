const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PATHS = {
    source: path.join(__dirname, 'public'),
}
module.exports = {
	entry: PATHS.source + '/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css"),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'index.html'),

		}),
	]
};
