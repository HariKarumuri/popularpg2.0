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
        <div className="card mb-3 mx-auto cbackgrnd responsiveness">
        <div className="d-flex">
          <div className="trapezoid1">
            <span className="brand d-flex">Brand new</span>
          </div>
          {props.best_suited_for?(<div className="trapezoid2">
            <span className="brand d-flex"> {props.best_suited_for}
            </span>
          </div>):(null)}
          {props.pg_for?(<div className="trapezoid3">
            <span className="brand d-flex"> {props.pg_for}
            </span>
          </div>):(null)}
          
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
              {props.additional_images.map((img) => {
                  var url = img.image;
                  return (
                    <div className="slide">
                  <img
                    style={{ height: "260px", width: "300px" }}
                    className="img-fluid  mt-3 "
                    src={url}
                    alt="demo img"
                  />
                </div>
                  );
                } )}
            </Carousel>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <Link to="/pgdetails" state={props} className="line1">
              <h5 className="card-title rate text-danger mr-2">Rs. {props.min_price}</h5>
                <h6>
                  <small className="text-muted mx-2">Onwards</small>
                </h6>
                <h6>
                {props.meals_available ?( <span className="badge badge-color mx-2">Meals Available</span>):(null)}
                 
                </h6>
                <h6>
                  <span className="badge bg-green-outline mx-2 d-flex">
                    <ion-icon name="checkmark-outline"></ion-icon>Beds available
                  </span>
                </h6>
              </Link>
              <br/>
              <Link to="/pgdetails" state={props} className="line1">
                <h6 className="name mr-2 text-secondary fw-bold">
                  {props.pg_name}
                </h6>
                <h6 className="text-muted mx-2"> in {props.city}</h6>
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

              <Link to="/pgdetails" state={props} className="line3 sharing text-muted">

                  <div className="type1 mr-2">
                  <p className="text-muted fs-6">No sharing</p>
                  <p style={{ marginTop: "-0.7rem" }}> Rs{ props.single_sharing_price?(props.single_sharing_price):('NA')}</p>
                </div>

                <div className="verticleLine mx-3"></div>
                <div className="type2 mx-3">
                  <p className="text-muted fs-6">double sharing</p>
                  <p style={{ marginTop: "-0.7rem" }}> Rs.{props.double_sharing_price? (props.double_sharing_price):('NA')}</p>
                </div>   
                  <div className="verticleLine2 mx-3"></div>
                <div className="type3 mx-3">
                  <p className="text-muted fs-6">triple sharing</p>
                  <p style={{ marginTop: "-0.7rem" }}> Rs.{props.triple_sharing_price? (props.triple_sharing_price):('NA')} </p>
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
                {props.topAmenities_in_property.map((amenity) => {
                  return (<div className="d-flex">
                  <div className="para_icons text-success">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                    <div className="mx-2" key={amenity}>
                      {amenity}
                    </div>
                     </div>
                  );
                } )}
              </p>
              <p className="desc text-muted" style={{ marginTop: "-0.6rem" }}>
              {props.locality}
              </p>
              <div className="d-flex flex-wrap justify-content-center " style={{ marginTop:"-0.9rem"}}>
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
          <div className="mx-2" style={{
            marginTop:"-0.7 rem"
          }}>
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
      
    )
  }
  const [pgs, setpgs] = useState([]);
  const fetchProducts = () => {
    axios.get('http://13.53.149.253/products/')
      .then(response => {
        // Handle the response data
        const products = response.data;
        console.log(products);
        setpgs(products);
        setCopypgs(products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };
  useEffect(() => {
    fetchProducts();
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
