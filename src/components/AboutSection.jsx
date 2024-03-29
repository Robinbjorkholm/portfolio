import React, { useState, useEffect } from "react";
import getYear from "./utility/yearCalculator";
import "../styles/AboutSection.css";
import { motion, useAnimation } from "framer-motion";
import { VscGithubInverted } from "react-icons/vsc";
import { useInView } from "react-intersection-observer";
import jsIcon from ".././pictures/jsicon.svg";
import htmlIcon from ".././pictures/htmlicon.svg";
import cssIcon from ".././pictures/cssicon.svg";
import csharpIcon from ".././pictures/csharpicon.svg";
import reacticon from ".././pictures/reacticon.svg";
import nodejsicon from ".././pictures/nodejsicon.svg";
import mongodbicon from ".././pictures/mongodbicon.svg";
import mysqlicon from "../pictures/mysqlicon.svg";

function AboutSection() {
  const [myAge, setAge] = useState();
  const [codingYears, setCodingYears] = useState();
  const [languageIndex, setlanguageIndex] = useState(0);
  const { ref: grid1, inView: grid1View } = useInView({ threshold: 0 });
  const { ref: grid2, inView: grid2View } = useInView({ threshold: 0 });
  const { ref: grid3, inView: grid3View } = useInView({ threshold: 0 });
  const { ref: grid4, inView: grid4View } = useInView({ threshold: 0 });
  const Grid1Animation = useAnimation();
  const Grid2Animation = useAnimation();
  const Grid3Animation = useAnimation();
  const Grid4Animation = useAnimation();
  const programmingLanguages = [
    { img: jsIcon, text: "JavaScript" },
    { img: htmlIcon, text: "HTML" },
    { img: cssIcon, text: "CSS" },
    { img: csharpIcon, text: "C#" },
    { img: reacticon, text: "React" },
    { img: nodejsicon, text: "Node.JS" },
    { img: mongodbicon, text: "MongoDB" },
    { img: mysqlicon, text: "MySQL" },
  ];

  useEffect(() => {
    if (grid1View) {
      Grid1Animation.start({
        x: 20,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }

    ///////////  GRID2  ////////////////////////////////

    if (grid2View) {
      Grid2Animation.start({
        x: -20,
        opacity: 1,
        transition: {
          duration: 1.3,
        },
      });
    }

    /////////////   GRID 3 ////////////////////////////

    if (grid3View) {
      Grid3Animation.start({
        x: 20,
        opacity: 1,
        transition: {
          duration: 1.6,
        },
      });
    }

    ////////////////  GRID 4 /////////////////////

    if (grid4View) {
      Grid4Animation.start({
        x: -20,
        opacity: 1,
        transition: {
          duration: 1.9,
        },
      });
    }
    //////////////// CALCULATE AGE    ///////////////
    const interval = setInterval(() => {
      setAge(getYear("1998/07/08", 9));
      setCodingYears(getYear("2019/11/1", 4));
    }, 1000);
    return () => clearInterval(interval);
  }, [grid1View, grid2View, grid3View, grid4View]);

  // show next language
  function nextLanguage() {
    if (languageIndex + 1 === programmingLanguages.length) {
      setlanguageIndex(0);
    } else {
      setlanguageIndex(languageIndex + 1);
    }
  }
  //show previous language
  function previousLanguage() {
    if (languageIndex === 0) {
      setlanguageIndex(programmingLanguages.length - 1);
    } else {
      setlanguageIndex(languageIndex - 1);
    }
  }

  return (
    <div className="SectionAbout" id="About">
      <div className="GridInfoBox">
        <motion.div
          ref={grid1}
          initial={{ x: "-300px", opacity: 0 }}
          animate={Grid1Animation}
          className="Grid1"
        >
          <h2 className="AboutGridHeader">Who am i ? </h2>
          <div className="GridText">
            My name is <strong>Robin {myAge}</strong> years old and live in &nbsp;
            <a
              onClick={() =>
                window.open(
                  "https://www.google.com/maps/place/Jakobstad/@63.6858396,22.6411586,12z/data=!3m1!4b1!4m5!3m4!1s0x468767bd2fa71f35:0x40146d63c75bb50!8m2!3d63.6744036!4d22.6966088"
                )
              }
              id="showLocation"
            >
              Pietarsaari.
            </a>
            <br />I have been coding as a hobby for about <b>{codingYears}</b>{" "}
            years. <br />
            <br />I speak <strong>Swedish</strong>,<strong>Finnish</strong> and{" "}
            <strong>English.</strong>
          </div>
        </motion.div>
        <h1 className="AboutHeader">ABOU &nbsp; &nbsp; T</h1>

        <motion.div
          ref={grid2}
          initial={{ x: "300px", opacity: 0 }}
          animate={Grid2Animation}
          className="Grid2"
        >
          <h2 className="AboutGridHeader">Programming <br/>Languages</h2>
          <ul className="languageList">
            <motion.button
              whileHover={{
                opacity: 1,
                transition: { duration: 0.2 },
              }}
              className="arrowButton"
              onClick={previousLanguage}
            >
              &#8249;
            </motion.button>
            <img
              className="languageIconSmall"
              src={
                programmingLanguages[
                  (languageIndex - 1 + programmingLanguages.length) %
                    programmingLanguages.length
                ].img
              }
              alt=""
            />
            <div>
              <motion.img
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
                className="languageIcon"
                src={programmingLanguages[languageIndex].img}
                alt=""
              ></motion.img>
              <p className="programming-language-text">
                {programmingLanguages[languageIndex].text}
              </p>{" "}
            </div>
            <img
              className="languageIconSmall"
              src={
                programmingLanguages[
                  (languageIndex + 1) % programmingLanguages.length
                ].img
              }
              alt=""
            />
            <motion.button
              whileHover={{
                opacity: 1,
                transition: { duration: 0.2 },
              }}
              className="arrowButton"
              onClick={nextLanguage}
            >
              &#8250;
            </motion.button>
          </ul>
        </motion.div>
        <motion.div
          ref={grid3}
          initial={{ x: "-300px", opacity: 0 }}
          animate={Grid3Animation}
          className="Grid3"
        >
          <h2 className="AboutGridHeader"> Hobby</h2>
          <div className="GridText">
            My freetime i mostly spend at the gym 🦍, in front of my computer💻
            or at the garage building my racecar🚗.<br></br><br></br> And the normal human stuff
            like hanging out with friends and family and talking with my cat 😼
          </div>
        </motion.div>
        <motion.div
          ref={grid4}
          initial={{ x: "300px", opacity: 0 }}
          animate={Grid4Animation}
          className="Grid4"
        >
          <h2 className="AboutGridHeader"> Links</h2>
          <div className="GridText">
            <VscGithubInverted
              className="GitHubIcon"
              onClick={() => window.open("https://github.com/Robinbjorkholm")}
            ></VscGithubInverted>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutSection;
