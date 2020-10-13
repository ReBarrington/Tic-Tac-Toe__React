import React, { useState, useEffect} from 'react';
import '../styles/GameBoard.css';
import Square from './Square';

function GameBoard() {

    const [player, setPlayer] = useState(true);

    const nextTurn = () => {
        setPlayer(!player)
        console.log(player)
    }


  return (
    <div className="GameBoard">
        <Square player={player} nextTurn={nextTurn} />
        <Square player={player} nextTurn={nextTurn} />  
        <Square player={player} nextTurn={nextTurn} />  
        <Square player={player} nextTurn={nextTurn} />  
        <Square player={player} nextTurn={nextTurn} />  
        <Square player={player} nextTurn={nextTurn} />  
        <Square player={player} nextTurn={nextTurn} />  
        <Square player={player} nextTurn={nextTurn} />  
        <Square player={player} nextTurn={nextTurn} />
    </div>
  );
}

export default GameBoard;
