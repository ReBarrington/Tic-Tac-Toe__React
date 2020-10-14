import React, { useState, useEffect} from 'react';
import '../styles/GameBoard.css';
import Square from './Square';

function GameBoard() {

    const [player, setPlayer] = useState(true);
    // true is X's, false is O's

    const [Xsquares, setXsquares] = useState([]);
    const [Osquares, setOsquares] = useState([]);

    const nextTurn = () => {
        setPlayer(!player)
    }


  return (
    <div className="GameBoard">
        <Square 
            name={'top left'} 
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn} 
        />
        <Square 
            name={'top mid' }
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn} 
        />  
        <Square 
            name={'top right'} 
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn} 
        />  
        <Square 
            name={'mid left'} 
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn} 
        />  
        <Square 
            name={'mid mid'}
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn} 
        />  
        <Square 
            name={'mid right'}
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn} 
        />  
        <Square 
            name={'bot left'} 
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn}  
        />  
        <Square 
            name={'bot mid'} 
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn}  
        />  
        <Square 
            name={'bot right'} 
            player={player}
            Osquares={Osquares}
            Xsquares={Xsquares}
            setXsquares={setXsquares} 
            setOsquares={setOsquares} 
            nextTurn={nextTurn} 
        />
    </div>
  );
}

export default GameBoard;
