import { useState } from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import type { Project } from '../../types/project';
import Carousel from './Carousel';
import { Link } from 'react-router-dom';

interface ProjectDialogProps {
    project: Project;
}

export default function ProjectDialog({ project }: ProjectDialogProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className='bg-(--primary-color) text-white px-3 py-2 hover:cursor-pointer'
            >
                Know more 
                <TrendingFlatIcon/>
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
                    <div className="bg-white border border-black shadow-lg max-w-5xl w-full mx-4">
                        <div className="flex flex-col p-6">
                            <div className="flex flex-col gap-1">
                                <Carousel items={project.featuredImages || ["/images/banner-placeholder.jpg"]} />
                                <h2 className="fs-25 font-semibold ">{project.title}</h2> 
                                <div className="flex flex-row gap-3">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="fs-12 px-2 bg-(--secondary-primary-color) text-(--primary-color) rounded border border-(--primary-color)">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {project.description && (
                                    <p className='fs-15 leading-normal'><span className='font-semibold'>Description: </span>{project.description}</p>
                                )}
                                <p className='fs-15 '><span className='font-semibold'>Role: </span>{project.role}</p>
                                <p className='fs-15 '><span className='font-semibold'>Status: </span>{project.status}</p>
                                {project.impact && (
                                    <p className='fs-15 leading-normal'><span className='font-semibold'>Impact: </span>{project.impact}</p>
                                )}
                            </div>
                            <div className="flex gap-3 justify-end">
                                {/* <button
                                    onClick={() => setIsOpen(false)}
                                    className="fs-15 px-3 py-1 text-gray-700 bg-gray-100 border border-black hover:bg-gray-200 hover:cursor-pointer transition-colors"
                                >
                                    Cancel
                                </button> */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="fs-15 px-3 py-1 bg-(--secondary-primary-color) text-(--primary-color) border border-(--primary-color) hover:text-white hover:bg-(--primary-color) hover:cursor-pointer transition-colors"
                                >
                                    Close
                                </button>
                                {project.studyUrl && ( 
                                    <Link to={project.studyUrl || "#"} rel="noopener noreferrer">
                                        <button className='fs-15 px-3 py-1 bg-(--primary-color) text-white border border-(--primary-color) hover:bg-blue-700 hover:cursor-pointer transition-colors'>
                                            Case Study
                                        </button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}