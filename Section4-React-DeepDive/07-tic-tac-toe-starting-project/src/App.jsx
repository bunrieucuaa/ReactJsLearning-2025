import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="0" />
          {/* <li>
            <span>
              <span className="player-name">Player 1</span>
              <span className="player-symbol">X</span>
            </span>
            <button>Edit</button>
          </li> */}
          {/* <li>
            <span>
              <span className="player-name">Player 2</span>
              <span className="player-symbol">0</span>
            </span>
            <button>Edit</button>
          </li> */}
        </ol>
        <GameBoard></GameBoard>
      </div>
      LOG
    </main>
  );
}

export default App;
