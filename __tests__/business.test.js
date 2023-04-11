import { Puzzle, Row, Column } from './../src/business.js';

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

describe('Row', () => {

  test('should return a number', () => {
    const row = new Row(1);
    expect(row.number).toEqual(1);
  });
});

describe('Column', () => {

  test('should return a number', () => {
    const column = new Column(1);
    expect(column.number).toEqual(1); 
  });
});