import React from "react";
import { Link } from "react-router-dom";

const Popular_Ads_Cards = ({ popularAd }) => {
  return (
    <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10 d-flex flex-column">
      <Link to={`/pgdetails/${popularAd.product.id}`}>
        <figure className="card-banner">
          <img
            src={popularAd.product.cover_image}
            alt="Popular Ad"
            className="img-fluid"
          />

          {/* Use your own logic to determine the badge */}
          <div className="card-badge green">New Listing</div>

          <div className="banner-actions ">
            <button className="banner-actions-btn d-flex align-items-center">
              <ion-icon name="location"></ion-icon>
              <address>{popularAd.locality}</address>
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="camera"></ion-icon>

              {/* Use the actual number of images here */}
              <span>{popularAd.product.additional_images.length}</span>
            </button>
          </div>
        </figure>
        <div className="card-content p-2">
          <div className="h4 card-title">{popularAd.product.product_name}</div>
          <div className="card-address">{popularAd.locality}</div>
          <div className="card-price">
            <strong>₹{popularAd.product.min_price}</strong>/Month
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Popular_Ads_Cards;
