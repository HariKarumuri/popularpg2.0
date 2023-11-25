import React, { useState, useEffect,useRef } from "react";
import Logo from "../../assets/images/popular pg logo.png";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 400) {
      document.querySelector(".header-bottom").classList.add("active");
    } else {
      document.querySelector(".header-bottom").classList.remove("active");
    }
  };

  const handleDocumentClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      closeNavbar();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="header-bottom">
      <div className="container">
        <Link to="/" className="logo">
          <img src={Logo} alt="Homeverse logo" height="55px" />
        </Link>

        <nav className={`navbar ${navbarActive ? "active" : ""}`} >
          <div className="navbar-top">
            <Link to="/" className="logo">
              <img src={Logo} alt="Homeverse logo" />
            </Link>
            <button
              className="nav-close-btn"
              onClick={closeNavbar}
              aria-label="Close Menu"
             
            >
              {navbarActive ? (
                <ion-icon name="close-outline"></ion-icon>
              ) : (
                <ion-icon name="menu-outline"></ion-icon>
              )}
            </button>
          </div>
          <div className="navbar-bottom">
            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-link" onClick={closeNavbar}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/listings"
                  className="navbar-link"
                  onClick={closeNavbar}
                >
                  Explore Pg
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/contact"
                  className="navbar-link"
                  onClick={closeNavbar}
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>

        <div className="header-bottom-actions">
          <button className="header-bottom-actions-btn" aria-label="Profile">
            <Link to="/user/profile"><ion-icon name="person-outline"></ion-icon></Link> 
            <span>Profile</span>
          </button>
          <div className="wrapper">
            <button className="header-top-btn AddListing">Add Listing</button>
          </div>

          <button
            className="header-bottom-actions-btn"
            onClick={toggleNavbar}
            aria-label={navbarActive ? "Close Menu" : "Open Menu"}
          >
            {navbarActive ? (
              <ion-icon name="close-outline"></ion-icon>
            ) : (
              <ion-icon name="menu-outline"></ion-icon>
            )}
            <span>Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
