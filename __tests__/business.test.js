import { Puzzle } from './../src/business.js';

describe('Puzzle', () => {

  test('should instantiate a new puzzle', () => {
    const puzzle = new Puzzle();
    expect(puzzle.rows).toEqual({});
  });
  test('should instantiate a new puzzle', () => {
    const puzzle = new Puzzle();
    expect(puzzle.columns).toEqual({});
  });

});