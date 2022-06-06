import React, { useState } from 'react';
import Title from './components/GameTitle/Title';
import GameState from './utils/GameSetup/GameState';
import GameWorld from './components/GameWorld/GameWorld';
import GameControls from './utils/GameSetup/GameControls';
import GameInfo from './components/GameInfo/GameInfo';
import './App.css';
/*
RULES:
Birth: An empty or dead cell with exactly three live neighbors becomes alive
Death: A live cell with 0 or one neighbors dies of isolation
       A live cell with 4 or more neighbors dies of overcrowding
Survival: A live cell with two or three neighbors remains alive
*/
function App() {
  const {
    createWorldGrid,
    resetWorldGrid,
    dispatch,
    generationSurvivalState,
    currentGenerationRef,
    nextGenerationRef,
    evolutionStartStopRef,
    evolutionTimeRef,
  } = GameState();
  const [evolutionTimeDisplay, setEvolutionTimeDisplay] = useState('300ms');
  const changeTimeDisplay = (maxSpeed) => {
    if (maxSpeed) {
      setEvolutionTimeDisplay('Maximum Evolultion Speed!');
      return;
    }
    setEvolutionTimeDisplay(evolutionTimeRef.current + 'ms');
  };

  return (
    <div className='app-container'>
      <Title title='The Game Of Life'></Title>
      <GameWorld createWorldGrid={createWorldGrid} />
      <GameControls
        resetWorldGrid={resetWorldGrid}
        generations={[currentGenerationRef, nextGenerationRef]}
        evolutionTimeRefs={[evolutionStartStopRef, evolutionTimeRef]}
        changeTimeDisplay={changeTimeDisplay}
        dispatch={dispatch}
      />
      <GameInfo
        evolutionTimeDisplay={evolutionTimeDisplay}
        generationNumber={generationSurvivalState.generationNumber}
        generationSurvivalState={generationSurvivalState.isExtinct}
      />
    </div>
  );
}

export default App;
