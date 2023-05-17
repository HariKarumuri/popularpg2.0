import React from "react";
import Picture from "../../assets/images/imgage2.jpg";

const BlogList = () => {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <p className="section-subtitle">News & Blogs</p>

        <h2 className="h2 section-title">Leatest News Feeds</h2>

        <div className="blog-list has-scrollbar row">
          <div className="blog-card col-lg-4 col-md-5 col-sm-10 col-10">
            <figure className="card-banner">
              <img src={Picture} alt="alt text" className="w-100" />
            </figure>

            <div className="blog-content">
              <div className="blog-content-top">
                <ul className="card-meta-list">
                  <li>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="person"></ion-icon>

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="pricetags"></ion-icon>

                      <span>Ranking</span>
                    </a>
                  </li>
                </ul>

                <h3 className="h3 blog-title">
                  <a href="#">The Most Popular Pg Lists Of 2023</a>
                </h3>
              </div>

              <div className="blog-content-bottom">
                <div className="publish-date">
                  <ion-icon name="calendar"></ion-icon>

                  <time datetime="2023-27-04">Apr 27, 2023</time>
                </div>

                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="blog-card col-lg-4 col-md-5 col-sm-10 col-10">
            <figure className="card-banner">
              <img src={Picture} alt="alt text" className="w-100" />
            </figure>

            <div className="blog-content">
              <div className="blog-content-top">
                <ul className="card-meta-list">
                  <li>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="person"></ion-icon>

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="pricetags"></ion-icon>

                      <span>Ranking</span>
                    </a>
                  </li>
                </ul>

                <h3 className="h3 blog-title">
                  <a href="#">The Most Popular Pg Lists Of 2023</a>
                </h3>
              </div>

              <div className="blog-content-bottom">
                <div className="publish-date">
                  <ion-icon name="calendar"></ion-icon>

                  <time datetime="2023-27-04">Apr 27, 2023</time>
                </div>

                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="blog-card col-lg-4 col-md-5 col-sm-10 col-10">
            <figure className="card-banner">
              <img src={Picture} alt="alt text" className="w-100" />
            </figure>

            <div className="blog-content">
              <div className="blog-content-top">
                <ul className="card-meta-list">
                  <li>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="person"></ion-icon>

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="pricetags"></ion-icon>

                      <span>Ranking</span>
                    </a>
                  </li>
                </ul>

                <h3 className="h3 blog-title">
                  <a href="#">The Most Popular Pg Lists Of 2023</a>
                </h3>
              </div>

              <div className="blog-content-bottom">
                <div className="publish-date">
                  <ion-icon name="calendar"></ion-icon>

                  <time datetime="2023-27-04">Apr 27, 2023</time>
                </div>

                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="blog-card col-lg-4 col-md-5 col-sm-10 col-10">
            <figure className="card-banner">
              <img src={Picture} alt="alt text" className="w-100" />
            </figure>

            <div className="blog-content">
              <div className="blog-content-top">
                <ul className="card-meta-list">
                  <li>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="person"></ion-icon>

                      <span>by: Admin</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="card-meta-link">
                      <ion-icon name="pricetags"></ion-icon>

                      <span>Ranking</span>
                    </a>
                  </li>
                </ul>

                <h3 className="h3 blog-title">
                  <a href="#">The Most Popular Pg Lists Of 2023</a>
                </h3>
              </div>

              <div className="blog-content-bottom">
                <div className="publish-date">
                  <ion-icon name="calendar"></ion-icon>

                  <time datetime="2023-27-04">Apr 27, 2023</time>
                </div>

                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
