import React from "react";
import "./modal.css";
import { motion } from "framer-motion";

function ProjectModal({ closeModal, projectName, projectImage, projectDescription, stackUsed }) {
  const newLanguage = stackUsed.map(p => p + ", ");

  newLanguage[newLanguage.length - 1] = newLanguage[newLanguage.length - 1].replace(",", ".");

  return (
    <div className="modal">
      <img src={projectImage} className="projectImage" />
      <h1 className="header">{projectName}</h1>
      <button onClick={closeModal} className="closeButton">
        &#x2715;
      </button>

      <p id="projectDescription"> {projectDescription}</p>
      <p id="stackUsed">
        <u>
          {" "}
          <strong>Stack used:</strong>
        </u>{" "}
        {newLanguage}
      </p>
    </div>
  );
}

export default ProjectModal;
