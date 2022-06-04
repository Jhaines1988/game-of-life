import countNeighbors from './CountNeighbors';
export default function createNextGeneration(
  currentGeneration,
  nextGeneration
) {
  for (var row = 0; row < currentGeneration.length; row++) {
    for (var col = 0; col < currentGeneration[row].length; col++) {
      let neighbors = countNeighbors(row, col, currentGeneration);
      if (currentGeneration[row][col] === 1) {
        if (neighbors < 2) {
          nextGeneration[row][col] = 0;
        } else if (neighbors === 2 || neighbors === 3) {
          nextGeneration[row][col] = 1;
        } else if (neighbors > 3) {
          nextGeneration[row][col] = 0;
        }
      } else if (currentGeneration[row][col] === 0) {
        if (neighbors === 3) {
          nextGeneration[row][col] = 1;
        }
      }
    }
  }

  return [currentGeneration, nextGeneration];
}
