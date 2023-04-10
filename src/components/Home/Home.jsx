import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Categories from "./Categories/Categories";
import { useState, useEffect } from "react";
import dollarIcon from "../../assets/Icons/dollar.png";
import locationIcon from "../../assets/Icons/location.png";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/IftekherAziz/Module-57/main/public/categories.json"
    )
      .then((res) => res.json())
      .then((data) => setData(data.job_categories));
  }, []);

  return (
    <>
      <HomeBanner></HomeBanner>
      {/* Job Categories Start */}
      <section className="mx-auto max-w-7xl px-6 mb-20">
        <div>
          <h1 className="text-center text-4xl font-bold pt-20 pb-5">
            Career Directory
          </h1>
          <p className="text-center mb-10">
            Discover a vast array of job openings complete with comprehensive
            details to help you make informed decisions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((data) => (
            <Categories key={data.id} data={data}></Categories>
          ))}
        </div>
      </section>
      {/* Featured Jobs Start */}
      <section className="mx-auto max-w-7xl px-6 mb-5">
        <div>
          <h1 className="text-center text-4xl font-bold pb-5">Featured Jobs</h1>
          <p className="text-center mb-10">
            Find your dream job with all the resources you need. Your future
            awaits!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-8">
            <img
              className="p-2 border rounded"
              src="https://raw.githubusercontent.com/IftekherAziz/Module-57/main/src/assets/images/airbnb.png"
              alt=""
            />
            <h1 className="text-md font-semibold pt-5">
              Technical Database Engineer
            </h1>
            <p className="text-sm pt-3">Air BNB</p>
            <div className="flex">
              <div className="flex py-5 mr-5">
                <img className="h-5 w-5" src={locationIcon} alt="" />
                <p className="ml-2 text-sm">Dhaka, Bangladesh</p>
              </div>
              <div className="flex py-5">
                <img className="h-5 w-5" src={dollarIcon} alt="" />
                <p className="ml-2 text-sm">Salary : 100K - 150K</p>
              </div>
            </div>
            <div className="flex">
              <button className="border text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
                Full Time
              </button>
              <button className="border ml-3 text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
                Remote
              </button>
            </div>
            <button className="border mt-5 view_details  text-white font-medium border-blue-400 rounded">
              View Details
            </button>
          </div>
          <div className="border p-8">
            <img
              className="p-2 border rounded"
              src="https://raw.githubusercontent.com/IftekherAziz/Module-57/main/src/assets/images/airbnb.png"
              alt=""
            />
            <h1 className="text-md font-semibold pt-5">
              Technical Database Engineer
            </h1>
            <p className="text-sm pt-3">Air BNB</p>
            <div className="flex">
              <div className="flex py-5 mr-5">
                <img className="h-5 w-5" src={locationIcon} alt="" />
                <p className="ml-2 text-sm">Dhaka, Bangladesh</p>
              </div>
              <div className="flex py-5">
                <img className="h-5 w-5" src={dollarIcon} alt="" />
                <p className="ml-2 text-sm">Salary : 100K - 150K</p>
              </div>
            </div>
            <div className="flex">
              <button className="border text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
                Full Time
              </button>
              <button className="border ml-3 text-xs py-2 px-5 text_color font-medium border-blue-400 rounded">
                Remote
              </button>
            </div>
            <button className="border mt-5 view_details  text-white font-medium border-blue-400 rounded">
              View Details
            </button>
          </div>
        </div>
      </section>
      {/* See All Jobs Button */}
      <div className="mx-auto max-w-7xl px-6 mb-10 flex items-center">
        <button className="mx-auto border my-5 my_btn  text-white font-medium border-blue-400 rounded">
          See All Jobs
        </button>
      </div>
    </>
  );
};

export default Home;
