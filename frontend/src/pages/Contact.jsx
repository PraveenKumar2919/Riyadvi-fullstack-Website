import { useState } from "react";
import API from "../api/axios";


function Contact() {


  const [formData,setFormData] = useState({

    name:"",
    email:"",
    phone:"",
    message:""

  });



  const handleChange = (e)=>{

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = (e)=>{

    e.preventDefault();


    API.post("/contact/", formData)

    .then((response)=>{

      console.log(response.data);

      alert("Message Sent Successfully");


      setFormData({

        name:"",
        email:"",
        phone:"",
        message:""

      });


    })

    .catch((error)=>{

      console.log("Contact API Error:", error);

      alert("Something went wrong");

    });


  };



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

          Contact

          <span className="text-[#D4AF37]">
            {" "}Us
          </span>

        </h1>



        <div className="
          grid
          md:grid-cols-2
          gap-10
          mt-16
        ">


          {/* Contact Form */}


          <div className="
            bg-zinc-900
            p-8
            rounded-2xl
          ">


            <h2 className="
              text-3xl
              text-[#D4AF37]
            ">

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

                className="
                  w-full
                  p-3
                  bg-black
                  border
                  border-gray-700
                  rounded
                "

              />




              <input

                type="email"

                name="email"

                value={formData.email}

                onChange={handleChange}

                placeholder="Email Address"

                className="
                  w-full
                  p-3
                  bg-black
                  border
                  border-gray-700
                  rounded
                "

              />




              <input

                type="text"

                name="phone"

                value={formData.phone}

                onChange={handleChange}

                placeholder="Phone Number"

                className="
                  w-full
                  p-3
                  bg-black
                  border
                  border-gray-700
                  rounded
                "

              />




              <textarea

                name="message"

                value={formData.message}

                onChange={handleChange}

                placeholder="Your Message"

                rows="5"

                className="
                  w-full
                  p-3
                  bg-black
                  border
                  border-gray-700
                  rounded
                "

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
                "

              >

                Send Message

              </button>



            </form>


          </div>





          {/* Booking Section */}



          <div>


            <h2 className="
              text-3xl
              text-[#D4AF37]
            ">

              Book Free Consultation

            </h2>



            <p className="
              text-gray-400
              mt-4
            ">

              Schedule a meeting with our team
              and discuss your project ideas.

            </p>




            <button className="
              mt-8
              border
              border-[#D4AF37]
              text-[#D4AF37]
              px-8
              py-3
              rounded-full
            ">

              Open Calendly

            </button>




            <div className="
              mt-12
            ">


              <h2 className="
                text-3xl
                text-[#D4AF37]
              ">

                WhatsApp

              </h2>



              <p className="
                text-gray-400
                mt-3
              ">

                Chat with our team instantly.

              </p>




              <button className="
                mt-5
                bg-green-500
                text-white
                px-6
                py-3
                rounded-full
              ">

                Chat on WhatsApp

              </button>



            </div>


          </div>



        </div>


      </div>


    </section>

  );

}


export default Contact;