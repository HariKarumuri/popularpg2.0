import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Pg_Area_Amenities = ({data}) => {
  return (
    <div id="PgAreaAmenities" >
      <div className="card mb-3 mx-auto  responsiveness">
        <div className="row g-0">
          <div className="col-md-9 ">
            <h4 className="name mr-2 mx-2 text-dark">
              Common Area and Amenities (13)
            </h4>
            <div className="d-flex mx-3 row justify-content-between flex-wrap">
            {data.map((item) => {
  const words = item.split(' '); // Split the item string into words
  var firstWord = words[0].toLowerCase(); // Get the first word and convert it to lowercase
  if(firstWord==='laundry') firstWord = 'tshirt'
  return (
    <div className="my-2 col-3 text-center" key={item}>
      <div className="d-flex justify-content-center fs-3">
        <i className={`fas fa-light fa-${firstWord}`}></i>
      </div>
      <span className="fs-6 fw-light">{item}</span>
    </div>
  );
})}



              <div className="my-2 col-3 text-center">
               <div className="d-flex justify-content-center fs-3"></div> 
                <a href="/" className="fs-6 fw-light text-danger my-2 mx-1"> +More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3 " style={{ zIndex: 1 }}>
            <Carousel
              autoPlay
              infiniteLoop
              showStatus={false}
              showArrows={false}
              showThumbs={false}
            >
              <div className="slide">
                <img
                  style={{ height: "230px", width: "260px" }}
                  className="img-fluid mt-3 mb-3 "
                  src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Nov/21/Photo_h400_w680/GR2-292167-1561489_400_680.jpeg"
                  alt="demo img"
                />
              </div>
              <div className="slide">
                <img
                  style={{ height: "230px", width: "260px" }}
                  className="img-fluid  mt-3 mb-3 "
                  src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/May/12/Photo_h400_w540/GR2-292167-1746859_400_540.jpeg"
                  alt="demo img"
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg_Area_Amenities;