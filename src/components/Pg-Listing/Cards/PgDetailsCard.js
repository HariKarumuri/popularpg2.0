import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PgAreaAmenities from "../Util/Pg_Area_Amenities";
import PgMap from "../Util/pg_map";
import PGScrollBar from "../Util/pg_scroll_nav";
import { Link } from "react-scroll";
import { Link as Linker } from "react-router-dom";
import GalleryModal from "./../Util/GalleryModal";

const PgDetailsCard = ({ pg }) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);

  const openGalleryModal = () => {
    setIsGalleryModalOpen(true);
  };

  const closeGalleryModal = () => {
    setIsGalleryModalOpen(false);
  };
  return (
    <div className="PgDetailsCard">
      <div className="bg_color">
        <>
          {" "}
          {pg ? (
            <>
              <div
                className="PgDetailsCard-topsec bg-white"
                style={{
                  paddingLeft: "10%",
                  paddingRight: "10%",
                }}
              >
                <div className="row gx-2">
                  <div className="col-md-3">
                    <div className="line1 ">
                      <h6>
                        <small className="text-muted mx-2">Rent/Bed</small>
                      </h6>
                      <div className="d-flex flex-wrap">
                        <div className="fs-3"> Rs.{pg.min_price}</div>
                        <p
                          className="text-secondary"
                          style={{
                            textAlign: "center",
                            paddingTop: "12px",
                            marginLeft: "5px",
                          }}
                        >
                          onwards
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-9">
                    <div className="d-flex">
                      <div className="trapez1">
                        <span className="brand d-flex">&#x2713; Brand new</span>
                      </div>
                      <div className="trapez2">
                        <span className="brand d-flex">
                          {" "}
                          &#x2713;Partner verified
                        </span>
                      </div>
                    </div>
                    <div className="line1">
                      <h3 className="name mr-2 text-dark">{pg.pg_name}</h3>
                    </div>
                    <br /> <br />
                    <p
                      className="fw-light d-flex"
                      style={{ marginTop: "-35px" }}
                    >
                      Occupancy type :
                      <p className=" text-decoration-underline">
                        Double , Single , Triple
                      </p>
                    </p>
                    <div style={{ marginTop: "-15px" }}>
                      <h6>
                        {pg.pg_for ? (
                          <span className="badge badge-color mx-2">
                            For {pg.pg_for}
                          </span>
                        ) : null}
                      </h6>
                      <h6>
                        <span className="badge badge-color mx-2">
                          Preferred {pg.best_suited_for}
                        </span>
                      </h6>
                      <h6>
                        {pg.meals_available ? (
                          <span className="badge badge-color mx-2">
                            meals available
                          </span>
                        ) : null}
                      </h6>

                      <h6>
                        <span className="badge bg-green-outline mx-2 d-flex">
                          <ion-icon name="checkmark-outline"></ion-icon>Beds
                          available
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="verticleLinepg"></div>
              <PGScrollBar />
              <div id="property">
                <div className="card mb-3 mx-auto my-2 responsiveness">
                  <div className="row g-0">
                    <div className="col-md-4 " style={{ zIndex: 1 }}>
                      <Carousel
                        autoPlay
                        infiniteLoop
                        showStatus={false}
                        showArrows={false}
                        showThumbs={false}
                      >
                        {pg ? (
                          pg.additional_images &&
                          pg.additional_images.length > 0 ? (
                            pg.additional_images.map((img) => {
                              var url = img.image;
                              return (
                                <div className="slide" key={url}>
                                  <img
                                    style={{ height: "260px", width: "300px" }}
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
                                style={{ height: "260px", width: "300px" }}
                                className="img-fluid mt-3"
                                src={pg.cover_image}
                                alt="demo img"
                              />
                            </div>
                          )
                        ) : null}
                      </Carousel>
                      <div className="container hideonsmall">
                        <div
                          className="row"
                          style={{ maxHeight: "100px", margin: "auto" }}
                        >
                          <div className="col rounded text-center px-3 badge-color my-2 mx-2 ">
                            <button
                              className="text-dark fs-6"
                              onClick={openGalleryModal}
                            >
                              More Photos
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="line1 d-flex justify-content-between flex-wrap">
                          <h6 className="name mr-2 text-dark fw-bold">
                            {pg.locality}
                          </h6>
                          <Link
                            to="PgMap"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={300}
                            className="d-flex fw-light fs-6"
                          >
                            <ion-icon name="location-outline"></ion-icon>view on
                            map
                          </Link>
                        </div>
                        <div className="">
                          <p>{pg.address}</p>
                        </div>
                        <table className="table visibleon360">
                          <div className="d-flex justify-content-between visibleon360 flex-wrap">
                            <div className="text-muted fw-light mx-3">
                              Deposit Amount
                              <span className="fw-normal mx-3">
                                {pg.security_deposite
                                  ? pg.security_deposite
                                  : "-"}
                              </span>
                            </div>
                            <div className="text-muted fw-light mx-3">
                              Maintenance{" "}
                              <span className="fw-normal mx-3">-</span>
                            </div>
                            <div className="text-muted fw-light mx-3">
                              Notice Period
                              <span className="fw-normal mx-3">
                                {pg.notice_period ? pg.notice_period : "-"}
                              </span>
                            </div>
                            <div className="text-muted fw-light mx-3">
                              Electricity Charges
                              <span className="fw-normal mx-3">
                                {pg.electric_charge ? pg.electric_charge : "-"}
                              </span>
                            </div>
                          </div>
                        </table>
                        <table className="table visibleon360 ">
                          <div className="d-flex justify-content-center visibleon360 flex-wrap">
                            <div className="text-muted fw-light rounded my-2">
                              <div
                                className="column-bg rounded "
                                style={{
                                  backgroundColor: "#e6e6e6",
                                  width: "10rem",
                                }}
                              >
                                Single Sharing
                                <span className="fw-normal">
                                  ₹
                                  {pg.single_sharing_price
                                    ? pg.single_sharing_price
                                    : "NA"}
                                </span>
                              </div>
                            </div>
                            <div className="text-muted fw-light rounded my-2">
                              <div
                                className="column-bg rounded "
                                style={{
                                  backgroundColor: "#e6e6e6",
                                  width: "10rem",
                                }}
                              >
                                Double Sharing
                                <span className="fw-normal">
                                  ₹
                                  {pg.double_sharing_price
                                    ? pg.double_sharing_price
                                    : "NA"}
                                </span>
                              </div>
                            </div>
                            <div className="text-muted fw-light rounded my-2">
                              <div
                                className="column-bg rounded "
                                style={{
                                  backgroundColor: "#e6e6e6",
                                  width: "10rem",
                                }}
                              >
                                Triple Sharing
                                <span className="fw-normal">
                                  ₹
                                  {pg.triple_sharing_price
                                    ? pg.triple_sharing_price
                                    : "NA"}
                                </span>
                              </div>
                            </div>
                            <div className="text-muted fw-light rounded my-2">
                              <div
                                className="column-bg rounded "
                                style={{
                                  backgroundColor: "#e6e6e6",
                                  width: "10rem",
                                }}
                              >
                                Four Sharing
                                <span className="fw-normal">
                                  ₹
                                  {pg.four_sharing_price
                                    ? pg.four_sharing_price
                                    : "NA"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </table>

                        <table className="table  visible360">
                          <tbody>
                            <tr className=" mx-4">
                              <th
                                className="text-muted fw-light mx-4"
                                scope="row"
                              >
                                Property Mangaged
                                <span className="fw-normal mx-4 text-capitalize">
                                  {pg.property_managed_by
                                    ? pg.property_managed_by
                                    : "-"}
                                </span>
                              </th>

                              <td className="text-muted fw-light mx-4">
                                Notice Period
                                <span className="fw-normal mx-4">
                                  {pg.notice_period ? pg.notice_period : "-"}
                                </span>
                              </td>
                              <td className="text-muted fw-light mx-4">
                                Lock-In Period
                                <span className="fw-normal mx-4">
                                  {pg.lock_in_period}
                                </span>
                              </td>
                              <td className="text-muted fw-light mx-4">
                                Maintenance Charges
                                <span className="fw-normal mx-4">
                                  {pg.maintaince_charge
                                    ? pg.maintaince_charge
                                    : "0"}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                          <div
                            style={{
                              marginLeft: "-10rem",
                            }}
                          >
                            <div className="d-flex justify-content-center my-2">
                              {pg.single_sharing_price && (
                                <div
                                  className="text-muted fw-light rounded px-3"
                                  style={{
                                    backgroundColor: "#e6e6e6",
                                    width: "9rem",
                                  }}
                                >
                                  Single Sharing
                                  <span className="fw-normal sharing-price-tag">
                                    ₹
                                    {parseFloat(
                                      pg.single_sharing_price
                                    ).toLocaleString("en-IN")}
                                  </span>
                                  Deposite:
                                  <span className="fw-normal deposite-price-tag">
                                    ₹
                                    {parseFloat(
                                      pg.single_sharing_deposite
                                    ).toLocaleString("en-IN")}
                                  </span>
                                </div>
                              )}
                              {pg.double_sharing_price && (
                                <div
                                  className="text-muted fw-light rounded px-3"
                                  style={{
                                    backgroundColor: "#e6e6e6",
                                    width: "9rem",
                                    marginLeft: "2rem",
                                  }}
                                >
                                  Double Sharing
                                  <span className="fw-normal sharing-price-tag">
                                    ₹
                                    {parseFloat(
                                      pg.double_sharing_price
                                    ).toLocaleString("en-IN")}
                                  </span>
                                  Deposite:
                                  <span className="fw-normal deposite-price-tag">
                                    ₹
                                    {parseFloat(
                                      pg.double_sharing_deposite
                                    ).toLocaleString("en-IN")}
                                  </span>
                                </div>
                              )}
                              {pg.triple_sharing_price && (
                                <div
                                  className="text-muted fw-light rounded px-3"
                                  style={{
                                    backgroundColor: "#e6e6e6",
                                    width: "9rem",
                                    marginLeft: "2rem",
                                  }}
                                >
                                  Triple Sharing
                                  <span className="fw-strong sharing-price-tag">
                                    ₹
                                    {parseFloat(
                                      pg.triple_sharing_price
                                    ).toLocaleString("en-IN")}
                                  </span>
                                  Deposite:
                                  <span className="fw-normal deposite-price-tag">
                                    ₹
                                    {parseFloat(
                                      pg.triple_sharing_deposite
                                    ).toLocaleString("en-IN")}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </table>
                        <p className="desc text-muted ">
                          {pg.topAmenities_in_property.map((amenity) => {
                            return (
                              <div className="d-flex">
                                <div className="para_icons text-success">
                                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                                </div>
                                <span className="mx-2" key={amenity}>
                                  {amenity}
                                </span>
                                <div className="para_icons_grp d-flex justify-content-end"></div>
                              </div>
                            );
                          })}
                        </p>
                        <div className="d-flex ">
                          <Linker
                            className="btn btn-danger mr-2"
                            to={`/listings/contact-details/${pg.id}`}
                          >
                            View Phone No.
                          </Linker>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3 mx-auto bg_review responsiveness  text-center px-4 py-3  ">
                <h6 className="d-flex justify-content-center">
                  Show some love & Let us know how good this PG is !!
                </h6>
              </div>
              <PgAreaAmenities
                data1={pg.services_in_property}
                data2={pg.furnishing_in_property}
                data3={pg.common_areas}
                data4={pg.security_amenities}
                data5={pg.topAmenities_in_property}
              />
              <br />

              <PgMap data={pg.embedded_map_src_link} />
            </>
          ) : (
            <>
              <div className="d-flex justify-content-center">
                <div className="loading-container">
                  <img
                    src="https://i.postimg.cc/WpY7QKVD/popular-pg-logo.png"
                    alt="Logo"
                    className="spinner"
                  />
                </div>
              </div>
            </>
          )}
        </>
      </div>
      {/* {isGalleryModalOpen && (
        <GalleryModal
          images={pg.additional_images || []}
          heading="Additional Images"
          onClose={closeGalleryModal}
        />
      )} */}
    </div>
  );
};

export default PgDetailsCard;
