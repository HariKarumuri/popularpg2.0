import React from 'react'
import ImageAd from "./../../assets/images/Ads banner test.png";
import ImageAd2 from "./../../assets/images/ads side.jpg";
import SearchBar from "../SearchBar/SearchbarHome";

const LandingAds = () => {
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
    </div>
  )
}

export default LandingAds
