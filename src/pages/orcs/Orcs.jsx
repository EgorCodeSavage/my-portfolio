import OrcsStats from "../../components/orcs/OrcsStats";
import OrcsTitle from "../../components/orcs/OrcsTitle";

import "./style.css"


const Orcs = () => {
    return ( 
        <div className="container">
            <OrcsTitle />
            <OrcsStats />
        </div>
     );
}
 
export default Orcs;