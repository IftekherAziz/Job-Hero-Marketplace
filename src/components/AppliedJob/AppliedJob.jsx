import React from 'react';
import dollarIcon from "../../assets/Icons/dollar.png";
import locationIcon from "../../assets/Icons/location.png";

const AppliedJob = () => {
    return (
      <section>
        {/* Title Section */}
        <div className="custom_bg border-t">
          <div className="mx-auto max-w-7xl py-12 px-6 mb-10 ">
            <div>
              <h1 className="font-bold text-xl text-center py-12">
                Applied Jobs
              </h1>
            </div>
          </div>
        </div>
        {/* Applied Job Section */}
        <div className="mx-auto max-w-7xl px-6 mb-20">
          <div className="flex border p-6 gap-4 rounded">
            <div className="w-3/12">
              <img
                className="w-full h-48 rounded bg-slate-100"
                src="https://raw.githubusercontent.com/IftekherAziz/Module-57/main/src/assets/images/airbnb.png"
                alt=""
              />
            </div>
            <div className="w-9/12 flex p-6 justify-between">
              <div>
                <h1 className="text-md font-semibold">Database Engineer</h1>
                <p className="text-sm py-3">Airbnb LLC</p>
                <div className="flex">
                  <button className="border text-xs py-1 px-4 text_color font-medium border-blue-400 rounded">
                    Full Time
                  </button>
                  <button className="border ml-3 text-xs py-1 px-4 text_color font-medium border-blue-400 rounded">
                    Remote
                  </button>
                </div>
                <div className="flex">
                  <div className="flex py-5 mr-5">
                    <img className="h-5 w-5" src={locationIcon} alt="" />
                    <p className="ml-2 text-xs">Dhaka, Bangladesh</p>
                  </div>
                  <div className="flex py-5">
                    <img className="h-5 w-5" src={dollarIcon} alt="" />
                    <p className="ml-2 text-xs">Salary: 100K-150K</p>
                  </div>
                </div>
              </div>
              <div className="block md:flex items-center">
                <button className="border custom_btn_bg p-2 text-white font-sm border-blue-400 rounded">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AppliedJob;