import React, { useContext, useEffect, useRef } from "react";
import SearchContext from "../Appcontext/SearchContext";
import Select from "react-select"; // Import react-select

const SearchBar = () => {
  const dropdownRef = useRef(null);
  const {
    data,
    setData,
    minValue,
    setMinValue,
    maxValue,
    setMaxValue,
    location,
    setLocation,
    gender,
    setGender,
    occupancytype,
    setOccupancyType,
    sortType,
    setSortType,
    handleSearch,
  } = useContext(SearchContext);

  const handleMinValueChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxValueChange = (e) => {
    setMaxValue(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const locationOptions = [
    { value: "Marthahalli", label: "Marthahalli" },
    { value: "Manyata Tech Park", label: "Manyata Tech Park" },
    { value: "BTM Layout", label: "BTM Layout" },
    { value: "Whitefield", label: "Whitefield" },
    { value: "Electronic city", label: "Electronic city" },
    { value: "Sarjapur Road", label: "Sarjapur Road" },
    { value: "Madiwala", label: "Madiwala" },
    { value: "Kormangala", label: "Kormangala" },
    { value: "HSR Layout", label: "HSR Layout" },
    { value: "Bellandur", label: "Bellandur" },
  ];
  const occupancyTypeOptions = [
    { value: "Single", label: "Single" },
    { value: "Double", label: "Double" },
    { value: "Triple", label: "Triple" },
  ];

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
    <div className="SearchBar-listing">
      <section
        className="search-banner backcolor text-white "
        id="search-banner"
      >
        <div className="container py-2 ">
          <div className="row Search-Listing">
            <div className="col-12 text-dark ">
              <div className="card-body">
                <div className="row">
                  {/* location below */}
                  <div className="col-lg-6 justify-content-center align-items-center Search-listing-Location">
                    <div className="form-group d-flex ">
                      <div className="d-flex ">
                        <ion-icon
                          style={{
                            paddingTop: "10px",
                            marginRight: "10px",
                            fontWeight: "bold",
                            fontSize: "20px",
                          }}
                          name="location"
                        ></ion-icon>
                        <Select
                          className="location_input_select"
                          isMulti
                          value={locationOptions.filter((option) =>
                            location.includes(option.value)
                          )} // Filter out selected options
                          options={locationOptions}
                          onChange={(selectedOptions) => {
                            const selectedValues = selectedOptions.map(
                              (option) => option.value
                            );
                            setLocation(selectedValues);
                          }}
                          placeholder="Select Locations"
                        />
                      </div>
                    </div>
                  </div>
                  {/* gender below */}
                  <div className="col-lg-2 d-flex  justify-content-center align-items-center Search-listing-gender">
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
                  {/* sharing below */}
                  <div className="col-lg-4 ">
                    <div className="form-group d-flex justify-content-center align-items-center Search-listing-sharing">
                      <div className="form-group d-flex">
                        <div className="d-flex justify-content-center align-items-center ">
                          <ion-icon
                            style={{
                              paddingTop: "5px",
                              marginRight: "10px",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                            name="home"
                          ></ion-icon>

                          <Select
                            className="sharing_input_select"
                            isMulti
                            value={occupancyTypeOptions.filter((option) =>
                              occupancytype.includes(option.value)
                            )}
                            options={occupancyTypeOptions}
                            onChange={(selectedOptions) => {
                              const selectedValues = selectedOptions.map(
                                (option) => option.value
                              );
                              setOccupancyType(selectedValues);
                            }}
                            placeholder="Select Occupancy Type"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  mt-3 margin-0-mobile ">
                  {/* budget below */}
                  <div className="col-lg-5 col-6">
                    <div className="row justify-content-center align-items-center ">
                      <div className="col-auto py-2 seachbar-icons">
                       &#x20B9;
                      </div>
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
                  {/* sort below */}
                  <div className="d-flex col-lg-4 col-6 justify-content-center align-items-center">
                    <select
                      id="inputState"
                      className="form-select "
                      value={sortType}
                      onChange={handleSortChange}
                    >
                      <option selected>Sort by Order</option>
                      <option>Price : Low to High</option>
                      <option>Price : High to Low</option>
                    </select>
                  </div>
                  {/* submit below */}
                  <div className="d-flex col justify-content-center align-items-center">
                    <button
                      className=" Filter-Search-Btn d-flex justify-content-center align-items-center"
                      onClick={() => handleSearch()}
                    >
                      <ion-icon name="search-outline"></ion-icon>{" "}
                      <span className="mx-2">Search</span>
                    </button>
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
