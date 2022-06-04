export default function updateCurrentGeneration(
  currentGeneration = [],
  nextGeneration = []
) {
  for (let row = 0; row < currentGeneration.length; row++) {
    for (let col = 0; col < currentGeneration[row].length; col++) {
      // Update the current generation with
      // the results of createNextGen function
      currentGeneration[row][col] = nextGeneration[row][col];
      // Set nextGeneration back to empty
      nextGeneration[row][col] = 0;
    }
  }
}
