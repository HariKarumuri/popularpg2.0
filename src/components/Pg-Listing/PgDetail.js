import React, { useState,useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PgAreaAmenities from "./Pg_Area_Amenities";
import PgFoodKitchen from "./Pg_Food&Kitchen";
import PgOtherCharges from "./Pg_other_charges";
import PgMap from "./pg_map";
import PGScrollBar from "./pg_scroll_nav";
import { Link } from "react-scroll";
import { useLocation } from 'react-router-dom';
const PgDetail = () => {
  const location = useLocation();
  const { state } = location;
  const [pg, setpg] = useState(state);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    setpg(state);
  }, [state]);
  var data = pg.description;
    return (
    <div className="bg_color" >
      <div className=" bg-white" style={{
        paddingLeft: "10%",
        paddingRight: "10%",
      }}  >
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
                <span className="brand d-flex"> &#x2713;Partner verified</span>
              </div>
            </div>
            <div className="line1">
              <h3 className="name mr-2 text-dark">{pg.pg_name}</h3>
              <p className="text-muted text-decoration-underline">
                in {pg.city}
              </p>
            </div>
            <div className="hideonsmall" style={{ marginTop: "-75px" }}>
              <p className="text-muted text-end">
                posted by : <b>{pg.property_managed_by}</b>
              </p>
              <div className="d-flex justify-content-end ">
                <button className="btn btn-sm">view Phone Number</button>
              </div>
            </div>
            <br />
            <p className="fw-light d-flex" style={{ marginTop: "-35px" }}>
              occupancy type :
              <p className=" text-decoration-underline">
                Double , Single , Triple
              </p>
            </p>
            <div style={{ marginTop: "-15px" }}>
              <h6>
              {pg.pg_for?<span className="badge badge-color mx-2">For {pg.pg_for} </span>:(null) }
                
              </h6>
              <h6>
                <span className="badge badge-color mx-2">
                  Preferred {pg.best_suited_for}
                </span>
              </h6>
              <h6>
               {pg.meals_available?<span className="badge badge-color mx-2">meals available</span>:(null)} 
              </h6>

              <h6>
                <span className="badge bg-green-outline mx-2 d-flex">
                  <ion-icon name="checkmark-outline"></ion-icon>Beds available
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
                {pg.additional_images.map((img) => {
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
              <div className="container hideonsmall">
  <div className="row" style={{
    maxHeight: "100px",
    margin: "auto",
  }} >
    <div className="col ">
    <img            style={{ height: "100px", width: "90px" }}
                    className="  mt-2 rounded" 
                    src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/May/12/Photo_h400_w540/GR2-292167-1746859_400_540.jpeg"
                    alt="demo img"
                  />
    </div>
    <div className="col ">
    <img
                    className=" mt-2 rounded"  style={{ height: "100px", width: "90px" }}
                    src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Dec/27/Photo_h400_w540/GR2-292167-1597519_400_540.jpg"
                    alt="demo img"
                  />
    </div>
    <div className="col rounded text-center py-4 badge-color my-2 px-2 ">
      <a href="/" className="text-dark fs-6"> More Photos</a>
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
                  <Link to="PgMap" spy={true} smooth={true} offset={-100} duration={300}  className="d-flex fw-light fs-6"><ion-icon name="location-outline"></ion-icon>view on map</Link>
                </div>
                <div className="">
                  <p>{showMore ? data : data.slice(0, 100)}</p>
                  <div
                    onClick={() => {
                      setShowMore(!showMore);
                    }}
                  >
                    {showMore ? "Read Less" : "Read More"}
                  </div>
                </div>
                <table className="table  visibleon360">
                  <tbody>
                    <tr>
                      <th className="text-muted fw-light" scope="row"> Deposit Amount <span className="fw-normal">{pg.security_deposite?pg.security_deposite:('-')}</span> </th>
                      <td className="text-muted fw-light">Maintenance  <span className="fw-normal">-</span> </td>
                      <td className="text-muted fw-light">Notice Period <span className="fw-normal"> {pg.notice_period?pg.notice_period:(null)}</span></td>
                    </tr>
                    <tr>
                      <th className="text-muted fw-light" scope="row">Food Availability <span className="fw-normal"> {pg.meals_available?'yes':'No'}</span></th>
                      <td className="text-muted fw-light">AC Rooms <span className="fw-normal">Not Available</span> </td>
                      <td className="text-muted fw-light">Parking  <span className="fw-normal">Available</span></td>
                    </tr>
                    <tr>
                      <th className="text-muted fw-light" scope="row">Available for <span className="fw-normal">{pg.pg_for}</span> </th>
                      <td className="text-muted fw-light">Preferred Tenants  <span className="fw-normal">{pg.best_suited_for}</span></td>
                      <td className="text-muted fw-light">Total Number of Beds <span className="fw-normal">{pg.total_beds}</span> </td>
                    </tr>
                    <tr>
                      <td className="text-muted fw-light">Electricity Charges  <span className="fw-normal">-</span></td>
                      <td className="text-muted fw-light">Lock-In Period <span className="fw-normal">{pg.lock_in_period?pg.lock_in_period:('-')}</span> </td>
                    <td className="text-muted fw-light">Power Backup <span className="fw-normal">Available</span> </td>
                    </tr>
                  </tbody>
                </table>
                <table className="table  visible360">
                  <tbody>
                    <tr>
                      <th className="text-muted fw-light" scope="row"> Deposit Amount <span className="fw-normal">₹{pg.security_deposite?pg.security_deposite:('-')}</span> </th>
                      <td className="text-muted fw-light">Maintenance  <span className="fw-normal">-</span> </td>
                      <td className="text-muted fw-light">Notice Period <span className="fw-normal">{pg.notice_period?pg.notice_period:(null)} </span></td>
                      <td className="text-muted fw-light">Electricity Charges  <span className="fw-normal">-</span></td>
                    </tr>
                    <tr>
                      <th className="text-muted fw-light" scope="row">Food Availability <span className="fw-normal"> {pg.meals_available?'yes':'No'}</span></th>
                      <td className="text-muted fw-light">AC Rooms <span className="fw-normal">Not Available</span> </td>
                      <td className="text-muted fw-light">Parking  <span className="fw-normal">Available</span></td>
                      <td className="text-muted fw-light">Power Backup <span className="fw-normal">Available</span> </td>
                    </tr>
                    <tr>
                      <th className="text-muted fw-light" scope="row">Available for <span className="fw-normal">{pg.pg_for}</span> </th>
                      <td className="text-muted fw-light">Preferred Tenants  <span className="fw-normal">{pg.best_suited_for}</span></td>
                      <td className="text-muted fw-light">Total Number of Beds <span className="fw-normal">{pg.total_beds}</span> </td>
                      <td className="text-muted fw-light">Lock-In Period <span className="fw-normal">{pg.lock_in_period?pg.lock_in_period:('-')}</span> </td>
                    </tr>
                  </tbody>
                </table>
                <p className="desc text-muted d-flex justify-content-around ">
                {pg.topAmenities_in_property.map((amenity) => {
                  return (<div className="d-flex">
                  <div className="para_icons text-success">
                  <ion-icon name="checkmark-circle-outline"></ion-icon>
                </div>
                    <span className="mx-2" key={amenity}>
                      {amenity}
                    </span>
                     <div className="para_icons_grp d-flex justify-content-end">
                </div></div>
                  );
                } )}
               
              </p>
                <div className="d-flex ">
                  <button type="button" className="btn btn-danger mr-2">
                    View Phone No.
                  </button>
                  <button type="button" className="btn2  mx-2">
                    Contact Owner
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 mx-auto bg_review responsiveness  text-center px-4 py-3  ">
     <h6 className="d-flex justify-content-center"> Show some love & Let us know how good this PG is <a className="link text-danger mx-3" href="/">Write a review </a> <div className="text-danger my-1"><ion-icon  name="arrow-forward-outline"></ion-icon> </div> </h6>
      </div>
      <PgAreaAmenities data = {pg.services_in_property} />
      <PgFoodKitchen  data={pg.furnishing_in_property} />
      <PgOtherCharges />
      <br/>
      <PgMap  />
    </div>
  );
};

export default PgDetail;
