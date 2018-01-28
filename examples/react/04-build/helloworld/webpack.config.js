const path = require( 'path' );

module.exports = {
  devtool: 'source-map',
	entry: './helloworld.v1.js',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [ 'react' ]
        }
      },
    ]
  },
  output: {
    path: path.resolve( 'dist' ),
    filename: 'bundle.js'
  },
}
