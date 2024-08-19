import React from 'react'
import WorkImg from '../assets/workImg.png'
import Html from '../assets/html.png'
const Project = () => {
  return (
    <div name="project" className="w-full md:h-screen text-gray-300 bg-[#0d0220]">
        <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-300'>
            Projects
          </p>
          <p className='font-bold py-6 pb-4'>Check out some of my recent work</p>
        </div>

{/* container for projects */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          
        
  <div
    style={{ backgroundImage: `url(${WorkImg})` }}
    className="shadow-lg shadow-[#96afce] group container rounded-md flex justify-center text-center items-center mx-auto content-div"
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        Browser Extension
      </span>
      <div className="pt-8 text-center ">
       
        <a href='/' target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
      
        <a href='/' target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
    
   
    
    
  </div>



</div>
      </div>
    </div>
  )
}

export default Project
