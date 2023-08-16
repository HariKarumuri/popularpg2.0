import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import NoimgAvailable from "../../../assets/images/NO-Img-Avil.png";

const Pg_Listing_Card = ({ pgData }) => {
  return (
    <div>
      <div className="card mb-3 mx-auto position-relative cbackgrnd responsiveness">
        <div className="d-flex">
          <div class="trapezoid3">
            <span className="brand d-flex text-capitalize">
              {pgData.pg_for}
            </span>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-4" style={{ zIndex: 1 }}>
            {pgData.additional_images.length > 0 ? (
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showArrows={false}
                showThumbs={false}
              >
                {pgData.additional_images.map((image, index) => (
                  <div className="slide" key={index}>
                    <img
                      style={{ height: "230px", width: "300px" }}
                      className="img-fluid p-1"
                      src={image.image}
                      alt={`Image ${index}`}
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <img
                style={{ height: "230px", width: "300px" }}
                className="img-fluid p-1"
                src={NoimgAvailable} // Replace with your default image path
                alt="No Additional Images"
              />
            )}
          </div>
          <div className="col-md-8">
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
                <h6 className="name mr-2 text fw-bold">
                  {pgData.product_name}
                </h6>
                <h6 className="text-muted mx-2">{pgData.locality}</h6>
              </div>
              <div class="d-lg-none">
                <div className="d-flex justify-content-center">
                  <hr
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
              <div class="d-none d-lg-block">
                <hr
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
              <div class="d-none d-lg-block">
                <hr
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
              <p className="desc text-muted d-flex">
                <div className="para_icons">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                {pgData.description}
              </p>

              <div
                className="d-flex flex-wrap  justify-content-start"
                style={{ marginTop: "-1.3 rem" }}
              >
                <Link
                  to={`/pgdetails/${pgData.id}`}
                  className="btn btn-danger mr-2"
                >
                  View more details
                </Link>
                <Link
                  to={`contact-details/${pgData.id}`} // Link to the ContactDetailsPage with the product ID as a parameter
                  className="btn2 mx-5"
                >
                  View Phone No.
                </Link>
                <span className="PgPropertyId">PgPropertyId:{pgData.id}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg_Listing_Card;