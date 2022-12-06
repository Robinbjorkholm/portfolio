import React from "react";
import "./modal.css";
import { motion } from "framer-motion";

function ProjectModal({ closeModal, projectName, projectImage, projectDescription, stackUsed }) {
  // const newLanguage = stackUsed.map(p => p + ", ");

  //newLanguage[newLanguage.length - 1] = newLanguage[newLanguage.length - 1].replace(",", ".");

  console.log(stackUsed);

  return (
    <div className="modal">
      <img src={projectImage} alt=" of my project" className="projectImage" />
      <motion.h1
        initial={{ y: 250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "tween" }}
        className="header"
      >
        {projectName}
      </motion.h1>
      <button onClick={closeModal} className="closeButton">
        &#x2715;
      </button>
      <p id="projectDescription"> {projectDescription}</p>

      <ul>
        {stackUsed.map((image, key) => {
          return (
            <li key={key} className="stackUsedImgList">
              <img
                src={image}
                alt="icon corresponding programming language used."
                className="stackUsedImg"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectModal;
