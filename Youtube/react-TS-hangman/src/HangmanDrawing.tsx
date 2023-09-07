import "./css/gallows.css"
import "./css/person.css"


const HEAD = ( <div className="head"></div> );
const BODY = ( <div className="body"></div> );
const RIGHT_ARM = ( <div className="right-arm"></div> );
const LEFT_ARM = ( <div className="left-arm"></div> );
const RIGHT_LEG = ( <div className="right-leg"></div>);
const LEFT_LEG = ( <div className="left-leg"></div>);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses } : HangmanDrawingProps) {
    return (
        <div className="set">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="rope"></div>
            <div className="post"></div>
            <div className="mast"></div>
            <div className="base"></div>
        </div>
    )
}