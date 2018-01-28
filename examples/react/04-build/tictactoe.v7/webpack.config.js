const path = require( 'path' );

module.exports = {
	devServer: {
		publicPath: './dist'
	},
  devtool: 'source-map',
	entry: './tictactoe.v7.load.js',
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  output: {
    path: path.resolve( 'dist' ),
    filename: 'bundle.js'
  },
}
