import { FaBeer } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCloseFullscreen } from "react-icons/md";
import { useState } from 'react';
const Nav = () => {
  const [toggle,setToggle] = useState(false);

  function openMenu(){
      setToggle(true);
  }

  function closeMenu(){
    setToggle(false);
  }


  return (
    <>
    <div className="flex iteams-center justify-between p-10 lg:flex-row">

      <div>
      <a href="#" className="text-white font-mono text-3xl tracking-wider flex items-center"><FaBeer/>Autocode</a>
      </div>
    
      <div className="space-x-4">
       <div className='ssm:hidden lg:block space-x-2'>
       <a href="#" className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Skills</a>
        <a href="#"  className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Projects</a>
        <a href="#"  className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl">Testimonials</a>
       </div>
       
       <div className='ssm:block lg:hidden'>
        {toggle ? (
           <MdCloseFullscreen onClick={closeMenu} size={30} className='text-white' />
        ):(<GiHamburgerMenu onClick={openMenu} size={30} className='text-white' />) }
      
       </div>
      </div>
    </div>

    <div className='ssm:block lg:hidden'>
      {toggle ?(<div className='flex justify-between ml-10'>
        <ul>
          <li className='text-white text-xl mb-2 cursor-pointer'>Skills</li>
          <li className='text-white text-xl mb-2 cursor-pointer'>Projects</li>
          <li className='text-white text-xl mb-2 cursor-pointer'>Testimonials</li>
        </ul>
      </div>):(
        <div></div>
      )}
      
    </div>
    </>
  
  )
}

export default Nav
