import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBarHome = ({
  pgs,
  setpgs,
  copypgs,
  setloadingfalseafter3sec,
  setIsLoading,
}) => {
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [occupancytype, setOccupancyType] = useState("");

  

  
  return (
    <div>
      <section className="search-bar-home mt-5">
        <div className="container">
          <div className="row" style={{ border: "1px solid black", borderRadius: "10px" }}>
            <div className="col-md-5">
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
                <input
                  id="inputState"
                  className="form-select"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                  placeholder="Locality"
                  style={{ border: "none", outline: "none" }}
                />
              </div>
            </div>
            <div className="col-md-2" style={{ borderLeft: "1px solid black" }}>
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
            <div className="col-md-3" style={{ borderLeft: "1px solid black" }}>
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

            <div className="col-md-1">
              <Link
                to="/listings"
                state={{ gender, occupancytype, location }}
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