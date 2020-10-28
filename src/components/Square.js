import React, { useState } from 'react';
import '../styles/GameBoard.css';

function Square(props) {

  const [move, setMove] = useState(' ');

  const clicked = () => {
    if (move === ' ') {
      if (props.player) {
        setMove('X');
        props.setXsquares([...props.Xsquares, props.name]);
        // console.log(`X's moves: ${props.Xsquares}`)
      } else {
        setMove('O');
        props.setOsquares([...props.Osquares, props.name]);
      }
      checkForWin();
      props.nextTurn();
    }
  }
        
  const checkForWin = () => {
    if (props.Xsquares.length < 5) {
      if (props.player) {
        // player is x
        if (props.Xsquares.length > 1) {
          // check for winning combination
          console.log('CHECKING FOR A WINNER...');
          compareToWinningCombos(props.Xsquares);
        }
      } else {
        // player is o
        if (props.Xsquares.length > 2) {
          // check for winning combination
          console.log('CHECKING FOR A WINNER...');
          compareToWinningCombos(props.Osquares);
        }
      }
    } else {
      console.log('GAME IS A DRAW.')
    }
  }

  const compareToWinningCombos = (moves) => {
    const winningCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6], [2, 5, 8], [1, 4, 7], [0, 3, 6]]
    winningCombinations.forEach(combo => {
      let points = 0;
      combo.forEach(num => {
        if (moves.includes(num)) {
          points += 1;
          if (points > 2) {
            console.log('WE HAVE A WINNER');
            return;
          } 
        }
      })
    })
  }

  return (
    <div className="Square" onClick={clicked} >
      <h1>{move}</h1> 
    </div>
  );
}

export default Square
