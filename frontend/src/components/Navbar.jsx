import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


function Navbar() {

  return (

    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">


        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-[#D4AF37]"
        >
          Riyadvi
        </Link>




        {/* Menu */}

        <ul className="hidden md:flex gap-8 text-white">

          <li>
            <Link
              className="hover:text-[#D4AF37]"
              to="/"
            >
              Home
            </Link>
          </li>


          <li>
            <Link
              className="hover:text-[#D4AF37]"
              to="/services"
            >
              Services
            </Link>
          </li>


          <li>
            <Link
              className="hover:text-[#D4AF37]"
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>


          <li>
            <Link
              className="hover:text-[#D4AF37]"
              to="/about"
            >
              About
            </Link>
          </li>


          <li>
            <Link
              className="hover:text-[#D4AF37]"
              to="/contact"
            >
              Contact
            </Link>
          </li>
<li>
  <Link
    className="hover:text-[#D4AF37]"
    to="/careers"
  >
    Careers
  </Link>
</li>


<li>
  <Link
    className="hover:text-[#D4AF37]"
    to="/blog"
  >
    Blog
  </Link>
</li>


        </ul>



        {/* CTA Button */}

        <button className="
          flex items-center gap-2
          bg-[#D4AF37]
          text-black
          px-5 py-2
          rounded-full
          font-semibold
          hover:bg-yellow-500
        ">

          Book Consultation

          <FaArrowRight />

        </button>


      </div>

    </nav>

  );

}


export default Navbar;