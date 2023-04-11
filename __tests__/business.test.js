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
    const row = new Row(1);
    puzzle.addRow(row);
    expect(puzzle.rows[1]).toEqual({"number": 1});
  });
  test('should add a Column to a Puzzle', () => { 
    const puzzle = new Puzzle();
    const column = new Column("new column here");
    expect(puzzle.addColumn(column)).toEqual(puzzle.column);
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