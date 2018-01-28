function renderWhenReady(){
	ReactDOM.render(
		<Board/>,
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
