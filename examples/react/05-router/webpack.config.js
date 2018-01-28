const path = require( 'path' );

module.exports = {
	devServer: {
    historyApiFallback: {
      index: 'tictactoe.v8.html'
    },
		publicPath: './dist'
	},
  devtool: 'source-map',
	entry: './tictactoe.v8.load.js',
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
