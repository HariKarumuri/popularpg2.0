import React,{useState ,useEffect} from 'react'
import ImageAd from "./../../assets/images/Ads banner test.png";
import ImageAd2 from "./../../assets/images/ads side.jpg";
import SearchBar from "../SearchBar/SearchbarHome";
import axios from 'axios';

const LandingAds = () => {
  const [bannerAdData, setBannerAdData] = useState(null);
  const [skyScrapperAdData, setSkyScrapperAdData] = useState(null);


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
      });
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              <SearchBar />
            </div>
            
            <div className="row homeTitle ">
              <h1 className="d-flex justify-content-center mx-2 font-weight-bold"> <span >Simplifying </span>  <span style={{ 
                marginTop: "30px",marginLeft: "20px",marginRight: "20px",
              }} >PG </span> Life</h1>
            </div>
            <div className="row BannerAd">
          {bannerAdData ? (
            <img src={bannerAdData.image} alt="Banner Ad" width="728px" height="90px" />
          ) : (
            <p>Loading banner ad...</p>
          )}
        </div>
          </div>
          <div className="col-lg-3 SkyScrapperAd">
            {skyScrapperAdData ? (
              <img src={skyScrapperAdData.image} className="p-3 mt-4" width="300px" height="600px" alt="SkyScrapper Ad" />
            ) : (
              <p>Loading sky scrapper ad...</p>
            )}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default LandingAds
