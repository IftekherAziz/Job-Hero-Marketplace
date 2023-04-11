import React from "react";
import HomeBanner from "./HomeBanner/HomeBanner";
import Categories from "./Categories/Categories";
import { useState, useEffect } from "react";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <>
      <HomeBanner></HomeBanner>
      <Categories></Categories>
      <FeaturedJobs></FeaturedJobs>     
    </>
  );
};

export default Home;
