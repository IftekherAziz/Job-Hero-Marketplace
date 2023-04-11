import React from 'react';
import { MapPinIcon, CurrencyBangladeshiIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ showedJob }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = showedJob;
  return (
    <section className='bg-white'>
      <div className="border p-8 rounded">
        <img className="mb-2 border rounded p-3" src={logo} alt="Company Logo" />
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
            {remote_or_onsite}
          </button>
          <button className="border ml-3 text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
            {fulltime_or_parttime}
          </button>
        </div>

        <div>
          <Link to={`/job-details/${id}`}>
            <button className="border mt-5 view_details  text-white font-medium border-blue-400 rounded">
              View Details
            </button>
          </Link>
         {/*  <Link to={`job-details/${id}`}>
            <button className="job-details-btn">View Details</button>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJob;