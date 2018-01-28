import React from 'react';
import ReactDOM from 'react-dom';
import Game from './tictactoe.v7.2.game.js';

function renderWhenReady(){
	ReactDOM.render(
		<Game/>,
		document.getElementById('root')
	);
}

if( document.readyState === 'complete' || document.readyState === 'interactive' ) {
	renderWhenReady();
} else {
	document.addEventListener( 'DOMContentLoaded', ()=>{
		renderWhenReady();
	});
}
