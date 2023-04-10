import React from "react";
import dollarIcon from "../../assets/Icons/dollar.png";
import locationIcon from "../../assets/Icons/location.png";
import jobIcon from "../../assets/Icons/job.png";
import emilIcon from "../../assets/Icons/email.png";
import phoneIcon from "../../assets/Icons/phone.png";

const JobDetails = () => {
  return (
    <section>
      {/* Title Section */}
      <div className="custom_bg border-t">
        <div className="mx-auto max-w-7xl py-12 px-6 mb-10 ">
          <div>
            <h1 className="font-bold text-xl text-center py-12">
              Job Details
            </h1>
          </div>
        </div>
      </div>
      {/* Job Details Section */}
      <div className="mx-auto max-w-7xl px-6 mb-10">
        <div className="flex gap-4">
          <div className="w-8/12 border p-6 ">
            <p className="py-3 text-sm">
              <b>Job Description:</b> A UI/UX (User Interface/User Experience)
              designer is responsible for designing and creating engaging and
              effective interfaces for software and web applications. This
              includes designing the layout, visual design, and interactivity of
              the user interface.
            </p>
            <p className="py-3 text-sm">
              <b>Job Responsibility:</b> Collaborating with cross-functional
              teams: UI/UX designers often work closely with other teams,
              including product management, engineering, and marketing, to
              ensure that the user interface is aligned with business and
              technical requirements. You will need to be able to effectively
              communicate your design ideas and gather feedback from other team
              members.
            </p>
            <p className="py-3 text-sm">
              <b>Educational Requirements:</b>
              <p className="py-3 text-sm">
                Bachelor degree to complete any reputational university.
              </p>
            </p>
            <p className="py-3 text-sm">
              <b>Experiences:</b>
              <p className="py-3 text-sm">2-3 Years in this field.</p>
            </p>
          </div>
          <div className="w-4/12 ">
            <div className="border p-6 custom_bg rounded-md">
              <p className="py-3 text-sm font-semibold border-b">Job Details</p>
              <div className="flex pt-8 pb-2">
                <img className="h-4 w-4" src={dollarIcon} alt="" />
                <p className="ml-2 text-xs">
                  <b>Salary</b> : 100K - 150K (Per Month)
                </p>
              </div>
              <div className="flex py-2">
                <img className="h-4 w-4" src={jobIcon} alt="" />
                <p className="ml-2 text-xs">
                  <b>Job Title </b>: Product Designer
                </p>
              </div>
              <p className="pt-8 pb-3 text-sm font-semibold border-b">
                Contact Information
              </p>
              <div className="flex pt-8 pb-2">
                <img className="h-4 w-4" src={phoneIcon} alt="" />
                <p className="ml-2 text-xs">
                  <b>Phone</b>: 01750-00 00 00
                </p>
              </div>
              <div className="flex py-2">
                <img className="h-4 w-4" src={emilIcon} alt="" />
                <p className="ml-2 text-xs">
                  <b>Email</b>: info@gmail.com
                </p>
              </div>
              <div className="flex py-2">
                <img className="h-4 w-4" src={locationIcon} alt="" />
                <p className="ml-2 text-xs">
                  <b> Address</b>: Dhanmondi 32, Sukrabad Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <button className="custom_btn_bg w-full rounded-md py-2 mt-5 text-white">Apply Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
