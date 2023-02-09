import React, { Component } from "react";
import "./ProjectSection.css";
import { getProjects } from "../../../services/getProjectsService";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";
import warningsign from "../../../pictures/warningsign.png";

class ProjectsSection extends Component {
  state = {
    Projects: [],
    selectedModalId: null,
    isActive: null,
  };

  async componentDidMount() {
    const { data } = await getProjects();
    this.setState({ Projects: data });
  }
  openModal = project => {
    this.setState({ selectedModalId: project._id, isActive: true });
  };
  closeModal = project => {
    this.setState({ selectedModalId: null, isActive: null });
  };
  
  render() {
    return (
      <div className="SectionProjects" id="Projects">
    
        <h1 className="ProjectsHeader">PROJECTS </h1>
        {this.state.Projects.length !== 0 ? (
          <ul className="ProjectsDisplay">
            {this.state.Projects.map(project => {
              const ShowModal = project._id === this.state.selectedModalId;

              return (
                <motion.li
                  key={project._id}
                  className={!ShowModal ? "ProjectsShowcase" : "active"}
                  whileHover={{ scale: !ShowModal ? 1.1 : 1 }}
                  initial={{ scale: 1 }}
                >
                  <motion.img
                    className="ProjectImage"
                    src={project.image}
                    alt="error getting image"
                    onClick={() => {
                      this.openModal(project);
                    }}
                  />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="ProjectLiveVersionButton"
                    disabled={!project.liveVersion}
                    onClick={() => window.open(project.liveVersion)}
                  >
                    Live version
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="ProjectCodeButton"
                    onClick={() => window.open(project.Code)}
                  >
                    Code
                  </motion.button>

                  {ShowModal ? (
                    <ProjectModal
                      className="modal"
                      id="test"
                      closeModal={this.closeModal}
                      projectName={project.projectName}
                      projectImage={project.image}
                      projectDescription={project.description}
                      stackUsed={project.stackUsed}
                    />
                  ) : null}
                </motion.li>
              );
            })}
          </ul>
          
        ) : (
          <div className="errorBox">
            <div id="errorHeader">
              <p id="errorWebPage">Message from Webpage</p>
            </div>
            <div id="errorInfo">
              <img id="warning" src={warningsign} alt="warning symbol" />
              <p id="errorMessage">

                Please wait a minute while i fetch stuff from the backend
            
              </p>
            </div>
          </div>
          
        )}
      </div>
    );
  }
}

export default ProjectsSection;
