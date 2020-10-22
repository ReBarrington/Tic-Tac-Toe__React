import React, { useState, useEffect} from 'react';
import '../styles/GameBoard.css';

function Square(props) {

    const [move, setMove] = useState(' ')


    const clicked = () => {
        if (move === ' ') {
            if (props.player === true) {
                setMove('X')
                props.setXsquares([...props.Xsquares, props.name])
                checkForWin()
                }

             else if (props.player === false) {
                setMove('O')
                props.setOsquares([...props.Osquares, props.name])
                checkForWin()
            }
            props.nextTurn()
        }
    }
        

    const checkForWin = () => {
        console.log('CHECKING FOR A WINNER...')
    }


    return (
        <div className="Square" onClick={clicked} >
            <h1>{move}</h1> 
        </div>
        );
}

export default Square;
