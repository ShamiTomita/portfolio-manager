import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useNav } from '../../custonHooks/useNav'
import './Projects.css'
const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const projectsRef = useNav('Projects')

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
      <div ref={projectsRef} className='projects' id='projects'>
        <div className='container'>
          <div className='col-2'>
            <h2>Projects</h2>
            <span className='line'></span>
            <p>Projects!</p>
            <button className='button'>Explore More</button>
          </div>
        </div>
      </div>
    )
  }

export default Projects;