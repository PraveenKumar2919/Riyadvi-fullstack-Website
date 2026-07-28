import { Helmet } from "react-helmet-async";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import LeadMagnet from "../components/LeadMagnet";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Helmet>
        <title>Riyadvi | Software Development Company</title>

        <meta
          name="description"
          content="Riyadvi provides Web Development, Mobile Apps, UI/UX Design, Digital Marketing, AI Solutions and Custom Software Development."
        />

        <meta
          name="keywords"
          content="Software Company, React, Django, Mobile App, Web Development, UI UX, AI Solutions, Chennai"
        />
      </Helmet>

      {/* Hero Section */}

      <section
        className="
          min-h-screen
          bg-black
          text-white
          flex
          items-center
          justify-center
          px-6
          pt-24
        "
      >
        <div
          className="
            max-w-5xl
            text-center
          "
        >
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >
            Custom Software &
            <span className="text-[#D4AF37]">
              {" "}Digital Solutions
            </span>

            <br />

            to Grow Your Business
          </h1>

          <p
            className="
              mt-8
              text-lg
              md:text-xl
              text-gray-300
            "
          >
            We build modern websites, mobile applications,
            AI-powered solutions and business software
            tailored to your company's growth.
          </p>

          <div
            className="
              mt-10
              flex
              flex-col
              md:flex-row
              justify-center
              gap-5
            "
          >
            <a
              href="/contact"
              className="
                bg-[#D4AF37]
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                hover:opacity-90
                transition
              "
            >
              Book Free Consultation
            </a>

            <a
              href="/portfolio"
              className="
                border
                border-[#D4AF37]
                text-[#D4AF37]
                px-8
                py-4
                rounded-full
                hover:bg-[#D4AF37]
                hover:text-black
                transition
              "
            >
              View Our Work
            </a>
          </div>

          <div
            className="
              grid
              md:grid-cols-3
              gap-8
              mt-16
              text-center
            "
          >
            <div>
              <h2 className="text-4xl font-bold text-[#D4AF37]">
                50+
              </h2>

              <p className="text-gray-400 mt-2">
                Projects Delivered
              </p>
            </div>
                        <div>
              <h2 className="text-4xl font-bold text-[#D4AF37]">
                100%
              </h2>

              <p className="text-gray-400 mt-2">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#D4AF37]">
                24/7
              </h2>

              <p className="text-gray-400 mt-2">
                Technical Support
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Services */}

      <ServicesSection />

      {/* Why Choose Us */}

      <WhyChooseUs />

      {/* Lead Magnet */}

      <LeadMagnet />

      {/* Portfolio */}

      <PortfolioPreview />

      {/* Testimonials */}

      <Testimonials />

      {/* Call To Action */}

      <section
        className="
          bg-[#D4AF37]
          text-black
          py-20
          px-6
        "
      >
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Ready to Build Your Next Project?
          </h2>

          <p className="mt-5 text-lg">
            Let's discuss your business idea and transform
            it into a powerful digital solution.
          </p>

          <a
            href="/contact"
            className="
              inline-block
              mt-8
              bg-black
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Contact Us
          </a>

        </div>
      </section>

    </>
  );
}

export default Home;