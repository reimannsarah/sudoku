export function Puzzle() {
  this.rows = {};
  this.columns = {};
}

Puzzle.prototype.addRow = function(row) {
  this.rows[row.number] = row;
};

Puzzle.prototype.addColumn = function(column) {
  this.columns[column.number] = column;
};

export function Row(number) {
  this.number = number;
}

export function Column(number) {
  this.number = number;
}

