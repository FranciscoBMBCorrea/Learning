import "./css/word.css"


export function HangmanWord() {

    const word = "test"
    const guessedLetters = ["t", "e", "g"];

    return (
        <div className="word">
            {word.split("").map((letter, index) => (
            <span className="letters" key={index}>
                <span 
                style={{
                    visibility: guessedLetters.includes(letter)
                    ? "visible"
                    : "hidden",
                }}
                >

                {letter}
                </span>
                </span>
            ))}
        </div>
    )
}