import React from "react";

const Categories = ({ data }) => {
  console.log(data);
  const { image_url, name, quantity } = data;
  return (
    <div className="">
      <div className="border p-10 bg-slate-50">
        <img className="bg-gray-200 p-2 rounded" src={image_url} alt="" />
        <h1 className="text-md font-semibold pt-10">{name}</h1>
        <p className="text-sm">{quantity}</p>
      </div>
    </div>
  );
};

export default Categories;
