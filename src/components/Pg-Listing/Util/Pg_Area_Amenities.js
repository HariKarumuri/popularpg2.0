import React from "react";

const Pg_Area_Amenities = ({ data, data1 }) => {
  const combinedData = [...data, ...data1];

  return (
    <div id="PgAreaAmenities">
      <div className="card mb-3 mx-auto  responsiveness">
        <div className="row g-0">
          <div className="col-md-12 ">
            <h4 className="name mr-2 mx-2 text-dark">All Common Area and Amenities</h4>
            <div className="d-flex mx-3 row justify-content-between flex-wrap">
              {combinedData.map((item) => {
                const words = item.split(' ');
                const firstWord = words[0].toLowerCase();
                let iconName;

                switch (firstWord) {
                  case 'laundry':
                    iconName = 'tshirt';
                    break;
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
                  <div className="my-2 col-3 text-center" key={item}>
                    <div className="d-flex justify-content-center fs-3">
                      <i className={`fas fa-light fa-${iconName}`}></i>
                    </div>
                    <span className="fs-6 fw-light">{item}</span>
                  </div>
                );
              })}

              <div className="my-2 col-3 text-center">
                <div className="d-flex justify-content-center fs-3"></div>
                <a href="/" className="fs-6 fw-light text-danger my-2 mx-1">
                  +More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg_Area_Amenities;
