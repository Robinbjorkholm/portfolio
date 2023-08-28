import axios from "axios";

export function getProjects() {
  return axios
    .get(process.env.REACT_APP_GETPROJECTS)
    .catch((err) => console.error(err));
}
