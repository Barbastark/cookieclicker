var path = require ('path');
var webpack = require ('webpack');

//Config
module.exports = {
	entry: './app.jsx', //transpilerar från fil
	output: {path: 'dist', filename: 'bundle.js'},//till fil
	watch: true, //transpilerar varje gång jag sparar
	module: {
		loaders: [
			{
			test: /.jsx?$/,//regex som kör alla jsx filer genom babel loader
			loader: 'babel-loader',//använder babel loader
			exclude: /node_modules/,//node modules körs inte genom babel loader
				query: {
					presets: ['es2015', 'react']//transpilerar es6 och react
				}
			}
		]
	},
	
};