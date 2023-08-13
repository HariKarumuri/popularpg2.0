import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import AdsCard from "./AdsCard";
import axios from "axios";
import { useLocation } from 'react-router-dom';

const PgListing = () => {
  const [copypgs, setCopypgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const location = useLocation();
  const { state } = location;

  const [selectedPG, setSelectedPG] = useState({});
  const pgselectfunc=(pg)=>{
    console.log(pg);
    setSelectedPG(pg);
  }
  const Pgelement = (props) => {
    return (
      <div className="card cbackgrnd responsiveness my-2 shadow" key={props.id}>
        <div className="d-flex">
          <div className="trapezoid1">
            <span className="brand d-flex">Brand new</span>
          </div>
          {props.best_suited_for ? (
            <div className="trapezoid2">
              <span className="brand d-flex">{props.best_suited_for}</span>
            </div>
          ) : null}
          {props.pg_for ? (
            <div className="trapezoid3">
              <span className="brand d-flex">{props.pg_for}</span>
            </div>
          ) : null}
        </div>
        <div className="row g-0">
          <div className="col-md-4" style={{ zIndex: 1 }}>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              interval={3000}
            >
              {props?.additional_images?.map((img) => {
                var url = img?.image;
                return (
                  <div className="slide">
                    <img
                      style={{ height: "230px", width: "300px" }}
                      className="img-fluid mt-1"
                      src={url}
                      alt="demo img"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
          <div className="col-md-8" style={{ marginTop: "-1rem" }}>
            <div className="card-body">
              <Link to="/pgdetails" state={props} className="line1">
                <h5 className="card-title rate text-danger mr-2">
                  Rs. {props.min_price}
                </h5>
                <h6>
                  <small className="text-muted mx-2">Onwards</small>
                </h6>
                <h6>
                  {props.meals_available ? (
                    <span className="badge badge-color mx-2">
                      Meals Available
                    </span>
                  ) : null}
                </h6>
                <h6>
                  <span className="badge bg-green-outline mx-2 d-flex">
                    <ion-icon name="checkmark-outline"></ion-icon>Beds available
                  </span>
                </h6>
              </Link>
              <br />
              <Link to="/pgdetails" state={props} className="line1">
                <h6 className="name mr-2 text-secondary fw-bold">
                  {props.pg_name}
                </h6>
                <h6 className="text-muted mx-2">in {props.city}</h6>
              </Link>
              {/* <div className="d-lg-none">
                <div className="d-flex justify-content-center">
                  <hr
                    className="hr-line"
                    style={{
                      background: "#a4a4a4",
                      color: "#cbcbcb",
                      borderColor: "#cbcbcb",
                      height: "2px",
                      width: "50%",
                    }}
                  />
                </div>
              </div> */}
              {/* <div className="d-none d-lg-block">
                <hr
                  className="hr-line"
                  style={{
                    background: "#a4a4a4",
                    color: "#cbcbcb",
                    borderColor: "#cbcbcb",
                    height: "2px",
                    marginBottom: "3px",
                    width: "50%",
                    marginTop: "-0.2rem",
                  }}
                />
              </div> */}
    <div className="d-flex "> <p className="text-muted fw-bold fs-6">Available Room type : </p>
              <Link
                to="/pgdetails"
                state={props}
                className="line3 sharing text-muted "
                // style={{ marginTop: "-0.3rem" }}
              >
                <div className=" mr-2">
                  
                  <p style={{ marginTop: "-0.7rem" }}>
                    {props.single_sharing_price && "Single "}
                  </p>
                </div>

                <div className=" mx-3"></div>
                <div className=" mx-3">
                  <p style={{ marginTop: "-0.7rem" }}>
                      {props.double_sharing_price && "Double "}
                  </p>
                </div>
                <div className=" mx-3"></div>
                <div className=" mx-3">
                  <p style={{ marginTop: "-0.7rem" }}>
                      {props.triple_sharing_price && "Triple "}
                  </p>
                </div>
              </Link>
              </div> 
              {/* <div className="d-lg-none">
                <div className="d-flex justify-content-center">
                  <hr
                    className="hr-line"
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
                  className="hr-line"
                  style={{
                    background: "#a4a4a4",
                    color: "#cbcbcb",
                    borderColor: "#cbcbcb",
                    height: "2px",
                    marginBottom: "2px",
                    marginTop: "-10px",
                    width: "50%",
                  }}
                />
              </div> */}
              <p
                className="desc text-muted d-flex"
                style={{ marginTop: "-0.3rem" }}
              >
                {props.topAmenities_in_property.map((amenity) => {
                  return (
                    <div className="d-flex">
                      <div className="para_icons text-success">
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                      </div>
                      <div className="mx-2" key={amenity}>
                        {amenity}
                      </div>
                    </div>
                  );
                })}
              </p>
              <p className="desc text-muted" style={{ marginTop: "-1.3rem" }}>
                {props.locality}
              </p>
              <div
                className="d-flex flex-wrap justify-content-start "
                style={{ marginTop: "-1.3 rem" }}
              >
                <Link
                to="/pgdetails"
                state={props} type="button" className="btn btn-danger mr-2">
                View more details
                </Link>
                <button type="button" className="btn2 mx-5" data-bs-toggle="modal"  data-bs-target="#exampleModalCenter" onClick={(e)=>{
                  e.preventDefault();
                  pgselectfunc(props)
                  }}>
                  View Phone No.
                </button>
                {props.embedded_map_src_link ? (
                  <button
                    type="button"
                    className="btn2 mx-2"
                    style={{
                      background: "none",
                      color: "red",
                      border: "none",
                    }}
                  >
                    <b>view on map</b>
                  </button>
                ) : null}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  const [pgs, setpgs] = useState([]);
  const fetchProducts = () => {
    axios
      .get("/products/")
      .then((response) => {
        // Handle the response data
        const products = response.data;
        setpgs(products);
        setCopypgs(products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  useEffect(() => {
    fetchProducts();
    console.log(pgs);
  }, []);

  const setloadingfalseafter3sec = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div>
      {state? <SearchBar gende={state.gender?state.gender:""} locatio={state.locality?state.locality:""} occupancytyp={state.occupancytype?state.occupancytype:""}  pgs={pgs} setpgs={setpgs} copypgs={copypgs} setloadingfalseafter3sec={setloadingfalseafter3sec} setIsLoading={setIsLoading} />
      :<SearchBar gende={""} locatio={""} occupancytyp={""}  pgs={pgs} setpgs={setpgs} copypgs={copypgs} setloadingfalseafter3sec={setloadingfalseafter3sec} setIsLoading={setIsLoading} />}
     <br />
      <div className="container">
  <div className="row">
    <div className="col-md-11">
    {pgs.length > 0 ? (
        pgs.map((pg) => 
        <Pgelement key={pg.id} {...pg} />)
      ) : (
        <div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
           <div className="loading-container">
             <img src="https://i.postimg.cc/WpY7QKVD/popular-pg-logo.png" alt="Logo" className="spinner"/>
           </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center" >
            <div className="no-record-found fs-1">No record found.</div>
        </div>
          )}
    </div>
      )
      }
    </div>
    <div className="col-md-1">
    <div className="d-flex justify-content-center">
    <AdsCard />
    </div>
      
    </div>
  </div>
</div>
 {/* code for the form contact pg owner  */}
      <div className="modal fade" id="exampleModalCenter"  tabIndex="-1" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document" >
          <div className="modal-content">
            <div className="d-flex justify-content-between mx-3 mt-2">
              <h5 className="modal-title " >Contact Owner</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
              <label htmlFor="PGname" className="fs-4 " style={{marginTop:"-1 rem" }} > <b>{selectedPG.pg_name}</b> </label>
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
                 <button type="button" className="btn2 my-2 btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PgListing;
