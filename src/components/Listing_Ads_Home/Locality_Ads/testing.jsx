import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Testing = () => {
  const [data, setData] = useState([]); // State to store the fetched data

  useEffect(() => {
    // Define the URL of the API
    const apiUrl = "https://popularpg.in/products/?locality=Btm%20Layout/";

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        // Set the fetched data in the state
        setData(result);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      <h1>Data from API</h1>

      <div className="property-list has-scrollbar row m-3 p-3">
        {data.map((item) => (
          <li key={item.id}>
            <div className="property-card col-lg-4 col-md-5 col-sm-10 col-10 d-flex flex-column">
              <Link to={`/pgdetails/${item.id}`}>
                <figure className="card-banner">
                  <img
                    src={item.cover_image}
                    alt="Popular Ad"
                    className="img-fluid"
                  />

                  {/* Use your own logic to determine the badge */}
                  <div className="card-badge green">New Listing</div>

                  <div className="banner-actions ">
                    <button className="banner-actions-btn d-flex align-items-center">
                      <ion-icon name="location"></ion-icon>
                      <address></address>
                    </button>

                    <button className="banner-actions-btn">
                      <ion-icon name="camera"></ion-icon>

                      {/* Use the actual number of images here */}
                      <span>{item.additional_images.length}</span>
                    </button>
                  </div>
                </figure>
                <div className="card-content p-2">
                  <div className="h4 card-title">{item.product_name}</div>
                  <div className="card-address">{item.locality}</div>
                  <div className="card-price">
                    <strong>₹{item.min_price}</strong>/Month
                  </div>
                </div>
              </Link>
            </div>
            {/* Add more data fields as needed */}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Testing;
