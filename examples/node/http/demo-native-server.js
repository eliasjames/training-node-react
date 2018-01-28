var http = require( 'http' ),
  server = http.createServer( function( req, res ){
    console.log( res );
    res.write( 'Hello World' );
    res.end();
  });
server.listen( 3000 );
console.log( 'Listening at localhost:3000' );
