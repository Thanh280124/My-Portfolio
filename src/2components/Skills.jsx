import { useState, useEffect } from 'react';
import Pic1 from '../assets/meter1.svg';
import Pic2 from '../assets/meter2.svg';
import Pic3 from '../assets/meter3.svg';
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
function Skills() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSlide, setShowSlide] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const sliders = [
    { id: 1, img: Pic1, skills: 'Team work' },
    { id: 2, img: Pic2, skills: 'Communication' },
    { id: 3, img: Pic3, skills: 'Git' },
    { id: 4, img: Pic2, skills: 'Time Management' },
    { id: 5, img: Pic3, skills: 'Problem Solving' },
    { id: 6, img: Pic1, skills: 'Critical Thinking' },
  ];

  // Update screen width on window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleSlides = () => {
    if (screenWidth >= 1280) {
      return 4; // XL screen (4 slides)
    } else if (screenWidth >= 768) {
      return 3; // MD screen (3 slides)
    } else if (screenWidth >= 640) {
      return 2; // SM screen (2 slides)
    } else {
      return 1; // Extra small screen (1 slide)
    }
  };

  const visibleSlides = getVisibleSlides();

  function nextSlide() {
    const isLastSlide = currentIndex >= sliders.length - visibleSlides;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
  }

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? sliders.length - visibleSlides : currentIndex - 1;
    setCurrentIndex(newSlide);
  }

  function showSlides() {
    setShowSlide(true);
  }

  function showText() {
    setShowSlide(false);
  }

  return (
    <div>
      <section>
        <div className="container m-auto px-4 py-8 bg-gray-800 rounded-3xl flex flex-col justify-center items-center">
          <h2 className="text-3xl font-semibold">Skills</h2>

          <div className="flex flex-row gap-10 text-xl mt-10">
          <button onClick={showSlides} className="bg-blue-500 text-black font-medium px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105">Skills in Slider</button>

           <button onClick={showText} className="bg-gray-800 text-blue-500 px-4 py-2 font-semibold rounded-lg border border-blue-400 transition duration-300 ease-in-out transform hover:bg-gray-700 hover:text-white hover:scale-105">Skills in Text</button>

          </div>

          {/* Slider Controls */}
          {showSlide && (
            <>
              {/* Slider */}
              <div className="w-full overflow-hidden mt-20 relative">
                {/* "Prev" button on the left side */}
                <button
                  onClick={prevSlide}
                  className="bg-gray-800 text-white px-4 py-4 rounded-lg absolute left-0 top-1/3 transform z-10"
                >
                  <FaLessThan />
                </button>

                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
                  }}
                >
                  {sliders.map((skill) => (
                    <div
                      key={skill.id}
                      className={`flex-shrink-0 ${visibleSlides === 4 ? 'w-1/4' : visibleSlides === 3 ? 'w-1/3' : visibleSlides === 2 ? 'w-1/2' : 'w-full'} flex flex-col justify-center items-center`}
                    >
                      <img src={skill.img} alt={skill.skills} />
                      <h5 className="text-white mt-4">{skill.skills}</h5>
                    </div>
                  ))}
                </div>

                {/* "Next" button on the right side */}
                <button
                  onClick={nextSlide}
                  className="bg-gray-800 text-white px-4 py-4 rounded-lg absolute right-0 top-1/3 transform z-10"
                >
                  <FaGreaterThan />
                </button>
              </div>
            </>
          )}

          {/* Text Content */}
          {!showSlide && (
             <div className="mt-10 text-white flex flex-wrap gap-10 text-xl mb-5">
             <div className="flex items-center">
               <span className="w-2.5 h-2.5 bg-white rounded-full mr-2"></span>
               <p>Communication Skill</p>
             </div>
             <div className="flex items-center">
               <span className="w-2.5 h-2.5 bg-white rounded-full mr-2"></span>
               <p>Problem Solving</p>
             </div>
             <div className="flex items-center">
               <span className="w-2.5 h-2.5 bg-white rounded-full mr-2"></span>
               <p>Teamwork</p>
             </div>
             <div className="flex items-center">
               <span className="w-2.5 h-2.5 bg-white rounded-full mr-2"></span>
               <p>Time Management</p>
             </div>
             <div className="flex items-center">
               <span className="w-2.5 h-2.5 bg-white rounded-full mr-2"></span>
               <p>Leadership</p>
             </div>
             
           </div>
           
          )}

        </div>
      </section>
    </div>
  );
}

export default Skills;
