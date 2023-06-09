import { Puzzle, Row, checker} from './../src/business.js';

describe('Puzzle', () => {

  test('should instantiate a new puzzle', () => {
    const puzzle = new Puzzle();
    expect(puzzle.rows).toEqual({});
  });
  // test('should instantiate a new puzzle', () => {
  //   const puzzle = new Puzzle();
  //   expect(puzzle.columns).toEqual({});
  // });
  test('should add a Row to a Puzzle', () => { 
    const puzzle = new Puzzle();
    const row = new Row(1);
    puzzle.addRow(row);
    expect(puzzle.rows[1]).toEqual({"num1": 1});
  });
  // test('should add a Column to a Puzzle', () => { 
  //   const puzzle = new Puzzle();
  //   const column = new Column(1);
  //   puzzle.addColumn(column);
  //   expect(puzzle.columns[1]).toEqual({"num1": 1});
  // });
  test('should correctly determine the answer to a puzzle', function() {
    const puzzle = new Puzzle;
    expect(puzzle.checkAnswer()).toEqual(true);
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

// describe('checker', () => {

//   test('should return an array from the key value pairs', () => {
//     const row = new Row(1,2,3,4,5,6,7,8,9);
//     const rowArray = checker(row);
//     expect(rowArray).toEqual([1,2,3,4,5,6,7,8,9]);
//   });
  // test('should return true if the first number is 1', () => {
  //   const row = new Row(1,2,3,4,5,6,7,8,9);
  //   const rowArray = checker(row);
  //   expect(rowArray[0]).toEqual([1]);
  // });
// });

// describe('Column', () => {

//   test('should return a number', () => {
//     const column = new Column(1);
//     expect(column.num1).toEqual(1); 
//   });
//   test('should return key value pairs', () => {
//     const column = new Column(1,2,3,4,5,6,7,8,9);
//     expect(column.num1).toEqual(1);
//     expect(column.num2).toEqual(2);
//     expect(column.num3).toEqual(3);
//     expect(column.num4).toEqual(4);
//     expect(column.num5).toEqual(5);
//     expect(column.num6).toEqual(6);
//     expect(column.num7).toEqual(7);
//     expect(column.num8).toEqual(8);
//     expect(column.num9).toEqual(9);
//   });