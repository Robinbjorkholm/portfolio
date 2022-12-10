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
      <div>
        <div className="Section" id="Projects">
          <motion.h1 id="projectsHeader">Projects </motion.h1>
          {!this.state.Projects ? (
            <ul className="ProjectsDisplay">
              {this.state.Projects.map(project => {
                const ShowModal = project._id === this.state.selectedModalId;

                return (
                  <li key={project._id} className={!ShowModal ? "ProjectsShowcase" : "active"}>
                    <img
                      className="ProjectImage"
                      src={project.image}
                      alt=" of Project"
                      onClick={() => {
                        this.openModal(project);
                      }}
                    />
                    <button
                      className="ProjectLiveVersionButton"
                      disabled={!project.liveVersion}
                      onClick={() => window.open(project.liveVersion)}
                    >
                      Live version
                    </button>
                    <button className="ProjectCodeButton" onClick={() => window.open(project.Code)}>
                      Code
                    </button>

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
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="errorBox">
              {" "}
              <div id="errorHeader">
                <p id="errorWebPage">Message from Webpage</p>{" "}
              </div>
              <div id="errorInfo">
                <img id="warning" src={warningsign} alt="warning symbol" />
                <p id="errorMessage">
                  An unexpected error occurred. Please try again. If the problem continues, contact
                  the person who manages your server.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
