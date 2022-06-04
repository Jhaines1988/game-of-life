export default function updateGameWorld(currentGeneration) {
  let cell = '';
  for (let row = 0; row < currentGeneration.length; row++) {
    for (let col = 0; col < currentGeneration[row].length; col++) {
      cell = document.getElementById(row + '_' + col);

      if (currentGeneration[row][col] === 0) {
        cell.className = 'dead';
      } else {
        cell.className = 'alive';
      }
    }
  }
}
