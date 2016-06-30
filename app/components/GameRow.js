import React from 'react'
import GameCell from './GameCell'

class GameRow extends React.Component{
  render() {
    let rowValues = this.props.rowValues;
    let rowNumber = this.props.rowNumber;
    let buttons = [0, 1, 2].map((val) => {
      return <div className="col-xs-4 game-cell" key={rowNumber + "-" + val}>
        <GameCell value={rowValues[val]} row={rowNumber} col={val} onGameMove={this.props.onGameMove}/>
      </div>
    });
    return (
      <div className="row">
        {buttons}
      </div>
    );
  }
}

export default GameRow;
