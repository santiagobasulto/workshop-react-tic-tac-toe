import React from 'react'


class TicTacToeGame extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render () {
    return <div className="center-block game-container">
      <div className="row">
        <div className="col-xs-12 text-center">
          <h1>React - Tic Tac Toe</h1>
        </div>
      </div>
    </div>;
  }
}

export default TicTacToeGame;
