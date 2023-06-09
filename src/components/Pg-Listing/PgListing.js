import React,{useState,useEffect} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import axios from 'axios';
const PgListing = () => {
  const [copypgs,setCopypgs]=useState([]);
  const Pgelement =(props)=>{
    return(
      <div className="card cbackgrnd responsiveness my-2" >
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
            {props.additional_images.map((img) => {
              var url = img.image;
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
              <h5 className="card-title rate text-danger mr-2">Rs. {props.min_price}</h5>
              <h6>
                <small className="text-muted mx-2">Onwards</small>
              </h6>
              <h6>
                {props.meals_available ? (
                  <span className="badge badge-color mx-2">Meals Available</span>
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
              <h6 className="name mr-2 text-secondary fw-bold">{props.pg_name}</h6>
              <h6 className="text-muted mx-2">in {props.city}</h6>
            </Link>
            <div className="d-lg-none">
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
            </div>
            <div className="d-none d-lg-block">
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
            </div>
    
            <Link to="/pgdetails" state={props} className="line3 sharing text-muted " style={{ marginTop: "-0.3rem" }}>
              <div className="type1 mr-2">
                <p className="text-muted fs-6">No sharing</p>
                <p style={{ marginTop: "-0.7rem" }}>Rs{props.single_sharing_price ? props.single_sharing_price : 'NA'}</p>
              </div>
    
              <div className="verticleLine mx-3"></div>
              <div className="type2 mx-3">
                <p className="text-muted fs-6">double sharing</p>
                <p style={{ marginTop: "-0.7rem" }}>Rs.{props.double_sharing_price ? props.double_sharing_price : 'NA'}</p>
              </div>
              <div className="verticleLine2 mx-3"></div>
              <div className="type3 mx-3">
                <p className="text-muted fs-6">triple sharing</p>
                <p style={{ marginTop: "-0.7rem" }}>Rs.{props.triple_sharing_price ? props.triple_sharing_price : 'NA'}</p>
              </div>
            </Link>
            <div className="d-lg-none">
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
            </div>
            <p className="desc text-muted d-flex" style={{ marginTop: "-0.3rem" }}>
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
            <div className="d-flex flex-wrap justify-content-center " style={{ marginTop: "-1.5rem" }}>
              <button type="button" className="btn btn-danger mr-2">
                View Phone No.
              </button>
              <button type="button" className="btn2 mx-2">
                Contact Owner
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
    
      
    )
  }
  const [pgs, setpgs] = useState([]);
  const fetchProducts = () => {
    axios.get('http://13.53.149.253/products/')
      .then(response => {
        // Handle the response data
        const products = response.data;
        setpgs(products);
        setCopypgs(products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };
  useEffect(() => {
    fetchProducts();
    console.log(pgs);
  }, []);
  return (
    <div>
    <SearchBar pgs={pgs} setpgs={setpgs} copypgs={copypgs} />
    <br/>
      {pgs.map((pg) => (
        Pgelement(pg)
      ))}
    </div>
  );
};

export default PgListing;
