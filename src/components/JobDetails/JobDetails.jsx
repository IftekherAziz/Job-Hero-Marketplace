import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getAppliedList } from '../Utilities/Fakedb';
import { AppliedJobContext } from '../Layout/Main';
import toast from 'react-hot-toast';

const JobDetails = () => {
  const job = useLoaderData();
  const { id, job_title, address, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobContext);

  const addAppliedJobs = () => {
    const appliedListsDb = getAppliedList();
    // const alreadyApplied = appliedJobs.find(aj => aj.id === job.id);
    let toastShown = false;
    for (const id in appliedListsDb) {
      if (id === job.id && (!toastShown)) {
        toast('You have already applied 🔥');
        toastShown = true;
      }
    }
    if (!toastShown) {
      toast('Application done successfully.')
      toastShown = false;
    }
  }

  return (
    <section>
      {/* Title Section */}
      <div className="custom_bg border-t">
        <div className="mx-auto max-w-7xl py-10 px-6 mb-10 ">
          <div>
            <h1 className="font-bold text-xl text-center py-10">Job Details</h1>
          </div>
        </div>
      </div>
      {/* Job Details Section */}
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <div className="flex gap-4">
          <div className="w-8/12 border p-6 bg-white ">
            <p className="py-3 text-sm">
              <span className="font-bold">Job Description:</span>{" "}
              {job_description}
            </p>
            <p className="py-3 text-sm">
              <span className="font-bold">Job Responsibility:</span>{" "}
              {job_responsibility}
            </p>
            <div className="py-3 text-sm">
              <p className="font-bold">Educational Requirements:</p>
              <p className="py-3 text-sm">{educational_requirements}</p>
            </div>
            <div className="py-3 text-sm">
              <p className="font-bold">Experiences:</p>
              <p className="py-3 text-sm">{experiences}</p>
            </div>
          </div>
          <div className="w-4/12 ">
            <div className="border p-6 custom_bg rounded-md">
              <p className="py-3 text-sm font-semibold border-b">Job Details</p>
              <div className="flex pt-8 pb-2">
                <img
                  className="h-4 w-4"
                  src="https://i.ibb.co/8gPKz7h/dollar.png"
                  alt=""
                />
                <p className="ml-2 text-xs">
                  <span className="font-bold">Salary</span> : {salary} (per
                  year)
                </p>
              </div>
              <div className="flex py-2">
                <img
                  className="h-4 w-4"
                  src="https://i.ibb.co/smVB0bn/job.png"
                  alt=""
                />
                <p className="ml-2 text-xs">
                  <span className="font-bold">Job Title </span>: {job_title}
                </p>
              </div>
              <p className="pt-5 pb-3 text-sm font-semibold border-b">
                Contact Information
              </p>
              <div className="flex pt-5 pb-2">
                <img
                  className="h-4 w-4"
                  src="https://i.ibb.co/X3jpQPK/call.png"
                  alt=""
                />
                <p className="ml-2 text-xs">
                  <span className="font-bold">Phone</span>:{" "}
                  {contact_information[0].phone}
                </p>
              </div>
              <div className="flex py-2">
                <img
                  className="h-4 w-4"
                  src="https://i.ibb.co/BGRzY68/eamil.png"
                  alt=""
                />
                <p className="ml-2 text-xs">
                  <span className="font-bold">Email</span>:{" "}
                  {contact_information[0].email}
                </p>
              </div>
              <div className="flex py-2">
                <img
                  className="h-4 w-4"
                  src="https://i.ibb.co/HDSnmVM/Location-Icon.png"
                  alt=""
                />
                <p className="ml-2 text-xs">
                  <span className="font-bold"> Address</span>:{" "}
                  {contact_information[0].address}
                </p>
              </div>
            </div>
            <button
              onClick={() => {
                addAppliedJobs();
                addToDb(id);
              }}
              className="custom_btn_bg w-full rounded-md py-2 mt-5 text-white"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;