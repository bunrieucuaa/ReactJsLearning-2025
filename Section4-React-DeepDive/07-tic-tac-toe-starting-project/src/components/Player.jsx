import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    //Không nên code như bên dưới khi muốn update state dựa trên giá trị trước đó
    // setIsEditing(!isEditing);
    //Instead to updating state based on old state
    setIsEditing((editing) => !editing);
  };

  function handleChange(event) {
    console.log(event);
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      //2 ways binding
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span>
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
