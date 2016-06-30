import React from 'react';
import { render } from 'react-dom'
import TicTacToeGame from './app/TicTacToeGame';
import { createStore } from 'redux'

function ticTacToeReducer(state, action){
  let cloneBoard = (board) => {
    return [
      board[0].slice(0),
      board[1].slice(0),
      board[2].slice(0)
    ];
  }
  if(state === undefined){
    state = {
      board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
      nextPlayer: 'X'
    }
  }
  switch (action.type) {
  case 'MOVE':
    console.log(action)
    let board = cloneBoard(state.board);
    board[action.row][action.col] = state.nextPlayer;
    let nextPlayer = state.nextPlayer == 'X' ? 'O' : 'X';
    return {board, nextPlayer};
  default:
    return state;
  }
}

let store = createStore(ticTacToeReducer)


render(
  <TicTacToeGame store={store} />,
  document.getElementById('app')
);
