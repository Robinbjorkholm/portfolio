import React from "react";
import "./modal.css";

function ProjectModal({ closeModal, projectName, projectImage, projectDescription }) {
  return (
    <div className="modal">
      <div className="modalHeader">
        <h1 className="header"> {projectName}</h1>
        <button onClick={closeModal} className="closeButton">
          X
        </button>
      </div>
      <img src={projectImage} className="projectImage" />
      <p> {projectDescription}</p>
    </div>
  );
}

export default ProjectModal;
