import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

interface ProjectCardProps {
    title: string; 
    image: string;
    role?: string;
    status?: string;
    impact?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, image, role, status, impact }) => {
    return (
        <div className="project-card flex flex-col bg-white shadow border border-neutral-500 min-w-80">
            <img className='w-full h-auto aspect-video object-cover' src={image} alt={title} />
            <div className="flex flex-col justify-between p-5">
                <div className="flex flex-col gap-1">
                    <h4 className='fs-20 m-0 font-semibold'>{title}</h4>
                    <p className='fs-15 '><span className='font-semibold'>Role: </span>{role}</p>
                    <p className='fs-15 '><span className='font-semibold'>Status: </span>{status}</p>
                    <p className='fs-15 leading-normal'><span className='font-semibold'>Impact: </span>{impact}</p>
                </div>
                <div className="flex flex-row">
                    <button className='bg-(--primary-color) text-white px-3 py-2 hover:cursor-pointer'>
                        Know more 
                        <TrendingFlatIcon/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;