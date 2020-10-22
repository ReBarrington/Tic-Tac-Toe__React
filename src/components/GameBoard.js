import React, { useState, useEffect} from 'react';
import '../styles/GameBoard.css';
import Square from './Square';

function GameBoard() {

    const squares = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    const [player, setPlayer] = useState(true);
    // true is X's, false is O's

    const [Xsquares, setXsquares] = useState([]);
    const [Osquares, setOsquares] = useState([]);

    const nextTurn = () => {
        setPlayer(!player)
    }


  return (
    <div className="GameBoard">
        {squares.map((squareNum) => (
             <Square 
             key={squareNum} 
             player={player}
             Osquares={Osquares}
             Xsquares={Xsquares}
             setXsquares={setXsquares} 
             setOsquares={setOsquares} 
             nextTurn={nextTurn} 
            />
        ))}
    </div>
  );
}

export default GameBoard;
