import React from "react";

import "./style.css"

import insta from "./../../img/icons/instagram.png"
import twitter from "./../../img/icons/twitter.svg"
import gitHub from "./../../img/icons/gitHub.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="#!"><img src={insta} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={gitHub} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2023 Yehor Rieznik</p>
                    </div>
                </div>
            </div>
        </footer> 
    );
}
 
export default Footer;