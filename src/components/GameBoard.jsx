import { useState } from "react"

const initialGameBoard = [
    [null, null, null], 
    [null, null, null], 
    [null, null, null], 
]

export default function GameBoard() {

    // Carefull to change the state of an object or an Array that are tecnically Objects in JS.
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [turn, setTurn] = useState(true);

    function handleSelectSquare(rowIndex, colIndex, symbol) {

        setTurn((t) => !t);

        setGameBoard((prevGameBoard) => {
            // Approach and pattern
            // Using this, we are updating the state in an immutable way => ... Is strongly recommended...
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = symbol
            return updatedBoard;
        })
    }


    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                        <button onClick={() => handleSelectSquare(rowIndex, colIndex, turn?'X':'O')}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    )
}