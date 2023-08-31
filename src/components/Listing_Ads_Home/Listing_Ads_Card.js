import React from "react";
import { Link } from "react-router-dom";

const Popular_Ads_Cards = (props) => {
  const product = props.product;

  return (
    <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10 d-flex flex-column">
      <figure className="card-banner">
        <Link to="">
          <img
            src={product.cover_image}
            alt="New Apartment Nice View"
            className="img-fluid"
          />
        </Link>

        <div className="card-badge green">Beds Available</div>

        <div className="banner-actions ">
          <button className="banner-actions-btn d-flex align-items-center">
            <ion-icon name="location"></ion-icon>
            <address>{product.locality}</address>
          </button>

          <button className="banner-actions-btn">
            <ion-icon name="camera"></ion-icon>

            {/* Use the actual number of images here */}
            <span>{product.additional_images.length}</span>
          </button>
        </div>
      </figure>
      <div className="card-content p-2">
        <div className="h4 card-title">{product.product_name}</div>
        <div className="card-address">
          {product.locality}, {product.city}
        </div>

        {/* Use the actual price here */}
        <div className="card-price">
          <strong>₹{product.min_price}</strong>/Month
        </div>
      </div>
    </div>
  );
};

export default Popular_Ads_Cards;
