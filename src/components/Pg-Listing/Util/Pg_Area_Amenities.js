import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faElevator,
  faBox,
  faTemperatureArrowDown,
  faTemperatureArrowUp,
  faTv,
  faSchoolLock,
  faClockRotateLeft,
  faVideo,
  faTableTennisPaddleBall,
  faKitchenSet,
  faUtensils,
  faHandsBubbles,
  faCouch,
  faBroom,
} from "@fortawesome/free-solid-svg-icons";

const Pg_Area_Amenities = ({ data1, data2, data3, data4, data5 }) => {
  const combinedData = [...data1, ...data2, ...data3, ...data4, ...data5];

  return (
    <div id="PgAreaAmenities">
      <div className="card mb-3 mx-auto  responsiveness">
        <div className="row g-0">
          <div className="col-md-12">
            <h4 className="name mr-2 mx-2 text-dark">All Common Area and Amenities</h4>
            <div className="d-flex mx-3 row justify-content-between flex-wrap">
              {combinedData.map((item) => {
                let icon;

                switch (item.toLowerCase()) {
                  case "lift":
                    icon = faElevator;
                    break;
                  case "washing machine":
                    icon = faBox;
                    break;
                  case "fridge":
                    icon = faTemperatureArrowDown;
                    break;
                  case "microwave":
                    icon = faTemperatureArrowUp;
                    break;
                  case "gas stove":
                    icon = faTemperatureArrowUp;
                    break;
                  case "electric stove":
                    icon = faTemperatureArrowUp;
                    break;
                  case "tv":
                    icon = faTv;
                    break;
                  case "authentication gate lock":
                    icon = faSchoolLock;
                    break;
                  case "security guard 24/7":
                    icon = faClockRotateLeft;
                    break;
                  case "cctv surveillance":
                    icon = faVideo;
                    break;
                  case "game area":
                    icon = faTableTennisPaddleBall;
                    break;
                  case "kitchen area":
                    icon = faKitchenSet;
                    break;
                  case "dining area":
                    icon = faUtensils;
                    break;
                  case "washing area":
                    icon = faHandsBubbles;
                    break;
                  case "hangout area":
                    icon = faCouch;
                    break;
                  case "cleaning":
                    icon = faBroom;
                    break;  
                  default:
                    icon = null;
                    break;
                }

                return (
                  <div className="my-2 col-3 text-center" key={item}>
                    <div className="d-flex justify-content-center fs-3 m-2">
                      {icon && <i className="Amenitie-icons pt-2 "><FontAwesomeIcon icon={icon} /></i>}
                    </div>
                    <span className="fs-8 ">{item}</span>
                  </div>
                );
              })}

              <div className="my-2 col-3 text-center">
                <div className="d-flex justify-content-center fs-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pg_Area_Amenities;
