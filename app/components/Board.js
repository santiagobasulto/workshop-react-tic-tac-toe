import React from 'react'
import GameRow from './GameRow';

class Board extends React.Component{
  render(){
    let board = this.props.board;
    let rows = [0, 1, 2].map((val) => {
      return <GameRow rowValues={board[val]} rowNumber={val} key={val} onGameMove={this.props.onGameMove}/>
    });
    if(!this.props.winner){
      return <div className="row board-container">
        <div className="col-xs-12">
          {rows}
        </div>
      </div>
    }else{
      return <div>
        <h1>We have a Winner!</h1>
        <p>Congratulations {this.props.winner}</p>
      </div>
    }
  }
}

export default Board;
