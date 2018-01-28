const path = require( 'path' );

module.exports = {
  devtool: 'source-map',
  entry: './src/root.v1.0.js',
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
