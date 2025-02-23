import React, { useState, useEffect } from "react";
import "../styles/ProjectSection.css";

const ProjectsSection = ({ token }) => {
  const [pinnedRepos, setPinnedRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      const query = `
        {
          viewer {
            pinnedItems(first: 5) {
              edges {
                node {
                  ... on Repository {
                    id
                    name
                    owner {
                      login
                    }
                    url
                    description
                    stargazerCount
                    forkCount
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
        },
        body: JSON.stringify({ query }),
      });

      const data = await response.json();
      setPinnedRepos(data.data.viewer.pinnedItems.edges);
      setLoading(false);
    };

    fetchPinnedRepos();
  }, [token]);

  if (loading) return <p>Loading pinned repositories...</p>;

  return (
    <div>
      <h3>Pinned Repositories</h3>
      <ul>
        {pinnedRepos.map((repo) => (
          <li key={repo.node.id}>
            <a href={repo.node.url} target="_blank" rel="noopener noreferrer">
              {repo.node.name}
            </a>
            <p>{repo.node.description || 'No description available'}</p>
            <p>⭐ {repo.node.stargazerCount} Stars</p>
            <p>🍴 {repo.node.forkCount} Forks</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsSection;

/*class ProjectsSection extends Component {
  state = {
    Projects: [],
    selectedModalId: null,
    isActive: null,
  };

  constructor(props) {
    super(props);

    this.outsideRef = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  async componentDidMount() {
    const { data } = await getProjects();
    this.setState({ Projects: data });
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside(event) {
    if (this.outsideRef && !this.outsideRef.current.contains(event.target)) {
      this.setState({
        selectedModalId: null,
      });
    }
  }

  openModal = (project) => {
    this.setState({ selectedModalId: project._id, isActive: true });
  };

  closeModal = (project) => {
    this.setState({ selectedModalId: null, isActive: null });
  };

  render() {
    return (
      <div className="projects-section" id="Projects">
        <h2 className="projects-header">PROJECTS </h2>
        {this.state.Projects.length !== 0 ? (
          <ul className="display-projects-grid">
            {this.state.Projects.map((project) => {
              const ShowModal = project._id === this.state.selectedModalId;

              return (
                <motion.li
                  ref={this.outsideRef}
                  key={project._id}
                  className={!ShowModal ? "display-project-li" : "active"}
                >
                  <motion.img
                    className="project-background-image"
                    src={project.image}
                    alt="error getting image"
                    onClick={() => {
                      this.openModal(project);
                    }}
                  />
                  <motion.button
                    className="live-version-button"
                    disabled={!project.liveVersion}
                    whileHover={
                      project.liveVersion ? { scale: 1.1 } : { scale: 1 }
                    }
                    onClick={() => window.open(project.liveVersion)}
                  >
                    Live version
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="github-repository-button"
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
                Please wait a minute while i fetch stuff from the database
              </p>
            </div>
          </div>
        )}}
      </div>
    );
  }
}
*/
