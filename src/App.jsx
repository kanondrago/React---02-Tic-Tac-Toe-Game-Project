
import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Logs from './components/Logs'

// Create a Helper function
function deriveActivePlayer(gameTurns) {
  let isActiveTurn = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') isActiveTurn = 'O';
  return isActiveTurn;
}

function App() {  

  // Lifting the state up
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [{
        square: {row: rowIndex, col: colIndex},
        player: currentPlayer
      }, ...prevTurns];

      return updatedTurns;
    });

  }

  const isActiveTurn = deriveActivePlayer(gameTurns)

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={isActiveTurn==='X'}></Player>
          <Player initialName='Player 2' symbol='O' isActive={isActiveTurn==='O'}></Player>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}></GameBoard>
      </div>

      <Logs gameTurns={gameTurns}></Logs>
    </main>
  )
}

export default App
