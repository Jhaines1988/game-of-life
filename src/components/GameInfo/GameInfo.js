import React from 'react';
import './GameInfo.css';

const GameInfo = (props) => {
  return (
    <div className='game-info-container'>{props.evolutionTimeDisplay}ms</div>
  );
};

export default GameInfo;
