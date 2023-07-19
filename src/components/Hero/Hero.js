import React from "react";
import HeroBack from "../../assets/images/popularhero.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">
              <ion-icon name="home"></ion-icon>

              <span>PG Booking Website</span>
            </p>

            <h2 className="h1 hero-title">Explore Our Verified PG's </h2>

            <div className="d-flex my-3">
              <p className="fs-5">Budget Friendly  </p><ion-icon style={{color: ' var(--orange-soda)',fontSize:"28px",marginRight:"10px",marginLeft:"2px", "--ionicon-stroke-width": "40px"}} name="checkmark"></ion-icon>
              <p className="fs-5">Amenities </p> <ion-icon style={{color: ' var(--orange-soda)',fontSize:"28px",marginRight:"10px",marginLeft:"2px", "--ionicon-stroke-width": "40px"}} name="checkmark"></ion-icon></div>
              <div className=" d-flex my-2">
              <p className="fs-5">Boys  </p><ion-icon style={{color: ' var(--orange-soda)',fontSize:"28px",marginRight:"10px",marginLeft:"2px", "--ionicon-stroke-width": "40px"}} name="checkmark"></ion-icon>
              <p className="fs-5">Girls   </p><ion-icon style={{color: ' var(--orange-soda)',fontSize:"28px",marginRight:"10px",marginLeft:"2px", "--ionicon-stroke-width": "40px"}} name="checkmark"></ion-icon>
              <p className="fs-5">UniSex </p><ion-icon style={{color: ' var(--orange-soda)',fontSize:"28px",marginRight:"10px",marginLeft:"2px", "--ionicon-stroke-width": "40px"}} name="checkmark"></ion-icon>
              </div>
              
              
            

            <Link className="btn" to="/listings" >Explore Your Pg</Link>
          </div>

          <figure className="hero-banner MobiledisplayNone">
            <img src={HeroBack} alt="Modern house model" className="w-100" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Hero;
