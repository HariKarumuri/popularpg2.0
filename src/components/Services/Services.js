import React from "react";
import Service1 from "../../assets/images/service-1.png";
import Service2 from "../../assets/images/service-2.png";
import Service3 from "../../assets/images/service-3.png";

const Services = () => {
  return (
    <div>
      <section className="service" id="service">
        <div className="container">
          <p className="section-subtitle">Our Services</p>

          <h2 className="h2 section-title">Our Main Focus</h2>

          <ul className="service-list">
            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={Service1} alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Rent a Home</a>
                </h3>

                <p className="card-text">
                  Over 1 million+ fully furnished homes for rent available on
                  the website, we can match you with your perfect home.
                </p>

                <a href="#" className="card-link">
                  <span>Explore Rentals</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={Service2} alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Book a PG</a>
                </h3>

                <p className="card-text">
                  With thousands of PG accommodations listed on our website, we
                  can match students and professionals .
                </p>

                <a href="#" className="card-link">
                  <span>Explore PGs</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              </div>
            </li>

            <li>
              <div className="service-card">
                <div className="card-icon">
                  <img src={Service3} alt="Service icon" />
                </div>

                <h3 className="h3 card-title">
                  <a href="#">Find A Partner</a>
                </h3>

                <p className="card-text">
                  With numerous PG partnerships, our website can help you find
                  the perfect PG accommodation that feels like home.
                </p>

                <a href="#" className="card-link">
                  <span>Contact Admin</span>

                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Services;
