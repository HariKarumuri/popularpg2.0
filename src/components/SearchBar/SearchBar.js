import React, {useContext, useEffect, useRef } from "react";
import SearchContext from "../Appcontext/SearchContext";
const SearchBar = () => {
  const dropdownRef = useRef(null);
  const { data, setData,
    minValue, setMinValue,
    maxValue, setMaxValue,
    location, setLocation,
    gender, setGender,
    occupancytype, setOccupancyType,
    sortType, setSortType,
    handleSearch}= useContext(SearchContext);

  const handleMinValueChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxValueChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minValue, maxValue, data]);
  
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
                    <div className="col-md-2">
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
                    <div className="d-flex col-md-1">
                      <select id="inputState" className="form-select "
                      value={sortType}
                        onChange={handleSortChange}>
                        <option selected>sort</option>
                        <option>Price : Low to High</option>
                        <option>Price : High to Low</option>
                      </select>
                    </div>
                    <div className="d-flex col-md-1">
  <button className="btn btn-primary" onClick={()=>handleSearch()}>
    Search
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
