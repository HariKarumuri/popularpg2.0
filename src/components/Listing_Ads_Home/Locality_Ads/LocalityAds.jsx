import React, { useEffect, useState, useMemo } from "react";
import LocalityAdsCard from './LocalityAdsCard';

const LocalityAds = () => {
  const [data, setData] = useState([]); // State to store the fetched data
  const [isLoading, setIsLoading] = useState(true);
  const localities = [
    'Marathahalli',
    'BTM Layout',
    'BTM Layout Stage 1',
    'BTM Layout Stage 2',
    'Electronic City',
    'Electronic City Phase 1',
    'Electronic City Phase 2',
    'Manyata Tech Park',
    'Whitefield',
    'Sarjapur Road',
    'Madiwala',
    'Koramangala',
    'HSR Layout',
    'Bellandur'
  ];

  useEffect(() => {
    // Define the URL of the API
    const apiUrl = "https://popularpg.in/products/";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        // Filter the data for each locality
        const filteredData = localities.map(locality =>
          result.filter(item => item.locality === locality)
        );
        // Set the filtered data in the state
        setData(filteredData);
        setIsLoading(false); // Data has been fetched, so set isLoading to false
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setIsLoading(false); // Error occurred, set isLoading to false
      });
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <div>
      {localities.map((locality, index) => (
        <section className="property" id={`property-${index}`} key={index}>
          <div className="container">
            <h2 className="h2 section-title">{`Listings at ${locality}`}</h2>
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
              ) : memoizedData[index].length === 0 ? (
                // Display a message if no data is found
                <div className="d-flex justify-content-center">
                  <div className="no-record-found fs-1">No data found.</div>
                </div>
              ) : (
                // Map through data and render LocalityAdsCard for each
                memoizedData[index].map((item) => (
                  <LocalityAdsCard key={item.id} item={item} />
                ))
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default LocalityAds;
