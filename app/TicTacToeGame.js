import React from 'react';
import Board from './components/Board';
import {checkWinner} from './services';

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
      winner: null,
      nextPlayer: true
    };
  }
  handleGameMove(row, col){
    let board = this.state.board;
    board[row][col] = player(this.state.nextPlayer);
    let nextPlayer = !this.state.nextPlayer;
    let winner = checkWinner(board);
    this.setState({board, nextPlayer, winner});
  }
  render () {
    return <div className="center-block game-container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>React - Tic Tac Toe</h1>
        </div>
      </div>
      <Board board={this.state.board} onGameMove={this.handleGameMove.bind(this)} winner={this.state.winner}/>

      { !this.state.winner &&
        <div className="row text-center player-info">
          <p>Next player: <span>{player(this.state.nextPlayer)}</span></p>
        </div>
      }
    </div>;
  }
}

export default TicTacToeGame;
