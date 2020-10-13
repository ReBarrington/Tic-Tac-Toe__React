import React from 'react';
import '../styles/App.css';
import GameBoard from './GameBoard';

function App() {
  return (
    <div className="App">
      <h1>Tic-Tac-Toe</h1>
      <p>built in ReactJS</p>
      <GameBoard />
    </div>
  );
}

export default App;
