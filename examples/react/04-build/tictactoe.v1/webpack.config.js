const path = require( 'path' );

module.exports = {
  devtool: 'source-map',
	entry: './tictactoe.v1.js',
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
