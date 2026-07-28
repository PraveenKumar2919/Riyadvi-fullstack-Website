import { useEffect, useState } from "react";
import API from "../api/axios";
import { Helmet } from "react-helmet-async";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/blogs/")
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Blog API Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Riyadvi Software Solutions</title>

        <meta
          name="description"
          content="Read the latest software development, AI, React, Django and business technology articles from Riyadvi Software Solutions."
        />

        <meta
          name="keywords"
          content="Riyadvi Blog, React, Django, AI, Software Development"
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
        <div
          className="
            max-w-5xl
            mx-auto
          "
        >
          <h1
            className="
              text-5xl
              font-bold
              text-[#D4AF37]
              mb-12
            "
          >
            Riyadvi Blog
          </h1>

          {loading ? (
            <p className="text-gray-400">
              Loading blogs...
            </p>
          ) : blogs.length === 0 ? (
            <p className="text-gray-400">
              No blogs available.
            </p>
          ) : (
            <div className="space-y-8">
                              {blogs.map((blog) => (
                <div
                  key={blog.id}
                  className="
                    bg-zinc-900
                    border
                    border-gray-800
                    rounded-xl
                    p-6
                    hover:border-[#D4AF37]
                    transition
                  "
                >
                  <h2
                    className="
                      text-3xl
                      font-bold
                      text-[#D4AF37]
                    "
                  >
                    {blog.title}
                  </h2>

                  <p
                    className="
                      text-gray-400
                      mt-4
                      leading-7
                    "
                  >
                    {blog.content}
                  </p>

                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="
                        w-full
                        mt-6
                        rounded-lg
                        object-cover
                      "
                    />
                  )}

                  <p
                    className="
                      text-sm
                      text-gray-500
                      mt-5
                    "
                  >
                    Published on{" "}
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
