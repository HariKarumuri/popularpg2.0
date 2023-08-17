import React, { useState, useEffect } from "react";
import axios from "axios";
import Pg_Listing_Card from "./Cards/Pg_Listing_Card";
import AdsCard from './Cards/AdsCard';

const Pg_Product_List = () => {
  const [pgListings, setPgListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://popularpg.in/products/");
        setPgListings(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched or an error occurs
      }
    };

    fetchData();
  }, []);

  console.log(pgListings);

  return (
    <div className="row">
      <div className="col-lg-10">
        {isLoading ? ( // Use isLoading state to conditionally render the loading spinner
          <div className="d-flex justify-content-center">
            <div className="loading-container">
              <img
                src="https://i.postimg.cc/WpY7QKVD/popular-pg-logo.png"
                alt="Logo"
                className="spinner"
              />
            </div>
          </div>
        ) : pgListings.length === 0 ? ( // Show a message if there's no data
          <h3>
            We have no PGs to be fetched yet! <br />
            ¯\_(ツ)_/¯ Sorry, we will add soon. Thank you!
          </h3>
        ) : (
          pgListings.map((pgData, index) => (
            <Pg_Listing_Card key={index} pgData={pgData} />
          ))
        )}
      </div>
      <div className="col-lg-2">
        <AdsCard/>
      </div>
    </div>
  );
};

export default Pg_Product_List;
