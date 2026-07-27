import { Link } from "react-router-dom";


const services = [

  {
    title: "Web Development",
    description:
      "Modern websites and scalable web applications.",
    link: "/services/web-development"
  },


  {
    title: "App Development",
    description:
      "Powerful mobile applications for your business.",
    link: "/services/app-development"
  },


  {
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly digital experiences.",
    link: "/services/ui-ux-design"
  },


  {
    title: "Digital Marketing",
    description:
      "Grow your brand with effective marketing strategies.",
    link: "/services/digital-marketing"
  },


  {
    title: "AR / VR",
    description:
      "Immersive virtual and augmented experiences.",
    link: "/services/ar-vr"
  },


  {
    title: "3D Modeling",
    description:
      "Creative 3D solutions for modern businesses.",
    link: "/services/3d-modeling"
  }

];


function Services(){

  return (

    <section className="
      min-h-screen
      bg-black
      text-white
      py-24
      px-6
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">


        <h1 className="
          text-5xl
          font-bold
          text-center
        ">

          Our

          <span className="text-[#D4AF37]">
            {" "}Services
          </span>

        </h1>



        <div className="
          grid
          md:grid-cols-3
          gap-8
          mt-12
        ">


          {
            services.map((service,index)=>(

              <Link
                key={index}
                to={service.link}
              >


                <div className="
                  bg-zinc-900
                  border
                  border-gray-800
                  rounded-2xl
                  p-8
                  hover:border-[#D4AF37]
                  hover:-translate-y-2
                  transition
                ">


                  <h2 className="
                    text-2xl
                    font-semibold
                    text-[#D4AF37]
                  ">

                    {service.title}

                  </h2>



                  <p className="
                    text-gray-400
                    mt-4
                  ">

                    {service.description}

                  </p>



                  <button className="
                    mt-6
                    border
                    border-[#D4AF37]
                    px-5
                    py-2
                    rounded-full
                    text-[#D4AF37]
                  ">

                    Learn More

                  </button>


                </div>


              </Link>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default Services;