import { useEffect, useState } from "react";
import API from "../api/axios";
import { Helmet } from "react-helmet-async";

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [department, setDepartment] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/careers/")
      .then((response) => {
        setJobs(response.data);
      })
      .catch((error) => {
        console.error("Career API Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filteredJobs =
    department === "All"
      ? jobs
      : jobs.filter(
          (job) => job.department === department
        );

  return (
    <>
      <Helmet>
        <title>Careers | Riyadvi Software Solutions</title>

        <meta
          name="description"
          content="Join Riyadvi Software Solutions and build innovative software products."
        />

        <meta
          name="keywords"
          content="Riyadvi Careers, Software Jobs, React Jobs, Django Jobs"
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
            max-w-6xl
            mx-auto
          "
        >
          <h1
            className="
              text-5xl
              font-bold
              text-center
            "
          >
            Careers at

            <span className="text-[#D4AF37]">
              {" "}Riyadvi
            </span>
          </h1>

          <p
            className="
              text-center
              text-gray-400
              mt-5
            "
          >
            Join our talented team and help build
            next-generation software solutions.
          </p>

          <div className="mt-12">
            <select
              value={department}
              onChange={(e) =>
                setDepartment(e.target.value)
              }
              className="
                bg-zinc-900
                border
                border-gray-700
                px-5
                py-3
                rounded-lg
              "
            >
              <option value="All">
                All Departments
              </option>

              <option value="Development">
                Development
              </option>

              <option value="Design">
                Design
              </option>

              <option value="Marketing">
                Marketing
              </option>
            </select>
          </div>

          {loading ? (
            <p className="mt-10 text-gray-400">
              Loading careers...
            </p>
          ) : (
            <div
              className="
                grid
                md:grid-cols-2
                gap-8
                mt-10
              "
            >
                          {filteredJobs.length === 0 ? (
                <p className="text-gray-400">
                  No job openings available.
                </p>
              ) : (
                filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="
                      bg-zinc-900
                      border
                      border-gray-800
                      rounded-2xl
                      p-8
                      hover:border-[#D4AF37]
                      transition
                    "
                  >
                    <h2
                      className="
                        text-2xl
                        text-[#D4AF37]
                        font-semibold
                      "
                    >
                      {job.title}
                    </h2>

                    <p className="text-gray-400 mt-4">
                      {job.description}
                    </p>

                    <p className="text-gray-400 mt-4">
                      <strong>Department:</strong>{" "}
                      {job.department}
                    </p>

                    <p className="text-gray-400">
                      <strong>Job Type:</strong>{" "}
                      {job.job_type}
                    </p>

                    <p className="text-gray-400">
                      <strong>Location:</strong>{" "}
                      {job.location}
                    </p>

                    <button
                      className="
                        mt-6
                        bg-[#D4AF37]
                        text-black
                        px-6
                        py-3
                        rounded-full
                        font-semibold
                      "
                    >
                      Apply Now
                    </button>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Application Form */}

          <div className="mt-16 bg-zinc-900 rounded-2xl p-8">
            <h2 className="text-3xl text-[#D4AF37] font-bold">
              Job Application
            </h2>

            <div className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-black border border-gray-700 p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-gray-700 p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-black border border-gray-700 p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Resume Link"
                className="w-full bg-black border border-gray-700 p-3 rounded-lg"
              />

              <textarea
                rows="5"
                placeholder="Why should we hire you?"
                className="w-full bg-black border border-gray-700 p-3 rounded-lg"
              />

              <button
                className="
                  bg-[#D4AF37]
                  text-black
                  px-8
                  py-3
                  rounded-full
                  font-semibold
                "
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;