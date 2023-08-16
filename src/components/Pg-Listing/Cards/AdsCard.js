import React from "react";

const AdsCard = () => {
  return (
    <div>
      <div
        className="card my-2"
        style={{ width: "8rem", borderRadius: 0, marginLeft: "-1rem" }}
      >
        <img
          className="img-fluid"
          style={{ width: "8rem",height: "8rem",borderRadius: 0 }}
          src="dummy"
          alt="Card imag cap"
        />
        <div className="mx-2">
          <div className=" text-secondary fw-bold" style={{ fontSize:"13px" }}>
            Dozo Moon Coliving PG
          </div>
          <div className="desc text-muted fw-bold" style={{ fontSize:"13px" }} >For boys & girls</div>
          <div className="desc text-muted " style={{ fontSize:"13px" }} >Banglore</div>
          <div className="desc " style={{ fontSize:"12px" }} >Single , Double & Triple Sharing</div>
          <div className=" text-dark fw-bold" >Rs. 4000</div>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;
