import React from 'react';

const FeaturedJob = ({ featuredJobs }) => {
    const {
      id,
      company_image,
      job_title,
      company_name,
      job_type,
      salary,
      location,
    } = featuredJobs;
  return (
    <section>
      <div className="border p-8 rounded">
        <img
          className="p-2 border rounded"
          src={company_image}
          alt="Company Logo"
        />
        <h1 className="text-md font-semibold pt-5">{job_title}</h1>
        <p className="text-sm pt-3">{company_name}</p>
        <div className="flex">
          <div className="flex py-5 mr-5">
            <img
              className="h-5 w-5"
              src="https://i.ibb.co/QpK5MRY/Frame-4.png"
              alt=""
            />
            <p className="ml-2 text-sm">{location}</p>
          </div>
          <div className="flex py-5">
            <img
              className="h-5 w-5"
              src="https://i.ibb.co/8gPKz7h/dollar.png"
              alt=""
            />
            <p className="ml-2 text-sm">{salary}</p>
          </div>
        </div>
        <div className="flex">
          <button className="border text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
            {job_type[0]}
          </button>
          <button className="border ml-3 text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
            {job_type[1]}
          </button>
        </div>
        <button className="border mt-5 view_details  text-white font-medium border-blue-400 rounded">
          View Details
        </button>
      </div>
    </section>
  );
};

export default FeaturedJob;