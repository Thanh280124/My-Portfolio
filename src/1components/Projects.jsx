import Prjectr1Pic from '../assets/clock-pic.jpg';
import Prjectr2Pic from '../assets/hero.jpeg'
import Prjectr3Pic from '../assets/pic.jpg'
import Prjectr4Pic from '../assets/thanhpic.jpg'

function Projects() {
  return (
   <>
   <div className='bg-indigo-800 m-20 max-2-full'>
    <div className='grid justify-items-center m-10'>
      <h1 className='text-3xl mt-10'>Project</h1>
    </div>

    <div>
      <div className='grid grid-cols-2 gap-4 p-5 xl:grid-cols-3'>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
            <div className='md:flex'>
                  <div className='p-8'>
                      <div className='text-black uppercase track-wide text-sm to-indigo-500 font-semibold'>
                        Hospital Management System
                      </div>
                      <a href="#" className='text-black'>Subheading</a>
                      <p className='text-black mt-2 text-slate-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                      </p>
                  </div>
                  <div className='md:shrink-0 p-5 '>
                    <img src={Prjectr1Pic} alt="" width={200} height={200} className=' rounded-2xl mt-4'/>
                  </div>
            </div>
          </div>

          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
            <div className='md:flex'>
                  <div className='p-8'>
                      <div className='text-black uppercase track-wide text-sm to-indigo-500 font-semibold'>
                        Hospital Management System
                      </div>
                      <a href="#" className='text-black'>Subheading</a>
                      <p className='text-black mt-2 text-slate-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                      </p>
                  </div>
                  <div className='md:shrink-0 p-5 '>
                    <img src={Prjectr2Pic} alt="" width={200} height={200} className=' rounded-2xl mt-4'/>
                  </div>
            </div>
          </div>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
            <div className='md:flex'>
                  <div className='p-8'>
                      <div className='text-black uppercase track-wide text-sm to-indigo-500 font-semibold'>
                        Hospital Management System
                      </div>
                      <a href="#" className='text-black'>Subheading</a>
                      <p className='text-black mt-2 text-slate-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                      </p>
                  </div>
                  <div className='md:shrink-0 p-5 '>
                    <img src={Prjectr3Pic} alt="" width={200} height={200} className=' rounded-2xl mt-4'/>
                  </div>
            </div>
          </div>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>
            <div className='md:flex'>
                  <div className='p-8'>
                      <div className='text-black uppercase track-wide text-sm to-indigo-500 font-semibold'>
                        Hospital Management System
                      </div>
                      <a href="#" className='text-black'>Subheading</a>
                      <p className='text-black mt-2 text-slate-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

                      </p>
                  </div>
                  <div className='md:shrink-0 p-5 '>
                    <img src={Prjectr4Pic} alt="" width={200} height={200} className=' rounded-2xl mt-4'/>
                  </div>
            </div>
          </div>
      </div>
      <hr />
      <div className='grid grid-cols-2 gap-4 p-5 '></div>
    </div>
   </div>
   </>
  )
}

export default Projects
