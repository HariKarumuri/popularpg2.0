import React, { useState, useEffect } from "react";
import Popular_Ads_Cards from "./Popular_Ads_Cards";

const Popular_Ads = () => {
  const [popularAds, setPopularAds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://popularpg.in/popular_ads/")
      .then(response => response.json())
      .then(data => {
        setPopularAds(data);
        setIsLoading(false); // Data has been fetched, so set isLoading to false
      })
      .catch(error => {
        console.error("Error fetching popular ads:", error);
        setIsLoading(false); // Error occurred, set isLoading to false
      });
  }, []);

  return (
    <div>
      <section className="property" id="property">
        <div className="container">
          <h2 className="h2 section-title">Popular Listings</h2>
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
            ) : popularAds.length === 0 ? (
              // Display a message if no popular ads are found
              <div className="d-flex justify-content-center">
                <div className="no-record-found fs-1">No popular ads found.</div>
              </div>
            ) : (
              // Map through popularAds and render Popular_Ads_Cards for each
              popularAds.map(popularAd => (
                <Popular_Ads_Cards key={popularAd.id} popularAd={popularAd} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Popular_Ads;
