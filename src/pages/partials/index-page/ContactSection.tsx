import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function ContactSection(){
    return <>
        <div id="contact" className="flex flex-col gap-10 px-5 py-10">
            <div className="flex flex-col text-start">
                <h2 className="text-(--primary-color) m-0 font-semibold">Let’s create something amazing together</h2>
                <h3 className="m-0">Contact me here</h3>
            </div>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col md:w-2/4 sm:w-full w-full">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnLplazmnAHTsbcrgWJDIT5YkWZ3vtJs54Hw1vtLCJgXQDog/viewform?embedded=true" width="auto" height="900" >Loading…</iframe>
                </div> 
                <div className="flex flex-col gap-10">
                    <h4 className="fs-35">Get in touch</h4>
                    <div className="flex flex-col gap-5 items-start">
                        <div className="flex flex-row gap-3 justify-center items-center">
                            <LinkedInIcon className="font-2xl" sx={{ fontSize: 50}} />
                            <div className="flex flex-col text-start">
                                <h5 className="fs-20 md:fs-25 m-0 font-semibold">LinkedIn</h5>
                                <a href="https://www.linkedin.com/in/rowell-jay-real-9a6293213/" className="fs-15 md:fs-18 m-0" target="_blank" rel="noopener noreferrer">
                                    Connect with me on LinkedIn
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 justify-center items-center">
                            <GitHubIcon className="font-2xl" sx={{ fontSize: 50}} />
                            <div className="flex flex-col text-start">
                                <h5 className="fs-20 md:fs-25 m-0 font-semibold">GitHub</h5>
                                <a href="https://github.com/realrowell" className="fs-15 md:fs-18 m-0" target="_blank" rel="noopener noreferrer">
                                    Check out my projects on GitHub
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-row gap-3 justify-center items-center">
                            <EmailIcon className="font-2xl" sx={{ fontSize: 50}} />
                            <div className="flex flex-col text-start">
                                <h5 className="fs-20 md:fs-25 m-0 font-semibold">Email</h5>
                                <a href="mailto:realrowell@gmail.com" className="fs-15 md:fs-18 m-0" target="_blank" rel="noopener noreferrer">
                                    Send me an email at realrowell@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}