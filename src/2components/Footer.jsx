import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div>
      <footer>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between px-4 py-6">

          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-gray-300 text-sm">Contact Information:</p>
            <p className="text-gray-300 text-sm">Email: <a href="mailto:example@example.com" className="text-blue-400 hover:underline">thanhpham28124@gmail.com</a></p>
            <p className="text-gray-300 text-sm">Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">0451612726</a></p>
          </div>

          <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5">
            <ul className="flex gap-5">
              <li>
                <a href="#" aria-label="Instagram">
                  <FaInstagramSquare size={30} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Facebook">
                  <FaFacebook size={30} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Twitter">
                  <FaLinkedin  size={30} />
                </a>
              </li>
              <li>
                <a href="#" aria-label="Pinterest">
                  <FaSquarePinterest size={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
