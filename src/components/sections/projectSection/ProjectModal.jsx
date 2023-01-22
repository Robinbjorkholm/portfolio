import React from "react";
import "./modal.css";
import { motion } from "framer-motion";

function ProjectModal({ closeModal, projectName, projectImage, projectDescription, stackUsed }) {
  // const newLanguage = stackUsed.map(p => p + ", ");

  //newLanguage[newLanguage.length - 1] = newLanguage[newLanguage.length - 1].replace(",", ".");
  const experiment = {
    initial: {
      transform: "scale(0) rotateY(-180deg)",
      opacity: 0,
    },
    animate: {
      transform: " scale(1) rotateY(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      transform: "scale(0) rotateY(180deg)",
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="modal"
      variants={experiment}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <img src={projectImage} alt="" className="projectImage" />
      <h1 className="header">{projectName}</h1>
      <button onClick={closeModal} className="closeButton">
        &#x2715;
      </button>
      <p id="projectDescription"> {projectDescription}</p>
      <ul className="stackUsedUl">
        {stackUsed.map((image, key) => {
          return (
            <li key={key} className="stackUsedImgList">
              <img src={image} alt="programming language." className="stackUsedImg" />
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export default ProjectModal;
