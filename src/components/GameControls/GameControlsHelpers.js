import createNextGeneration from '../../utils/Helpers /CreateNextGeneration';
import updateCurrentGeneration from '../../utils/Helpers /UpdateCurrentGeneration';
import updateGameWorld from '../../utils/Helpers /UpdateGameWorld';

export const evolve = (
  evolveStartStopRef,
  evolutionTime,
  currentGenerationRef,
  nextGenerationRef
) => {
  const intervalId = setInterval(() => {
    start(currentGenerationRef, nextGenerationRef);
  }, evolutionTime.current);
  evolveStartStopRef.current = intervalId;
};

export const stopEvolving = (evolveStartStopRef) => {
  clearInterval(evolveStartStopRef.current);
};

export const resetBoard = (reset = () => {}, evolveStartStopRef) => {
  reset();
  stopEvolving(evolveStartStopRef);
};

const start = (currentGenerationRef, nextGenerationRef) => {
  createNextGeneration(currentGenerationRef.current, nextGenerationRef.current);
  updateCurrentGeneration(
    currentGenerationRef.current,
    nextGenerationRef.current
  );
  updateGameWorld(currentGenerationRef.current);
};
