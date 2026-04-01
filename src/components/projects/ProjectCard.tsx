import React from 'react';
import ProjectDialog from './ProjectDialog';
import type { Project } from '../../types/project';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="project-card flex flex-col bg-white shadow border border-neutral-500 min-w-80 justify-between">
            <div className="flex flex-col">
                <img className='w-full h-auto aspect-video object-cover' src={project.imageUrl || "/images/banner-placeholder.jpg"} alt={project.title} />
                <div className="flex flex-col justify-between p-5">
                    <div className="flex flex-col gap-1 h-full">
                        <h4 className='fs-20 m-0 font-semibold'>{project.title}</h4>
                        <p className='fs-15 '><span className='font-semibold'>Role: </span>{project.role}</p>
                        <p className='fs-15 '><span className='font-semibold'>Status: </span>{project.status}</p>
                        {project.impact && (
                            <p className='fs-15 leading-normal line-clamp-3'><span className='font-semibold'>Impact: </span>{project.impact}</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex flex-row pb-5 px-5"> 
                <ProjectDialog project={project}/>
            </div>
        </div>
    );
};

export default ProjectCard;