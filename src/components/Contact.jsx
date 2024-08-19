import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="bg-[#0d0220] w-full h-screen flex justify-center items-center py-8">
        <form method='POST' action="https://getform.io/f/akkgrjra" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-300 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-8 font-bold'>Submit the form below or shoot me an email - 21ucc004@lnmiit.ac.in</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-red-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
