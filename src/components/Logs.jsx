
export default function Logs({gameTurns}) {


    return (
        <ol id="log">
            {gameTurns.map((item) => (
                <li key={`${item.square.row}${item.square.col}`}>
                    Player: {item.player} - Selected: ({item.square.row}; {item.square.col})
                </li>
            ))}
        </ol>
    )
}