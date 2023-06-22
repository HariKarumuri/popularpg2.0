import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Pg_FoodKitchen = ({data}) => {
  return (
    <div>
      <div className="card mb-3  mx-auto  responsiveness" id="PgFoodKitchen">
        <div className="row g-0 ">
          <div className="col-md-9 ">
            <h4 className="name mr-2 mx-2 text-dark">Food and Kitchen</h4>
            <div className="d-flex mx-3 justify-content-between flex-wrap">
            {data.map((item) => {
  const words = item.split(' ');
  const firstWord = words[0].toLowerCase();

  let iconName;

  switch (firstWord) {
    case 'washing':
      iconName = 'box';
      break;
    case 'gas':
      iconName = 'stove';
      break;
    case 'fridge':
      iconName = 'square';
      break;
    case 'microwave':
      iconName = 'toilet-portable';
      break;
    default:
      iconName = firstWord;
      break;
  }

  return (
    <div className="m-2 my-5" key={item}>
      <div className="d-flex justify-content-center fs-3">
        <i className={`fas fa-light fa-${iconName}`}></i>
      </div>
      <span className="fs-6 text-wrap fw-normal text-center">{item}</span>
    </div>
  );
})}

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
                  src="https://img.staticmb.com/mbphoto/pg/grd2/cropped_images/2023/May/12/Photo_h400_w680/GR2-292167-1746887_400_680.jpeg"
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

export default Pg_FoodKitchen;
