import axios from "axios";

export function getProjects() {
  return axios.get("http://localhost:3001/projects").catch(err => console.error(err));
}
