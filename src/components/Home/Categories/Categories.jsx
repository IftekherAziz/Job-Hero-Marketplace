import React from "react";
import { useState, useEffect } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./public/categories.json")
      .then((res) => res.json())
      .then((data) => setData(data.job_categories));
  }, []);

  return (
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
          <Category key={data.id} data={data}></Category>
        ))}
      </div>
    </section>
  );
};

export default Categories;
