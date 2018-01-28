import React from 'react';
import ReactDOM from 'react-dom';

function renderWhenReady(){
	ReactDOM.render(
		<h1>Hello, world!</h1>,
		document.getElementById('root')
	);
}

if ( document.readyState === 'complete' || document.readyState === 'interactive' ) {
	renderWhenReady();
} else {
	document.addEventListener( 'DOMContentLoaded', ()=>{
		renderWhenReady();
	});
}
