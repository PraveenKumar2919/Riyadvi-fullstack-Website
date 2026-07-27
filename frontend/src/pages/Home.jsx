import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import LeadMagnet from "../components/LeadMagnet";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";
function Home() {

  return (

    <>

      {/* Hero Section */}

      <section className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        justify-center
        px-6
        pt-24
      ">


        <div className="
          max-w-5xl
          text-center
        ">


          <h1 className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
          ">

            Custom Software &

            <span className="
              text-[#D4AF37]
            ">
              {" "}Digital Solutions
            </span>

            <br />

            to Grow Your Business

          </h1>



          <p className="
            mt-8
            text-lg
            md:text-xl
            text-gray-300
          ">

            Web & App Development, UI/UX Design,
            and Business Strategy – all tailored
            to your needs.

          </p>



          <div className="
            mt-10
            flex
            justify-center
            gap-5
          ">


            <button className="
              bg-[#D4AF37]
              text-black
              px-8
              py-4
              rounded-full
              font-semibold
            ">

              Book a Free Consultation

            </button>



            <button className="
              border
              border-[#D4AF37]
              text-[#D4AF37]
              px-8
              py-4
              rounded-full
            ">

              View Our Work

            </button>


          </div>


        </div>


      </section>



      {/* Services Section */}

      <ServicesSection />
      <WhyChooseUs />
      <LeadMagnet />
      <PortfolioPreview />
      <Testimonials />


    </>

  );

}


export default Home;