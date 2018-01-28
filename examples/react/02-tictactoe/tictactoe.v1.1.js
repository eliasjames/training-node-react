class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare() {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';
    let boardLayout = [], 
			eachRowLayout = [];

    for ( let i=0; i<3; i++ ) {
      eachRowLayout.push( this.renderSquare() );
    }
    for ( let i=0; i<3; i++ ) {
      boardLayout.push( <div key={i} className="board-row">{ eachRowLayout }</div> );
    }

    return (
      <div>
        <div className="status">{status}</div>
				{ boardLayout }
      </div>
    );
  }
}

// ========================================
function renderWhenReady(){
	ReactDOM.render(
		<Board/>,
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
