import React from "react";

const JobDetails = () => {
  return (
    <section>
      <div className="custom_bg border-t">
        <div className="mx-auto max-w-7xl py-12 px-6 mb-10 ">
          <div>
            <h1 className="font-semibold text-2xl text-center py-12">
              Job Details
            </h1>
          </div>
        </div>
      </div>
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
          <div className="w-4/12 border p-6 custom_bg rounded-md">
            <p className="py-3 text-md font-semibold border-b">Job Details</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
