import React from "react";
import "../styles/HomeSection.css";
import Typewriter from "typewriter-effect";

function HomeSection() {
  return (
    <div className="SectionHome" id="Home">
      <div className="helloWorld">
        <Typewriter
          options={{ cursor: "_", delay: "70" }}
          onInit={(typewriter) => {
            typewriter

              .typeString("Hello world.")
              .typeString(" welcome to my websitr")
              .pauseFor(1000)
              .deleteChars(1)

              .typeString("e")
              .start();
          }}
        />
      </div>
      <h1 className="HomeHeader">HOME</h1>
    </div>
  );
}

export default HomeSection;
