
export default function Player({name, symbol, ...props}) {

    

    return (
        <li>
            <span className="player">
            <span className="Player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
            </span>
            <button {...props}>Edit</button>
        </li>
    )
}