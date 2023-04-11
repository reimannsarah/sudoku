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
    expect(puzzle.rows[1]).toEqual({"num1": 1});
  });
  test('should add a Column to a Puzzle', () => { 
    const puzzle = new Puzzle();
    const column = new Column(1);
    puzzle.addColumn(column);
    expect(puzzle.columns[1]).toEqual({"number": 1});
  });


});

describe('Row', () => {

  test('should return a number', () => {
    const row = new Row(1);
    expect(row.num1).toEqual(1);
  });
  test('should return key value pairs', () => {
    const row = new Row(1,2,3,4,5,6,7,8,9);
    expect(row.num1).toEqual(1);
    expect(row.num2).toEqual(2);
    expect(row.num3).toEqual(3);
    expect(row.num4).toEqual(4);
    expect(row.num5).toEqual(5);
    expect(row.num6).toEqual(6);
    expect(row.num7).toEqual(7);
    expect(row.num8).toEqual(8);
    expect(row.num9).toEqual(9);
  });
});

describe('Column', () => {

  test('should return a number', () => {
    const column = new Column(1);
    expect(column.number).toEqual(1); 
  });
});