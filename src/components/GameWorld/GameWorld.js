import React from 'react';
import './GameWorld.css';
const GameWorld = (props) => {
  const createWorldGrid = props.createWorldGrid;
  return (
    <div id='world' className='game-field'>
      {createWorldGrid()}
    </div>
  );
};

export default GameWorld;
