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
                    checkForWin(props.Xsquares)
                }

            } else if (props.player === false) {
                setMove('O')
                props.setOsquares([...props.Osquares, props.name])
                if (props.Osquares.length > 2 ) {
                    checkForWin(props.Osquares)
                }

            }

            props.nextTurn()
            console.log(`Move made: ${move}`)
            console.log(`Current Player: ${props.player}`)
        }
        
    }

    const checkForWin = (arr) => {
        let points = 0;
        // need 4 points to win
        const pos1 = '';
        const pos2 = '';

        arr.forEach(square => {
            if (pos1 === square.splice(0,2) || pos2 === square.splice(4,6) ) {
                points += 1
            };

            if (points >= 3) {
                console.log('WE HAVE A WINNER!')
                return
            };

            pos1 = square.slice(0,2)
            pos2 = square.slice(4,6)
        }) 
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
