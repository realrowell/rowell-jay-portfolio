export default function SkillsSection() {
    return <>
        <style>
            {`
                table{
                    tr {
                        &:nth-child(odd) {
                            background-color: var(--secondary-light-color);
                        } 
                    }
                    th {
                        text-align: left;
                        font-weight: 600;
                        padding: 10px 20px; 
                    }
                    td {
                        text-align: left;
                        padding: 10px 20px; 
                    }
                }
            `}
        </style>
        <div id="skills" className="flex flex-col gap-10 align-start p-5">
            <div className="flex flex-col text-start">
                <h2 className="text-(--primary-color) m-0 font-semibold">My Toolkit</h2>
                <h3 className="m-0">The languages, frameworks, and infrastructure I leverage to build end-to-end digital solutions.</h3>
            </div>
            <div className="relative overflow-x-auto">
                <table className="table-fixed md:table-auto w-100 md:w-full"> 
                    <tbody>
                        <tr>
                            <th>Development (Full-Stack)</th>
                            <td>Laravel, PHP, HTML, CSS, JavaScript, jQuery, Bootstrap, WordPress, React, Tailwind CSS, Typescript, Vue</td> 
                        </tr>
                        <tr>
                            <th>Database & Storage</th> 
                            <td>MySQL</td> 
                        </tr>
                        <tr>
                            <th>Design</th> 
                            <td>Figma, Adobe XD, Photoshop, Illustrator</td> 
                        </tr>
                        <tr>
                            <th>Tools & DevOps</th> 
                            <td>Git, GitHub, VS Code, aaPanel, cPanel, CloudFlare, GoDaddy, z.com, Linux</td> 
                        </tr>
                        <tr>
                            <th>Infrastructure & Networking</th> 
                            <td>Office Network Installation, Router Configuration, Firewall Management, LAN/WAN, Printer Server Configuration, File Server Configuration</td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
}