import React, { useState, useEffect} from 'react';
import '../styles/GameBoard.css';

function Square(props) {

    const [move, setMove] = useState(' ')

    const clicked = () => {
        if (move === ' ') {
            if (props.player === true) {
                setMove('X')
                props.setXsquares([...props.Xsquares, props.name])
                if (props.Xsquares.length > 2 ) {
                    checkForWin()
                }

            } else if (props.player === false) {
                setMove('O')
                props.setOsquares([...props.Osquares, props.name])
                if (props.Osquares.length > 2 ) {
                    checkForWin()
                }

            }

            props.nextTurn()
            console.log(`Move made: ${move}`)
            console.log(`Current Player: ${props.player}`)
        }
        
    }

    const checkForWin = (arr) => {
        for (square in arr) {
            if 
        }
    }

    useEffect(() => {

    })

    return (
        <div className="Square" onClick={clicked} >
            <h1>{move}</h1> 
        </div>
        );
}

export default Square;
