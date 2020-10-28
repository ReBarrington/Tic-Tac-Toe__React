import React, { useState } from 'react';
import '../styles/GameBoard.css';

function Square(props) {

  const [move, setMove] = useState(' ');

  const clicked = () => {
    if (move === ' ') {
      if (props.player === true) {
        setMove('X');
        props.setXsquares([...props.Xsquares, props.name]);
      }

      else if (props.player === false) {
        setMove('O');
        props.setOsquares([...props.Osquares, props.name]);
      }
      checkForWin();
      props.nextTurn();
    }
  }
        
  const checkForWin = () => {
    console.log('CHECKING FOR A WINNER...');
    const winningCombinations = [[0, 1, 2], [3, 4, 5], ]
    // player true or false
    // 5th click is first
    // check length of x for draw
  }

  return (
    <div className="Square" onClick={clicked} >
      <h1>{move}</h1> 
    </div>
  );
}

export default Square;
