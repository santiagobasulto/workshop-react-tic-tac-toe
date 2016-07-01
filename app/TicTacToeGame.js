import React from 'react'
import Board from './components/Board';

let player = (() => {
  let map = new Map([
    [true, 'X'],
    [false, 'O']
  ]);
  return ((pl) => map.get(pl));
})();

class TicTacToeGame extends React.Component {
  constructor(){
    super();
    this.state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      nextPlayer: true
    };
  }
  handleGameMove(row, col){
    let board = this.state.board;
    board[row][col] = player(this.state.nextPlayer);
    let nextPlayer = !this.state.nextPlayer;
    this.setState({board, nextPlayer});
  }
  render () {
    return <div className="center-block game-container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>React - Tic Tac Toe</h1>
        </div>
      </div>
      <Board board={this.state.board} onGameMove={this.handleGameMove.bind(this)}/>
      <div className="row text-center player-info">
        <p>Next player: <span>{player(this.state.nextPlayer)}</span></p>
      </div>
    </div>
  }
}

export default TicTacToeGame;
