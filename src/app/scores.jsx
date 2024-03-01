import { useState } from "react";
import { getSelected } from "./card_helper";

export default function Scores({cards}) {
  const [score, setScore] = useState({current: 0, high: 0});

  const setNewScore = () => {
    setScore({...score, current: score.current + 1})
  }

  const setNewHighScore = () => {
    setScore({...score, high: score.current})
  }

  const resetScore = () => {
    setScore({...score, current: 0})
  }

  if (getSelected(cards).length > score.current) setNewScore();

  if (getSelected(cards).length < score.current) resetScore();

  if (score.current > score.high) setNewHighScore();

  return (
    <div id="scores">
      <div>
        <h4>
          <em className="score-titles">High Score : </em>
          <em className="score-values">{score.high}</em>
        </h4>

        <h4>
          <em className="score-titles">Your Score : </em>
          <em className="score-values">{score.current}</em>
        </h4>
      </div>

    </div>
  )
}
