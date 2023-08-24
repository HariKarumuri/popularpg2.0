import React from "react";
import Popular_Ads_Cards from "../Listing_Ads_Card";

const Popular_Ads = () => {
  return (
    <div>
      <section className="property" id="property">
        <div className="container">
          <h2 className="h2 section-title">Popular Listings</h2>
          <div className="property-list has-scrollbar row m-3  p-3">
            <Popular_Ads_Cards />
            <Popular_Ads_Cards />
            <Popular_Ads_Cards />
            <Popular_Ads_Cards />
            <Popular_Ads_Cards />
            <Popular_Ads_Cards />

          </div>
        </div>
      </section>
    </div>
  );
};

export default Popular_Ads;
