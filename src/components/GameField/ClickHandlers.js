/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

const MouseEvents = () => {
  const [isHoldingClick, setIsHoldingClick] = useState(false);
  const currentGenerationRef = useRef(null);
  const nextGenerationRef = useRef(null);
  const rows = 50;
  const cols = 50;

  useEffect(() => {
    generateCells();
  }, []);

  const generateCells = () => {
    const currentGen = [];
    const nextGen = [];
    for (let i = 0; i < rows; i++) {
      currentGen[i] = new Array(cols);
      nextGen[i] = new Array(cols);
    }
    initializeGenerations(currentGen, nextGen);
  };

  const initializeGenerations = (currentGen, nextGen) => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        currentGen[i][j] = 0;
        nextGen[i][j] = 0;
      }
    }

    currentGenerationRef.current = currentGen;
    nextGenerationRef.current = nextGen;
  };

  const toggleCells = ({ nativeEvent }) => {
    const targetCell = nativeEvent.target;
    let cellLocation = targetCell.id.split('_');

    let cellRow = Number(cellLocation[0]);
    let cellColumn = Number(cellLocation[1]);
    if (targetCell.className === 'alive') {
      targetCell.className = 'dead';
      currentGenerationRef.current[cellRow][cellColumn] = 0;
    } else {
      targetCell.className = 'alive';
      currentGenerationRef.current[cellRow][cellColumn] = 1;
    }
  };

  const onMouseDownHandler = ({ nativeEvent }) => {
    setIsHoldingClick(true);
  };

  const onMouseOverHandler = ({ nativeEvent }) => {
    if (isHoldingClick) {
      toggleCells({ nativeEvent });
    }
  };
  const onMouseUpHandler = ({ nativeEvent }) => {
    setIsHoldingClick(false);
  };

  return {
    toggleCells,
    onMouseDownHandler,
    onMouseOverHandler,
    onMouseUpHandler,
    currentGenerationRef,
    nextGenerationRef,
  };
};

export default MouseEvents;
