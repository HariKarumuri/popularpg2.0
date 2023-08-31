import React from "react";
import { Link } from "react-router-dom";

const Premium_Ads_Cards = ({ premiumAd }) => {
  return (
    <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10 d-flex flex-column">
      <figure className="card-banner">
        <Link to="">
          <img
            src={premiumAd.product.cover_image}
            alt="Premium Ad"
            className="img-fluid"
          />
        </Link>

        <div className="card-badge green">Beds Available</div>

        <div className="banner-actions ">
          <button className="banner-actions-btn d-flex align-items-center">
            <ion-icon name="location"></ion-icon>
            <address>{premiumAd.product.locality}</address>
          </button>

          <button className="banner-actions-btn">
            <ion-icon name="camera"></ion-icon>

            {/* Use the actual number of images here */}
            <span>{premiumAd.product.additional_images.length}</span>
          </button>
        </div>
      </figure>
      <div className="card-content p-2">
        <div className="h4 card-title">{premiumAd.product.product_name}</div>
        <div className="card-address">{premiumAd.locality}</div>
        <div className="card-price">
          <strong>₹{premiumAd.product.min_price}</strong>/Month
        </div>
      </div>
    </div>
  );
};

export default Premium_Ads_Cards;
