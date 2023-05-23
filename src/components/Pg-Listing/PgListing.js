import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
const PgListing = () => {
  return (
    <div>
      <div className="card mb-3 mx-auto cbackgrnd responsiveness">
        <div className="d-flex">
          <div className="trapezoid1">
            <span className="brand d-flex">Brand new</span>
          </div>
          <div className="trapezoid2">
            <span className="brand d-flex">Partner verified</span>
          </div>
          <div className="trapezoid3">
            <span className="brand d-flex">Girls</span>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-md-4 " style={{ zIndex: 1 }}>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showArrows={false}
              showThumbs={false}
            >
              <Link to="/pgdetails" className="slide">
                <img
                  style={{ height: "260px", width: "300px" }}
                  className="img-fluid mt-3"
                  src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Dec/27/Photo_h400_w540/GR2-292167-1597519_400_540.jpg"
                  alt="demo img"
                />
              </Link>
              <Link to="/pgdetails" className="slide">
                <img
                  style={{ height: "260px", width: "300px" }}
                  className="img-fluid  mt-3 "
                  src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/May/12/Photo_h400_w540/GR2-292167-1746859_400_540.jpeg"
                  alt="demo img"
                />
              </Link>
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Link to="/pgdetails" className="line1">
                <h5 className="card-title rate text-danger mr-2">Rs. 12,000</h5>
                <h6>
                  <small className="text-muted mx-2">Onwards</small>
                </h6>
                <h6>
                  <span className="badge badge-color mx-2">Food Included</span>
                </h6>
                <h6>
                  <span className="badge bg-green-outline mx-2 d-flex">
                    <ion-icon name="checkmark-outline"></ion-icon>Beds available
                  </span>
                </h6>
              </Link>
              <Link to="/pgdetails" className="line1">
                <h6 className="name mr-2 text-secondary fw-bold">
                  Gharpayy PG/Paying Guest
                </h6>
                <h6 className="text-muted mx-2"> in Koramangala</h6>
              </Link>
              <div className="d-lg-none">
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
              <div className="d-none d-lg-block">
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

              <Link to="/pgdetails" className="line3 sharing text-muted">
                <div className="type1 mr-2">
                  <p className="text-muted fs-6">Twin sharing</p>
                  <p style={{ marginTop: "-0.7rem" }}> Rs. 16,000</p>
                </div>
                <div className="verticleLine mx-3"></div>
                <div className="type2 mx-3">
                  <p className="text-muted fs-6">Twin sharing</p>
                  <p style={{ marginTop: "-0.7rem" }}> Rs. 16,000</p>
                </div>
                <div className="verticleLine2 mx-3"></div>
                <div className="type3 mx-3">
                  <p className="text-muted fs-6">Twin sharing</p>
                  <p style={{ marginTop: "-0.7rem" }}> Rs. 16,000</p>
                </div>
              </Link>
              <div className="d-lg-none">
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
              <div className="d-none d-lg-block">
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
                <div className="para_icons text-success">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                PG 50 in Bangalore - Boys and Girls Different Building.
                <div className="para_icons_grp d-flex justify-content-end">
                  <ion-icon name="wifi-outline"></ion-icon>
                  <ion-icon name="snow-outline"></ion-icon>
                </div>
              </p>
              <p className="desc text-muted" style={{ marginTop: "-0.6rem" }}>
                Move into Gharpayy PG, A Professionally Managed PG Home in
                Koramangala.
              </p>
              <div className="d-flex flex-wrap justify-content-center ">
              <button type="button" className="btn btn-danger mr-2">
                View Phone No.
              </button>
              <button type="button" className="btn2  mx-2">
                Contact Owner
              </button>
              <button
                type="button"
                className="btn2  mx-2"
                style={{
                  background: "none",
                  color: "red",
                  border: "none",
                }}
              >
                <b>view on map</b>
              </button>
              </div>
              
            </div>
          </div>
          <div className="mx-2">
            <h6>
              <span className="badge badge-color mr-2">
                0.2 Km from Green Wood High Interna
              </span>
            </h6>
            <h6>
              <span className="badge badge-color mx-2">
                0.2 Km from Green Wood High Interna
              </span>
            </h6>
            <h6>
              <span className="badge badge-color mx-2">
                0.2 Km from Green Wood High Interna
              </span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgListing;
