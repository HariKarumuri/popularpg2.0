import React from "react";
import HeroBack from "../../assets/images/hero-banner.png";

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

            <h2 className="h1 hero-title">Find Your Dream PG By Us</h2>

            <p className="hero-text">
              We understand how challenging it can be to find a comfortable,
              safe, and affordable PG accommodation in a new city. That's why
              we've created Popular PG - a platform that makes it easy and
              convenient to find the best PGs in town!
            </p>

            <button className="btn">Make An Enquiry</button>
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
