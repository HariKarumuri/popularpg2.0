import React from "react";
import Premium_Ads_Cards from"../Listing_Ads_Card";


const Premium_Ads = () => {
  return (
    <div>
      <section className="property" id="property">
        <div className="container">
          <h2 className="h2 section-title">Premium Listings</h2>
          <div className="property-list has-scrollbar row m-3  p-3">
            <Premium_Ads_Cards/>
            <Premium_Ads_Cards/>
            <Premium_Ads_Cards/>
            <Premium_Ads_Cards/>
            <Premium_Ads_Cards/>
            <Premium_Ads_Cards/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium_Ads;
