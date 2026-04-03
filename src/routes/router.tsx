import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import IndexPage from '../pages/IndexPage'
import ProjectsPage from '../pages/ProjectsPage'
import CaseStudyPage from '../pages/CaseStudyPage'
import NotFoundPage from '../pages/NotFoundPage'
import EzleaveStudy from '../pages/partials/case-studies/EzleaveStudy'
import OfficeNetworkResourceInfrastructureStudy from '../pages/partials/case-studies/NetworkInstallationStudy'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
    //   {
    //     path: 'projects/:slug',
    //     element: <CaseStudyPage />,
    //   },
      {
        path: 'case-study',
        element: <CaseStudyPage />,
      },
    ],
  },
  {
    path: '/case-studies',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      // {
      //   index: true,
      //   element: <IndexPage />,
      // },
      {
        path: 'ezleave',
        element: <EzleaveStudy />,
      },
      {
        path: 'office-network-resource-infrastructure',
        element: <OfficeNetworkResourceInfrastructureStudy />,
      },  
    ],
  },
])
