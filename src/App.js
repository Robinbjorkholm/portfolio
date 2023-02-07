import "./App.css";
import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import HomeSection from "./components/sections/homeSection/HomeSection";
import AboutSection from "./components/sections/aboutSection/AboutSection";
import ProjectsSection from "./components/sections/projectSection/ProjectsSection";
import ContactSection from "./components/sections/contactSection/ContactSection";

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
