import React from "react";

const HeaderTop = () => {
  return (
    <div>
      <div className="header-top">
        <div className="container">
          <ul className="header-top-list">
            <li className="MobileViewAlign">
              <a href="mailto:info@homeverse.com" className="header-top-link">
                <ion-icon name="mail-outline"></ion-icon>

                <span>popolarpg629@gmail.com</span>
              </a>
            </li>

            <li>
              <a href="#" className="header-top-link MobiledisplayNone">
                <ion-icon name="location-outline"></ion-icon>

                <address className="m-1">
                  15/A,banglore , electronic city
                </address>
              </a>
            </li>
          </ul>

          <div className="wrapper">
            <ul className="header-top-social-list">
              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="#" className="header-top-social-link">
                  <ion-icon name="logo-pinterest"></ion-icon>
                </a>
              </li>
            </ul>

            <button className="header-top-btn">Add Listing</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
