import React from "react";
import Hero from "./../components/Hero/Hero";
import AboutUs from "./AboutUs";
import Services from "./../components/Services/Services";

import BlogList from "./../components/Blog/BlogList";


import LandingAds from './../components/LandingAdsHome/LandingAds';
import Popular_Ads from "../components/Listing_Ads_Home/Popular_Ads/Popular_Ads";
import Premium_Ads from "../components/Listing_Ads_Home/Premium_Ads/Premium_Ads";



const Home = () => {
  return (
    <div>
      <LandingAds/>
      {/* <Hero /> */}
      <Premium_Ads/>
      <Popular_Ads/>
      {/* <Featured />
      <Popular />
      <AboutUs />
      <Services />
      <BlogList /> */}
    </div>
  );
};

export default Home;
