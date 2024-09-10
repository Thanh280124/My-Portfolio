import { FaFacebook,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import HeroPic from '../assets/react.svg'

const Hero = () => {
  return (
    <section className="flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm: space-y-10 ">
      <div className="lg:w-1/3 ssm:w-fit">
      <p className="text-4xl mb-5 text-slate-300">I am</p>
      <h1 className="text-6xl">Pham Thanh</h1>
      <hr />
      <p className="mt-10 text-slate-300 font-sans">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using here, content, making it look like readable English. 
      </p>
      </div>

      <div className="w-1/3 items-center ssm:w-fit">
        <img src={HeroPic} alt="" width={350} height={350}  className="rounded-full w-80 h-80 border-8 border-white"/>
      </div>

      <div className="w-1/3 ssm:w-fit">
      <p className="text-4xl mb-4">About Me</p>
      <p className="text-slate-300">
      It is a long established fact that a reader will be 
      </p>
      <button className="bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white">Show more . . .</button>
     <div className="flex mt-5 space-x-4 cursor-pointer">
      <FaFacebook size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
      <FaInstagramSquare size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
      <FaTwitterSquare size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
      <FaSquarePinterest size={40} className="border-4 hover:border-indigo-800 rounded-full"/>
     </div>
      </div>
    </section>
  )
}

export default Hero
