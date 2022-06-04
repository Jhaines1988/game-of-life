import React from 'react';
import GameField from './components/GameField/GameField';
import Title from './components/GameTitle/Title';
/*
RULES:
Birth: An empty or dead cell with exactly three live neighbors becomes alive
Death: A live cell with 0 or one neighbors dies of isolation
       A live cell with 4 or more neighbors dies of overcrowding
Survival: A live cell with two or three neighbors remains alive
*/
function App() {
  return (
    <>
      <Title title='The Game Of Life'></Title>
      <GameField />
    </>
  );
}

export default App;