import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import IndexPage from '../pages/IndexPage'
import ProjectsPage from '../pages/ProjectsPage'
import CaseStudyPage from '../pages/CaseStudyPage'
import NotFoundPage from '../pages/NotFoundPage'

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
])
