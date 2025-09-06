import { useState } from "react"

export default function Player({name, symbol}) {

    const [isEditting, setIsEditting] = useState(false);

    function clickHandle() {
        setIsEditting(!isEditting);
    }

    let playerName = <span className="player-name">{name}</span>;

    if(isEditting) {
        playerName = <input type="text" required/>
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={clickHandle}>{isEditting? 'Save':'Edit'}</button>
        </li>
    )
}