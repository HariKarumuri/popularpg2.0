import React, { useContext, useState } from "react";
import Pg_Listing_Card from "./Cards/Pg_Listing_Card";
import AdsCard from "./Cards/AdsCard";
import SearchBar from "../SearchBar/SearchBar";
import SearchContext from "../Appcontext/SearchContext";

const Pg_Product_List = () => {
  const { pgs, isLoading } = useContext(SearchContext);
  const itemsPerPage = 30; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    scrollToTop(); // Scroll to top when paginate is called
  };

  const currentItems = pgs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="row ">
      <SearchBar />

      <div className="col-lg-10 mt-3 col-sm-12">
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <div className="loading-container">
              <img
                src="https://i.postimg.cc/WpY7QKVD/popular-pg-logo.png"
                alt="Logo"
                className="spinner"
              />
            </div>
          </div>
        ) : currentItems.length === 0 ? (
          <div className="d-flex justify-content-center">
            <div className="no-record-found fs-1">No record found.</div>
          </div>
        ) : (
          currentItems.map((pgData, index) => (
            <Pg_Listing_Card key={index} pgData={pgData} />
          ))
        )}
      </div>
      <div className="col-lg-2  display-none-mobile">
        <AdsCard />
      </div>

      <div className="col-12 d-flex justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: Math.ceil(pgs.length / itemsPerPage) }).map(
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
            <li
              className={`page-item ${
                currentPage === Math.ceil(pgs.length / itemsPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pg_Product_List;
