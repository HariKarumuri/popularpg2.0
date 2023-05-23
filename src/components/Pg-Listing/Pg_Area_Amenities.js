import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Pg_Area_Amenities = () => {
  return (
    <div id="PgAreaAmenities" >
      <div className="card mb-3 mx-auto  responsiveness">
        <div className="row g-0">
          <div className="col-md-9 ">
            <h4 className="name mr-2 mx-2 text-dark">
              Common Area and Amenities (13)
            </h4>
            <div className="d-flex mx-3 justify-content-between flex-wrap">
              <div className="m-2 ">
              <div className="d-flex justify-content-center fs-3"><ion-icon name="wifi-outline"></ion-icon> </div>
                <span className="fs-6 fw-light">Wifi</span>
              </div>
              <div className="m-2 ">
               <div className="d-flex justify-content-center fs-3"><ion-icon name="power-outline"></ion-icon></div> 
                <span className="fs-6 fw-light">Power backup</span>
              </div>
              <div className="m-2 ">
               <div className="d-flex justify-content-center fs-3"><ion-icon name="brush-outline"></ion-icon></div> 
                <span className="fs-6 fw-light">Cleaning service</span>
              </div>
              <div className="m-2 ">
                <div className="d-flex justify-content-center fs-3">
                  <img
                    alt="icon"
                    classname="img-fluid"
                    style={{ height: "30px" }}
                    src="https://i.postimg.cc/nrH5KWNQ/parking-area.png"
                  />
                </div>
                <span className="fs-6 fw-light">Parking Area</span>
              </div>
            </div>
              <div className="d-flex mx-3 justify-content-between flex-wrap">
              <div className="m-2 ">
              <div className="d-flex justify-content-center fs-3"><ion-icon name="tv-outline"></ion-icon> </div>
                <span className="fs-6 fw-light">Tv</span>
              </div>
              <div className="m-2 ">
                <div className="d-flex justify-content-center fs-3">
                  <img
                    alt="icon"
                    classname="img-fluid"
                    style={{ height: "30px" }}
                    src="https://i.postimg.cc/HxS0KPVM/elevator.png"
                  />
                </div>
                <span className="fs-6 fw-light">Lift</span>
              </div>
              <div className="m-2 ">
               <div className="d-flex justify-content-center fs-3"><ion-icon name="bicycle-outline"></ion-icon></div> 
                <span className="fs-6 fw-light">2 Wheeler Parking</span>
              </div>
              <div className="m-2 ">
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
