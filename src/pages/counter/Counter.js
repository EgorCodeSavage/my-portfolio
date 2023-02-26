import { useState } from "react"
import "./style.css"

const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    const onClickPlus = ()=> {
        setCounter(counter + 1);
    }
    const onClickMinus = () => {
        if (counter <= 0) {
            setCounter(counter - 0)
        } else {
            setCounter(counter - 1)
        }
    }

    return ( 

        <div className="counter_main">
            <div className="counter_app">
                <div>
                    <h2>Counter:</h2>
                    <h1 >{counter}</h1>
                    <button onClick={onClickMinus} className="minus">- Minus</button>
                    <button onClick={onClickPlus} className="plus">Plus +</button>
                </div>
            </div>
        </div>
        
     );
}
 
export default Counter;