
import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Logs from './components/Logs'

function App() {  

  // Lifting the state up
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare() {
    setActivePlayer((selectSquare) => selectSquare==='X'?'O':'X');
    console.log('holaaa', activePlayer);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer==='X'}></Player>
          <Player initialName='Player 2' symbol='O' isActive={activePlayer==='O'}></Player>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer}></GameBoard>
      </div>

      <Logs></Logs>
    </main>
  )
}

export default App
