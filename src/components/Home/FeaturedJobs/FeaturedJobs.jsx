import React from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";
import { useEffect, useState } from "react";

const FeaturedJobs = () => {
  const [featuredJobs, setFeaturedJobs] = useState([]);

  useEffect(() => {
    fetch("./public/jobs.json")
      .then((res) => res.json())
      .then((featuredJobs) => setFeaturedJobs(featuredJobs));
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 mb-5">
      <div>
        <h1 className="text-center text-4xl font-bold pb-5">Featured Jobs</h1>
        <p className="text-center mb-10">
          Find your dream job with all the resources you need. Your future
          awaits!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {featuredJobs.map((featuredJobs) => (
          <FeaturedJob
            key={featuredJobs.id}
            featuredJobs={featuredJobs}
          ></FeaturedJob>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 mb-10 flex items-center">
        <button className="mx-auto border my-5 my_btn  text-white font-medium border-blue-400 rounded">
          See All Jobs
        </button>
      </div>
    </section>
  );
};

export default FeaturedJobs;
