
import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Logs from './components/Logs'

function App() {  

  // Lifting the state up
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((selectSquare) => selectSquare==='X'?'O':'X');

    setGameTurns((prevTurns) => {
      
      let currentPlayer = 'X';

      if(prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [{
        square: {row: rowIndex, col: colIndex},
        player: currentPlayer
      }, ...prevTurns];

      return updatedTurns;
    });

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer==='X'}></Player>
          <Player initialName='Player 2' symbol='O' isActive={activePlayer==='O'}></Player>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}></GameBoard>
      </div>

      <Logs gameTurns={gameTurns}></Logs>
    </main>
  )
}

export default App
