import { Component } from "react";
import './Home.css';
import photo from "../photo.jpeg";

class Home extends Component{
    state = {
        naissance : 2002
    }
 
    render(){
        const year = new Date().getFullYear();
        return(
            <div className="home">
                <div className="home-left">
                    <div className="picture">
                        <img src={photo} className="pict"/>
                    </div>

                    <div className="description">
                        <h1 className="nom">RAVELONARIVO<br></br> Jovani Matthieu</h1>
                        <p>Je suis un jeune homme âgé de {year - this.state.naissance + " ans"}</p> 
                    </div>
                </div>

                <div className="home-right">
                    
                </div>
            </div>
        )
    }
}

export default Home;