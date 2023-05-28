import React from "react";

const SearchBar = () => {
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
                      <div className="d-flex justify-content-between  " >
                      <ion-icon  style={{ 
                        paddingTop: "5px",
                        marginRight: "10px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        BackgroundColor: "var(--orange-soda)",
                      }} name="location-outline"></ion-icon>
                                 <input id="inputState" className="form-select " placeholder="Enter Location"></input>

                        </div>
                      </div> 
                    </div>  
                    <div className="col-md-3">
                      <div className="form-group d-flex ">
                      <div className="py-2" ><ion-icon  style={{ 
                        paddingTop: "5px",
                        marginRight: "10px",
                        fontWeight: "bold",
                        fontSize: "20px",
                        BackgroundColor: "var(--orange-soda)",
                      }} name="home"></ion-icon>
                                </div>
                        <select id="inputState" className="form-select "  >
                          <option  selected> occupancy Type</option>
                          <option disabled className="fs-6">Gender</option>
                          <option>Girls</option>
                          <option>Boys</option>
                          <option disabled >looking for </option>
                          <option>PG</option>
                            <option>Room/Bed in Shared-flat</option>
                        </select>
                      </div>
                    </div>
                   
                    <div className="col-md-3">
                      <div className="form-group d-flex ">
                      <div className="py-2" >&#x20B9;</div>
                        <select id="inputState" className="form-select "  >
                          <option  selected> Budget</option>
                          <option>4000</option>
                          <option>5000</option>
                          <option>6000</option>
                          <option>7000</option>
                          <option>8000</option>
                          <option>9000</option>
                          <option>10000</option>
                          <option>11000</option>
                          <option>12000</option>
                          <option>13000</option>
                          <option>14000</option>
                          <option>15000</option>
                          <option>16000</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-3 d-flex ">
                     
                      <button type="button" className="btn rounded-pill  ">
                      <div className="d-flex justify-content-between  " >
                      <ion-icon  style={{ 
                        paddingTop: "5px",
                        marginRight: "10px",
                        fontWeight: "bold",
                      }} name="search-outline"></ion-icon>
                      <div> <b>Search</b> </div>
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
