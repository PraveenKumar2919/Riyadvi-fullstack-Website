import {
  FaCalendarCheck,
  FaChartLine,
  FaRocket
} from "react-icons/fa";


const reasons = [

  {
    icon: <FaCalendarCheck />,
    title: "Since 2021",
    description:
      "Delivering innovative software solutions and helping businesses grow digitally."
  },

  {
    icon: <FaChartLine />,
    title: "Business Health Checkup",
    description:
      "We analyze your business challenges and suggest the right digital strategy."
  },

  {
    icon: <FaRocket />,
    title: "End-to-End Solutions",
    description:
      "From planning and design to development and deployment, we handle everything."
  }

];


function WhyChooseUs(){

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

          Why Choose

          <span className="text-[#D4AF37]">
            {" "}Riyadvi?
          </span>

        </h2>



        <p className="
          text-gray-400
          text-center
          mt-4
        ">

          More than a software vendor, we are your digital growth partner.

        </p>



        <div className="
          grid
          md:grid-cols-3
          gap-8
          mt-12
        ">


          {
            reasons.map((item,index)=>(

              <div
                key={index}
                className="
                  bg-zinc-900
                  border
                  border-gray-800
                  rounded-2xl
                  p-8
                  text-center
                  hover:border-[#D4AF37]
                  hover:-translate-y-2
                  transition
                "
              >


                <div className="
                  text-[#D4AF37]
                  text-5xl
                  flex
                  justify-center
                  mb-5
                ">

                  {item.icon}

                </div>



                <h3 className="
                  text-2xl
                  font-semibold
                ">

                  {item.title}

                </h3>



                <p className="
                  text-gray-400
                  mt-4
                ">

                  {item.description}

                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  );

}


export default WhyChooseUs;