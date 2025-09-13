
export default function Logs({gameTurns, players}) {


    return (
        <ol id="log">
            {gameTurns.map((item) => (
                <li key={`${item.square.row}${item.square.col}`}>
                    Player: {item.player === 'X'? players.X:players.O} - Selected: ({item.square.row}; {item.square.col})
                </li>
            ))}
        </ol>
    )
}