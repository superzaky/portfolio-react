// import React from 'react'
import React, { useState, useEffect } from "react";
import perfil from "../react_Zaky.png";
import projectsData from '../data/projects.json'; // Adjust the path as necessary
import Pagination from "./Pagination";
const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [editing, setEditing] = useState(false);
    const initialFormState = {
        _id: '',
        user: '',
        name: '',
        content: '',
        projectType: '',
        image: {
            link: ''
        },
        images: []
    };
    const [currentProject, setCurrentProject] = useState(initialFormState);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(9);

    useEffect(() => {
        // Assuming projectsData is an array of project objects
        setProjects(projectsData);
    }, []);

    // console.log('project ', projects);

    // pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

    return (
        <div className="block">
            <div className="header-wrapper">
                <div className="main-info" id="about">
                    <div className="container">
                        <div className="row">
                            {currentProjects.map(project => (
                                <div key={project._id.$oid} className="col-lg-4 col-md-6 col-sm-6 col-xs-12 project-item">
                                    
                                    <h3>
                                        <a class="project-name"> {project.name} </a>
                                    </h3>
                                    {/* <p dangerouslySetInnerHTML={{ __html: project.content }}></p>
                                            {project.images && project.images.length > 0 && (
                                                <img src={project.images[0].link} alt={project.name} />
                                            )} */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Pagination
                projectsPerPage={projectsPerPage}
                totalProjects={projects.length}
                paginate={paginate}
            />
        </div>
    );
}

export default Portfolio;
