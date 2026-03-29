// import { Link } from 'react-router-dom' 
import HeroSection from './partials/index-page/HeroSection'
import AboutSection from './partials/index-page/AboutSection'
import ProjectsSection from './partials/index-page/ProjectsSection'

export default function IndexPage() {
  return <>
    <HeroSection /> 
    <AboutSection/>
    <ProjectsSection/>
  </>
}