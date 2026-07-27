import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const testimonials = [

  {
    name: " V R Praveenkumar",
    company: "Tamil Pasanga Info Tech",
    quote:
      "Riyadvi helped us transform our business idea into a powerful digital product."
  },


  {
    name: "Shridhanish ",
    company: "Startup Founder of Boyzz Info Tech",
    quote:
      "The team delivered an amazing website with excellent user experience."
  },


  {
    name: "C.Joseph Vijay",
    company: " Chief Minister of Tamil Nadu",
    quote:
      "Professional approach, innovative solutions and great support."
  }

];


function Testimonials(){

  return (

    <section className="
      bg-black
      text-white
      py-20
      px-6
    ">


      <div className="
        max-w-5xl
        mx-auto
      ">


        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-center
        ">

          Client

          <span className="text-[#D4AF37]">
            {" "}Testimonials
          </span>

        </h2>



        <Swiper

          modules={[Autoplay]}

          autoplay={{
            delay:3000
          }}

          loop={true}

          className="mt-12"

        >


          {
            testimonials.map((item,index)=>(


              <SwiperSlide key={index}>


                <div className="
                  bg-zinc-900
                  border
                  border-gray-800
                  rounded-2xl
                  p-10
                  text-center
                  max-w-3xl
                  mx-auto
                ">


                  <div className="
                    w-20
                    h-20
                    rounded-full
                    bg-[#D4AF37]
                    text-black
                    flex
                    items-center
                    justify-center
                    mx-auto
                    text-2xl
                    font-bold
                  ">

                    {item.name.charAt(0)}

                  </div>



                  <p className="
                    text-gray-300
                    text-lg
                    mt-6
                  ">

                    "{item.quote}"

                  </p>



                  <h3 className="
                    text-xl
                    font-semibold
                    mt-6
                  ">

                    {item.name}

                  </h3>



                  <p className="
                    text-[#D4AF37]
                  ">

                    {item.company}

                  </p>


                </div>


              </SwiperSlide>


            ))
          }


        </Swiper>


      </div>


    </section>

  );

}


export default Testimonials;