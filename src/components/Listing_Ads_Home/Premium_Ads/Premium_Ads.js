import React, { useState, useEffect } from "react";
import Premium_Ads_Cards from "./Premium_Ads_Cards"; // Import your Premium Ads Card component

const Premium_Ads = () => {
  const [premiumAds, setPremiumAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://popularpg.in/premium_ads/")
      .then(response => response.json())
      .then(data => {
        setPremiumAds(data);
        setIsLoading(false); // Data has been fetched, so set isLoading to false
      })
      .catch(error => {
        console.error("Error fetching premium ads:", error);
        setIsLoading(false); // Error occurred, set isLoading to false
      });
  }, []);

  // Filter out active premium ads
  const activePremiumAds = premiumAds.filter(premiumAd => premiumAd.is_active);

  return (
    <div>
      <section className="property" id="property">
        <div className="container">
          <h2 className="h2 section-title">Premium Listings</h2>
          <div className="property-list has-scrollbar row m-3 p-3">
            {isLoading ? (
              // Display loading spinner while fetching data
              <div className="d-flex justify-content-center">
                <div className="loading-container">
                  <img
                    src="https://i.postimg.cc/WpY7QKVD/popular-pg-logo.png"
                    alt="Logo"
                    className="spinner"
                  />
                </div>
              </div>
            ) : activePremiumAds.length === 0 ? (
              // Display a message if no active premium ads are found
              <div className="d-flex justify-content-center">
                <div className="no-record-found fs-1">No active premium ads found.</div>
              </div>
            ) : (
              // Map through activePremiumAds and render Premium_Ads_Cards for each
              activePremiumAds.map(premiumAd => (
                <Premium_Ads_Cards key={premiumAd.id} premiumAd={premiumAd} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Premium_Ads;
