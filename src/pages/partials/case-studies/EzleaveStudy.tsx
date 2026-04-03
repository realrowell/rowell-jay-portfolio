import projects from "../../../data/project.json"
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckIcon from '@mui/icons-material/Check';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import ConstructionIcon from '@mui/icons-material/Construction';
import { Link } from "react-router-dom";

export default function EzleaveStudy() {
    const ezleave = projects.find((project) => project.slug === 'ezleave')

    if (!ezleave) {
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
                        <h2>CASE STUDY: {ezleave.title || 'EZLEAVE — Web-Based Leave Management System'}</h2>
                        <p className="text-gray-600">A secure, role-based leave management platform built for a local agriculture company to support remote field employees and streamline HR workflows.</p>
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
                        <p className="fs-15">{ezleave.role}</p>
                    </div>
                    <hr className="border-gray-400 border-0.5 my-4"></hr>
                    <div className="flex flex-col w-full"> 
                        <h3 className="fs-20 font-semibold">Status</h3>
                        <p className="fs-15">{ezleave.status}</p>
                    </div>
                    <hr className="border-gray-400 border-0.5 my-4"></hr>
                    <div className="flex flex-col w-full"> 
                        <h3 className="fs-20 font-semibold">Users</h3>
                        <p className="fs-15">Admin • HR Staff • Employee (with Supervisor/Manager approval)</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 lg:px-0 md:px-5 px-5">
                <div className="flex flex-col gap-5 flex-2">
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Project Overview</h3>
                            <p className="fs-15">
                                EZLEAVE is a custom-built leave management system developed to streamline the employee leave application
                                and approval workflow for Bioseed Research Philippines. This web-based system provides a structured and
                                transparent leave processing experience for employees, supervisors, and HR staff.
                            </p>
                        </div>
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Objectives</h3>
                            <ul className="list-disc ps-5">
                                <li>Centralize and digitize leave applications </li>
                                <li>Automate approval workflows </li>
                                <li>Improve accuracy of leave tracking </li>
                                <li>Provide HR with efficient monitoring and reporting tools</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Solution Overview</h3>
                            <p className="fs-15">
                                The system provides an online leave application process, role-based approval workflows, HR management tools, Leave balance management,
                                and real-time leave records accessible through a web interface
                            </p>
                        </div>
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Key Features</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div className="border border-neutral-200 shadow p-5 flex flex-row gap-3 items-start rounded-lg"> 
                                    <div className="text-center bg-gray-500 p-1 rounded">
                                        <DashboardIcon className="text-white" sx={{ fontSize: 30}}/>
                                    </div>
                                    <div className="flex flex-col"> 
                                        <h4 className="fs-15 font-semibold text-start">Employee Portal</h4>
                                        <p className="fs-15">Apply for leave, view leave balance and history</p>
                                    </div>
                                </div>
                                <div className="border border-neutral-200 shadow p-5 flex flex-row gap-3 items-start rounded-lg"> 
                                    <div className="text-center bg-green-600 p-1 rounded">
                                        <CheckIcon className="text-white" sx={{ fontSize: 30}}/>
                                    </div>
                                    <div className="flex flex-col"> 
                                        <h4 className="fs-15 font-semibold text-start">Approval Dashboard</h4>
                                        <p className="fs-15">Manager & supervisor approval flows with notifications</p>
                                    </div>
                                </div>
                                <div className="border border-neutral-200 shadow p-5 flex flex-row gap-3 items-start rounded-lg"> 
                                    <div className="text-center bg-gray-600 p-1 rounded">
                                        <ConstructionIcon className="text-white" sx={{ fontSize: 30}}/>
                                    </div>
                                    <div className="flex flex-col"> 
                                        <h4 className="fs-15 font-semibold text-start">HR and Admin Tools</h4>
                                        <p className="fs-15">Policy Mgmt, Leave Balance Mgmt, Leave Application Tacking, Employee & User Mgmt, Reporting</p>
                                    </div>
                                </div>
                                <div className="border border-neutral-200 shadow p-5 flex flex-row gap-3 items-start rounded-lg">
                                    <div className="text-center bg-orange-400 p-1 rounded">
                                        <LockOutlineIcon className="text-white" sx={{ fontSize: 30}}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="fs-15 font-semibold text-start">Security & Scale</h4>
                                        <p className="fs-15">Laravel-based architecture for secure, scalable growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">System Workflow</h3>
                            <p className="fs-15">
                                <span className="font-semibold">Employee</span> → Submit leave request → <span className="font-semibold">Supervisor/Manager</span> → Approve/Reject → System updates leave balances → <span className="font-semibold">HR</span> → Monitor & log.
                            </p>
                        </div> 
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Challenges & Solutions</h3>
                            <ul className="list-disc ps-5">
                                <li><span className="font-semibold">Field employees with intermittent access</span> — Made UI lightweight and mobile-friendly.</li>
                                <li><span className="font-semibold">Varying approval chains</span> — Implemented per employee approval workflow.</li>
                                <li><span className="font-semibold">Avoiding Weekend, Holiday, and before and after Fiscal Year dates</span> — Client + server validation with conflict-check rules.</li> 
                            </ul>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col gap-5 flex-1">
                    <div className="flex flex-col border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Tech-stack</h3>
                            <p className="fs-15">{ezleave.tags.join(' • ')}</p>
                        </div>
                        <hr className="border-gray-400 border-0.5 my-4"></hr>
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">UI Notes</h3>
                            <p className="fs-15">
                                Initial UI used Bootstrap defaults. Redesigned to rounded, material-like components to improve clarity and visual hierarchy.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">Outcome and Impact</h3>
                            <ul className="list-disc ps-5">
                                <li>Reduced leave processing time</li>
                                <li>Reduced HR workload</li>
                                <li>Enhanced transparency between employee and HR </li>
                                <li>Eliminated paperwork and record loss</li> 
                                <li>Increase trust between the company and the employees</li>
                            </ul>
                        </div> 
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-400 text-start p-5">
                        <div className="flex-col">
                            <h3 className="fs-20 font-semibold">What I Learned</h3>
                            <ul className="list-disc ps-5">
                                <li>Designing real corporate workflow systems</li>
                                <li>UI/UX iteration based on user feedback and pain points</li>
                                <li>Responsive UI with the use of jQuery and JavaScript</li>
                                <li>Role-based authorization in Laravel </li>
                                <li>The importance of a proper and efficient Database Design</li>
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
                    {ezleave.featuredImages?.map((image,index) => ( 
                        <img key={index} className='w-full h-auto aspect-video object-cover' src={image} alt={"ezleave_image_"+index} />
                    ))} 
                </div>
            </div>
        </div>
    </>
}