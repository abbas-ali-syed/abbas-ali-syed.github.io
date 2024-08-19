import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0d0220] text-gray-300">
       <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-red-300'>
              About me
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Abbas Syed, nice to meet you. 
                Please take a look around and get to know me!</p>
            </div>
            <div>
              <p>I am a final year student at the LNM institute of technology. I am passionate about building software and machine learning applications that improve
              the lives of those around me.  My career objectives involve developing
 expertise in these areas and using my skills to solve real world problems. I am open to pursuing advanced education in these fields, to
 continuously deepen my knowledge and skills and to stay at the forefront of the field. </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
