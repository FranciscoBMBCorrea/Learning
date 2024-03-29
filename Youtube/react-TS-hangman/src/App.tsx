import { useCallback, useEffect, useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";
import words from "./wordList.json"
import "./css/styles.css"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => { return words[Math.floor(Math.random() * words.length)] });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])

    },
    [guessedLetters, isWinner, isLoser]
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters]);


  return (
    <div className="game">
      <div className="lose-win">
        {isWinner && "Winner! Refresh to try again!"}
        {isLoser && "Nice Try! Refresh to try again!"}

      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord 
      reveal={isLoser}
      guessedLetters={guessedLetters} 
      wordToGuess={wordToGuess} 
      />
      <div className="keyboard-align">
        <Keyboard
        disabled={isWinner || isLoser} 
        activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} 
        inactiveLetters={incorrectLetters} 
        addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>

  )
}

export default App
