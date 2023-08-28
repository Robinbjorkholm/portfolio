import React from "react";
import "../styles/modal.css";
import { motion, AnimatePresence } from "framer-motion";

function ProjectModal({
  closeModal,
  projectName,
  projectImage,
  projectDescription,
  stackUsed,
}) {
  const experiment = {
    initial: {
      transform: "scale(0), rotateY: 180 ",
      opacity: 0,
    },
    animate: {
      transform: " scale(1) rotateY(0deg)",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal"
        variants={experiment}
        initial="initial"
        animate="animate"
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
                <img
                  src={image}
                  alt="programming language."
                  className="stackUsedImg"
                />
              </li>
            );
          })}
        </ul>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
