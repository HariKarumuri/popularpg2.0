import React from "react";
import { Link } from "react-router-dom";
import LocalityAds from "./LocalityAds";

const LocalityAdsCard = ({ item }) => {
  return (
    <div
      className="property-card col-lg-4 col-md-5 col-sm-10 col-10 d-flex flex-column"
      key={item.id}
    >
      <Link to={`/pgdetails/${item.id}`}>
        <figure className="card-banner">
          <img src={item.cover_image} alt="Popular Ad" className="img-fluid" />

          {/* Use your own logic to determine the badge */}
          <div className="card-badge green">New Listing</div>

          <div className="banner-actions ">
            <button className="banner-actions-btn d-flex align-items-center">
              <ion-icon name="location"></ion-icon>
              <address>{item.locality}</address>
            </button>

            <button className="banner-actions-btn">
              <ion-icon name="camera"></ion-icon>

              {/* Use the actual number of images here */}
              {item.additional_images && item.additional_images.length > 0 && (
                <span>{item.additional_images.length}</span>
              )}
            </button>
          </div>
        </figure>
        <div className="card-content p-2">
          <div className="h4 card-title">{item.product_name}</div>
          <div className="card-address">{item.locality}</div>
          <div className="card-price">
            <strong>₹{item.min_price}</strong>/Month
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LocalityAdsCard;
