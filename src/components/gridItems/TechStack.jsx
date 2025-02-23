import React, { useState } from "react";
import nextjsicon from "../../images/nextdotjs.svg";
import reacticon from "../../images/reacticon.svg";
import nodejsicon from "../../images/nodejsicon.svg";
import mongodbicon from "../../images/mongodbicon.svg";
import mysqlicon from "../../images/mysqlicon.svg";
import "../../styles/AboutSectionTeckStack.css";
function TechStack() {
  const [languageIndex, setlanguageIndex] = useState(0);
  const programmingLanguages = [
    { img: nextjsicon, text: "NextJs" },
    { img: reacticon, text: "React" },
    { img: nodejsicon, text: "Node.JS" },
    { img: mongodbicon, text: "MongoDB" },
    { img: mysqlicon, text: "MySQL" },
  ];

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
    <>
      <h2 style={{ marginBottom: "16px" }}>Tech Stack</h2>

      <div className="programming-languages-container">
        {/* left arrow */}
        <button className="arrow-button" onClick={previousLanguage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hotpink"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H7m5-7l-7 7 7 7" />
          </svg>
        </button>

        {/* previous language small icon */}
        <img
          className="language-icon-small"
          src={
            programmingLanguages[
              (languageIndex - 1 + programmingLanguages.length) %
                programmingLanguages.length
            ].img
          }
          alt=""
        />

        {/* current language large icon*/}
        <div className="language-icon-center">
              <img className="language-icon-large" src={programmingLanguages[languageIndex].img}/>
          <p className="programming-language-text">
            {programmingLanguages[languageIndex].text}
          </p>
        </div>

        {/* next language large icon*/}
        <img
          className="language-icon-small"
          src={
            programmingLanguages[
              (languageIndex + 1) % programmingLanguages.length
            ].img
          }
          alt=""
        />

        {/* right arrow */}
        <button className="arrow-button" onClick={nextLanguage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            stroke="hotpink"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h12M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default TechStack;
