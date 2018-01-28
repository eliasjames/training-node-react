class Square extends React.Component {
  render() {
    return (
      <button className="square">
        { this.props.value }
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare( i ) {
    return <Square value={i} key={i} />;
  }

  render() {
    const status = 'Next player: X';
    let boardLayout = [], 
			eachRowLayout = [],
			squareCounter = 0;

    for ( let i=0; i<3; i++ ) {
			for ( let i=0; i<3; i++ ) {
				eachRowLayout.push( this.renderSquare( squareCounter ));
				squareCounter++;
			}
      boardLayout.push( <div key={i} className="board-row">{ eachRowLayout }</div> );
			eachRowLayout = [];
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
