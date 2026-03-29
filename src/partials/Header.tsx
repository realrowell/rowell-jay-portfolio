import { Link } from 'react-router-dom'

export default function Header(){
    return <>
        <header className="bg-(--primary-color) text-white p-4">
            <div className="main-container flex flex-row justify-between">
                <Link to={'/'} className="font-bold">Rowell Jay</Link>
                <div className="flex flex-row gap-5">
                    <Link to={'#about'} className=' hover:text-amber-600 transition-colors duration-100'>About</Link>
                    <Link to={'projects'}>Projects</Link>
                    <Link to={'case-study'}>Case Studies</Link>
                    <Link to={'#contact'}>Contact</Link>
                </div>
            </div> 
        </header>
    </>
}