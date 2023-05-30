import "./styles/game-board.css";

export const GameBoard = ({ nextFishToName, guess }) => {
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form id="fish-guess-form" onSubmit={guess}>
        <label htmlFor="fishGuess">What kind of fish is this?</label>
        <input type="text" name="fishGuess" />
        <input type="submit" />
      </form>
    </div>
  );
};
