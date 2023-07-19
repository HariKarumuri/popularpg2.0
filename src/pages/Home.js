import React from "react";
import Hero from './../components/Hero/Hero';
import AboutUs from './AboutUs';
import Services from './../components/Services/Services';
import Featured from './../components/Featured/Featured';
import BlogList from './../components/Blog/BlogList';

const Home = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <AboutUs />
      <Services />
      <BlogList />
    </div>
  );
};

export default Home;
