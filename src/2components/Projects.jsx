import hero from '../assets/hero.jpg';
import RockPapperScissor from '../assets/RockPaperScisssors.png'
import NoteApp from '../assets/NoteApp.png'
import Video from '../assets/AI-Generator.mp4'
import Aipic from '../assets/AiPic.jpg'
function Projects() {
  return (   
         <section id='projects'>
     <div className='container m-auto px-4 py-12'>
     <h2 className='text-2xl font-semibold'>Projects</h2>
     <div className='flex flex-col md:flex-row gap-10 mt-11 '>
            <div className='border rounded-md p-5 border-gray-500 flex-1'>
              <img src={hero} alt="" className='w-full h-auto' />
              <h3 className='text-2xl font-semibold mt-8'>Shopping App</h3>
              <p className='text-gray-400 text-sm mt-2'>A e-commerce platform built using the MERN stack (MongoDB, Express, React, Node.js). The application includes features such as product listing, a shopping cart, and order management.</p>

              <div className='flex mt-12 gap-3'>
                <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-3xl hover:from-blue-700 hover:to-cyan-700 '><a target='_blank' href="https://shopping-app-73m6.vercel.app/">Live Preview</a></button>
                <button className='flex-1 text-sm py-3  border rounded-3xl hover:border-blue-500 hover:text-blue-500'><a target='_blank' href="https://github.com/Thanh280124/Shopping-App">View Github</a></button>
              </div>
            </div>
            <div className='border rounded-md p-5 border-gray-500 flex-1'>
              <img src={Aipic} alt="" className='w-full h-[280px] xl:h-[550px]' />
              <h3 className='text-2xl font-semibold mt-8'>AI-Video-Generator</h3>
              <p className='text-gray-400 text-sm mt-2'>A mobile application developed using React Native and TypeScript. This app leverages Appwrite for user account management and facilitates video uploads and image storage. It allows users to generate videos using AI and manage their multimedia content seamlessly.</p>

              <div className='flex  mt-12 gap-3'>
                <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-3xl hover:from-blue-700 hover:to-cyan-700 '><a target='_blank' href={Video}>Live Preview</a></button>
                <button className='flex-1 text-sm py-3  border rounded-3xl hover:border-blue-500 hover:text-blue-500'><a target='_blank' href="https://github.com/Thanh280124/AI-Video-Generater">View Github</a></button>
              </div>
            </div>
          </div>

          <div className='flex flex-col md:flex-row gap-10 mt-11  '>
            <div className='border rounded-md p-5 border-gray-500 flex-1'>
              <img src={NoteApp} alt="" className='w-full h-[300px]' />
              <h3 className='text-2xl font-semibold mt-8'>Note App</h3>
              <p className='text-gray-400 text-sm mt-2'>An application designed for users to take and manage notes efficiently. With a clean and user-friendly layout, this app allows users to add, edit, and delete notes. Developed using HTML, JavaScript, and CSS.</p>

              <div className='flex  mt-12 gap-3'>
                <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-3xl hover:from-blue-700 hover:to-cyan-700 '><a target='_blank' href="https://thanh280124.github.io/NoteApp/">Live Preview</a></button>
                <button className='flex-1 text-sm py-3  border rounded-3xl hover:border-blue-500 hover:text-blue-500'><a target='_blank' href="https://github.com/Thanh280124/NoteApp">View Github</a></button>
              </div>
            </div>
            <div className='border rounded-md p-5 border-gray-500 flex-1'>
              <img src={RockPapperScissor} alt="" className='w-full h-[320px]' />
              <h3 className='text-2xl font-semibold mt-8'>Rock Paper Sisscors</h3>
              <p className='text-gray-400 text-sm mt-2'>A classic game where players choose between rock, paper, or scissors, and the outcome is determined based on standard game rules. Built with HTML, JavaScript, and CSS</p>

              <div className='flex mt-12 gap-3'>
                <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-3xl hover:from-blue-700 hover:to-cyan-700 '><a target='_blank' href="https://thanh280124.github.io/RockPaperSiscor/">Live Preview</a></button>
                <button className='flex-1 text-sm py-3  border rounded-3xl hover:border-blue-500 hover:text-blue-500'><a target='_blank' href="https://github.com/Thanh280124/RockPaperSiscor.git">View Github</a></button>
              </div>
            </div>
            
          </div>
     </div>
    </section>
  
  )
}

export default Projects
