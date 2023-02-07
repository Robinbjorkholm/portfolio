import React from "react";
import "./HomeSection.css";
import Typewriter from "typewriter-effect";
import returnSound from "../../../sound/return.wav";
import typingSound from "../../../sound/typing.wav";

function HomeSection() {
  function playReturnSound() {
    new Audio(returnSound).play();
  }
  function playTypingSound() {
    new Audio(typingSound).play();
  }

  return (
    <div className="SectionHome" id="Home">
      <div className="helloWorld">
        <Typewriter
          options={{ cursor: "_", delay: "70" }}
          onInit={typewriter => {
            typewriter
              /*.callFunction(() => {
                playTypingSound();
              })*/
              .typeString("Hello friend.")
              .typeString(" welcome to my websitr")
              .pauseFor(1000)
              .deleteChars(1)
              //.callFunction(playReturnSound)
              .typeString("e")
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default HomeSection;
