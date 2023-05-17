import React from 'react'
import Photo1 from "../assets/images/about-banner-1.png"
import Photo2 from "../assets/images/pool.jpg"

const AboutUs = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="container">

          <figure className="about-banner">
            <img src={Photo1} alt="House interior"/>

            <img src={Photo2} alt="House interior" className="abs-img"/>
          </figure>

          <div className="about-content">

            <p className="section-subtitle">About Us</p>

            <h2 className="h2 section-title">The Leading PG Rental Marketplace.</h2>

            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex ut ipsa sint suscipit dolore provident obcaecati optio possimus cupiditate facere, praesentium quisquam, nesciunt beatae minima, laboriosam dolorum neque dicta nobis ad quae incidunt hic. Ducimus laborum eos omnis? Nam neque cumque hic maxime recusandae maiores, dolore natus officia inventore quod.
            </p>

            <ul className="about-list">

              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="home-outline"></ion-icon>
                </div>

                <p className="about-item-text">Smart PG Design</p>
              </li>

              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="leaf-outline"></ion-icon>
                </div>

                <p className="about-item-text">Beautiful Scene Around</p>
              </li>

              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="wine-outline"></ion-icon>
                </div>

                <p className="about-item-text">All Amenities</p>
              </li>

              <li className="about-item">
                <div className="about-item-icon">
                  <ion-icon name="shield-checkmark-outline"></ion-icon>
                </div>

                <p className="about-item-text">Complete 24/7 Security</p>
              </li>

            </ul>

            <p className="callout">
            "Join PGS today and take your career to the next level. Visit our website to learn more and apply now."
            </p>

            <a href="#service" className="btn">Our Services</a>

          </div>

        </div>
      </section>
    </div>
  )
}

export default AboutUs
