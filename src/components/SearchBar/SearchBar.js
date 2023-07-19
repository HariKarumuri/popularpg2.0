import React, { useState, useEffect, useRef } from "react";

const SearchBar = ({ pgs, setpgs, copypgs,setloadingfalseafter3sec,setIsLoading }) => {
  const [data, setData] = useState("Budget");
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [occupancytype, setOccupancyType] = useState("");
  const [sortType, setSortType] = useState(""); // New state for sorting
  const dropdownRef = useRef(null);

  const handleMinValueChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxValueChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };
  const [shouldRunSearch, setShouldRunSearch] = useState(false); // Add this state

  useEffect(() => {
    setShouldRunSearch(true);
  }, []);


  useEffect(() => {
    if (!shouldRunSearch) {
        return; 
       }
    const handleSearch = () => {
      // Retrieve the data before the search without changing any properties
      const updatedPgs = copypgs.map((pg) => ({ ...pg }));
      setIsLoading(true);
      // Filter the pgs based on the selected value from the dropdown, location, occupancy type, and gender
      const filteredPgs = updatedPgs.filter((pg) => {
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
    
        const genderType = () => {
          if (gender.toLowerCase() === "boys") {
            return pg.pg_for === "boys";
          } else if (gender.toLowerCase() === "girls") {
            return pg.pg_for === "girls";
          } else if (gender.toLowerCase() === "coliving") {
            return pg.pg_for === "coliving";
          } else {
            return true; // Return true if gender is not specified
          }
        };
    
        const locationMatch = () => {
          if (lowercaseSearchLocation) {
            return lowercasePgLocation.includes(lowercaseSearchLocation) || lowercasePgLocation.startsWith(lowercaseSearchLocation);
          } else {
            return true; // Return true if no search location is specified
          }
        };
        
        if (
          !minVal &&
          !maxVal &&
          !dataval &&
          !location &&
          occupancyTypeMatch() &&
          genderType() 
        ) {
          return true;
        }

        if (minVal && maxVal) {
          return (
            val >= minVal &&
            val <= maxVal &&
            locationMatch() &&
            occupancyTypeMatch() &&
            genderType()
          );
        } else if(minVal) {
          return (
            val >= minVal &&
            locationMatch() &&
            occupancyTypeMatch() &&
            genderType()
          );
        } else if (maxVal) {
          return (
            val <= maxVal &&
            locationMatch() &&
            occupancyTypeMatch() &&
            genderType()
          );
        } else if (dataval) {
          return (
            val === dataval &&
            locationMatch() &&
            occupancyTypeMatch() &&
            genderType()
          );
        }else if(location){
          return (
            locationMatch() &&
            occupancyTypeMatch() &&
            genderType()
          );
        }else if(location && occupancyTypeMatch()){
          return (
            locationMatch() &&
            occupancyTypeMatch() &&
            genderType()
          );
        }         
        return false;
      });
      setIsLoading(false);
    
      const sortedPgs = sortData(filteredPgs, sortType);
      if(filteredPgs.length===0){
        console.log("No pgs found")
        setloadingfalseafter3sec()
      }
      if (
        !location &&
        (!occupancytype || occupancytype === "occupancy Type") &&
        (!minValue || isNaN(parseInt(minValue))) &&
        (!maxValue || isNaN(parseInt(maxValue))) &&
        (gender === "Gender" || gender === "") &&
        (sortType === "sort" || sortType === "") &&
        (!data || isNaN(parseInt(data)))
      ) {
        console.log("No filters applied");
        setpgs(pgs);
        setpgs(copypgs);
      } else {
        setpgs(sortedPgs);
      }
    };
    setTimeout(() => {
    handleSearch();
    }, 1000);
  }, [minValue, maxValue, occupancytype, location, data, gender, sortType,copypgs]);

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
  }, [minValue, maxValue, data]);

  // Helper function to sort the data based on sort type
  const sortData = (data, sortType) => {
    if (sortType === "Price : Low to High") {
      return [...data].sort((a, b) => parseInt(a.min_price) - parseInt(b.min_price));
    } else if (sortType === "Price : High to Low") {
      return [...data].sort((a, b) => parseInt(b.min_price) - parseInt(a.min_price));
    }
    return data;
  };

  return (
    <div>
      <section
        className="search-banner backcolor text-white "
        id="search-banner"
      >
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
                    <div className="col-md-2">
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
                        <select
                          id="inputState"
                          className="form-select "
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
                    <div className="col-md-2 d-flex ">
                      <div className="form-group d-flex ">
                        <div className="py-2">
                          <ion-icon
                            style={{
                              paddingTop: "5px",
                              marginRight: "10px",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                            name="people-circle-outline"
                          ></ion-icon>
                        </div>
                        <select
                          id="inputState"
                          className="form-select "
                          value={gender}
                          onChange={(e) => {
                            setGender(e.target.value);
                          }}
                        >
                          <option selected>Gender</option>
                          <option>Boys</option>
                          <option>Girls</option>
                          <option>Coliving</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex col-md-2">
                      <select id="inputState" className="form-select "
                      value={sortType}
                        onChange={handleSortChange}>
                        <option selected>sort</option>
                        <option>Price : Low to High</option>
                        <option>Price : High to Low</option>
                      </select>
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
