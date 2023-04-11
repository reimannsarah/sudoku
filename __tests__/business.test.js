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
  test('should add a Row to a Puzzle', () => { 
    const puzzle = new Puzzle();
    const row = new Row();
    expect(puzzle.addRow(row)).toEqual("new row here");
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