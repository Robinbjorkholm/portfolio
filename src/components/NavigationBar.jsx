import React, { Component } from "react";
import "../SideNavBar.css";
import SideNavBar from "./SideNavBar";
import MobileNavBar from "./MobileNavBar";
import testnav from "./testnav";

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
    if (this.state.height <= 700 || this.state.width <= 1000) {
      this.setState({ toggleMobileNavigation: true });
    } else {
      this.setState({ toggleMobileNavigation: false });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }
  render() {
    return <div>{this.state.toggleMobileNavigation ? <MobileNavBar /> : <SideNavBar />};</div>;
  }
}
export default NavigationBar;
