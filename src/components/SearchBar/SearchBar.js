import React, { useState, useEffect, useRef } from "react";

const SearchBar = ({ pgs, setpgs,copypgs }) => {
  const [data, setData] = useState("Budget");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [location, setLocation] = useState("");
  const [occupancytype, setOccupancyType] = useState("");
  const dropdownRef = useRef(null);

  const handleMinValueChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxValueChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleSearch = () => {
    if (minValue && maxValue) {
      setData(`${minValue} - ${maxValue}`);
    } else if (minValue) {
      setData(`> ${minValue}`);
    } else if (maxValue) {
      setData(`Up to ${maxValue}`);
    } else {
      setData(data);
    }
  
    // Filter the pgs based on the selected value from the dropdown, location, and occupancy type
    const filteredPgs = pgs.filter((pg) => {
      const val = parseInt(pg.min_price);
      const dataval = parseInt(data);
      const minVal = parseInt(minValue);
      const maxVal = parseInt(maxValue);
      const lowercasePgLocation = pg.city.toLowerCase();
      const lowercaseSearchLocation = location.toLowerCase();
  
      const occupancyTypeMatch = () => {
        if (occupancytype === "Single") {
          return pg.single_sharing;
        } else if (occupancytype === "Double") {
          return pg.double_sharing;
        } else if (occupancytype === "Triple") {
          return pg.triple_sharing;
        } else {
          return true; // Return true if occupancytype is not specified
        }
      };
  
      const locationMatch = () => {
        if (location) {
          return lowercasePgLocation.includes(lowercaseSearchLocation);
        } else {
          return true;
        }
      };
  
      if (!minVal && !maxVal && !dataval && !location) {
        return occupancyTypeMatch();
      } else if (!minVal && !maxVal && !dataval) {
        return locationMatch() && occupancyTypeMatch();
      } else if (minVal && maxVal) {
        return (
          val >= minVal &&
          val <= maxVal &&
          locationMatch() &&
          occupancyTypeMatch()
        );
      } else if (minVal) {
        return val >= minVal && locationMatch() && occupancyTypeMatch();
      } else if (maxVal) {
        return val <= maxVal && locationMatch() && occupancyTypeMatch();
      } else if (!minVal && !maxVal) {
        return (
          val === dataval &&
          locationMatch() &&
          occupancyTypeMatch()
        );
      }
  
      return pg;
    });
  
    if (
      !location &&
      (!occupancytype || occupancytype === "occupancy Type") &&
      (!minValue || isNaN(parseInt(minValue))) &&
      (!maxValue || isNaN(parseInt(maxValue))) &&
      (!data || isNaN(parseInt(data)))
    ) {
      console.log("No filters applied");
      setpgs(copypgs);
    } else {
      setpgs(filteredPgs);
    }
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Clicked outside the dropdown, update the dropdown value with the selected data
        if (minValue && maxValue) {
          setData(`${minValue} - ${maxValue}`);
        } else if (minValue) {
          setData(`More than ${minValue}`);
        } else if (maxValue) {
          setData(`Up to ${maxValue}`);
        } else {
          setData(data);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [minValue, maxValue,occupancytype,location,data]);

  return (
    <div>
      <section className="search-banner backcolor text-white " id="search-banner">
        <div className="container py-5 ">
          <div className="row text-center pb-4">
            <div className="col-md-12">
              <h2>Find Your Dream PG</h2>
            </div>
          </div>
          <div className="row addBorder ">
            <div className="col-md-12 text-dark ">
              <div className="card rounded-pill">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group d-flex ">
                        <div className="d-flex justify-content-between  ">
                          <ion-icon
                            style={{
                              paddingTop: "10px",
                              marginRight: "10px",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                            name="location"
                          ></ion-icon>
                          <input
                            id="inputState"
                            className="form-select "
                            value={location}
                            onChange={(e) => {
                              setLocation(e.target.value);                            
                              }}
                            placeholder="Enter Location"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group d-flex ">
                        <div className="py-2">
                          <ion-icon
                            style={{
                              paddingTop: "5px",
                              marginRight: "10px",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                            name="home"
                          ></ion-icon>
                        </div>
                        <select id="inputState" className="form-select "
                          value={occupancytype}
                          onChange={(e) => {
                            setOccupancyType(e.target.value);
                            console.log(e.target.value);
                            }}
                        >
                          <option selected> occupancy Type</option>
                          <option>Single</option>
                          <option>Double</option>
                          <option>Triple</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-auto py-2">&#x20B9;</div>
                        <div className="col">
                          <div className="dropdown" ref={dropdownRef}>
                            <button
                              className="form-select custom-dropdown-toggle"
                              type="button"
                              id="budgetDropdown"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {data}
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="budgetDropdown"
                            >
                              <div className="d-flex justify-content-between">
                                <input
                                  className="dropdown-item form-control"
                                  placeholder="Min"
                                  value={minValue}
                                  onChange={handleMinValueChange}
                                />
                                <input
                                  className="dropdown-item form-control"
                                  placeholder="Max"
                                  value={maxValue}
                                  onChange={handleMaxValueChange}
                                />
                              </div>
                              <div className="dropdown-divider"></div>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("6000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                6000
                              </li>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("7000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                7000
                              </li>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("8000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                8000
                              </li>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("9000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                9000
                              </li>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("10000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                10000
                              </li>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("11000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                11000
                              </li>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("12000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                12000
                              </li>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("13000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                13000
                              </li>
                              <li
                                className="dropdown-item"
                                onClick={() => {
                                  setData("14000");
                                  setMinValue("");
                                  setMaxValue("");
                                }}
                              >
                                14000
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex ">
                      <button
                        type="button"
                        className="btn rounded-pill px-5 "
                        onClick={handleSearch}
                      >
                        <div className="d-flex justify-content-between  ">
                          <ion-icon
                            style={{
                              paddingTop: "5px",
                              marginRight: "10px",
                              fontWeight: "bold",
                            }}
                            name="search-outline"
                          ></ion-icon>
                          <div className="px-2">
                            <b>Search</b>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
