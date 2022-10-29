import React, { Component } from "react";
import "../../Section.css";
import { getProjects } from "../../services/getProjectsService";
import axios from "axios";

class ProjectsSection extends Component {
  state = {
    Projects: [],
  };

  getTodos() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  componentDidMount = () => {
    this.getTodos();
  };
  render() {
    return (
      <div className="Section" id="Projects">
        <h1>Welcome to my Projects 😀</h1>
      </div>
    );
  }
}

export default ProjectsSection;
