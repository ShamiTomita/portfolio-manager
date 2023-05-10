import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  console.log("OK")
  useEffect(() => {
    //In this useEffect hook, we are making the fetch request to the Rails API
    const url = "/project/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setProjects(res))
      .catch(() => navigate("/"));
  }, []);

  const allProjects = projects.map((project, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img
          src={project.image_url}
          className="card-img-top"
          alt={`${project.title} image`}
        />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <Link to={`/project/${project.id}`} className="btn custom-button">
            View Project
          </Link>
        </div>
      </div>
    </div>
  ));
  const noProject = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No projects yet. Why not <Link to="/new_project">create one</Link>
      </h4>
    </div>
  );

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    image_url: "",
    links: ""
  })

  const handleSubmit = () => {
    e.preventDefault()
    console.log(newProject)
  }

  return (
    <div id="projects "className="projects">
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Projects</h1>
          <p className="lead text-muted">
            List of Projects I have been involed with
          </p>
        </div>
      </section>
      <div className="py-5">
        <section className="container">
          <div className="text-end mb-3">
            <Link to="/project" className="btn custom-button">
              Create New Project
            </Link>
          </div>
          <form action="" onSubmit={handleSubmit}>
            <h2>Add New Project</h2>
            <label htmlFor="">Project Title</label>
            <input type="text" value={newProject.title} onChange={(e) => setNewProject({title: e.target.value })}/>
            <label htmlFor="">Project Description</label>
            <input type="text" value={newProject.description} onChange={(e) => setNewProject({description: e.target.value })}/>
            <label htmlFor="">Project Image URL</label>
            <input type="text" value={newProject.image_url} onChange={(e) => setNewProject({image_url: e.target.value})}/>
            <label htmlFor="">Project Link</label>
            <input type="text" value={newProject.links} onChange={(e) => setNewProject({links: e.target.value})}/>
            <button type="submit">Submit</button>
          </form>
          <div className="row">
            {projects.length > 0 ? allProjects : noProject}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Projects;