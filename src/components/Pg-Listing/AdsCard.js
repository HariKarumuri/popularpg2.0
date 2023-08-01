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
          src="https://popularpg.s3.amazonaws.com/more_images/dozo_dwaraka_1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVU2TDJIPHIJVZY4S%2F20230801%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20230801T085804Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=2029fa751d2aca615da07fd35cfd16e6517abba4df725f8681d0d80b682248c0"
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
