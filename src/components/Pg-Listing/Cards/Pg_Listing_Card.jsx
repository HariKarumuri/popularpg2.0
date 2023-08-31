import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import NoimgAvailable from "../../../assets/images/NO-Img-Avil.png";

const Pg_Listing_Card = ({ pgData }) => {
  return (
    <div className="Pg_Listing_Card">
      <div className="card mb-3 mx-auto position-relative cbackgrnd responsiveness ">
        <div className="d-flex">
          <div class="trapezoid3">
            <span className="brand d-flex text-capitalize">
              {pgData.pg_for}
            </span>
          </div>
        </div>
        <div className="listing-card row g-0">
          <div className=" col-md-4 Carosel-div col-4" style={{ zIndex: 1 }}>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showArrows={false}
              showThumbs={false}
            >
              {pgData ? (
                pgData.additional_images &&
                pgData.additional_images.length > 0 ? (
                  pgData.additional_images.map((img) => {
                    var url = img.image;
                    return (
                      <div className="slide" key={url}>
                        <img
                          style={{ height: "200px", width: "260px" }}
                          className="img-fluid mt-3"
                          src={url}
                          alt="demo img"
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="slide">
                    <img
                      style={{ height: "200px", width: "260px" }}
                      className="img-fluid mt-3"
                      src={pgData.cover_image}
                      alt="Property Images"
                    />
                  </div>
                )
              ) : null}
            </Carousel>
          </div>

          <div className="col-md-8 Listing-card-body col-8">
            <div className="row">
              <div className="card-body">
                <div className="line1">
                  <h5 className="card-title rate text-danger mr-2">
                    Rs. {pgData.min_price}
                  </h5>
                  <h6>
                    <small className="text-muted mx-2">Onwards</small>
                  </h6>
                  <h6>
                    {pgData.meals_available && (
                      <span className="badge badge-color mx-2">
                        Food Included
                      </span>
                    )}
                  </h6>
                  <h6>
                    {pgData.total_beds > 4 && (
                      <span className="badge bg-green-outline mx-2 d-flex">
                        <ion-icon name="checkmark-outline"></ion-icon>Beds
                        available
                      </span>
                    )}
                  </h6>
                </div>
                <br />
                <div className="line1">
                  <h6 className="name mr-2 text fw-bold listing-product-name">
                    {pgData.product_name}
                  </h6>
                  <h6 className="text-muted mx-2">{pgData.locality}</h6>
                </div>
                <div class="d-lg-none ">
                  <div className="d-flex justify-content-center">
                    <hr
                      className="line-divider"
                      style={{
                        background: "#a4a4a4",
                        color: "#cbcbcb",
                        borderColor: "#cbcbcb",
                        height: "2px",
                        marginBottom: "2px",
                        marginTop: "2px",
                        width: "50%",
                      }}
                    />
                  </div>
                </div>
                

                <div className="line3 sharing">
                  <span className="d-inline-block mx-1">Available Beds :</span>
                  {pgData.single_sharing && (
                    <span className="d-inline-block">Single </span>
                  )}
                  {pgData.double_sharing && (
                    <span className="d-inline-block">,Double </span>
                  )}
                  {pgData.triple_sharing && (
                    <span className="d-inline-block">,Triple</span>
                  )}
                </div>

                <div class="d-lg-none">
                  <div className="d-flex justify-content-center">
                    <hr
                    className="line-divider"
                      style={{
                        background: "#a4a4a4",
                        color: "#cbcbcb",
                        borderColor: "#cbcbcb",
                        height: "2px",
                        marginBottom: "2px",
                        marginTop: "2px",
                        width: "50%",
                      }}
                    />
                  </div>
                </div>
                <div class="d-none d-lg-block ">
                  <hr
                  className="line-divider"
                    style={{
                      background: "#a4a4a4",
                      color: "#cbcbcb",
                      borderColor: "#cbcbcb",
                      height: "2px",
                      marginBottom: "2px",
                      marginTop: "2px",
                      width: "50%",
                    }}
                  />
                </div>
                <p className="listing-address text-muted d-flex">
                  <div className="para_icons">
                    <ion-icon name="location-outline"></ion-icon>
                  </div>
                  {pgData.address}
                </p>
              </div>
            </div>
            <div className="row button-box">
              <div className="d-flex ">
                <Link
                  to={`/pgdetails/${pgData.id}`}
                  className="btn btn-danger mb-2 mb-md-0 me-md-2"
                >
                  View more details
                </Link>
                <Link
                  to={`contact-details/${pgData.id}`}
                  className="btn2 mx-5 view-number-btn"
                >
                  View Phone No.
                </Link>
                <span className="PgPropertyId mb-2 mb-md-4 mx-md-2  d-none d-sm-inline">
                  PgPropertyId:{pgData.id}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg_Listing_Card;
