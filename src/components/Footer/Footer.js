import React from "react";
import Logo from "../../assets/images/popular pg logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top ">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-8 col-6">
              <div className="footer-brand">
                <a href="#" className="logo">
                  <img src={Logo} alt="Popular PG logo" width="150px" />
                </a>

                <p className="section-text">
                  Popular PG is a marketplace for paying guest (PG)
                  accommodation in Bangalore. We connect PG seekers with PG
                  providers, making it easy to find the perfect PG for your
                  needs. Whether you are looking for a PG near your college or
                  workplace, or you are on a budget, we have the PG for you.
                </p>

               {/*  <ul className="contact-list">
                  <li>
                    <a href="#" className="contact-link">
                      <ion-icon name="location-outline"></ion-icon>

                      <address>electronic city Phase 2</address>
                    </a>
                  </li>

                  <li>
                    <a href="tel:+0123456789" className="contact-link">
                      <ion-icon name="call-outline"></ion-icon>

                      <span>9874563210</span>
                    </a>
                  </li>

                  <li>
                    <a
                      href="mailto:contact@homeverse.com"
                      className="contact-link"
                    >
                      <ion-icon name="mail-outline"></ion-icon>

                      <span>popularpg629@gmail.com</span>
                    </a>
                  </li>
                </ul> */}

                <ul className="social-list">
                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="social-link">
                      <ion-icon name="logo-youtube"></ion-icon>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="  col-lg-2 col-6 ">
              <ul className="footer-list company-footer">
                <li>
                  <p className="footer-list-title">Company</p>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Contact us
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" className="footer-link">
                    Grievances
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link">
                    Safety Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className=" col-lg-7 ">
              <ul className="footer-list ">
                <li>
                  <p className="footer-list-title">PGs in Bangalore</p>
                </li>
                <div className="addressMap ">
                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in Marathalli
                    </Link>
                  </li>

                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in BTM Layout
                    </Link>
                  </li>
                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in Whitefield
                    </Link>
                  </li>
                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in Electronic city
                    </Link>
                  </li>
                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in Sarjapur Road
                    </Link>
                  </li>
                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in Madiwala
                    </Link>
                  </li>
                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in Kormangala
                    </Link>
                  </li>
                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in HSR Layout
                    </Link>
                  </li>
                  <li className="  m-1">
                    <Link to="" className="footer-link">
                      Pg in Bellandur
                    </Link>
                  </li>
                  <li className="m-1">
                    <Link to="" className="footer-link">
                      Pg in Manyata Tech Park
                    </Link>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom d-none">
        <div className="container">
          <p className="copyright">
            {/* &copy; 2022 <a href="#">harikarumuri</a>. All Rights Reserved */}
            Disclaimer: Popularpg is only an intermediary offering its platform
            to advertise properties of Seller for a Customer/Buyer/User coming
            on its Website and is not and cannot be a party to or privy to or
            control in any manner any transactions between the Seller and the
            Customer/Buyer/User. All the offers and discounts on this Website
            have been extended by various Builder(s)/Developer(s) who have
            advertised their products. PopularPG is only communicating the
            offers and not selling or rendering any of those products or
            services. It neither warrants nor is it making any representations
            with respect to offer(s) made on the site. PopularPG shall neither
            be responsible nor liable to mediate or resolve any disputes or
            disagreements between the Customer/Buyer/User and the Seller and
            both Seller and Customer/Buyer/User shall settle all such disputes
            without involving PopularPG in any manner. All trademarks, logos and
            names are properties of their respective owners. All Rights
            Reserved. © Copyright 2023 PopularPG.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
