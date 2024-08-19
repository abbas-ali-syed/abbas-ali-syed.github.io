import React from 'react'
import { Link } from 'react-scroll'
import { HiArrowNarrowRight } from 'react-icons/hi'
const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0d0220]">
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
         <p className='text-red-300 text-3xl text-transparent font-bold bg-clip-text bg-gradient-to-r from-red-300 to-purple-800'>Hi, my name is</p>
         <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Syed Abbas</h1>
         <h2 className='text-4xl sm:text-5xl font-bold text-[#9097ae]'>I'm a full-stack developer</h2>
         <p className='text-[#9097ae] py-4 max-w-[600px]'> I am a Final-year student with a strong interest in software development and machine learning. My career objectives involve developing
 expertise in these areas and using my skills to solve real world problems. I am open to pursuing advanced education in these fields, to
 continuously deepen my knowledge and skills and to stay at the forefront of the field</p>
      <div><button className='text-slate-100 rounded-lg group border-2  px-6 py-3 my-1 flex items-center hover:bg-gradient-to-r from-red-300 to-purple-800 hover:font-bold '> <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        <span className='group-hover:rotate-90 duration-500'><HiArrowNarrowRight className='ml-1' /></span>
        </button></div>
      </div>
    </div>
  )
}

export default Home
