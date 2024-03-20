import { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component{
    state = {
        pages : [
          { name : "Home", link : "/" } ,
          { name : "Projects", link : "/projects" } ,
          { name : "Skills" , link : "/skills"} ,
          { name : "Certificate" , link : "/certificate"} ,
          { name : "Message" , link : "/message"} ,
        ],
        viewList : false, 
      }
    
    viewList = () => {
      this.setState({
        viewList : true
      })
    }

    hideList = () => {
      this.setState({
        viewList : false
      })
    }
      
    render(){
        return(
            <div className="navbar">
              <ul>
                {this.state.pages.map( (page, index) => {
                    return(
                      <li key={index} className="nav__item">
                        <NavLink to={page.link} className="nav__link">
                          {page.name}
                        </NavLink>
                      </li>
                    )
                  })}
              </ul>
            </div>
        )
    }
}

export default NavBar