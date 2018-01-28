const path = require( 'path' );
const env = require( './env' );

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    loaders: [
      { 
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
				query:
					{
						presets: [ 'es2015', 'react' ]
					}
      }
    ]
  },
  output: {
    path: path.resolve( 'dist' ),
    filename: 'bundle.js'
  },
};
