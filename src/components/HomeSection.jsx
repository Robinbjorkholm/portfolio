import React, { useState } from "react";
import "../styles/HomeSection.css";
import Typewriter from "typewriter-effect";

//Home section just writing some text on the screen
function HomeSection() {
  return (
    <div className="home-section" id="Home">
      {/*Added this h1 just for SEO its invisible to the user  */}
      <h1 className="Seo-header">Welcome to My Portfolio</h1>
      <h2 className="home-header">HOME</h2>
      <div className="typewriter-text">
        <Typewriter
          options={{ cursor: "_", delay: 70 }}
          onInit={(typewriter) => {
            typewriter
              .typeString(" welcome to my portfolip")
              .pauseFor(300)
              .deleteChars(1)
              .typeString("o")
              .callFunction(() => {
                document.querySelector(".Typewriter__cursor").style.display =
                  "none";
              })
              .start();
          }}
        />
      </div>
    </div>
  );
}

export default HomeSection;
