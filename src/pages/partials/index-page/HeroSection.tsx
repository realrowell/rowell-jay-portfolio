import { Link } from 'react-router-dom' 

export default function HeroSection() {
  return <>
    <style>
      {`
        .bg-grid{
          margin: 0;
          padding: 0;
          
          width: 100%;
          height: 100vh;
        
          background: #fff;
          background-image: linear-gradient(rgba(0, 0, 0, .2) .05em, transparent .1em), linear-gradient(90deg, rgba(0, 0, 0, .2) .05em, transparent .1em);
          background-size: 2em 2em;
        }
      `}
    </style>
    <div className="flex flex-col md:flex-row md:h-full h-full gap-3 bg-grid mb-10">
      <div className="flex flex-col flex-1 justify-center items-start gap-10 md:px-10 px-5 md:h-full min-h-100">
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-(--primary-color) m-0 font-semibold">Hi, I'm Rowell Jay!</h1> 
          <h2 className='font-normal'>a Full-stack Web Developer</h2>
        </div>
        <div className="flex flex-col items-start gap-5 text-start">
          <Link to={'#projects'} >
            <button className="relative inline-block font-medium group py-4 px-5 hover:cursor-pointer">
              <span className="absolute inset-0 w-full h-full transition duration-400 ease-out transform translate-x-1 translate-y-1 bg-(--bg-shadow-color) group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-(--primary-color) group-hover:bg-(--primary-color)"></span>
              <span className="relative text-white fs-25">View my work</span>
            </button> 
          </Link>
          <p>From concept to code, I deliver robust and intuitive web solutions that drive results.</p>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <img className="h-full object-cover ... md:aspect-auto aspect-video" src="/images/portrait-01.jpg" />
      </div>
    </div>
  </>
}