class Board extends React.Component {
  renderSquare( i ) {
    return (
      <Square 
        key={ i } 
        value={ this.props.squares[ i ] } 
        onClick={ ()=>{ this.props.handleClick( i ); }} 
      />
    );
  }

  render() {
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
				{ boardLayout }
      </div>
    );
  }
}
