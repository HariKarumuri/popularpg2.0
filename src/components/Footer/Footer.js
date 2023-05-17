import React from "react";
import Logo from "../../assets/images/popular pg logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={Logo} alt="Popular PG logo" width="200px"/>
            </a>

            <p className="section-text">
              Lorem Ipsum is simply dummy text of the and typesetting industry.
              Lorem Ipsum is dummy text of the printing.
            </p>

            <ul className="contact-list">
              <li>
                <a href="#" className="contact-link">
                  <ion-icon name="location-outline"></ion-icon>

                  <address>electronic city Lorem ipsum dolor sit amet.</address>
                </a>
              </li>

              <li>
                <a href="tel:+0123456789" className="contact-link">
                  <ion-icon name="call-outline"></ion-icon>

                  <span>9874563210</span>
                </a>
              </li>

              <li>
                <a href="mailto:contact@homeverse.com" className="contact-link">
                  <ion-icon name="mail-outline"></ion-icon>

                  <span>popularpg629@gmail.com</span>
                </a>
              </li>
            </ul>

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

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Company</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  All PGs
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Locations Map
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Services</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Promotional Offers
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Customer Care</p>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Login
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  My account
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Saved List
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="footer-link">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="footer-bottom">
      <div className="container">

        <p className="copyright">
          &copy; 2022 <a href="#">harikarumuri</a>. All Rights Reserved
        </p>

      </div>
    </div> */}
    </footer>
  );
};

export default Footer;
