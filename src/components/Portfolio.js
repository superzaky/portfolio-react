import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import perfil from "../react_Zaky.png";
import projectsData from '../data/projects.json';
import Pagination from "./Pagination";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [projectsPerPage] = useState(9);

    useEffect(() => {
        // Assuming projectsData is an array of project objects
        setProjects(projectsData);
    }, []);

    // pagination
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
        // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const truncateName = (name) => {
        return name.length > 24 ? name.substring(0, 24) + '...' : name;
    };

    const removeHTMLTags = (content) => {
        if (content) {
            //Content without HTML tags
            content = content.replace(/<\/?[^>]+>/gi, "");
            //make your replace global with the /g modifier on a regex, otherwise it will only replace the first instance of &amp;
            content = content.replace(/&amp;/g, '&');
            //Content trimmed to 6 characters
            content = content.substring(0, Math.min(45)) + '...';
            return content;
        }
    };

    return (
        <div className="block">
            <div className="header-wrapper">
                <div className="main-info" id="about">
                    <div className="container">
                        <div className="row">
                            {currentProjects.map(project => (
                                <div key={project._id.$oid} className="col-lg-4 col-md-6 col-sm-6 col-xs-12 project-item">
                                    <Link to={`/project/${project._id.$oid}`}>
                                        {project.images && project.images.length > 0 && (
                                            <img className="img-responsive equal-height" src={project.images[0].link} alt={project.name} />
                                        )}
                                    </Link>
                                    <h3>
                                        <Link to={`/project/${project._id.$oid}`} className="project-name">{truncateName(project.name)}</Link>
                                    </h3>
                                    <p>{removeHTMLTags(project.content)}</p>
                                    <Link to={`/project/${project._id.$oid}`} className="btn btn-primary btn-custom">More info <span className="glyphicon glyphicon-chevron-right"></span></Link>
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
};

export default Portfolio;
