import React, { useState, useEffect } from "react";
import getAge from "../../utility/ageCalculator";
import "./AboutSection.css";

function AboutSection() {
  const [myAge, setAge] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge("1998/07/08"));
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Section" id="About">
      <h1 id="aboutHeader">About me </h1>
      <p className="myAge"> {myAge}</p>
    </div>
  );
}

export default AboutSection;
