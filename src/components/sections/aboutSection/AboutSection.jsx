import React, { useState, useEffect } from "react";
import getAge from "../../utility/ageCalculator";
import "./AboutSection.css";
import { AnimatePresence, motion } from "framer-motion";
import photo from "../../../pictures/jontte.png";
import backgroundMap from "../../../pictures/backgroundMap.png";
import catEye from "../../../pictures/catEye.png";

function AboutSection() {
  const [myAge, setAge] = useState();
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAge(getAge("1998/07/08"));
    }, 1000);
    setInterval(() => {
      setBlink(true);
    }, 4000);
    setInterval(() => {
      setBlink(false);
    }, 4350);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="SectionAbout" id="About">
      <h1 id="AboutHeader">About me </h1>

      <div id="infoBox" style={{ backgroundImage: `url(${backgroundMap})` }}>
        {!blink ? null : (
          <div id="eyes">
            <motion.img
              src={catEye}
              key="leftEye"
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1, duration: 0.7 }}
              id="eyeBlink"
            ></motion.img>
            <motion.img
              src={catEye}
              key="RightEye"
              initial={{ opacity: 0 }}
              animate={{ y: 0, opacity: 1, duration: 0.9 }}
              id="RighteyeBlink"
            ></motion.img>
          </div>
        )}

        <img src={photo} id="photo" alt="passportPhoto"></img>
        <div id="personalInfo">
          {" "}
          <p id="infoText">
            {" "}
            Hello my friends, my name is <strong>Robin </strong>i'm <strong>{myAge}</strong> years
            old and live in{" "}
            <strong
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Jakobstad/@63.6858396,22.6411586,12z/data=!3m1!4b1!4m5!3m4!1s0x468767bd2fa71f35:0x40146d63c75bb50!8m2!3d63.6744036!4d22.6966088"
                )
              }
              id="showLocation"
            >
              Jakobstad.
            </strong>{" "}
            In my freetime i like to code and build racecar. <br></br>
            <br></br> <strong>I Also love cats 😻</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
