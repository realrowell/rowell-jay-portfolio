import ProjectCard from "../../../components/projects/ProjectCard"
import projects from "../../../data/project.json"

export default function ProjectsSection(){
    return <>
        <div className="flex flex-col gap-10 text-start align-start p-5 bg-(--secondary-primary-color) pt-10 pb-10">
            <div className="flex flex-col text-start">
                <h2 className="text-(--primary-color) m-0 font-semibold">Engineered Systems</h2>
                <h3>Portfolio Highlights</h3>
            </div>
            <div className="overflow-x-auto"> 
                <div className="md:grid md:grid-cols-4 flex flex-row gap-3">
                    {projects.map((project) => ( 
                        <ProjectCard 
                            title={project.title} 
                            image={project.imageUrl || "/images/banner-placeholder.jpg"}
                            role={project.role}
                            status={project.status}
                            impact={project.impact}
                        /> 
                    ))}
                </div>
            </div>
        </div>
    </>
}