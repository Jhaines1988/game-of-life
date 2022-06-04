import React, { useRef, useState } from 'react';
import Button from '../MainButton/Button';
import { evolve, stopEvolving, resetBoard } from './GameControlsHelpers';
import GameInfo from '../GameInfo/GameInfo';
import './GameControls.css';
const GameControls = (props) => {
  const [evolutionTimeDisplay, setEvolutionTimeDisplay] = useState(300);
  const evolutionTime = useRef(300);
  const evolutionStartStopRef = useRef(null);
  const [currentGenerationRef, nextGenerationRef] = props.generations;
  const reset = props.reset;
  const increaseEvolveTime = () => {
    evolutionTime.current = evolutionTime.current + 100;
    clearInterval(evolutionStartStopRef.current);
    evolutionStartStopRef.current = null;
    evolve(
      evolutionStartStopRef,
      evolutionTime,
      currentGenerationRef,
      nextGenerationRef
    );
    setEvolutionTimeDisplay(evolutionTime.current);
  };
  const decreaseEvolveTime = () => {
    if (evolutionTime.current <= 100) return;
    evolutionTime.current = evolutionTime.current - 100;
    clearInterval(evolutionStartStopRef.current);
    evolutionStartStopRef.current = null;
    evolve(
      evolutionStartStopRef,
      evolutionTime,
      currentGenerationRef,
      nextGenerationRef
    );
    setEvolutionTimeDisplay(evolutionTime.current);
  };
  return (
    <>
      <div className='controls-container'>
        <div className='button-container'>
          <Button
            onClick={() => {
              evolve(
                evolutionStartStopRef,
                evolutionTime,
                currentGenerationRef,
                nextGenerationRef
              );
            }}
            buttonText='Start Evolving'
          />
          <Button
            onClick={() => {
              stopEvolving(evolutionStartStopRef);
            }}
            buttonText='Stop Evolving'
          />
          <Button
            onClick={() => {
              resetBoard(reset, evolutionStartStopRef);
            }}
            buttonText='Reset Board'
          />
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
      <GameInfo evolutionTimeDisplay={evolutionTimeDisplay} />
    </>
  );
};

export default GameControls;
