
import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Logs from './components/Logs'
import { WINNING_COMBINATIONS, initialGameBoard } from './winning-combinations';

// Create a Helper function
function deriveActivePlayer(gameTurns) {
  let isActiveTurn = 'X';
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') isActiveTurn = 'O';
  return isActiveTurn;
}

function App() {  

  // Lifting the state up
  const [gameTurns, setGameTurns] = useState([]);

  let gameBoard = initialGameBoard;
  let winner;

  for (const turn of gameTurns) {
      const {square, player} = turn;
      const {row, col} = square;
      gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol  =  gameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol =  gameBoard[combination[1].row][combination[1].col];
    const ThirdSquareSymbol  =  gameBoard[combination[2].row][combination[2].col];
    
    // Now we check if all of these are equal
    if(firstSquareSymbol && firstSquareSymbol === secondSquareSymbol) {
      if(firstSquareSymbol === ThirdSquareSymbol) {
        winner = firstSquareSymbol;
      }
    }
  }

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
        {winner && <p>You WON, winner {winner}!!!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}></GameBoard>
      </div>

      <Logs gameTurns={gameTurns}></Logs>
    </main>
  )
}

export default App
