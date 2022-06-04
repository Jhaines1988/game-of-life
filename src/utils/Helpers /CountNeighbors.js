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

  // Make sure we are not at the first row
  if (row_number - 1 >= 0) {
    // Check top neighbor
    if (currentGeneration[row_number - 1][column_number] === 1) count++;
  }
  // Make sure we are not in the first cell
  // Upper left corner
  if (row_number - 1 >= 0 && column_number - 1 >= 0) {
    //Check upper left neighbor
    if (currentGeneration[row_number - 1][column_number - 1] === 1) count++;
  }
  // Make sure we are not on the first row last column
  // Upper right corner
  if (row_number - 1 >= 0 && column_number + 1 < cols) {
    //Check upper right neighbor
    if (currentGeneration[row_number - 1][column_number + 1] === 1) count++;
  }
  // Make sure we are not on the first column
  if (column_number - 1 >= 0) {
    //Check left neighbor
    if (currentGeneration[row_number][column_number - 1] === 1) count++;
  }
  // Make sure we are not on the last column
  if (column_number + 1 < cols) {
    //Check right neighbor
    if (currentGeneration[row_number][column_number + 1] === 1) count++;
  }
  // Make sure we are not on the bottom left corner
  if (row_number + 1 < rows && column_number - 1 >= 0) {
    //Check bottom left neighbor
    if (currentGeneration[row_number + 1][column_number - 1] === 1) count++;
  }
  // Make sure we are not on the bottom right
  if (row_number + 1 < rows && column_number + 1 < cols) {
    //Check bottom right neighbor
    if (currentGeneration[row_number + 1][column_number + 1] === 1) count++;
  }

  // Make sure we are not on the last row
  if (row_number + 1 < rows) {
    //Check bottom neighbor
    if (currentGeneration[row_number + 1][column_number] === 1) count++;
  }

  return count;
}
