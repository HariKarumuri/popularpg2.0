import React, { useState, useEffect } from "react";
import axios from "axios";
import Pg_Listing_Card from "./Cards/Pg_Listing_Card";
import AdsCard from './Cards/AdsCard';
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from 'react-router-dom';
const Pg_Product_List = () => {
  const [pgListings, setPgListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state
  const [copypgs, setCopypgs] = useState([]);
  const location = useLocation();
  const { state } = location;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://popularpg.in/products/");
        setPgListings(response.data);
        setCopypgs(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false); // Set loading to false once data is fetched or an error occurs
      }
    };

    fetchData();
  }, []);
  const setloadingfalseafter3sec = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  console.log(pgListings);
 
  return (
    <div className="row">
         {state? <SearchBar gende={state.gender?state.gender:""} locatio={state.locality?state.locality:""} occupancytyp={state.occupancytype?state.occupancytype:""} setloadingfalseafter3sec={setloadingfalseafter3sec} pgs={pgListings} setpgs={setPgListings} copypgs={copypgs}  setIsLoading={setIsLoading} />
      :<SearchBar gende={""} locatio={""} occupancytyp={""}  pgs={pgListings} setpgs={setPgListings} setloadingfalseafter3sec={setloadingfalseafter3sec} copypgs={copypgs}  setIsLoading={setIsLoading} />}
      <div className="col-lg-10 mt-3">
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
        <div className="d-flex justify-content-center" >
            <div className="no-record-found fs-1">No record found.</div>
        </div>
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
