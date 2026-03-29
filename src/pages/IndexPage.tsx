import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'

export default function IndexPage() {
  return <>
    <h1>Home Page</h1>
    <div className="flex flex-row gap-4"> 
        <Link to="/"><MenuIcon/>Home</Link>    
        <Link to="/projects">Projects</Link>
        <Link to="/case-study">Case Study</Link>
    </div>
  </>
}