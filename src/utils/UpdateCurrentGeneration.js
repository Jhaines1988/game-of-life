export default function updateCurrentGeneration(
  currentGeneration = [],
  nextGeneration = []
) {
  for (let row = 0; row < currentGeneration.length; row++) {
    for (let col = 0; col < currentGeneration[row].length; col++) {
      currentGeneration[row][col] = nextGeneration[row][col];
      nextGeneration[row][col] = 0;
    }
  }
}
