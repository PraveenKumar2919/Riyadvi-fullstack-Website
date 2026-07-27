import { Link } from "react-router-dom";


const projects = [

  {
    id: 1,
    title: "Inventory Management System",
    category: "Web Application",
    description:
      "A complete inventory solution for managing products and users.",
    link: "/portfolio/inventory-system"
  },


  {
    id: 2,
    title: "Traffic Offences Management",
    category: "Government Solution",
    description:
      "Digital platform for managing traffic offence records.",
    link: "/portfolio/traffic-management"
  },


  {
    id: 3,
    title: "Signature Recognition AI",
    category: "AI / Machine Learning",
    description:
      "AI based handwritten signature recognition system.",
    link: "/portfolio/signature-recognition"
  }


];


function Portfolio(){

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
            {" "}Portfolio
          </span>

        </h1>



        <div className="
          grid
          md:grid-cols-3
          gap-8
          mt-12
        ">


        {
          projects.map((project)=>(


            <Link
              key={project.id}
              to={project.link}
            >


              <div className="
                bg-zinc-900
                p-8
                rounded-2xl
                border
                border-gray-800
                hover:border-[#D4AF37]
                transition
              ">


                <h2 className="
                  text-2xl
                  text-[#D4AF37]
                  font-semibold
                ">

                  {project.title}

                </h2>



                <p className="
                  mt-3
                  text-gray-400
                ">

                  {project.category}

                </p>



                <p className="
                  mt-4
                  text-gray-300
                ">

                  {project.description}

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

                  View Case Study

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


export default Portfolio;