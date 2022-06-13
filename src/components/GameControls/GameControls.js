import React from 'react';
import Button from '../MainButton/Button';
import createNextGeneration from '../../utils/CreateNextGeneration';
import updateCurrentGeneration from '../../utils/UpdateCurrentGeneration';
import updateGameWorld from '../../utils/UpdateGameWorld';

import './GameControls.css';
const GameControls = (props) => {
  // passed down from App from GameState()
  const [currentGenerationRef, nextGenerationRef] = props.generations;
  const [evolutionStartStopRef, evolutionTimeRef] = props.evolutionTimeRefs;
  const resetWorldGrid = props.resetWorldGrid;
  const dispatch = props.dispatch;
  const changeTimeDisplay = props.changeTimeDisplay;
  //----------------------------------------------------

  // Button Controls
  const start = () => {
    const nextGenerationState = createNextGeneration(
      currentGenerationRef.current,
      nextGenerationRef.current
    );

    if (!nextGenerationState) {
      dispatch({ type: 'EXTINCTION' });
      stopEvolving();
    } else {
      dispatch({ type: 'SURVIVAL' });
    }
    updateCurrentGeneration(
      currentGenerationRef.current,
      nextGenerationRef.current
    );
    updateGameWorld(currentGenerationRef.current);
  };
  const evolve = () => {
    if (evolutionStartStopRef.current) {
      stopEvolving();
    }
    const intervalId = setInterval(() => {
      start();
    }, evolutionTimeRef.current);
    evolutionStartStopRef.current = intervalId;
  };

  const stopEvolving = () => {
    clearInterval(evolutionStartStopRef.current);
  };

  const reset = () => {
    stopEvolving();
    resetWorldGrid();
    dispatch({ type: 'EXTINCTION' });
  };

  const increaseEvolveTime = () => {
    if (evolutionTimeRef.current < 100) {
      evolutionTimeRef.current += 10;
    } else {
      evolutionTimeRef.current += 100;
    }
    stopEvolving();
    evolve();
    changeTimeDisplay();
  };

  const decreaseEvolveTime = () => {
    if (evolutionTimeRef.current === 0) {
      changeTimeDisplay('Max Speed');
      return;
    }
    if (evolutionTimeRef.current <= 100) {
      evolutionTimeRef.current -= 10;
    } else {
      evolutionTimeRef.current -= 100;
    }
    stopEvolving();
    evolve();
    changeTimeDisplay();
  };

  return (
    <>
      <div className='controls-container'>
        <h1 className='heading'>Game Controls</h1>
        <div className='button-container'>
          <Button onClick={evolve} buttonText='Start Evolving' />
          <Button onClick={stopEvolving} buttonText='Stop Evolving' />

          <Button onClick={reset} buttonText='Reset Board' />
          <Button
            onClick={increaseEvolveTime}
            buttonText='Slow Down Evolution'
          />
          <Button
            onClick={decreaseEvolveTime}
            buttonText='Speed Up Evolution'
          />
        </div>
      </div>
    </>
  );
};

export default GameControls;
