import { FaWhatsapp } from "react-icons/fa";


function FloatingCTA(){

 return(

  <a
    href="#"
    className="
      fixed
      bottom-6
      right-6
      bg-green-500
      text-white
      w-14
      h-14
      rounded-full
      flex
      items-center
      justify-center
      text-3xl
      shadow-lg
      hover:scale-110
      transition
    "
  >

    <FaWhatsapp />

  </a>

 )

}


export default FloatingCTA;