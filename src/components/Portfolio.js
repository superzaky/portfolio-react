// import React from 'react'
import React, { useState, useEffect } from "react";
import perfil from "../react_Zaky.png";
import projectsData from './data/projects.json'; 
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
        setProjects(projectsData);
    }, []);

    return (
        <div className="block">
            <div className="header-wrapper">
                <div className="main-info" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="header-content">
                                    <h2 className="about-title"><u>Portfolio</u></h2>

                                </div>
                                <div className="header-image">
                                    <p>blalblalblalblalb</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="home_social">
                                    <h2 className="about_subtitle">IPORTFOLIO PAGE</h2>
                                    <p className="about_text">PORTFOLIO CONTENT</p>
                                    <p className="about_text">Do you have questions? Feel free to <a href="https://twitter.com/zakyhuraibi" title="zaky" target="_blank">contact</a> me.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
