// import CtaButton from '../../../components/ui/CtaButton'
import { useState} from "react";  


export default function AboutSection(){
    const [resumeIsOpen, resumeSetIsOpen] = useState(false); 
    // useEffect(() => {
    //     if (resumeIsOpen) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "auto";
    //     }

    //     // cleanup when component unmounts
    //     return () => {
    //         document.body.style.overflow = "auto";
    //     };
    // }, [resumeIsOpen]);

    return <>
        <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-10 flex-1 text-start pt-10 pb-10 p-5">
                <div className="flex flex-col gap-5">
                    <h2 className="text-(--primary-color) m-0 font-semibold">About Me</h2>
                    <h3 className="m-0">
                        From Concept to Deployment: Providing End-to-End Web Solutions
                    </h3>
                </div>
                <div className="flex flex-col gap-5">
                    <p className="">
                        With a BS in Information Technology and three years spent deep in the development of full-stack applications, I specialize in creating tools that work. I’ve successfully delivered four distinct systems, each designed to solve specific operational hurdles. 
                    </p>
                    <p>
                        My experience isn't just about the 'build'—it's about the 'sustain.' Having managed and maintained web environments for past collaborators, I understand that a true solution isn't finished at launch; it's an evolving asset. If there is a bottleneck in a workflow, I build the bridge to cross it.
                    </p>
                    <div className="flex flex-row"> 
                        <button className="relative inline-block font-medium group py-2 px-5 hover:cursor-pointer" onClick={() => resumeSetIsOpen(true)}>
                            <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-(--bg-shadow-color) group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-(--primary-color) group-hover:bg-(--primary-color)"></span>
                            <span className="relative text-white fs-20">View Resume</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 flex-1 bg-(--secondary-light-color) pt-10 pb-10 text-start p-5">
                <table className="border-separate border-spacing-5 table-auto">
                    <thead>
                        <tr>
                            <th className='text-start'>Domain</th>
                            <th className='text-start'>Focus Areas</th> 
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='align-text-top'>Front-End</td>
                            <td>
                                Responsive Design, Interactive UI, State Management
                            </td> 
                        </tr>
                        <tr>
                            <td className='align-text-top'>Back-End</td>
                            <td>
                                Server-Side Logic, API Design, Security Protocols
                            </td> 
                        </tr>
                        <tr>
                            <td className='align-text-top'>Database</td>
                            <td>
                                Schema Architecture, Query Optimization, Data Migration
                            </td> 
                        </tr>
                        <tr>
                            <td className='align-text-top'>Maintenance</td>
                            <td>
                                Environment Management, Debugging, Deployment
                            </td> 
                        </tr>
                    </tbody>
                </table>
                <img className="h-full object-cover ..." src="/images/portrait-02.jpg" />
            </div>
            <div className="flex flex-col gap-10 flex-1 pt-10 pb-10 p-5 text-start">
                <h3>How I Solve Problems</h3>
                <ul className='flex flex-col gap-5'>
                    <li>
                        <span className='font-semibold'>End-to-End System Architecture</span>
                        <p>
                            Skilled in transforming abstract business requirements into fully functional, scalable web systems from the ground up.
                        </p>
                    </li>
                    <li>
                        <span className='font-semibold'>Full-Stack Development</span>
                        <p>
                            Expertly bridging the gap between intuitive front-end interfaces and robust, secure back-end logic to create a seamless user experience.
                        </p>
                    </li>
                    <li>
                        <span className='font-semibold'>Dynamic Problem Solving</span>
                        <p>
                            A focus on identifying workflow bottlenecks and engineering custom digital tools to streamline operations and improve efficiency.
                        </p>
                    </li>
                    <li>
                        <span className='font-semibold'>Database Design & Optimization</span>
                        <p>
                            Proficient in architecting clean, relational data structures that ensure high performance and data integrity for complex applications.
                        </p>
                    </li>
                    <li>
                        <span className='font-semibold'>System Maintenance & Stability</span>
                        <p>
                            Experienced in the long-term management of live environments. Performing regular audits, bug fixes, and performance tuning to ensure 100% uptime.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        {resumeIsOpen  && (
            <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 md:p-5 sm:p-4 p-4"
                onClick={() => resumeSetIsOpen(false)}
            >
                <div
                    className="bg-white rounded-lg p-6 shadow-lg flex flex-col gap-5 w-5xl max-w-full"
                    onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                >
                    <iframe src="/docs/resume-rowelljay.pdf" className="w-full h-[80vh]" ></iframe>
                    <div className="flex flex-col items-end">
                        <button
                            onClick={() => resumeSetIsOpen(false)}
                            className="px-4 py-2 bg-(--secondary-primary-color) text-(--primary-color) hover:bg-(--primary-color) hover:text-white rounded cursor-pointer transition-all duration-500 ease-in-out"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
}