import Project1 from '../assets/clock-pic.jpg';

function Projects() {
  return (   
         <section id='projects'>
     <div className='container m-auto px-4 py-12'>
     <h2 className='text-2xl font-semibold'>Projects</h2>
     <div className='flex flex-col md:flex-row gap-10 mt-11 '>
            <div className='border rounded-md p-5 border-gray-500 flex-1'>
              <img src={Project1} alt="" className='w-full h-auto' />
              <h3 className='text-2xl font-semibold mt-8'>Digigtal Clock</h3>
              <p className='text-gray-400 text-sm mt-2'>Digital Clock project with HTML,CSS, JavaScript responsive app</p>

              <div className='flex mt-12 gap-3'>
                <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-3xl hover:from-blue-700 hover:to-cyan-700 '>Live Preview</button>
                <button className='flex-1 text-sm py-3  border rounded-3xl hover:border-blue-500 hover:text-blue-500'>Checkout Github</button>
              </div>
            </div>
            <div className='border rounded-md p-5 border-gray-500 flex-1'>
              <img src={Project1} alt="" className='w-full h-auto' />
              <h3 className='text-2xl font-semibold mt-8'>Digigtal Clock</h3>
              <p className='text-gray-400 text-sm mt-2'>Digital Clock project with HTML,CSS, JavaScript responsive app</p>

              <div className='flex  mt-12 gap-3'>
                <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-3xl hover:from-blue-700 hover:to-cyan-700 '>Live Preview</button>
                <button className='flex-1 text-sm py-3  border rounded-3xl hover:border-blue-500 hover:text-blue-500'>Checkout Github</button>
              </div>
            </div>
          </div>

          <div className='flex gap-10 mt-11 '>
            <div className='border rounded-md p-5 border-gray-500 flex-1'>
              <img src={Project1} alt="" className='w-full h-auto' />
              <h3 className='text-2xl font-semibold mt-8'>Digigtal Clock</h3>
              <p className='text-gray-400 text-sm mt-2'>Digital Clock project with HTML,CSS, JavaScript responsive app</p>

              <div className='flex  mt-12 gap-3'>
                <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-3xl hover:from-blue-700 hover:to-cyan-700 '>Live Preview</button>
                <button className='flex-1 text-sm py-3  border rounded-3xl hover:border-blue-500 hover:text-blue-500'>Checkout Github</button>
              </div>
            </div>
            <div className='border rounded-md p-5 border-gray-500 flex-1'>
              <img src={Project1} alt="" className='w-full h-auto' />
              <h3 className='text-2xl font-semibold mt-8'>Digigtal Clock</h3>
              <p className='text-gray-400 text-sm mt-2'>Digital Clock project with HTML,CSS, JavaScript responsive app</p>

              <div className='flex  mt-12 gap-3'>
                <button className='flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 to-cyan-500 border rounded-3xl hover:from-blue-700 hover:to-cyan-700 '>Live Preview</button>
                <button className='flex-1 text-sm py-3  border rounded-3xl hover:border-blue-500 hover:text-blue-500'>Checkout Github</button>
              </div>
            </div>
          </div>
     </div>
    </section>
  
  )
}

export default Projects
