import projects from "../../../data/project.json" 
import { Link } from "react-router-dom";

export default function EzleaveStudy() {
    const project = projects.find((project) => project.slug === 'office-network-installation')

    if (!project) {
        return <div>Project not found.</div>
    }

    return <>
        <style>
            {`
                .case-study-container {
                    max-width: 1200px;
                    margin-left: auto;
                    margin-right: auto;
                }
                li{
                    font-size: 15px;
                }
            `}
        </style>
        <div className="case-study-container flex flex-col gap-5 mt-10">
            <div className="flex md:flex-row flex-col justify-between lg:p-5 md:p-5 p-5 gap-10 bg-(--secondary-primary-color)">
                <div className="flex flex-col text-start gap-5 flex-2 justify-between">
                    <div className="flex flex-col h-full justify-center">
                        <h2>CASE STUDY: {project.title}</h2>
                        <p className="text-gray-600">
                            {project.description}
                        </p>
                    </div>
                    <div className="flex flex-row gap-5 h-full items-center"> 
                        <Link to="#screenshots" className="px-5 py-3 fs-20 bg-(--secodary-primary-color) text-(--primary-color) border border-(--primary-color) hover:cursor-pointer hover:bg-(--primary-color) hover:text-white transition-colors duration-100">
                            View Screenshots
                        </Link> 
                    </div>
                </div>
                <div className="flex flex-col bg-white p-5 text-start border border-neutral-200 shadow rounded-xl flex-1">
                    <div className="flex flex-col w-full"> 
                        <h3 className="fs-20 font-semibold">Role</h3>
                        <p className="fs-15">{project.role}</p>
                    </div>
                    <hr className="border-gray-400 border-0.5 my-4"></hr>
                    <div className="flex flex-col w-full"> 
                        <h3 className="fs-20 font-semibold">Status</h3>
                        <p className="fs-15">{project.status}</p>
                    </div>
                    <hr className="border-gray-400 border-0.5 my-4"></hr>
                    <div className="flex flex-col w-full"> 
                        <h3 className="fs-20 font-semibold">Users</h3>
                        <p className="fs-15">Admin • Staff/Users • Guests</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 lg:px-0 md:px-5 px-5">
                <div className="flex flex-col gap-5 flex-2">
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Project Overview</h3>
                            <p className="fs-15">
                                This project involved the design and implementation of a high-performance local area network (LAN) for a professional office. The primary goal was to eliminate manual data transfers and fragmented printing by establishing a centralized environment for shared resources.
                            </p>
                        </div>
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">The Problem</h3>
                            <p className="fs-15">
                                The office relied on a "sneakernet" workflow where employees manually transferred files via USB drives or via email, and relied only on one computer to print the documents. This led to version control issues, security risks, and significant operational delays.
                            </p>
                        </div>
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Objectives</h3>
                            <ul className="list-disc ps-5">
                                <li><span className="font-semibold">Centralize File Storage: </span>Implement a dedicated server to ensure a "single source of truth" for all company documents.</li>
                                <li><span className="font-semibold">Automate Resource Sharing: </span>Enable wired network printing for all authorized staff.</li>
                                <li><span className="font-semibold">Secure Data Access: </span>Establish role-based permissions for sensitive files.</li>
                                <li><span className="font-semibold">Eliminate Downtime: </span>Replace unstable consumer-grade hardware with enterprise-level equipment.</li>
                                <li><span className="font-semibold">Cost-Efficiency & ROI: </span>Deliver a robust, enterprise-grade infrastructure within a strictly limited project budget.</li>
                                <li><span className="font-semibold">Future-Proof Security: </span>Lay the technical foundation for isolated guest connectivity without compromising internal data.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Solution Overview</h3>
                            <p className="fs-15">
                                The system architecture utilizes a structured star topology designed for maximum reliability and ease of maintenance. At the core, the TP-Link ER605 serves as the primary gateway, handling all routing and security protocols. To meet the client’s strict budget requirements while achieving the objective of centralized resource sharing, one high-performance workstation was configured to serve as a dual-role File and Print Server.
                            </p>
                            <p className="fs-15">
                                A key component of this solution was the intentional selection of the Omada ER605, which supports VLAN (Virtual Local Area Network) tagging. This ensures that as the client grows, the network can be segmented to provide secure internet access for guests while keeping the internal private network and the sensitive data completely invisible to outsiders.
                            </p>
                        </div>
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="border border-neutral-200 shadow p-5 flex flex-row gap-3 items-start rounded-lg">
                                    <div className="flex flex-col"> 
                                        <h4 className="fs-15 font-semibold text-start">Scalable Core Architecture</h4>
                                        <p className="fs-15">
                                            Use of a dedicated 8-port gigabit switch to preserve router resources and facilitate future departmental growth.
                                        </p>
                                    </div>
                                </div>
                                <div className="border border-neutral-200 shadow p-5 flex flex-row gap-3 items-start rounded-lg">  
                                    <div className="flex flex-col"> 
                                        <h4 className="fs-15 font-semibold text-start">Optimized Resource Allocation</h4>
                                        <p className="fs-15">
                                            Configured a dedicated workstation to handle concurrent file-sharing (SMB) and print-server requests, eliminating the need for expensive dedicated NAS hardware.
                                        </p>
                                    </div>
                                </div>
                                <div className="border border-neutral-200 shadow p-5 flex flex-row gap-3 items-start rounded-lg">  
                                    <div className="flex flex-col"> 
                                        <h4 className="fs-15 font-semibold text-start">Centralized Connectivity</h4>
                                        <p className="fs-15">
                                            A structured star layout ensures that if one workstation or cable fails, the rest of the network remains operational and connected to the server.
                                        </p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Infrastructure Evolution</h3>
                            <p className="fs-15">
                                Originally, the office functioned as a collection of isolated workstations with no unified communication layer. The transition involved moving away from a fragmented "sneakernet" environment toward a structured star topology.
                            </p>
                            <p className="fs-15">
                                Instead of connecting all devices directly to the router, I integrated a TP-Link TL-SG108 8-port unmanaged switch as the primary distribution layer. This strategic move ensures that the ER605 core router is not congested with local traffic, while simultaneously providing the client with four additional open ports for immediate future expansion. To maintain the project's strict budget, I reconfigured the most powerful workstation to serve a dual purpose as both a daily terminal and the network’s central File and Print Server.
                            </p>
                        </div>
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Network Workflow</h3>
                            <p className="fs-15">
                                <span className="font-semibold">Workstations Computers → TL-SG108 Switch → PC 1 (Central Server) / ER605 Gateway → Requested Resource / Internet</span>
                            </p>
                        </div> 
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Challenges & Solutions</h3>
                            <ul className="list-disc ps-5">
                                <li>
                                    <span className="font-semibold">Limited Hardware Budget: </span>Needed a server and network but had no budget for a dedicated NAS or Enterprise-grade server rack.
                                    <ul>
                                        <li>
                                            <span className="font-semibold">Solution: </span>Repurposed the most robust workstation into a secure, always-on resource hub for the entire team.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Port Exhaustion Risk: </span>Using the router alone would limit expansion and increase the CPU load on the gateway.
                                    <ul>
                                        <li>
                                            <span className="font-semibold">Solution: </span>Integrated a high-speed unmanaged switch to handle local traffic switching, keeping the ER605 focused on secure routing and internet management.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Future Expansion: </span>The client might add more workstations in the future.
                                    <ul>
                                        <li>
                                            <span className="font-semibold">Solution: </span>The star topology and available switch ports allow for "plug-and-play" expansion without disrupting the existing system architecture.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <span className="font-semibold">Potential Security Risks from Future Guests: </span>The client anticipates needing guest WiFi, which could expose the private file server to unauthorized users.
                                    <ul>
                                        <li>
                                            <span className="font-semibold">Solution: </span>Configured the ER605 Gateway to support VLAN segmentation. This allows for the future deployment of an isolated Guest Network that provides internet-only access, physically and logically separating guest traffic from the business’s internal data and shared resources.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    <div className="flex flex-col border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">My Role</h3>
                            <p className="fs-15">
                                Lead Infrastructure Specialist responsible for the full lifecycle, including hardware procurement, network topology design, server configuration, and the integration of centralized peripherals.
                            </p>
                        </div> 
                    </div>
                    <div className="flex flex-col border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Tech-stack</h3>
                            <ul className="list-disc ps-5">
                                <li><span className="font-semibold">Networking Hardware: </span>TP-Link Omada ER605 Router, TP-Link TL-SG108.</li>
                                <li><span className="font-semibold">Storage & Sharing: </span>Dedicated File Server (SMB protocol) and Printer Server.</li>
                                <li><span className="font-semibold">Infrastructure: </span>Cat6 Structured Cabling for high-speed data backbone.</li>
                                <li><span className="font-semibold">Management:  </span>TP-Link Omada ER605 (Standalone mode) for reduced hardware cost.</li>
                            </ul>
                        </div> 
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Outcome and Impact</h3>
                            <ul className="list-disc ps-5">
                                <li>
                                    <span className="font-semibold">Secure Scalability: </span>The network is now ready for the immediate implementation of secure Guest WiFi through VLAN tagging. 
                                </li>
                                <li>
                                    <span className="font-semibold">High-Value Implementation: </span>Provided the client with a 100% stable network and centralized server while staying under the original budget.
                                </li>
                                <li>
                                    <span className="font-semibold">Operational Stability: </span>Reduced the technical load on the gateway, resulting in faster internal file transfer speeds and consistent printing uptime.
                                </li>
                            </ul>
                        </div> 
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">What I Learned</h3>
                            <ul className="list-disc ps-5">
                                <li>Optimizing network traffic for high-volume file sharing.</li>
                                <li>Configuring and troubleshooting multi-user print environments.</li>
                                <li>Managing the physical and logical security of centralized office hardware.</li>
                                <li>Network segmentation at an early stage will help the admin in the future.</li> 
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
            <div id="screenshots" className="flex flex-col gap-5 w-full border border-neutral-400 p-5"> 
                <div className="flex flex-col text-start">
                    <h3 className="fs-20 font-semibold">Screenshots</h3> 
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3"> 
                    {project.featuredImages?.map((image,index) => ( 
                        <img key={index} className='w-full h-auto aspect-video object-cover' src={image} alt={"ezleave_image_"+index} />
                    ))} 
                </div>
            </div>
        </div>
    </>
}