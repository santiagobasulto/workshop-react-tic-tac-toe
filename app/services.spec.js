import {checkWinner, getColumns, getDiagonals, _winningCombination} from './services';
import expect from 'expect';

describe('Winning Combinations > ', () => {
  describe('getColumns() > ', () => {
    let board;
    beforeEach(() => {
      board = [
        ['X', null, null],
        [null, 'O', null],
        ['O', null, 'X']
      ];
    });
    it('should return all the columns', () => {
      let columns = getColumns(board);
      expect(columns).toEqual([
        ['X', null, 'O'],
        [null, 'O', null],
        [null, null, 'X']
      ]);
    });
  });
  describe('getDiagonals() > ', () => {
    let board;
    beforeEach(() => {
      board = [
        ['X', null, null],
        [null, 'O', null],
        ['O', null, 'X']
      ];
    });
    it('should return all the diagonals', () => {
      let columns = getDiagonals(board);
      expect(columns).toEqual([
        ['X', 'O', 'X'],
        [null, 'O', 'O']
      ]);
    });
  });
});

describe('_winningCombination() > ', () => {
  it('should return winner if there\'s a winning combination', () => {
    expect(_winningCombination(['X', 'X', 'X'])).toBe('X');
    expect(_winningCombination(['O', 'O', 'O'])).toBe('O');
  });
  it('should return null if there\'re any nulls', () => {
    expect(_winningCombination(['X', null, null])).toBe(null);
    expect(_winningCombination(['O', null, 'O'])).toBe(null);
  });
  it('should return null if there\'re no winners', () => {
    expect(_winningCombination(['X', 'O', 'X'])).toBe(null);
    expect(_winningCombination(['X', 'O', 'X'])).toBe(null);
  });
  it('should return null all nulls', () => {
    expect(_winningCombination([null, null, null])).toBe(null);
    expect(_winningCombination([null, null, null])).toBe(null);
  });
});

describe('checkWinner() > ', () => {
  let board;
  describe('for winners', () => {
    it('should return winner in a row', () => {
      board = [
        ['X', 'X', 'X'],
        [null, 'O', null],
        ['O', null, 'X']
      ];
      expect(checkWinner(board)).toEqual('X');
    });
    it('should return winner in a column', () => {
      board = [
        [null, 'O', 'X'],
        ['X', 'O', null],
        ['X', 'O', null]
      ];
      expect(checkWinner(board)).toEqual('O');
    });
    it('should return winner in first diagonal', () => {
      board = [
        ['O', 'X', 'X'],
        ['X', 'O', null],
        ['X', 'X', 'O']
      ];
      expect(checkWinner(board)).toEqual('O');
    });
    it('should return winner in second diagonal', () => {
      board = [
        ['O', 'O', 'X'],
        [null, 'X', null],
        ['X', 'X', 'O']
      ];
      expect(checkWinner(board)).toEqual('X');
    });
  });
  it('should return null with no winner', () => {
    let board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    expect(checkWinner(board)).toBe(null);
  });
});
