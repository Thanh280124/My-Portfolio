import { useState, useEffect } from 'react';
import '../App.css'
import Header from './Header';
import Introduction from './Introduction';
import Projects from './Projects';
import Technoglies from './Technoglies';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Footer from './Footer';
import Icon from './Icon';
import ScrollUp from '../assets/scrollup.png'
function Main1() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* This is Header */}
      <Header />
      <main>
        {/* Introduction section */}
        <Introduction />
        <Icon />
        {/* Projects section */}
        <Projects />

        {/* Technoglies section */}
        <Technoglies />

        {/* Skills section */}
        <Skills />

        {/* About me section */}
        <AboutMe />
      </main>

      <Footer />
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <img src={ScrollUp} className='h-5 w-5' alt="" />
        </button>
      )}
    </>
  )
}

export default Main1
