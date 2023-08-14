import React from "react";
import Hero from "./../components/Hero/Hero";
import AboutUs from "./AboutUs";
import Services from "./../components/Services/Services";
import Featured from "./../components/Featured/Featured";
import BlogList from "./../components/Blog/BlogList";
import Popular from "../components/PopularProjectsHome/Popular";

import LandingAds from './../components/LandingAdsHome/LandingAds';



const Home = () => {
  return (
    <div>
      <LandingAds/>
      <Hero />
      {/* <Featured />
      <Popular />
      <AboutUs />
      <Services />
      <BlogList /> */}
    </div>
  );
};

export default Home;
