import React from "react";
import { Link } from "react-router-dom";
import people from "../../../assets/All_Images/people.png";

const HomeBanner = () => {
  return (
    <div className="relative overflow-hidden custom_bg">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-6 sm:static sm:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <span>        
                Take the Next <br /> Leap Towards
              </span>
              <br />
              <span className="text_color"> Your Career</span>
            </h1>
            <p className="mt-4 text-md text-gray-500">
              Discover a plethora of employment prospects, complete with
              comprehensive details to aid your decision-making process.Your
              future is within reach. Join us in your search for it.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div>
                  <img src={people} alt="" />
                </div>
              </div>
              <Link
                to="/"
                className="inline-block rounded-md border border-transparent my_btn selection:px-8 py-3 text-center font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
