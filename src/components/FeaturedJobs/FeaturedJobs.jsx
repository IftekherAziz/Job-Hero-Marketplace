import React, { useContext, useState } from "react";
import { AvailableJobContext } from "../Layout/Main";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {
  const [availableJobs, setAvailableJobs] = useContext(AvailableJobContext);
  const [showMore, setShowMore] = useState(false);

  const showedJobs = showMore
    ? availableJobs.slice()
    : availableJobs.slice(0, 4);

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
        {showedJobs.map((showedJob) => (
          <FeaturedJob key={showedJob.id} showedJob={showedJob}></FeaturedJob>
        ))}
      </div>
      <div className="mx-auto max-w-7xl  pt-5 px-6 mb-10 flex items-center">
        {showMore ? (
          <button
            className="mx-auto border my-5 my_btn  text-white font-medium border-blue-400 rounded"
            onClick={() => setShowMore(!showMore)}
          >
            Show Less
          </button>
        ) : (
          <button
            className="mx-auto border my-5 my_btn  text-white font-medium border-blue-400 rounded"
            onClick={() => setShowMore(!showMore)}
          >
            Show All Jobs
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobs;
