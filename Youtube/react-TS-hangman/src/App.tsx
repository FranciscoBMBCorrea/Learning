import { useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json"
import "./css/styles.css"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {return words[Math.floor(Math.random() + words.length)]});
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);


  return (
<div className="game">
  <div className="lose-win">Lose Win</div>
  <HangmanDrawing />
  <HangmanWord />
  <Keyboard />
</div>

  )
}

export default App
