function About(){

  return (

    <section className="
      min-h-screen
      bg-black
      text-white
      py-24
      px-6
    ">


      <div className="
        max-w-6xl
        mx-auto
      ">


        <h1 className="
          text-5xl
          font-bold
          text-center
        ">

          About

          <span className="text-[#D4AF37]">
            {" "}Riyadvi
          </span>

        </h1>



        {/* Company Story */}

        <div className="mt-16">


          <h2 className="
            text-3xl
            text-[#D4AF37]
          ">

            Our Story

          </h2>


          <p className="
            text-gray-400
            mt-4
            leading-8
          ">

            Riyadvi Software Technologies was founded
            in 2021 with a vision to help businesses
            transform their ideas into powerful digital
            solutions.

            We provide Web Development, App Development,
            UI/UX Design and innovative technology
            solutions for modern businesses.

          </p>


        </div>




        {/* Vision */}

        <div className="mt-12">


          <h2 className="
            text-3xl
            text-[#D4AF37]
          ">

            Our Vision

          </h2>


          <p className="
            text-gray-400
            mt-4
          ">

            To become a trusted technology partner
            helping businesses grow through innovation
            and digital transformation.

          </p>


        </div>




        {/* Mission */}

        <div className="mt-12">


          <h2 className="
            text-3xl
            text-[#D4AF37]
          ">

            Our Mission

          </h2>


          <p className="
            text-gray-400
            mt-4
          ">

            Deliver scalable, secure and high-quality
            software solutions that create real business
            value.

          </p>


        </div>




        {/* Awards */}

        <div className="mt-12">


          <h2 className="
            text-3xl
            text-[#D4AF37]
          ">

            Awards & Certifications

          </h2>


          <div className="
            mt-6
            bg-zinc-900
            p-6
            rounded-xl
          ">


            <h3 className="
              text-xl
            ">

              ⭐ Star of Excellence Award 2021

            </h3>


            <p className="
              text-gray-400
              mt-2
            ">

              Recognized for excellence in technology
              and software solutions.

            </p>


          </div>


        </div>




      </div>


    </section>

  );

}


export default About;