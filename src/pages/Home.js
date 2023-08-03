import React from "react";
import Hero from "./../components/Hero/Hero";
import AboutUs from "./AboutUs";
import Services from "./../components/Services/Services";
import Featured from "./../components/Featured/Featured";
import BlogList from "./../components/Blog/BlogList";
import Popular from "./../components/Popular/Popular";
import SearchBar from "./../components/SearchBar/SearchbarHome";
import ImageAd from "./../assets/images/Ads banner test.png";
import ImageAd2 from "./../assets/images/ads side.jpg";


const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <SearchBar />
            </div>
            <div className="row homeTitle ">
              <h1 className="d-flex justify-content-center mx-2 font-weight-bold"> <span >Simplifying </span>  <span style={{ 
                marginTop: "30px",marginLeft: "20px",marginRight: "20px",
              }} >PG </span> Life</h1>
            </div>
            <div className="row ads1test">
              <img src={ImageAd} />
            </div>
          </div>
          <div className="col-lg-4">
            <img src={ImageAd2} className="img-fluid p-3 mt-4"/>
          </div>
        </div>
      </div>

      <Hero />
      <Featured />
      {/* <Popular /> */}
      <AboutUs />
      <Services />
      <BlogList />
    </div>
  );
};

export default Home;
