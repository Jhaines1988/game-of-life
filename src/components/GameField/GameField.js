import React from 'react';
import './GameField.css';
import MouseEvents from './ClickHandlers';
import createNextGeneration from '../../utils/Helpers /CreateNextGeneration';
import updateCurrentGeneration from '../../utils/Helpers /UpdateCurrentGeneration';
import updateGameWorld from '../../utils/Helpers /UpdateGameWorld';
const GameField = (props) => {
  const {
    toggleCells,
    onMouseDownHandler,
    onMouseOverHandler,
    onMouseUpHandler,

    currentGenerationRef,
    nextGenerationRef,
  } = MouseEvents();
  const rows = 50;
  const cols = 50;

  const createWorldGrid = () => {
    const world = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(
          <div
            onClick={toggleCells}
            onMouseDown={onMouseDownHandler}
            onMouseUp={onMouseUpHandler}
            onMouseOver={onMouseOverHandler}
            key={`${i}_${j}`}
            id={`${i}_${j}`}
            className='cell dead'></div>
        );
      }
      world.push(row);
    }
    return world.map((divData, i) => divData);
  };
  const start = () => {
    createNextGeneration(
      currentGenerationRef.current,
      nextGenerationRef.current
    );
    updateCurrentGeneration(
      currentGenerationRef.current,
      nextGenerationRef.current
    );
    updateGameWorld(currentGenerationRef.current);
  };

  const evolve = () => {
    setInterval(() => {
      start();
    }, 300);
  };
  return (
    <>
      <div className='game-field'>{createWorldGrid()}</div>
      {/* <button onClick={start}>Start</button> */}
      <button onClick={evolve}>EVOLVE</button>
    </>
  );
};

export default GameField;
