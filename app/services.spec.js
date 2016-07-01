import {checkWinner} from './services';
import expect from 'expect';

describe("checkWinner() > ", () => {
  it("should return null", () => {
    let board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    expect(checkWinner(board)).toBe(null);
  })
});
