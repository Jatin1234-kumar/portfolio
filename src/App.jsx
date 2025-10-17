import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SpaceBackground from "./components/SpaceBackground";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <SpaceBackground />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
export default App;
