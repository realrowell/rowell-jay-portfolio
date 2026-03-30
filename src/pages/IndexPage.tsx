// import { Link } from 'react-router-dom' 
import HeroSection from './partials/index-page/HeroSection'
import AboutSection from './partials/index-page/AboutSection'
import ProjectsSection from './partials/index-page/ProjectsSection'
import SkillsSection from './partials/index-page/SkillsSection'
import BannerCtaSection from './partials/index-page/BannerCtaSection'
import CaseStudiesSection from './partials/index-page/CaseStudiesSection'
import ContactSection from './partials/index-page/ContactSection'

export default function IndexPage() {
  return <>
    <HeroSection /> 
    <AboutSection/>
    <ProjectsSection/>
    <SkillsSection/>
    <BannerCtaSection/>
    <CaseStudiesSection/>
    <ContactSection/>
  </>
}