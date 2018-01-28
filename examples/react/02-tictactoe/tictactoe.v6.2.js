function Square( props ) {
  return (
    <button className="square" onClick={ ()=>{ props.onClick(); }}>
      { props.value }
    </button>
  );
}

class Board extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      squares: Array( 9 ).fill( null ),
      xIsNext: true,
    };
  }

	calculateWinner( squares ) {
		const lines = [
			[ 0, 1, 2 ],
			[ 3, 4, 5 ],
			[ 6, 7, 8 ],
			[ 0, 3, 6 ],
			[ 1, 4, 7 ],
			[ 2, 5, 8 ],
			[ 0, 4, 8 ],
			[ 2, 4, 6 ],
		];
		for ( let i = 0; i < lines.length; i++ ) {
			const [a, b, c] = lines[i];
			if ( squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ) {
				return squares[a];
			}
		}
		return null;
	}

  handleClick( i ) {
    const squares = this.state.squares.slice();
    if ( this.calculateWinner( squares ) || squares[i] ) {
      return;
    }
    squares[ i ] = this.state.xIsNext ? 'X' : 'O';
    this.setState({ 
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare( i ) {
    return (
      <Square 
        key={ i } 
        value={ this.state.squares[ i ] } 
        onClick={ ()=>{ this.handleClick( i ); }} 
      />
    );
  }

  render() {
    const winner = this.calculateWinner( this.state.squares );
    let status;
    if ( winner ) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

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

if( document.readyState === 'complete' || document.readyState === 'interactive' ) {
	renderWhenReady();
} else {
	document.addEventListener( 'DOMContentLoaded', ()=>{
		renderWhenReady();
	});
}
