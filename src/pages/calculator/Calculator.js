/* eslint no-eval: 0 */

import React, { useState } from "react";

import "./style.css"

import lightbtn from "./../../img/icons/light.png"
import darkbtn from "./../../img/icons/dark.png"

import { store } from "../../helpers/CalculatorButtons";

const Calculator = () => {

    const [out, setOut] = useState('');

    const [lightMode, setLightMode] = useState("light");

    const onClickLightChange = () => {
        setLightMode(lightMode === "light" ? "dark" : "light")
    }

    const onClickValue = (value) => {
        setOut(out + value);
    }
    const onClickOperators = (value) => {
        value === "CE" && (setOut(out.substring(0, out.length -1)))
        value === "AC" && (setOut(""))
        try {
            value === "=" && (setOut(Math.round(eval(out))))
        } catch (error) {
            setOut("Error")
            setTimeout(() => {
                setOut("")
            }, 1500)
        }
    }

    const switchMode = `--${lightMode === "light" ? "light" : "dark"}`

    return ( 
        <div className="calculator">
            <div className={`calculator_inner--${lightMode}`}>
                <div className="calculator_mode">
                    <button onClick={onClickLightChange} className={`_mode${switchMode}`}>
                        <img src={lightMode === "light" ? lightbtn : darkbtn} alt="light" />
                    </button>
                </div>
                <div className={`calculator_display${switchMode}`}>
                    <div className={`display${switchMode}`}>
                        <input type='text' className={`number${switchMode}`} defaultValue={out}></input>
                    </div>
                </div>
                <div className="calcilator_numpad">
                    <ul className={`ul1${switchMode}`}>
                        {store.operators.map((item, index) => <button onClick={() => onClickOperators(item.val)} key={index} >{item.val}</button>)}
                    </ul>
                    <ul className={`ul2${switchMode}`}>
                        {store.buttons2.map((item, index) => <button onClick={() => onClickValue(item.val)} key={index}>{item.val}</button>)}
                    </ul>
                    <ul className={`ul2${switchMode}`}>
                        {store.buttons3.map((item, index) => <button onClick={() => onClickValue(item.val)} key={index}>{item.val}</button>)}
                    </ul>
                    <ul className={`ul2${switchMode}`}>
                        {store.buttons4.map((item, index) => <button onClick={() => onClickValue(item.val)} key={index}>{item.val}</button>)}
                    </ul>
                    <ul className={`ul2${switchMode}`}>
                        {store.buttons5.map((item, index) => <button onClick={() => onClickValue(item.val)} key={index}>{item.val}</button>)}
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Calculator;