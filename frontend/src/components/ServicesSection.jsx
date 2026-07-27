import {
  FaCode,
  FaMobileAlt,
  FaBullhorn,
  FaVrCardboard,
  FaCube,
  FaPaintBrush
} from "react-icons/fa";


const services = [

  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Modern, scalable websites and web applications built for business growth."
  },

  {
    icon: <FaMobileAlt />,
    title: "App Development",
    description:
      "Powerful mobile applications with excellent user experience."
  },

  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies to increase your online presence."
  },

  {
    icon: <FaVrCardboard />,
    title: "AR / VR",
    description:
      "Immersive virtual and augmented reality experiences."
  },

  {
    icon: <FaCube />,
    title: "3D Modeling",
    description:
      "High-quality 3D designs for modern digital solutions."
  },

  {
    icon: <FaPaintBrush />,
    title: "UI / UX Design",
    description:
      "Beautiful interfaces designed around user needs."
  }

];


function ServicesSection(){

  return (

    <section className="
      bg-black
      text-white
      py-20
      px-6
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">


        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
        ">

          Our
          <span className="text-[#D4AF37]">
             {" "}Services
          </span>

        </h2>


        <p className="
          text-gray-400
          text-center
          mt-4
        ">

          Complete digital solutions to transform your business.

        </p>



        <div className="
          grid
          md:grid-cols-3
          gap-8
          mt-12
        ">


          {
            services.map((service,index)=>(

              <div
                key={index}
                className="
                  bg-zinc-900
                  border
                  border-gray-800
                  p-8
                  rounded-2xl
                  hover:border-[#D4AF37]
                  hover:-translate-y-2
                  transition
                  duration-300
                "
              >


                <div className="
                  text-[#D4AF37]
                  text-4xl
                  mb-5
                ">

                  {service.icon}

                </div>


                <h3 className="
                  text-2xl
                  font-semibold
                ">

                  {service.title}

                </h3>


                <p className="
                  text-gray-400
                  mt-4
                ">

                  {service.description}

                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default ServicesSection;