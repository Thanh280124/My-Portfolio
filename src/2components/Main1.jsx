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

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      )}
    </>
  )
}

export default Main1
