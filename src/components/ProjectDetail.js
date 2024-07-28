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
            <div class="row">
                <div class="col-lg-12">
                    <h1 className="page-header">{project.name}</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    {project.images && project.images.length > 0 && (
                        <img className="img-fluid project-equal-height mx-auto" src={project.images[0].link} alt={project.name} />
                    )}
                </div>

                <div class="col-md-4">
                    <h3>Project description</h3>
                    <div className="project-content" dangerouslySetInnerHTML={{ __html: project.content }} />
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
