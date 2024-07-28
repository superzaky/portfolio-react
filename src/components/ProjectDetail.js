import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/projects.json'; // Adjust the path as necessary

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData.find(proj => proj._id.$oid === id);

    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <div className="container">
            <h1>{project.name}</h1>
            <img src={project.images[0]?.link} alt={project.name} />
            <p>{project.content}</p>
            {/* You can add more details here */}
        </div>
    );
};

export default ProjectDetail;
