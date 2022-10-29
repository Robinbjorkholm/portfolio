import axios from "axios";

export function getProjects() {
  return axios
    .get("http://localhost:3001/projects")
    .then(() => {
      console.log("get projects api endpoint called");
    })
    .catch(() => {
      console.log("get projects error ");
    });
}
