import "./App.css";
import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomeSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <NavigationBar />
      </div>
    );
  }
}

export default App;
