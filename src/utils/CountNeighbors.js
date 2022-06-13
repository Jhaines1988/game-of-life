export default function countNeighbors(
  row,
  col,
  currentGeneration,
  rows = 50,
  cols = 50
) {
  let count = 0;
  let row_number = Number(row);
  let column_number = Number(col);

  if (row_number - 1 >= 0) {
    count += currentGeneration[row_number - 1][column_number];
  }

  if (row_number - 1 >= 0 && column_number - 1 >= 0) {
    count += currentGeneration[row_number - 1][column_number - 1];
  }

  if (row_number - 1 >= 0 && column_number + 1 < cols) {
    count += currentGeneration[row_number - 1][column_number + 1];
  }

  if (column_number - 1 >= 0) {
    count += currentGeneration[row_number][column_number - 1];
  }

  if (column_number + 1 < cols) {
    count += currentGeneration[row_number][column_number + 1];
  }

  if (row_number + 1 < rows && column_number - 1 >= 0) {
    count += currentGeneration[row_number + 1][column_number - 1];
  }

  if (row_number + 1 < rows && column_number + 1 < cols) {
    count += currentGeneration[row_number + 1][column_number + 1];
  }

  if (row_number + 1 < rows) {
    count += currentGeneration[row_number + 1][column_number];
  }

  return count;
}
