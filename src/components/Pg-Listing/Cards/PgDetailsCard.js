import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PgAreaAmenities from "../Util/Pg_Area_Amenities";
import PgMap from "../Util/pg_map";
import PGScrollBar from "../Util/pg_scroll_nav";
import { Link } from "react-scroll";
import GalleryModal from "./../Util/GalleryModal";
import axios from "axios";
const PgDetailsCard = ({ pg }) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to send the contact details
      const response = await axios.post("https://popularpg.in/booking/", {
        customer_name: contactData.name,
        customer_email: contactData.email,
        customer_phone: contactData.phone,
        product: pg.id, // Assuming 'id' is the product ID from the URL parameter
      });

      if (response.status === 201) {
        console.log("Contact details submitted successfully");
        contactData.name="";
        contactData.email="";
        contactData.message="";
        document.getElementById("exampleModalCenter").classList.remove("show",'d-block');
        document.querySelectorAll(".modal-backdrop").forEach(el => el.classList.remove("modal-backdrop"));
        alert("Contact details submitted successfully");
      } else {
        console.error("Failed to submit contact details");
      }
    } catch (error) {
      console.error(
        "An error occurred while submitting contact details",
        error
      );
    } finally {
      // setSubmitting(false);
    }
  };
  const [selectedPG, setSelectedPG] = useState({});
  const pgselectfunc=(pg)=>{
    console.log(pg);
    setSelectedPG(pg);
  }
  return (
    <div className="PgDetailsCard">
      <div className="bg_color">
        <>
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
                      <div className="d-flex flex-wrap pg-details-price ">
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
                              type="button"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                            >
                              More Photos
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <div className="line1 d-flex justify-content-between align-items-center flex-wrap">
                          <h6 className="name mr-2 text-dark fw-bold">
                            {pg.product_name}
                          </h6>
                          <Link
                            to="PgMap"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={300}
                            className="d-flex fw-light fs-6 d-flex justify-content-center align-items-center"
                          >
                            <ion-icon name="location-outline"></ion-icon>
                            view on map
                          </Link>
                        </div>
                        <div className="pg-details-address">
                          <p>{pg.address}</p>
                        </div>

                        <table className="table  visible360 d-flex flex-column">
                          <tbody className="d-flex pg-details-info1">
                            <tr className=" ">
                              <th
                                className="text-muted fw-light mx-4"
                                scope="row"
                              >
                                Property Mangaged by
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
                          <div className="pg-details-occupancy">
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
                        <div className="d-flex ">
                        <button type="button" className="btn2 mx-5" data-bs-toggle="modal"  data-bs-target="#exampleModalCenter" onClick={(e)=>{
                  e.preventDefault();
                  pgselectfunc(pg)
                  }}>
                  View Phone No.
                </button>
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
      <GalleryModal
        images={pg.additional_images || []}
        Coverimage={pg.cover_image}
        title={pg.product_name || "More PG Images"}
      />
        <div className="modal fade" id="exampleModalCenter"  tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document" >
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-3 mt-2">
              <h5 className="modal-title " >Contact Owner</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
              <label htmlFor="PGname" className="fs-4 " style={{marginTop:"-1 rem" }} > <b>{selectedPG.product_name}</b> </label>
              <p className="text-dark" style={{
                  fontSize:"0.9 rem"
                }} >{selectedPG.locality}</p>
                <div className="form-group">
                  <label htmlFor="name" className="modal-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Enter your name" onChange={()=>{
                    setContactData({...contactData,name:document.getElementById("name").value})
                  }} />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="modal-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Enter your email" 
                  onChange={()=>{
                    setContactData({...contactData,email:document.getElementById("email").value})
                  }
                  }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="modal-label">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Enter your message"
                  onChange={()=>{
                    setContactData({...contactData,message:document.getElementById("message").value})
                  }
                  }
                  ></textarea>
                </div>
                <p className="text-dark" style={{
                  fontSize:"0.8rem"
                }} >{selectedPG.description}</p>
              </form>
                 <button type="button" className="btn2 my-2 btn-primary" onClick={handleFormSubmit} >Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgDetailsCard;
