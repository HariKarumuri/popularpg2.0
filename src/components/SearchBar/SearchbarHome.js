import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SearchContext from "../Appcontext/SearchContext";
import Select from "react-select"; // Import react-select

const SearchBarHome = () => {
  const {
    location,
    setLocation,
    gender,
    setGender,
    occupancytype,
    setOccupancyType,
    handleSearch,
  } = useContext(SearchContext);

  const locationOptions = [
    { value: "Marathahalli", label: "Marathahalli" },
    { value: "BTM Layout", label: "BTM Layout" },
    { value: "BTM Layout Stage 1", label: "BTM Layout Stage 1" },
    { value: "BTM Layout Stage 2", label: "BTM Layout Stage 2" },
    { value: "Electronic City", label: "Electronic City" },
    { value: "Electronic City Phase 1", label: "Electronic City Phase 1" },
    { value: "Electronic City Phase 2", label: "Electronic City Phase 2" },
    { value: "Manyata Tech Park", label: "Manyata Tech Park" },
    { value: "Whitefield", label: "Whitefield" },
    { value: "Sarjapur Road", label: "Sarjapur Road" },
    { value: "Madiwala", label: "Madiwala" },
    { value: "Koramangala", label: "Koramangala" },
    { value: "HSR Layout", label: "HSR Layout" },
    { value: "Bellandur", label: "Bellandur" },
    { value: "Lalbagh", label: "Lalbagh" },
    { value: "Kr Market", label: "Kr Market" },
    { value: "Jaynagar", label: "Jaynagar" },
    { value: "Banashankari", label: "Banashankari" },
    { value: "JP Nagar", label: "JP Nagar" },
  ];
  return (
    <div>
      <section className="search-bar-home mt-5">
        <div className="container">
          <div
            className="row search-bar-container"
            style={{ border: "1px solid black", borderRadius: "10px" }}
          >
            <div className="col-md-5 col-8">
              <div className="d-flex justify-content-between align-items-center">
                <ion-icon
                  style={{
                    paddingTop: "4px",
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
                  )}
                  options={locationOptions}
                  onChange={(selectedOptions) => {
                    const selectedValues = selectedOptions.map(
                      (option) => option.value
                    );
                    setLocation(selectedValues);
                  }}
                  placeholder="Locality"
                  styles={{
                    // Add any additional styles here if needed
                    control: (base) => ({
                      ...base,
                      border: "none",
                      outline: "none",
                    }),
                  }}
                />
              </div>
            </div>
            <div
              className="col-md-2 display-none-mobile"
              style={{ borderLeft: "1px solid black" }}
            >
              <div className="form-group">
                <select
                  className="form-select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    appearance: "none", // This removes the default dropdown arrow
                    background: "none",
                  }}
                >
                  <option value="">Gender</option>
                  <option value="Boys">Boys</option>
                  <option value="Girls">Girls</option>
                  <option value="Coliving">Coliving</option>
                </select>
              </div>
            </div>
            <div
              className="col-md-3 display-none-mobile"
              style={{ borderLeft: "1px solid black" }}
            >
              <span></span>
              <div className="form-group">
                <select
                  className="form-select"
                  value={occupancytype}
                  onChange={(e) => setOccupancyType(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    appearance: "none", // This removes the default dropdown arrow
                    background: "none",
                  }}
                >
                  <option value="">Sharing Type</option>
                  <option value="Single">Single</option>
                  <option value="Double">Double</option>
                  <option value="Triple">Triple</option>
                </select>
              </div>
            </div>

            <div className="col-md-1 col-2 home-search-btn">
              <Link
                to="/listings"
                onClick={handleSearch}
                style={{
                  backgroundColor: "#E8DF41",
                  color: "black",
                  fontSize: "15px",
                  borderRadius: "20px",
                  paddingLeft: "10px",
                  paddingRight: "60px",
                  marginTop: "5.1px",
                  border: "none",
                  outline: "none",
                }}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchBarHome;
