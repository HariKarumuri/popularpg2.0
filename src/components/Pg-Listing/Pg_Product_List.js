import React, {useContext } from "react";
import Pg_Listing_Card from "./Cards/Pg_Listing_Card";
import AdsCard from './Cards/AdsCard';
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../Appcontext/SearchContext";
const Pg_Product_List = () => {
  const {
    pgs,
    isLoading, 
  }=useContext(SearchContext);
  return (
    <div className="row">
         <SearchBar  />
      
      <div className="col-lg-10 mt-3 col-sm-12">
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
        ) : pgs.length === 0 ? ( // Show a message if there's no data
        <div className="d-flex justify-content-center" >
            <div className="no-record-found fs-1">No record found.</div>
        </div>
        ) : (
          pgs.map((pgData, index) => (
            <Pg_Listing_Card key={index} pgData={pgData} />
          ))
        )}
      </div>
      <div className="col-lg-2  display-none-mobile">
        <AdsCard/>
      </div>
    </div>
  );
};

export default Pg_Product_List;
