import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail}from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import{Link} from 'react-scroll'
import resume from '../assets/Abbas1.pdf'
const Navbar = () => {
    const [nav,setNav]=useState(false)
    const handleClick=()=>setNav(!nav)
  return (
     <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0d0220] text-gray-400">
      <div className='w-[200px]'>
       
      </div>

     {/*menu*/}
      <div>
        <div>

        </div>
        <ul className="hidden md:flex ">
            <li> <Link to='home' smooth={true} duration={500}>
            Home
          </Link></li>
            <li> <Link to='about' smooth={true} duration={500}>
            About me
          </Link></li>
            <li> <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
            <li> <Link to='project' smooth={true} duration={500}>
            Projects
          </Link></li>
            <li> <Link to='contact' smooth={true} duration={500}>
            Contact Me
          </Link></li>
        </ul>
      </div>
      {/*hamburger*/}
      <div onClick={handleClick}className="md:hidden z-10">
        { !nav ? <FaBars />: <FaTimes />}
      </div>
      {/*mobile menu*/}
      <ul  className={!nav ? "hidden": "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center  bg-[#0d0220] opacity-95"}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About me
          </Link></li>
            <li className='py-6 text-4xl' ><Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='project' smooth={true} duration={500}>
            Projects
          </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact me
          </Link></li>
        </ul>
        {/*social icons*/}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'> <a  className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/abbas-syed-57376122b/"target="_blank"> LinkedIn <FaLinkedin size={30} /></a></li>
                <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-800'> <a  className='flex justify-between items-center w-full text-gray-300' href="https://github.com/abbas-ali-syed" target="_blank"> GitHub <FaGithub size={30} /></a></li>
                <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#338a6f]'> <Link text-white-300 to='contact' smooth={true} duration={500}>Email</Link> <HiOutlineMail size={30} /></li>
                <li className='w-[180px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-slate-600'> <a  className='flex justify-between items-center w-full text-gray-300' href={resume} download='resume'> Resume <BsFillPersonLinesFill size={30} /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
