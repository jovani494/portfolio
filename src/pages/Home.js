import { Component } from "react";
import './Home.css';
import photo from "../photo.jpeg";
import { FaLinkedin , FaFacebook , FaGithub  } from "react-icons/fa";

class Home extends Component{
    state = {
        naissance : 2002,
        links : [
            {name : "Linkedin" , icon : <FaLinkedin /> , lien : "https://www.linkedin.com/in/jovani-ravelonarivo-005444225/" } ,
            {name : "GitHub" , icon : <FaGithub /> , lien : "https://github.com/jovani494" } ,
            {name : "Facebook" , icon : <FaFacebook /> , lien : "https://www.facebook.com/profile.php?id=100066685957313&mibextid=ZbWKwL" } ,
            
        ]
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
                    {this.state.links.map((link,index) => {
                        return(
                            <div key={index} className="profile">
                                <a className="link_name" href={link.lien}><span>{link.icon}</span> {link.name}</a>
                            </div>
                        ) 
                    })}
                </div>
            </div>
        )
    }
}

export default Home;