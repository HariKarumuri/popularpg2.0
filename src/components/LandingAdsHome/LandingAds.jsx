import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchbarHome';
import axios from 'axios';
import defaultBannerImage from "../../assets/images/Banner.jpg"
import defaultSkyScrapperImage from "../../assets/images/SkyScarpper.jpg"

const LandingAds = () => {
  const [bannerAdData, setBannerAdData] = useState(null);
  const [skyScrapperAdData, setSkyScrapperAdData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios.get('https://popularpg.in/banner_ads/')
      .then(response => {
        setBannerAdData(response.data);
      })
      .catch(error => {
        console.error('Error fetching banner ad data:', error);
      });

    // Fetch SkyScrapper Ad data from the API using Axios
    axios.get('https://popularpg.in/sky_scrapper_ads/')
      .then(response => {
        setSkyScrapperAdData(response.data);
      })
      .catch(error => {
        console.error('Error fetching sky scrapper ad data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-lg-9">
            <div className="row">
              <SearchBar />
            </div>

            <div className="row homeTitle ">
              <h1 className="d-flex justify-content-center align-items-center mx-2 font-weight-bold">
                <span>Simplifying</span> <span style={{
                  marginTop: "30px", marginLeft: "20px", marginRight: "20px",
                }}>PG</span> Life
              </h1>
            </div>
            {/* <div className="row BannerAd d-flex justify-content-center align-items-center">
              {!isLoading && bannerAdData ? (
                <img src={bannerAdData.image} alt="Banner Ad" width="728px" height="90px" />
              ) : (
                <img src={defaultBannerImage} alt="Default Banner Ad" width="728px" height="90px" />
              )}
            </div> */}
          </div>
          {/* <div className="col-lg-3 SkyScrapperAd d-flex justify-content-center align-items-center">
            {!isLoading && skyScrapperAdData ? (
              <img src={skyScrapperAdData.image} className="p-3 mt-4" width="300px" height="250px" alt="SkyScrapper Ad" />
            ) : (
              <img src={defaultSkyScrapperImage} className="p-3 mt-4" width="300px" height="250px" alt="Default SkyScrapper Ad" />
            )}
          </div> */}
        </div>

      </div>
    </div>
  )
}

export default LandingAds;
