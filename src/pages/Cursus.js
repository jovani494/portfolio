import { Component } from "react";

class Cursus extends Component{
    state = {
        cursus : [
            { etab : "IT-University", debut : 2023 , classe : "M1" } ,
            { etab : "Ecole Supérieure des Technologies de l'Information", debut : 2019, fin : 2023, classe : "Licence" } ,
            { etab : "Parc Des Princes Itaosy", debut : 2019, fin : 2023, classe : "Licence" } ,
        ]
    }
    render(){
        return(
            <div className="cursus">

            </div>
        )
    }
}

export default Cursus;