let exampleVersion = 'v1.3';
let confName =  'webpack.config.' + exampleVersion + '.js';
console.log( '\n\nUSING ' + confName + '\n\n' );
module.exports = require( './' + confName );
