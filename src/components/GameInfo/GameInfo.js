import React from 'react';
import './GameInfo.css';

const GameInfo = (props) => {
  const isExtinct = props.generationSurvivalState;
  const stateOfLife = isExtinct ? 'Dead' : 'Alive';
  return (
    <>
      <div className='game-info-container'>
        <h2 className='heading-2'>World Information</h2>
        <p className='game-info-label'>
          EvolutionSpeed:
          <span> {props.evolutionTimeDisplay}</span>
        </p>
        <p className='game-info-label'>
          Generation:
          <span>{props.generationNumber}</span>
        </p>
        <p className='game-info-label'>
          State Of Life:
          <span>{stateOfLife}</span>
        </p>
      </div>
      <div className='instructions-container'>
        <h3 className='instructions-header'> Instructions</h3>
        <p className='instructions'>
          Click on individual cells to set the initial evolution state. You can
          click and drag across the board as well to toggle many cells at once.
        </p>
        <p className='instructions'>
          Then Press the "Start Evolving" button to start the game!
        </p>
        <p className='instructions'>
          You can stop the evolution, reset the board, or speed up it's rate
          with the other buttons
        </p>
      </div>
    </>
  );
};

export default GameInfo;
