import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer(){
    return <>
        <footer className="bg-(--primary-color) p-5 mt-8">
            <div className="main-container flex flex-col gap-5 text-start py-5">
                <div className="flex flex-col">
                    <h3 className="text-white fs-25 m-0 font-semibold">From Concept to Code: Building Your Next Big Solution.</h3>
                    <h4 className="fs-18 m-0 text-white">Ready to start? Let’s talk.</h4>
                </div>
                <div className="flex flex-row gap-5">
                    <a href="https://www.linkedin.com/in/rowell-jay-real-9a6293213/">
                        <LinkedInIcon className="font-2xl" sx={{ fontSize: 30, color: 'white'}} />
                    </a>
                    <a href="https://github.com/realrowell">
                        <GitHubIcon className="font-2xl" sx={{ fontSize: 30, color: 'white'}} />
                    </a>
                    <a href="mailto:realrowell@gmail.com">
                        <EmailIcon className="font-2xl" sx={{ fontSize: 30, color: 'white'}} />
                    </a>
                </div>
                <div className="flex flex-col">
                    <p className='text-white'>© {new Date().getFullYear()} Rowel Jay B. Real | Full-Stack Developer & IT Infrastructure Specialist.</p>
                </div>
            </div>
        </footer>
    </>
}