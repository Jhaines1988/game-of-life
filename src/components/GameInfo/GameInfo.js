import React from 'react';
import './GameInfo.css';

const GameInfo = (props) => {
  const isExtinct = props.generationSurvivalState;
  const stateOfLife = isExtinct ? 'Dead' : 'Alive';
  return (
    <>
      <div className='game-info-container'>
        <h2 className='heading-2'>World Information</h2>
        <label className='game-info-label'>
          EvolutionSpeed:
          <span> {props.evolutionTimeDisplay}</span>
        </label>
        <label className='game-info-label'>
          Generation:
          <span>{props.generationNumber}</span>
        </label>
        <label className='game-info-label'>
          State Of Life:
          <span>{stateOfLife}</span>
        </label>
      </div>
    </>
  );
};

export default GameInfo;
