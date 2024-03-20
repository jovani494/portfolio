import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Cursus from "./pages/Cursus";
import Message from "./pages/Message";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects"
import Certificate from "./pages/Certificate";

import "./index.css";

class App extends Component {

  render(){
    return (
      <Router>
        <main className="App contenu">
          <div className="menu"><NavBar /></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/cursus" element={<Cursus />} />
            <Route path="/message" element={<Message />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    );
  }
}

export default App;
