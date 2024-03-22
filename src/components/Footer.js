import { Component } from "react";
import '../assets/css/Footer.css';

class Footer extends Component{
    render(){
        return(
            <footer className="footer mt-auto py-3">
                <div className="container text-center">
                    <div className="footer-main">
                        
                    </div>
                    <div className="footer-bottom">
                        <span>© RAVELONARIVO Jovani Matthieu 2024 | GitHub : <a href="https://github.com/jovani494/portfolio.git">Jovani Portfolio</a></span>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;