import { Component } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import "./index.css";

class App extends Component {

  render(){
    return (
      <div className="App contenu">
        <div className="menu">
          <NavBar />
        </div>

        <Home />

        <Footer />
      </div>
    );
  }
}

export default App;
