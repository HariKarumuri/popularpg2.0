import React,{useState} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
// import NoimgAvailable from "../../../assets/images/NO-Img-Avil.png";
import axios from "axios";
const Pg_Listing_Card = ({ pgData }) => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [selectedPG, setSelectedPG] = useState({});
  const pgselectfunc=(pg)=>{
    console.log(pg);
    setSelectedPG(pg);
  }
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to send the contact details
      const response = await axios.post("https://popularpg.in/booking/", {
        customer_name: contactData.name,
        customer_email: contactData.email,
        customer_phone: contactData.phone,
        product: pgData.id, // Assuming 'id' is the product ID from the URL parameter
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
                  className="btn2 btn-danger mb-2 mb-md-0 me-md-2"
                >
                  View more details
                </Link>
                <button type="button" className="btn2 mx-5" data-bs-toggle="modal"  data-bs-target="#exampleModalCenter" onClick={(e)=>{
                  e.preventDefault();
                  pgselectfunc(pgData)
                  }}>
                  View Phone No.
                </button>
                <span className="PgPropertyId mb-2 mb-md-4 mx-md-2  d-none d-sm-inline">
                  PgPropertyId:{pgData.id}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default Pg_Listing_Card;
