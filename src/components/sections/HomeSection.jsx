import React, { useState, useEffect } from "react";
import "../../HomeSection.css";
import getAge from "../utility/ageCalculator";
import "../../SideNavBar.css";

function HomeSection() {
  const timer = 1000;
  const [myAge, setAge] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge("1998/07/08"));
    }, timer);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Section" id="Home">
      <h1 className="helloworld">Hello World</h1>
      <p className="myAge"> {myAge}</p>
    </div>
  );
}

export default HomeSection;
