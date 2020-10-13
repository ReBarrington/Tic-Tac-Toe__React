import React, { useState, useEffect} from 'react';
import '../styles/GameBoard.css';

function Square(props) {

    const [move, setMove] = useState(' ')

    const clicked = () => {
        if (move === ' ') {
            if (props.player === true) {
                setMove('X')
            } else if (props.player === false) {
                setMove('0')
            }
            props.nextTurn()
            console.log(`Move made: ${move}`)
            console.log(`Current Player: ${props.player}`)
        }
        
    }

    useEffect(() => {

    })

    return (
        <div className="Square" onClick={clicked} > 
        </div>
        );
}

export default Square;
