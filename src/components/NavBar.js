import { Component } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu, IoHome } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";
import { VscBeaker } from "react-icons/vsc";
import { PiCertificateFill } from "react-icons/pi";
import { MdForwardToInbox } from "react-icons/md";
import "../assets/css/Navbar.css"

class NavBar extends Component{
    state = {
        pages : [
          { name : "Home", link : "/", icon : <IoHome  />} ,
          { name : "Cursus", link : "/cursus", icon : <FaSchool  />} ,
          { name : "Projects", link : "/projects", icon : <FaTasks /> } ,
          { name : "Skills" , link : "/skills" , icon : <VscBeaker />} ,
          { name : "Certificate" , link : "/certificate" , icon : <PiCertificateFill />} ,
          { name : "Message" , link : "/message" , icon : <MdForwardToInbox />} ,
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
              { this.state.viewList? 
                (
                  <div className="navlink">
                    <button onClick={this.hideList} className="nav__close"><IoClose /></button>
                      <ul className="list-items">
                        {this.state.pages.map((page, index) => {
                            return(
                              <li key={index} className="nav__item">
                                <NavLink to={page.link} onClick={this.hideList} className="nav__link">
                                  <div className="item">
                                    <div className="icon">{page.icon}</div><div className="name">{page.name}</div>
                                  </div> 
                                </NavLink>
                              </li>
                            )
                          })}
                      </ul>
                  </div>
                ) : (
                  <div className="see">
                    <button onClick={this.viewList} className="nav__toggle"><IoMenu /></button>
                  </div>
                ) }
            </div>
        )
    }
}

export default NavBar