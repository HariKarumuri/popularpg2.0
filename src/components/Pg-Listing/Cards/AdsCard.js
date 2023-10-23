import React, { useState, useEffect } from "react";
import axios from "axios";

const AdsCard = () => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get("https://popularpg.in/side_ads/");
        setAds(response.data);
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []);

  return (
    <div>
      {ads.map((ad, index) => (
        <div
          className="card my-2"
          style={{ width: "8rem", borderRadius: 0, marginLeft: "-1rem" }}
          key={index}
        >
          <img
            className="img-fluid"
            style={{ width: "8rem", height: "8rem", borderRadius: 0 }}
            src={ad.product.cover_image}
            alt="Card imag cap"
          />
          <div className="mx-2">
            <div
              className="text-secondary fw-bold"
              style={{ fontSize: "13px" }}
            >
              {ad.product.product_name}
            </div>
            <div className="desc text-muted fw-bold" style={{ fontSize: "13px" }}>
              For {ad.product.pg_for}
            </div>
            <div className="desc text-muted " style={{ fontSize: "13px" }}>
              {ad.product.city}
            </div>
            <div className="desc " style={{ fontSize: "12px" }}>
              {ad.product.single_sharing
                ? "Single Sharing"
                : ad.product.double_sharing
                ? "Double Sharing"
                : ad.product.triple_sharing
                ? "Triple Sharing"
                : "Multiple Sharing"}
            </div>
            <div className="text-dark fw-bold">
              Rs. {ad.product.min_price}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdsCard;
