import '../App.css'
import ProfilePic from '../assets/thanhpic.jpg';
import { TypeAnimation } from 'react-type-animation';
function Introduction() {
  return (
    <div>
       <section>
    <div className="container m-auto py-10 flex flex-col md:flex-row items-center md:py-32">
      <div className="md:text-left">
        <h1 className="text-4xl font-bold">Hello, I'm Pham Thanh</h1>
        {/* <h1 className="text-4xl font-bold mt-1 gradient-text running-text">Frontend Developer</h1> */}
        <TypeAnimation className='text-4xl font-bold mt-1 gradient-text' sequence={
          [
            'Frontend Developer',
            2000,
            "WebDesigner",
            2000,
          ]
        } 
        wrapper='span'
        speed={50}
        repeat={Infinity}/>
        <p className="mt-4 text-gray-500">
        I am a passionate third-year software development student at VAMK, with experience in building web and mobile applications using modern technologies like React,Flutter, React Native, and MongoDB. Skilled in problem-solving, teamwork, and project leadership. I have collaborated with classmates to complete projects such as a poll question app, a pet reservation app, and a shopping web
        </p>
      </div>

      <div className="mt-6 md:mt-0 md:ml-8">
        <div className="w-52 h-52 md:w-56 md:h-56 rounded-full overflow-hidden">
          <img
            src={ProfilePic}
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
          
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Introduction
