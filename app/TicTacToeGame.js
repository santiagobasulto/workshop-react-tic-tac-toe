import React from 'react'
import Board from './components/Board';

class TicTacToeGame extends React.Component {
  constructor(props){
    super(props);
    this.store = props.store;
    this.state = props.store.getState();
  }
  handleGameMove(row, col){
    this.store.dispatch({type: 'MOVE', row, col});
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
        <p>Next player: <span>{this.state.nextPlayer}</span></p>
      </div>
    </div>
  }
  componentWillMount() {
    let store = this.store;
    let self = this;
    store.subscribe(() => self.setState(store.getState()))
  }
}

export default TicTacToeGame;
