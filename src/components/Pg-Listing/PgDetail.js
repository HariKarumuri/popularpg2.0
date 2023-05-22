import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PgDetail = () => {
  const [showMore, setShowMore] = useState(false);
  var data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nulla condimentum est sit amet eros consectetur, ettincidunt metus faucibus. Phasellus eu felis at justotincidunt lobortis. Mauris a aliquam nunc, a consecteturmauris. Quisque feugiat, nisi vitae iaculis finibus, erat migravida velit, nec pulvinar enim turpis vel nisi."
  return (
    <div>
      <div className="container ">
        <div className="row gx-2">
          <div className="col-md-3">
            <div className="line1 ">
              <h6>
                <small className="text-muted mx-2">Rent/Bed</small>
              </h6>
              <div className="d-flex flex-wrap">
                <div className="fs-3"> Rs. 12,000</div>
                <p
                  className="text-secondary"
                  style={{
                    textAlign: "center",
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
              <h3 className="name mr-2 text-dark">Gharpayy PG/Hostel</h3>
              <p className="text-muted text-decoration-underline">

                in Koramangala
              </p>
            </div>
            <div style={{ marginTop: "-75px" }}>
              <p className="text-muted text-end">
                posted by : <b>owner gharpayy</b>
              </p>
              <div className="d-flex justify-content-end">
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
                <span className="badge badge-color mx-2">For girls</span>
              </h6>
              <h6>
                <span className="badge badge-color mx-2">
                  Preferred Students
                </span>
              </h6>
              <h6>
                <span className="badge badge-color mx-2">Food Included</span>
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
      <div>
        <div className="card mb-3 mx-auto  responsiveness">
          <div className="row g-0">
            <div className="col-md-4 " style={{ zIndex: 1 }}>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showArrows={false}
                showThumbs={false}
              >
                <div className="slide">
                  <img
                    style={{ height: "260px", width: "300px" }}
                    className="img-fluid mt-3"
                    src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2022/Dec/27/Photo_h400_w540/GR2-292167-1597519_400_540.jpg"
                    alt="demo img"
                  />
                </div>
                <div className="slide">
                  <img
                    style={{ height: "260px", width: "300px" }}
                    className="img-fluid  mt-3 "
                    src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/May/12/Photo_h400_w540/GR2-292167-1746859_400_540.jpeg"
                    alt="demo img"
                  />
                </div>
              </Carousel>
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="line1">
                  <h6 className="name mr-2 text-secondary fw-bold">
                    Gharpayy PG/Paying Guest
                  </h6>
                  <h6 className="text-muted mx-2"> in Koramangala</h6>
                </div>
                <div className="">
                  <p >
                   {showMore ? data : data.slice(0, 100)}
                  </p>
                  <div onClick={()=>{setShowMore(!showMore);}} >
                    {showMore ? "Less" : "More"}
                  </div>
                </div>
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
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
    </div>
  );
};

export default PgDetail;
