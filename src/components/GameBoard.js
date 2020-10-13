import React from 'react';
import '../styles/GameBoard.css';
import Square from './Square';

function GameBoard() {
  return (
    <div className="GameBoard">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </div>
  );
}

export default GameBoard;
