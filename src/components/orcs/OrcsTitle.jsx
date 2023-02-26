import zombie from "./img/zombie.png"

const OrcsTitle = () => {
    return ( 
        <div className="orcs_inner">
            <img className="orcs_img" src={zombie} alt="logo" />
            <div className="orcs_title">Total combat losses of the Russian orcs <br/><span>The General Staff of the Armed Forces of Ukraine informs</span></div>
            <a target="_blank" rel="noreferrer" href="https://www.webspark.ua/sleipnir-226-228/?utm_source=russianwarship.rip">
                <button  className="orcs_button">Invest in UA troops</button>
            </a>
            
        </div>
     );
}
 
export default OrcsTitle;