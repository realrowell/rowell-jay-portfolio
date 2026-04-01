import { Link } from "react-router-dom"
import CaseStudyCard from "../../../components/projects/CaseStudyCard"

const caseStudies = [
    {
        title: "EZLEAVE — Web-Based Leave Management System",
        url: "/case-studies/ezleave",
        image: "images/projects/lms-001.png"
    }, 
]

export default function CaseStudiesSection(){
    return <>
        <div id="case-studies" className="flex flex-col gap-10 px-5 py-10 bg-(--secondary-light-color)">
            <div className="flex flex-col text-start">
                <h2 className="text-(--primary-color) m-0 font-semibold">Case Study</h2>
                <h3 className="m-0">Solving for the user: A technical breakdown.</h3>
            </div>
            <div className="overflow-auto">
                <div className="flex flex-row md:grid md:grid-cols-5 gap-3">  
                    {caseStudies.map((caseStudy) => (
                        <Link to={caseStudy.url || "#"} key={caseStudy.title}>
                            <CaseStudyCard title={caseStudy.title} image={caseStudy.image}/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </>
}