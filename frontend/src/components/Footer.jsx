import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";


function Footer(){

  return(

    <footer className="
      bg-zinc-950
      text-white
      border-t
      border-gray-800
      py-12
      px-6
    ">


      <div className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-4
        gap-8
      ">


        {/* Company */}

        <div>

          <h2 className="
            text-2xl
            font-bold
            text-[#D4AF37]
          ">
            Riyadvi
          </h2>


          <p className="
            text-gray-400
            mt-4
          ">

            Custom software and digital solutions
            to grow your business.

          </p>

        </div>



        {/* Quick Links */}

        <div>

          <h3 className="text-xl font-semibold">
            Quick Links
          </h3>


          <ul className="
            mt-4
            text-gray-400
            space-y-2
          ">

            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>

          </ul>

        </div>



        {/* Services */}

        <div>

          <h3 className="text-xl font-semibold">
            Services
          </h3>


          <ul className="
            mt-4
            text-gray-400
            space-y-2
          ">

            <li>Web Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>Digital Marketing</li>

          </ul>

        </div>



        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold">
            Contact
          </h3>


          <p className="text-gray-400 mt-4">
            Email: info@riyadvi.com
          </p>


          <div className="
            flex
            gap-4
            mt-5
            text-2xl
            text-[#D4AF37]
          ">

            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />

          </div>


        </div>


      </div>



      <div className="
        text-center
        text-gray-500
        mt-10
        border-t
        border-gray-800
        pt-5
      ">

        © 2026 Riyadvi Software Technologies. All Rights Reserved.

      </div>


    </footer>

  );

}


export default Footer;