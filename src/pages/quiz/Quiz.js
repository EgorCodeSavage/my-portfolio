import "./styles.css"

import {questions} from "./../../helpers/QuestionList"
import { useState } from "react";

function Result({trueVariant}) {


    return (
      <div className="result">
        <img alt="img" src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>You guessed {trueVariant} answer{trueVariant >=2 ? "s" : "" } out of {questions.length}</h2>
        <button onClick={() => window.location.reload()}>Try again</button>
      </div>
    );
  }
  
  function Game({step, onClickVariant, question}) {

    const percentage = Math.round((step / questions.length) * 100)

    return (
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((text, index) => <li onClick={() => onClickVariant(index)} key={index}>{text}</li>)
          }
        </ul>
      </>
    );
  }
  
  function Quiz() {
    const [step, setStep] = useState(0);
    const question = questions[step];
    const [trueVariant, setTrueVariant] = useState(0);


    const onClickVariant = (index) => {
        setStep(step + 1)
        
        if (index === question.correct) {
            setTrueVariant(trueVariant + 1)
        } else {
            setTrueVariant(trueVariant + 0)
        }
    }

    return (
        <div className="quiz_main">
            <div className="quiz_app">
                {
                    step !== questions.length ? <Game step={step} onClickVariant={onClickVariant} question={question} /> : <Result trueVariant={trueVariant} />
                }
            </div>
        </div>
    );
  }
  
  export default Quiz;