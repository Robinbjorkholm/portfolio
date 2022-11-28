import React, { Component, useState } from "react";
import "./ProjectSection.css";
import { getProjects } from "../../../services/getProjectsService";
import ProjectModal from "./ProjectModal";
import "../../../Section.css";

class ProjectsSection extends Component {
  state = {
    Projects: [],
    selectedModalId: null,
    isActive: false,
  };

  async componentDidMount() {
    const { data } = await getProjects();
    this.setState({ Projects: data });
    console.log(this.state.Projects);
  }
  openModal = project => {
    this.setState({ selectedModalId: project._id });
  };
  closeModal = project => {
    this.setState({ selectedModalId: null, isActive: false });
  };

  render() {
    return (
      <div>
        <div className="Section">
          <h1 id="Header">Welcome to my Projects 😀</h1>

          <ul className="Projects">
            {this.state.Projects.map(project => {
              const ShowModal = project._id === this.state.selectedModalId;
              return (
                <li
                  key={project._id}
                  className={!this.state.isActive ? "ProjectsShowcase" : "active"}
                >
                  <img
                    className="ProjectImage"
                    src={project.image}
                    alt=" of Project"
                    onClick={() => {
                      this.openModal(project);
                      this.setState({ isActive: true });
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
