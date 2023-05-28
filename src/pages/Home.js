import React from "react";
import Hero from './../components/Hero/Hero';
import AboutUs from './AboutUs';
import Services from './../components/Services/Services';
import Featured from './../components/Featured/Featured';
import BlogList from './../components/Blog/BlogList';
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Hero />
      <AboutUs />
      <Services />
      <Featured />
      <BlogList />
    </div>
  );
};

export default Home;
