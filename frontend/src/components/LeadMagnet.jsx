function LeadMagnet() {

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
        bg-zinc-900
        border
        border-gray-800
        rounded-3xl
        p-10
        text-center
      ">


        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
        ">

          Download

          <span className="text-[#D4AF37]">
            {" "}Software Project Planning Guide
          </span>

        </h2>



        <p className="
          text-gray-400
          mt-5
          text-lg
        ">

          Plan your next software project with our
          expert checklist, timeline and strategy guide.

        </p>



        <div className="
          mt-8
          flex
          flex-col
          md:flex-row
          justify-center
          gap-4
        ">


          <input
            type="email"
            placeholder="Enter your email"
            className="
              px-6
              py-4
              rounded-full
              bg-black
              border
              border-gray-700
              text-white
              outline-none
              focus:border-[#D4AF37]
            "
          />



          <button
            className="
              bg-[#D4AF37]
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-yellow-500
            "
          >

            Download Guide

          </button>


        </div>


      </div>


    </section>

  );

}


export default LeadMagnet;