import { Outlet } from 'react-router-dom'
import ScrollToHash from '../components/common/ScrollToHash'
import Header from '../partials/Header'
import Footer from '../partials/Footer'

export default function MainLayout() {
  return (
    <> 
    <style>
        {`
          .main-container{
            width: 1600px;
            max-width: 100%;
            margin: 0 auto;
            
          } 
        `} 
    </style>
    <div className="flex flex-col min-h-screen ">
      <ScrollToHash />
      <Header />
      <main className='grow main-container '>
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  )
}


