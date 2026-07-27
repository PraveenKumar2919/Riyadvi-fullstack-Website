const projects = [

  {
    title: "Inventory Management System",
    category: "Web Application",
    tech: "Django, React, MySQL"
  },

  {
    title: "Mobile Signature Recognition",
    category: "AI / Machine Learning",
    tech: "Python, MobileNet, Deep Learning"
  },

  {
    title: "Digital Business Platform",
    category: "Business Solution",
    tech: "React, Node.js, MongoDB"
  }

];


function PortfolioPreview() {

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
            {" "}Portfolio
          </span>

        </h2>


        <p className="
          text-gray-400
          text-center
          mt-4
        ">

          Explore our successful digital solutions.

        </p>



        <div className="
          grid
          md:grid-cols-3
          gap-8
          mt-12
        ">


          {
            projects.map((project,index)=>(

              <div
                key={index}
                className="
                  bg-zinc-900
                  border
                  border-gray-800
                  rounded-2xl
                  p-8
                  hover:border-[#D4AF37]
                  hover:-translate-y-2
                  transition
                "
              >


                <div className="
                  h-40
                  bg-black
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-gray-500
                ">

                  Project Image

                </div>



                <h3 className="
                  text-2xl
                  font-semibold
                  mt-6
                ">

                  {project.title}

                </h3>



                <p className="
                  text-[#D4AF37]
                  mt-2
                ">

                  {project.category}

                </p>



                <p className="
                  text-gray-400
                  mt-3
                ">

                  {project.tech}

                </p>



                <button className="
                  mt-6
                  border
                  border-[#D4AF37]
                  text-[#D4AF37]
                  px-5
                  py-2
                  rounded-full
                  hover:bg-[#D4AF37]
                  hover:text-black
                ">

                  View Case Study

                </button>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default PortfolioPreview;