import { useEffect, useState } from "react";
import API from "../api/axios";


function Blog() {

  const [blogs, setBlogs] = useState([]);


  useEffect(() => {

    API.get("/blogs/")
      .then((response) => {

        setBlogs(response.data);

      })
      .catch((error) => {

        console.log("Blog API Error:", error);

      });

  }, []);



  return (

    <section className="
      min-h-screen
      bg-black
      text-white
      py-24
      px-6
    ">


      <div className="
        max-w-5xl
        mx-auto
      ">


        <h1 className="
          text-5xl
          font-bold
          text-[#D4AF37]
          mb-12
        ">
          Riyadvi Blog
        </h1>



        {
          blogs.length === 0 ? (

            <p className="text-gray-400">
              No blogs available
            </p>

          ) : (


            <div className="space-y-8">


              {
                blogs.map((blog) => (

                  <div
                    key={blog.id}
                    className="
                      bg-gray-900
                      p-6
                      rounded-xl
                    "
                  >


                    <h2 className="
                      text-3xl
                      text-[#D4AF37]
                      font-bold
                    ">

                      {blog.title}

                    </h2>



                    <p className="
                      text-gray-400
                      mt-4
                    ">

                      {blog.content}

                    </p>



                    {
                      blog.image && (

                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="
                            mt-5
                            rounded-lg
                            w-full
                          "
                        />

                      )
                    }


                  </div>

                ))
              }


            </div>

          )
        }



      </div>


    </section>

  );

}


export default Blog;