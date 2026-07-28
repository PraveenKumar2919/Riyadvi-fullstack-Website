import { useState } from "react";
import API from "../api/axios";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/contact/", formData)
      .then(() => {
        alert("Message Sent Successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Contact API Error:", error);
        alert("Something went wrong.");
      });
  };

  return (
    <>
      <Helmet>
        <title>Contact | Riyadvi Software Solutions</title>

        <meta
          name="description"
          content="Contact Riyadvi Software Solutions for Web Development, Mobile Apps, AI Solutions and Custom Software Development."
        />

        <meta
          name="keywords"
          content="Contact Riyadvi, Software Company, React, Django, AI, Chennai"
        />
      </Helmet>

      <section
        className="
          min-h-screen
          bg-black
          text-white
          py-24
          px-6
        "
      >
        <div className="max-w-6xl mx-auto">

          <h1
            className="
              text-5xl
              font-bold
              text-center
            "
          >
            Contact
            <span className="text-[#D4AF37]">
              {" "}Us
            </span>
          </h1>

          <div
            className="
              grid
              md:grid-cols-2
              gap-10
              mt-16
            "
          >

            {/* Contact Form */}

            <div
              className="
                bg-zinc-900
                p-8
                rounded-2xl
              "
            >

              <h2
                className="
                  text-3xl
                  text-[#D4AF37]
                "
              >
                Get In Touch
              </h2>

              <form
                onSubmit={handleSubmit}
                className="
                  mt-6
                  space-y-5
                "
              >

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded"
                />

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full p-3 bg-black border border-gray-700 rounded"
                />
                                <button
                  type="submit"
                  className="
                    bg-[#D4AF37]
                    text-black
                    px-8
                    py-3
                    rounded-full
                    font-semibold
                    hover:opacity-90
                    transition
                  "
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Right Section */}

            <div>

              <h2
                className="
                  text-3xl
                  text-[#D4AF37]
                "
              >
                Book Free Consultation
              </h2>

              <p className="text-gray-400 mt-4">
                Schedule a free meeting with our team and
                discuss your software requirements.
              </p>

              <a
                href="https://calendly.com/vrpraveenkumar2003"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-8
                  border
                  border-[#D4AF37]
                  text-[#D4AF37]
                  px-8
                  py-3
                  rounded-full
                  hover:bg-[#D4AF37]
                  hover:text-black
                  transition
                "
              >
                Book Consultation
              </a>

              <div className="mt-12">

                <h2
                  className="
                    text-3xl
                    text-[#D4AF37]
                  "
                >
                  WhatsApp
                </h2>

                <p className="text-gray-400 mt-3">
                  Chat with our team instantly.
                </p>

                <a
                  href="https://wa.me/918838578674?text=Hi%20Riyadvi%20Team,%20I%20need%20a%20software%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    mt-5
                    bg-green-500
                    hover:bg-green-600
                    text-white
                    px-6
                    py-3
                    rounded-full
                    transition
                  "
                >
                  Chat on WhatsApp
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}

export default Contact;