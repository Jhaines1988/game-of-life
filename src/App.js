import React, { useState, useReducer, useRef } from 'react';
import Title from './components/GameTitle/Title';
import GameState from './Helpers/GameSetup/GameState';
import GameWorld from './components/GameWorld/GameWorld';
import GameControls from './components/GameControls/GameControls';
import GameInfo from './components/GameInfo/GameInfo';
import './App.css';
/*
RULES:
Birth: An empty or dead cell with exactly three live neighbors becomes alive
Death: A live cell with 0 or one neighbors dies of isolation
       A live cell with 4 or more neighbors dies of overcrowding
Survival: A live cell with two or three neighbors remains alive
*/
const initialGenerationState = {
  generationNumber: 0,
  isExtinct: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'EXTINCTION':
      return { generationNumber: 0, isExtinct: true };
    case 'SURVIVAL':
      return { generationNumber: state.generationNumber + 1, isExtinct: false };
    default:
      return state;
  }
};

function App() {
  const {
    createWorldGrid,
    resetWorldGrid,
    currentGenerationRef,
    nextGenerationRef,
  } = GameState();

  const evolutionStartStopRef = useRef(null);
  const evolutionTimeRef = useRef(300);
  const [evolutionTimeDisplay, setEvolutionTimeDisplay] = useState('300ms');

  const changeTimeDisplay = (maxSpeed) => {
    if (maxSpeed) {
      setEvolutionTimeDisplay('Maximum Evolution Speed!');
      return;
    }
    setEvolutionTimeDisplay(evolutionTimeRef.current + 'ms');
  };

  const [generationSurvivalState, dispatch] = useReducer(
    reducer,
    initialGenerationState
  );

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
