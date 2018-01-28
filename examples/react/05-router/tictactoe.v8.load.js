import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './tictactoe.v8.app.js';

function renderWhenReady(){
	ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
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
