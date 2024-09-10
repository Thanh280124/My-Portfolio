import { FaFacebook,FaInstagramSquare,FaTwitterSquare} from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
function Footer() {
  return (
    <div>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>

          <div>
            <ul className="flex gap-5">
              <li><a href=""><FaInstagramSquare size={30}/></a></li>
              <li><a href=""><FaFacebook size={30}/></a></li>
              <li><a href=""><FaTwitterSquare size={30}/></a></li>
              <li><a href=""><FaSquarePinterest size={30}/></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
