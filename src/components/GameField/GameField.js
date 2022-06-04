import React from 'react';
import './GameField.css';
import MouseEvents from './ClickHandlers';
import GameControls from '../GameControls/GameControls';
const GameField = (props) => {
  const {
    createWorldGrid,
    resetWorldGrid,
    currentGenerationRef,
    nextGenerationRef,
  } = MouseEvents();

  return (
    <>
      <div id='world' className='game-field'>
        {createWorldGrid()}
      </div>

      <GameControls
        reset={resetWorldGrid}
        generations={[currentGenerationRef, nextGenerationRef]}
      />
    </>
  );
};

export default GameField;
