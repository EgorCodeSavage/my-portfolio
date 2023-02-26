import React from "react";

import "./style.css"
import CV from "./../../helpers/CV_Yehor_UI_Developer.docx"

const Header = () => {
    return ( 
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Hi, my name is <em>Yehor</em></strong><br/>a UI developer
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href={CV} className="btn" download>Download CV</a>
            </div>
        </header>
     );
}
 
export default Header;