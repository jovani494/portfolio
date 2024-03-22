import { Component } from "react";
import '../assets/css/Home.css';
import photo from "../assets/image/photo.jpeg";
import Acticities from "../components/Home/Activities";
import { FaLinkedin , FaFacebook , FaGithub  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

class Home extends Component{
    state = {
        naissance : 2002,
        links : [
            {name : "Linkedin" , icon : <FaLinkedin /> , lien : "https://www.linkedin.com/in/jovani-ravelonarivo-005444225/" } ,
            // {name : "GitHub" , icon : <FaGithub /> , lien : "https://github.com/jovani494" } ,
            {name : "Mail" , icon : <SiGmail /> , lien : "mailto:ravelonarivojovani@gmail.com" } ,
            {name : "Facebook" , icon : <FaFacebook /> , lien : "https://www.facebook.com/profile.php?id=100066685957313&mibextid=ZbWKwL" } ,
            
        ]
    }
 
    render(){
        const year = new Date().getFullYear();
        return(
            <div>
                <div className="home">
                    <div className="home-left">
                        <div className="picture">
                            <img src={photo} alt="Jovani" className="pict"/>
                        </div>

                        <div className="description">   
                            <div className="nom">
                                <div className="last">RAVELONARIVO</div><div className="first">Jovani Matthieu</div>
                            </div>
                            <div className="webdevelop">
                                <h2>Web Developer</h2>
                            </div>
                            <p className="texte">I'm a {year - this.state.naissance + "-year-old"} man who's been passionate about
                            technology since I was very young.
                            </p> 
                        </div>
                    </div>

                    <div className="home-right">
                        {this.state.links.map((link,index) => {
                            return(
                                <div key={index} className="profile">
                                    <a className="link_name" href={link.lien}>{link.icon}  {link.name}</a>
                                </div>
                            ) 
                        })}
                    </div>
                </div>
                <Acticities />
            </div>
        )
    }
}

export default Home;