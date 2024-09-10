import '../App.css'
import ProfilePic from '../assets/thanhpic.jpg';
function Introduction() {
  return (
    <div>
       <section>
    <div className="container m-auto px-4 py-12 flex flex-col md:flex-row items-center md:py-32">
      <div className="md:text-left">
        <h1 className="text-4xl font-bold">Hello, I'm Pham Thanh</h1>
        <h1 className="text-4xl font-bold mt-1 gradient-text running-text">Frontend Developer</h1>
        <p className="mt-4 text-gray-600">
          Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using here, content, making it look like readable English.
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
