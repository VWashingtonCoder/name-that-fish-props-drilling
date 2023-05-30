import { useState } from "react";
import "./App.css";
import { GameBoard } from "./Components/GameBoard";
import { ScoreBoard } from "./Components/ScoreBoard";
import "./Components/styles/final-score.css";
import { Images } from "./assets/images";
import { FinalScore } from "./Components/FinalScore";

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

function App() {
  const [score, setScore] = useState({ correct: 0, incorrect: 0 });
  const [answersLeft, setAnswersLeft] = useState(["trout", "salmon", "shark", "tuna"]);
  const [nextFishToName, setNextFishToName] = useState(initialFishes[0]);

  const guessTheFish = (e) => {
    e.preventDefault();
    const { value } = e.target.fishGuess;

    const newAnswersLeft = answersLeft.filter(answer => answer !== nextFishToName.name);
    const nextFishName = newAnswersLeft[Math.floor(Math.random() * newAnswersLeft.length)];
    const nextFish = initialFishes.find(fish => fish.name === nextFishName);

    value.toLowerCase().trim() === nextFishToName.name 
      ? setScore({ ...score, correct: score.correct + 1 })
      : setScore({ ...score, incorrect: score.incorrect + 1 });
    
    setAnswersLeft(newAnswersLeft);
    setNextFishToName(nextFish);
  }

  return (
    <div className="App">
      {answersLeft.length > 0 && (
        <header>
          <ScoreBoard 
            incorrectCount={score.incorrect} 
            correctCount={score.correct} 
            answersLeft={answersLeft} 
          />
          <GameBoard nextFishToName={nextFishToName} guess={guessTheFish}/>
        </header>
      )}
      {answersLeft.length === 0 && (
        <FinalScore correctCount={score.correct} totalCount={initialFishes.length} />
      )}
    </div>
  );
}

export default App;
