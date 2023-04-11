import React from "react";

const JobCategory = ({ category }) => {
  const { image_url, name, quantity } = category;
  return (
    <div className="border p-10 bg-white rounded-md">
      <img className="bg-white border p-2 rounded" src={image_url} alt="" />
      <h1 className="text-md font-semibold pt-5">{name}</h1>
      <p className="text-xs">{quantity}</p>
    </div>
  );
};

export default JobCategory;
