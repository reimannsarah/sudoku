import { Puzzle } from './../src/business.js';

describe('Puzzle', () => {

  test('should instantiate a new puzzle', () => {
    const puzzle = new Puzzle();
    expect(puzzle.data).toEqual("puzzle");
  });
});