import React from "react";
import { Link } from "react-router-dom";
import Testimg from "../../assets/images/imgage2.jpg";

const Popular_Ads_Cards = () => {
  return (
    <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10 d-flex flex-column">
      <figure className="card-banner">
        <Link to="">
          <img
            src={Testimg}
            alt="New Apartment Nice View"
            className="img-fluid"
          />
        </Link>

        <div className="card-badge green">Beds Available</div>

        <div className="banner-actions ">
          <button className="banner-actions-btn d-flex align-items-center">
            <ion-icon name="location"></ion-icon>
            <address>Electronic city</address>
          </button>

          <button className="banner-actions-btn">
            <ion-icon name="camera"></ion-icon>

            <span>4</span>
          </button>
        </div>
      </figure>
      <div className="card-content p-2">
        <div className="h4 card-title">Dozo Moon</div>
        <div className="card-address">Electronic city , 530046</div>

        <div className="card-price">
          <strong>₹11,500</strong>/Month
        </div>
      </div>
    </div>
  );
};

export default Popular_Ads_Cards;
