/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
const rows = 50;
const cols = 50;

const GameState = () => {
  const currentGenerationRef = useRef(null);
  const nextGenerationRef = useRef(null);
  const [isHoldingClick, setIsHoldingClick] = useState(false);

  useEffect(() => {
    generateCells();
  }, []);

  const generateCells = () => {
    const currentGen = [];
    const nextGen = [];
    for (let i = 0; i < rows; i++) {
      currentGen[i] = new Array(cols).fill(0);
      nextGen[i] = new Array(cols).fill(0);
    }
    currentGenerationRef.current = currentGen;
    nextGenerationRef.current = nextGen;
  };

  const toggleCells = ({ nativeEvent }) => {
    const targetCell = nativeEvent.target;
    const cellLocation = targetCell.id.split('_');
    const cellRow = Number(cellLocation[0]);
    const cellColumn = Number(cellLocation[1]);
    if (targetCell.className === 'alive') {
      targetCell.className = 'dead';
      currentGenerationRef.current[cellRow][cellColumn] = 0;
    } else {
      targetCell.className = 'alive';
      currentGenerationRef.current[cellRow][cellColumn] = 1;
    }
  };

  const onMouseDownHandler = () => {
    setIsHoldingClick(true);
  };

  const onMouseOverHandler = ({ nativeEvent }) => {
    if (isHoldingClick) {
      toggleCells({ nativeEvent });
    }
  };
  const onMouseUpHandler = () => {
    setIsHoldingClick(false);
  };
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
    return world.map((div, i) => div);
  };

  const resetWorldGrid = () => {
    const world = document.querySelectorAll('.game-field');
    const cells = world[0].childNodes;
    for (let node = 0; node < cells.length; node++) {
      const cell = cells[node];
      cell.className = 'cell dead';
    }
    generateCells();
  };
  return {
    createWorldGrid,
    resetWorldGrid,
    currentGenerationRef,
    nextGenerationRef,
  };
};

export default GameState;
