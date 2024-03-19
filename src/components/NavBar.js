import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class NavBar extends Component{
    state = {
        pages : [
          { name : "Home" } ,
          { name : "Projects" } ,
          { name : "Skills" } ,
        ] 
      }
      
    render(){
        return(
            <div className="navbar">

            </div>
        )
    }
}

export default NavBar