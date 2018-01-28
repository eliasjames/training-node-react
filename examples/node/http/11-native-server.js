// launch Node REPL
// from command prompt, type 'node' (no arguments)
// prompt changes to '>'
// load this file into a local variable:
//   var useFileSystem = require( './10-file-system' )();

module.exports = function( options ) {
  const FS = require( 'fs' );
  var serveStatic = require('serve-static');

  returnObject = {
    showFS() {
      return FS;
    },
		startServer() {
			let http = require("http");

      let dir = '/Users/eliascarlston/Documents/code/training-node-backbone/examples/node'
      let serve = serveStatic( dir, {'index': ['index.html', 'index.htm']});
			let server = http.createServer( ( req, res )=>{
         serve(req, res, (req, res)=>{});
			});

			server.listen( 8000 );
			console.log("Server is listening");
		}
  };

  return returnObject;
}
