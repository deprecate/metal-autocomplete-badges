const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		'AutocompleteBadges.js': './src/AutocompleteBadges.js',
		'autocompleteBadges.css': './src/autocompleteBadges.scss'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						compact: false,
						presets: ['babel-preset-es2015'],
						plugins: ['babel-plugin-transform-node-env-inline']
					}
				}
			},
			{
		    test: /\.scss$/,
		    use: ExtractTextPlugin.extract({
		    	fallback: 'style-loader', 
		    	use: ['css-loader', 'sass-loader']
		    }), 
		  }
		]
	},
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './build/globals/[name]'
	},
	plugins: [
		new ExtractTextPlugin('./build/globals/autocompleteBadges.css'),
		new webpack.optimize.ModuleConcatenationPlugin()
	]
};
