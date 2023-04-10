import React from "react";

const Categories = () => {

  return (
    <div className="mx-auto max-w-7xl px-6 mb-20">
      <h1 className="text-center text-4xl font-bold pt-20 pb-5">
        Job Category List
      </h1>
      <p className="text-center mb-10">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border p-10 bg-slate-50">
          <img
            className="bg-gray-200 p-2 rounded"
            src="/src/assets/Icons/accounts 1.png"
            alt=""
          />
          <h1 className="text-md font-semibold pt-10">Accounts</h1>
          <p className="text-sm">300 Jobs Available</p>
        </div>
        <div className="border p-10 bg-slate-50">
          <img
            className="bg-gray-200 p-2 rounded"
            src="/src/assets/Icons/accounts 1.png"
            alt=""
          />
          <h1 className="text-md font-semibold pt-10">Accounts</h1>
          <p className="text-sm">300 Jobs Available</p>
        </div>
        <div className="border p-10 bg-slate-50">
          <img
            className="bg-gray-200 p-2 rounded"
            src="/src/assets/Icons/accounts 1.png"
            alt=""
          />
          <h1 className="text-md font-semibold pt-10">Accounts</h1>
          <p className="text-sm">300 Jobs Available</p>
        </div>
        <div className="border p-10 bg-slate-50">
          <img
            className="bg-gray-200 p-2 rounded"
            src="/src/assets/Icons/accounts 1.png"
            alt=""
          />
          <h1 className="text-md font-semibold pt-10">Accounts</h1>
          <p className="text-sm">300 Jobs Available</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
