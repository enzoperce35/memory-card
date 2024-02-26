import { useState } from "react";
import Cards from './cards'
import './App.css'

function App() {
  const [score, setScore] = useState({current: 0, high: 0});

  const setNewHighScore = () => {
    setScore({...score, high: score.current})
  }

  const addScore = () => {
    setScore({...score, current: score.current += 1})

    if (score.current > score.high) setNewHighScore();
  }

  const restart = () => {
    setScore({...score, current: 0})
  }

  return (
    <>
      <h4>{`High Score: ${score.high}`}</h4>
      <h4>{`Your Score: ${score.current}`}</h4>
      <Cards restart={restart} addScore={addScore}/>
    </>
  )
}

export default App
