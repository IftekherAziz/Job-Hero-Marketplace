import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Categories from "./Categories/Categories";
import { useState, useEffect } from "react";

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
      <div className="mx-auto max-w-7xl px-6 mb-20"> 
      <div>
        <h1 className="text-center text-4xl font-bold pt-20 pb-5">
          Job Category List
        </h1>
        <p className="text-center mb-10">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((data) => (
          <Categories key={data.id} data={data}></Categories>
        ))}
      </div>
      </div>
    </>
  );
};

export default Home;
