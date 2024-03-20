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
                        <img src={photo} alt="Jovani" className="pict"/>
                    </div>

                    <div className="description">   
                        <div className="nom">
                            <div className="last">RAVELONARIVO</div><div className="first">Jovani Matthieu</div>
                        </div>
                        <p className="texte">Je suis un jeune homme âgé de {year - this.state.naissance + " ans"} passioné par 
                            la technologie depuis mon plus jeune âge.
                        </p> 
                    </div>
                </div>

                <div className="home-right">
                    s
                </div>
            </div>
        )
    }
}

export default Home;