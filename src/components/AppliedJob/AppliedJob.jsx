import React from "react";
import { Link } from "react-router-dom";

const AppliedJob = ({ shownJob }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    id,
    location,
    salary,
  } = shownJob;
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 mt-3 bg-white rounded-md gap-y-4 md:gap-y-0 md:gap-4 border drop-shadow-sm p-3 md:p-5">
      <div className="col-span-1 min-h-[25vh] flex justify-center items-center bg-white rounded-md">
        <img className="w-full h-full object-contain border px-8" src={logo} alt="Logo" />
      </div>
      <div className="col-span-3 flex flex-col pt-5">
        <p className="font-semibold text-md">{job_title}</p>
        <p className="text-gray-700 text-sm my-2">{company_name}</p>
        <div className="flex gap-2 ">
          <button className="border text_color text-xs py-2 px-4 text_color font-medium border-blue-400 rounded">
            {remote_or_onsite}
          </button>
          <button className="border text_color ml-3 text-xs py-2 px-4 text_color font-medium border-blue-400 rounded">
            {fulltime_or_parttime}
          </button>
        </div>
        <div className="flex gap-3">
          <div className="flex py-5 mr-5">
            <img
              className="h-5 w-5"
              src="https://i.ibb.co/QpK5MRY/Frame-4.png"
              alt=""
            />
            <p className="ml-2 text-xs">{location}</p>
          </div>
          <div className="flex py-5">
            <img
              className="h-5 w-5"
              src="https://i.ibb.co/8gPKz7h/dollar.png"
              alt=""
            />
            <p className="ml-2 text-xs">Salary: {salary}</p>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <div>
          <Link to={`/job-details/${id}`}>
            <button className="border custom_btn_bg px-3 py-2 text-white font-sm border-blue-400 rounded">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
