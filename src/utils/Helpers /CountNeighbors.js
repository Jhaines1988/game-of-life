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
    if (currentGeneration[row_number - 1][column_number] === 1) count++;
  }

  if (row_number - 1 >= 0 && column_number - 1 >= 0) {
    if (currentGeneration[row_number - 1][column_number - 1] === 1) count++;
  }

  if (row_number - 1 >= 0 && column_number + 1 < cols) {
    if (currentGeneration[row_number - 1][column_number + 1] === 1) count++;
  }

  if (column_number - 1 >= 0) {
    if (currentGeneration[row_number][column_number - 1] === 1) count++;
  }

  if (column_number + 1 < cols) {
    if (currentGeneration[row_number][column_number + 1] === 1) count++;
  }

  if (row_number + 1 < rows && column_number - 1 >= 0) {
    if (currentGeneration[row_number + 1][column_number - 1] === 1) count++;
  }

  if (row_number + 1 < rows && column_number + 1 < cols) {
    if (currentGeneration[row_number + 1][column_number + 1] === 1) count++;
  }

  if (row_number + 1 < rows) {
    if (currentGeneration[row_number + 1][column_number] === 1) count++;
  }

  return count;
}
