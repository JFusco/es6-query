var path = require('path');

module.exports = {
	entry: './src/es6-query.js',
	output: {
		path: __dirname+'/dist',
		filename: 'es6-query.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				include: [
					path.join(__dirname, 'src')
				],
				test: /\.js?$/,
				query: {
					presets: ['es2015']
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.html']
	}
};