import { useEffect, useState } from "react";

import soldier from "./img/soldiers.png"
import tank from "./img/tank.png"
import afv from "./img/AFV.png"
import arta from "./img/arta.png"
import mlrs from './img/mlrs.png'
import airdef from "./img/airdef.png"
import plane from './img/plane.png'
import helicopters from "./img/helicopters.png"
import vic from "./img/vic.png"
import warships_cutters from "./img/warships_cutters.png"

const OrcsStats = () => {

    const [date, setDate] = useState([]);
    const [troops, setTroops] = useState([]);
    const [newTroops, setNewTroops] = useState([]);

    useEffect(() => {
        fetch("https://russianwarship.rip/api/v2/statistics/latest").then(res => res.json()).then( json => {
            setDate(json.data);
            setTroops(json.data.stats)
            setNewTroops(json.data.increase)
        }).catch(err => {
            console.log(err);
            alert("Error in downloadin files!");
        })
    }, [])

    console.log(troops)

    return ( 
        <>
            <div className="orcs_stats_title">As of {date.date} ({date.day}th day of the war)</div>
            <ul className="orcs_stats_inner">
                <li className="orcs_stats_item">
                    <img src={soldier} alt="" />
                    <h2>{troops.personnel_units} (+{newTroops.personnel_units})</h2>
                    <p>Troops</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={tank} alt="" />
                    <h2>{troops.tanks} (+{newTroops.tanks})</h2>
                    <p>Tanks</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={afv} alt="" />
                    <h2>{troops.armoured_fighting_vehicles} (+{newTroops.armoured_fighting_vehicles})</h2>
                    <p>AFV</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={arta} alt="" />
                    <h2>{troops.artillery_systems} (+{newTroops.artillery_systems})</h2>
                    <p>Artillery Systems</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={mlrs} alt="" />
                    <h2>{troops.mlrs} (+{newTroops.mlrs})</h2>
                    <p>MLRS</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={airdef} alt="" />
                    <h2>{troops.aa_warfare_systems} (+{newTroops.aa_warfare_systems})</h2>
                    <p>Air Defense Equipment</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={plane} alt="" />
                    <h2>{troops.planes} (+{newTroops.planes})</h2>
                    <p>Planes</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={helicopters} alt="" />
                    <h2>{troops.helicopters} (+{newTroops.helicopters})</h2>
                    <p>Helicopters</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={vic} alt="" />
                    <h2>{troops.vehicles_fuel_tanks} (+{newTroops.vehicles_fuel_tanks})</h2>
                    <p>Vehicles Fuel Tanks</p>
                </li>
                <li className="orcs_stats_item">
                    <img src={warships_cutters} alt="" />
                    <h2>{troops.warships_cutters} (+{newTroops.warships_cutters})</h2>
                    <p>Warships/Cutters</p>
                </li>
            </ul>
        </>
     );
}
 
export default OrcsStats;