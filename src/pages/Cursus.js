import { Component } from "react";
import CursusList from "../components/Cursus/CursusList";
import "../assets/css/Cursus.css";
import PARC from "../assets/image/parc.jpg"
import ESTI from "../assets/image/esti.png"
import ITU from "../assets/image/ITU.png"

class Cursus extends Component{
    state = {
        cursus : [
            { etab : "IT-University", debut : "2023", fin : "Until now" , classe : "Master I", image : ITU } ,
            { etab : "Ecole Supérieure des Technologies de l'Information", debut : "2019", fin : "2022", classe : "Year 1 - Year 2 - Year   3" , image : ESTI } ,
            { etab : "Ecole Privée Parc Des Princes Itaosy", debut : "2005" , fin : "2019", classe : "Kindergarten - Final year of high school" , image : PARC } ,
        ]
    }
    render(){
        return(
            <div className="cursus">
                <h1 className="cursus_title">Academic background</h1>
                <ul className="cursus_list">
                    {this.state.cursus.map((cursu,index) => {
                        return(
                                <CursusList key={index} id={index} name={cursu.etab} debut={cursu.debut} fin={cursu.fin} classe={cursu.classe} picture={cursu.image} />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Cursus;