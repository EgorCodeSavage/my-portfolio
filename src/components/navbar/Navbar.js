import React from "react";
import {NavLink} from "react-router-dom";

import "./style.css";

import BtnDarkMode from "../btnDarkMode/BtnDarkMode";


function Navbar () {

    const activeLink = "nav-list__link nav-list__link--active";
    const notActiveLink = "nav-list__link";



    return(
        <nav className="nav">
            <div className="container">
                <div class="nav-row">
                    <NavLink to="/" className="logo">
                        <strong>Rieznik</strong> portfolio
                    </NavLink>
                    
                    <BtnDarkMode />  

                    <ul className="nav-list">
                        
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Home
                            </NavLink>
                        </li>
                        
                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Projects
                            </NavLink>
                        </li>
                        
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Contacts
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/games" className={({isActive}) => isActive ? activeLink : notActiveLink}>
                                Games
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar