import '../App.css';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div>
      {/* Fixed header */}
      <header id='header' className="fixed top-0 left-0 w-full bg-black z-50">
        <div className="container m-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Link to scroll to the top (header) */}
            <Link 
              to="top" 
              spy={true} 
              smooth={true} 
              offset={-70}  // Adjust this value based on your header height
              duration={500} 
              className='font-bold text-xl cursor-pointer text-white'
            >
              Thanh Pham Portfolio
            </Link>

            <div>
              <ul className='flex gap-3'>
                <li>
                  <Link 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={-70}  // Adjust this value based on your header height
                    duration={500} 
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link 
                    to="technologies" 
                    spy={true} 
                    smooth={true} 
                    offset={-70}  // Adjust this value based on your header height
                    duration={500} 
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    Technologies
                  </Link>
                </li>
                <li>
                  <Link 
                    to="about" 
                    spy={true} 
                    smooth={true} 
                    offset={-70}  // Adjust this value based on your header height
                    duration={500} 
                    className="text-gray-400 hover:text-white cursor-pointer"
                  >
                    About me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Dummy section to scroll to */}
      <div id='top' style={{ height: '1px' }}></div>
    </div>
  );
}

export default Header;
