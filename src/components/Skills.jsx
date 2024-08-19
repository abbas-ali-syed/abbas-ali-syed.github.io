import React from 'react'
import HTML from '../assets/html.png'
import JavaScriptImg from '../assets/javascript.png'
import CSS from '../assets/css.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import ReactP from '../assets/react.png'
import Tensorflow from '../assets/tensorflow.png'
const Skills = () => {
  return (
    <div name='skills' className='bg-[#0d0220] w-full h-screen text-gray-300'>
       <div className='max-w-[1000px] mx-auto p-2 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-red-300 py-4 '>Skills</p>
              <p className=' text-gray-400 font-bold py-12'>These are some of the technologies I am familiar with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-5 text-center py-2'>
              <div className='shadow-md shadow-[#556c89] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#556c89] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#556c89] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScriptImg} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#556c89] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactP} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
            
              <div className='shadow-md shadow-[#556c89] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              
              <div className='shadow-md shadow-[#556c89] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#556c89] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tensorflow} alt="HTML icon" />
                  <p className='my-4'>Tensorflow</p>
              </div>
             
       
          </div>
      </div>
    </div>
  )
}

export default Skills
