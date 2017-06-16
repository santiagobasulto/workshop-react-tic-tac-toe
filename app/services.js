import _ from 'lodash';

function getColumns(board){
  let flatBoard = _.flatten(board);
  let getCol = (colNumber) => {
    let idxs = _.map([0, 3, 6], (idx) => {
      return colNumber + idx;
    });
    return _.map(idxs, (idx) => {
      return flatBoard[idx];
    });
  };

  return _.map(_.range(0, 3), (colNumber) => {
    return getCol(colNumber);
  });
}

function getDiagonals(board){
  return _.map([0, 2], (mul) => {
    return _.map(_.range(0, 3), (idx) => {
      return board[idx][Math.abs(mul-idx)];
    });
  });
}

function _winningCombination(row){
  return _.find(['X', 'O'], (player) => {
    return _.filter(row, (col) => {
      return col == player;
    }).length == 3;
  }) || null;
}

function checkWinner(board){
  let combinations = _.union(board, getColumns(board), getDiagonals(board));
  let winner = _.find(combinations, (row) => {
    return _winningCombination(row);
  });
  return (winner && winner[0]) || null;
}

export {checkWinner, getColumns, getDiagonals, _winningCombination};
