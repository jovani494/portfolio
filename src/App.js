import { Component } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

class App extends Component {
  render(){
    return (
      <div className="App">
        <NavBar>

        </NavBar>

        <Footer />
      </div>
    );
  }
}

export default App;
