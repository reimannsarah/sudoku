export function Puzzle() {
  this.rows = {};
  this.columns = {};
}

Puzzle.prototype.addRow = function(row) {
  this.rows[row.num1] = row;
};

export function Row(num1,num2,num3,num4,num5,num6,num7,num8,num9) {
  this.num1 = num1;
  this.num2 = num2;
  this.num3 = num3;
  this.num4 = num4;
  this.num5 = num5;
  this.num6 = num6;
  this.num7 = num7;
  this.num8 = num8;
  this.num9 = num9;
}

export function checker(row) {
  const rowArray = Object.values(row);
  return rowArray;
}
// Puzzle.prototype.addColumn = function(column) {
//   this.columns[column.num1] = column;
// };

// export function Column(num1,num2,num3,num4,num5,num6,num7,num8,num9) {
//   this.num1 = num1;
//   this.num2 = num2;
//   this.num3 = num3;
//   this.num4 = num4;
//   this.num5 = num5;
//   this.num6 = num6;
//   this.num7 = num7;
//   this.num8 = num8;
//   this.num9 = num9;
// }

