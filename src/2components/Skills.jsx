import { useState, useEffect } from 'react';
import Pic1 from '../assets/meter1.svg';
import Pic2 from '../assets/meter2.svg';
import Pic3 from '../assets/meter3.svg';

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

          <div className="flex flex-row gap-10 text-2xl mt-10">
            <button onClick={showSlides} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Show Slider</button>
            <button onClick={showText} className="bg-gray-600 text-white px-4 py-2 rounded-lg">Show Text</button>
          </div>

          {/* Slider Controls */}
          {showSlide && (
            <>
              {/* Slider */}
              <div className="w-full overflow-hidden mt-20 relative">
                {/* "Prev" button on the left side */}
                <button
                  onClick={prevSlide}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                >
                  Prev
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
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {/* Text Content */}
          {!showSlide && (
            <div className="mt-10 text-white">
              <h3 className="text-xl font-semibold">My Skills Overview</h3>
              <p className="mt-4">
                I have a strong background in teamwork, communication, and time management.
                Throughout my career, I have successfully collaborated with diverse teams to
                achieve project goals. I am also proficient in Git, ensuring smooth version control
                and collaboration with other developers. Additionally, I am adept at critical thinking
                and problem solving, making me a valuable asset to any team.
              </p>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

export default Skills;
