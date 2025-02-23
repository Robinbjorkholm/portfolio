import React, { Component } from "react";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";
import "../styles/NavBar.css";


//This component changes between the mobile and desktop navigation depending on the screensize 
class NavigationBar extends Component {

  state = {
    height: window.innerHeight,
    width: window.innerWidth,
    toggleMobileNavigation: false,
  };
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  resize() {
    this.setState({ height: window.innerHeight, width: window.innerWidth });
    if (this.state.height <= 480 || this.state.width <= 600) {
      this.setState({ toggleMobileNavigation: true });
    } else {
      this.setState({ toggleMobileNavigation: false });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  render() {
    return (
      <div>
        {this.state.toggleMobileNavigation ? <MobileNavBar /> : <NavBar/>}
      </div>
    );
  }
}
export default NavigationBar;
