import "./App.css";
import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

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
