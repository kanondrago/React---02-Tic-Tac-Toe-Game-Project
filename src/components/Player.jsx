import { useState } from "react"

export default function Player({initialName, symbol}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditting, setIsEditting] = useState(false);

    function handleChange(event) {
        console.log('event: ', event);
        setPlayerName(event.target.value);
    }

    function handleClick() {
        setIsEditting((editting) => !editting); // ==> true
    }

    let edittingTagName = <span className="player-name">{playerName}</span>;
    if(isEditting) edittingTagName = <input type="text" required value={playerName} onChange={handleChange}/>

    return (
        <li>
            <span className="player">
                {edittingTagName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditting? 'Save':'Edit'}</button>
        </li>
    )
}