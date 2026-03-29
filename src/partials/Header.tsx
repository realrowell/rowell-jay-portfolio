import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'


export default function Header(){
    const [isOpen, setIsOpen] = useState(false)

    // const closeMenu = () => setIsOpen(false)

    return <>
        <header className="bg-(--primary-color) text-white p-4">
            <div className="main-container flex flex-row justify-between">
                <Link to={'/'} className="font-bold">Rowell Jay</Link>
                <div className="hidden md:flex flex-row gap-10">  
                    <Link to={'#about'} className="group relative w-max">
                        <span>About</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                    </Link>
                    <Link to={'projects'} className="group relative w-max">
                        <span>Projects</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                    </Link>
                    <Link to={'case-study'} className="group relative w-max">
                        <span>Case Studies</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                    </Link>
                    <Link to={'#contact'} className="group relative w-max">
                        <span>Contact</span>
                        <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                    </Link>
                </div>
                <button
                    type="button"
                    className="md:hidden"
                    onClick={() => setIsOpen((open) => !open)}
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}
                    >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
            </div> 
            {isOpen && (
                <div className="absolute left-0 right-0 z-50 border-b border-neutral-200 bg-(--primary-color) shadow-md md:hidden">
                    <nav className="flex flex-col px-4 py-5 gap-5 items-center"> 
                        <Link to={'#about'} className="group relative w-max">
                            <span>About</span>
                            <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </Link>
                        <Link to={'projects'} className="group relative w-max">
                            <span>Projects</span>
                            <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </Link>
                        <Link to={'case-study'} className="group relative w-max">
                            <span>Case Studies</span>
                            <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </Link>
                        <Link to={'#contact'} className="group relative w-max">
                            <span>Contact</span>
                            <span className="absolute -bottom-1 right-0 w-0 transition-all h-0.5 bg-white group-hover:w-full"></span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    </>
}