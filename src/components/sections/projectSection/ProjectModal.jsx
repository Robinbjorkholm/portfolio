import { textTransform } from "@mui/system";
import React from "react";
import "./modal.css";

function ProjectModal({ closeModal, projectName, projectImage, projectDescription, stackUsed }) {
  var test = stackUsed.map(p => p + ", ");
  return (
    <div className="modal">
      <img src={projectImage} className="projectImage" />
      <h1 className="header"> {projectName}</h1>
      <button onClick={closeModal} className="closeButton">
        &#x2715;
      </button>

      <p id="projectDescription"> {projectDescription}</p>
      <p id="stackUsed">
        <strong>Stack used:</strong> {test}
      </p>
    </div>
  );
}

export default ProjectModal;
