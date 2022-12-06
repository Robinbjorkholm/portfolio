import React, { Component } from "react";
import "./ProjectSection.css";
import { getProjects } from "../../../services/getProjectsService";
import ProjectModal from "./ProjectModal";
import { motion } from "framer-motion";

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
    console.log(this.state.Projects);
    return (
      <div>
        <div className="Section">
          <motion.h1 id="projectsHeader">Projects </motion.h1>

          <ul className="Projects">
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
        </div>
      </div>
    );
  }
}

export default ProjectsSection;
