import React, { useState, useEffect} from 'react';
import '../styles/GameBoard.css';

function Square(props) {

    const [move, setMove] = useState(' ')

    const clicked = () => {
        if (move === ' ') {
            if (props.player === true) {
                setMove('X')
                props.setXsquares([...props.Xsquares, props.name])
                if (props.Xsquares.length > 1 ) {
                    checkForWin(props.Xsquares)
                }

            } else if (props.player === false) {
                setMove('O')
                props.setOsquares([...props.Osquares, props.name])
                if (props.Osquares.length > 1 ) {
                    checkForWin(props.Osquares)
                }

            }

            props.nextTurn()
        }
        
    }

    const checkForWin = (arr) => {

        const ScoreBoard = {
            Pos1: '',
            Pos2: '',
            points: 0,
            // need 3 points to win
        }

        if (ScoreBoard.points < 3) {

            arr.forEach(square => {
                const squareArr = (square.split([' ']))
                if (ScoreBoard.Pos1 === squareArr[0] || ScoreBoard.Pos2 === squareArr[1] ) {
                    ScoreBoard.points += 1
                };
    
                ScoreBoard.Pos1 = squareArr[0]
                ScoreBoard.Pos2 = squareArr[1]
            }) 
        } 
        console.log('WE HAVE A WINNER!!')
        console.log(`SCOREBOARD: ${ScoreBoard.points} pts`)
    }


    return (
        <div className="Square" onClick={clicked} >
            <h1>{move}</h1> 
        </div>
        );
}

export default Square;
