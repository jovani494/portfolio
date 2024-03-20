import { Component } from "react";

export default class Certificate extends Component {
    state = {
        Certfificate : [
            {name : "BACC A2", level : "Assez Bien"} ,
            {name : "Licence", level : "Bien"} ,
            {name : "DALF", level : "C1"} ,
            {name : "TOEFL", level : "C2"} ,
        ]
    }
    render() {
        return(
            <div className="certificate">
                {this.state.Certfificate.map((cert, index) => {
                    return(
                        <li key={index}>{cert.name}</li>
                    )
                })}
            </div>
        )
    }
}