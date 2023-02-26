import React from "react";

import { NavLink } from "react-router-dom";

import { games } from "../../helpers/GamesList";
import "./style.css"

const Game = () => {


    return ( 
        <div>
            <ul className="list">
               {
                games.map((item, index) => {
                    return (
                        <NavLink to={`${index}`}>
                            <div key={index} className="item">
                                <h3>{item.title}</h3>
                                <img className="imgGames" alt="img" src={item.img} />
                                <p>{item.skills}</p>
                            </div>
                            
                        </NavLink>
                    )
                })
               }
            </ul>
        </div>
     );
}
 
export default Game;