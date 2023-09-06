import { useState } from "react"
import words from "./wordList.json"
import "./styles.css"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {return words[Math.floor(Math.random() + words.length)]});
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);


  return (
<div className="game">
  <div className="lose-win">Lose Win</div>
</div>

  )
}

export default App
