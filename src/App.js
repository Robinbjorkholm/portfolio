import "./App.css";
import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import HomeSection from "./components/sections/HomeSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/projectSection/ProjectsSection";
import ContactSection from "./components/sections/ContactSection";

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
