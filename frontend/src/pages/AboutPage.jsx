import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />
      <section
        className="site-banner jarallax min-height300 padding-large"
        style={{ background: "url(images/hero-image.jpg) no-repeat" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">About us</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="/">Home /</a>
                </span>
                <span className="item">About</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shipping-information" className="padding-large">
        <div className="container">
          <div className="row d-flex flex-wrap align-items-center justify-content-between">
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-truck"></i>
                <h4 className="block-title">
                  <strong>Free shipping</strong> Over $200
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-return"></i>
                <h4 className="block-title">
                  <strong>Money back</strong> Return within 7 days
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-tags1"></i>
                <h4 className="block-title">
                  <strong>Buy 4 get 5th</strong> 50% off
                </h4>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="icon-box">
                <i className="icon icon-help_outline"></i>
                <h4 className="block-title">
                  <strong>Any questions?</strong> experts are ready
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-us">
        <div className="container ">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="image-holder">
                <img
                  src="images/single-image1.jpg"
                  alt="single"
                  className="about-image"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="detail">
                <div className="display-header">
                  <h2 className="section-title">How was Ultras Store started?</h2>
                  <p>
                    Risus augue curabitur diam senectus congue velit et. Sed
                    vitae metus nibh sit era. Nulla adipiscing pharetra
                    pellentesque maecenas odio eros at. Et libero vulputate amet
                    duis erat volutpat vitae eget. Sed vitae metus nibh sit era.
                    Nulla adipiscing pharetra pellentesque maecenas odio eros
                    at.
                    <br />
                    Sed vitae metus nibh sit era. Nulla adipiscing pharetra
                    pellentesque maecenas odio eros at. Et libero vulputate amet
                    duis erat volutpat vitae eget. Quam libero etiam et in ac at
                    quis. Risus augue curabitur diam senectus congue velit et.{" "}
                  </p>
                  <div className="btn-wrap">
                    <a
                      href="shop"
                      className="btn btn-dark btn-medium d-flex align-items-center"
                      tabindex="0"
                    >
                      Shop our store<i className="icon icon-arrow-io"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="padding-large">
        <div className="container">
          <div className="reviews-content">
            <div className="row d-flex flex-wrap">
              <div className="col-md-2">
                <div className="review-icon">
                  <i className="icon icon-right-quote"></i>
                </div>
              </div>
              <div className="col-md-8">
                <div className="swiper testimonial-swiper overflow-hidden">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-detail">
                        <p>
                          “Dignissim massa diam elementum habitant fames. Id
                          nullam pellentesque nisi, eget cursus dictumst
                          pharetra, sit. Pulvinar laoreet id porttitor egestas
                          dui urna. Porttitor nibh magna dolor ultrices iaculis
                          sit iaculis.”
                        </p>
                        <div className="author-detail">
                          <div className="name">By Maggie Rio</div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-detail">
                        <p>
                          “Dignissim massa diam elementum habitant fames. Id
                          nullam pellentesque nisi, eget cursus dictumst
                          pharetra, sit. Pulvinar laoreet id porttitor egestas
                          dui urna. Porttitor nibh magna dolor ultrices iaculis
                          sit iaculis.”
                        </p>
                        <div className="author-detail">
                          <div className="name">By John Smith</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-arrows">
                  <button className="prev-button">
                    <i className="icon icon-arrow-left"></i>
                  </button>
                  <button className="next-button">
                    <i className="icon icon-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="brand-collection" className="padding-medium bg-light-grey">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between">
            <img src="images/brand1.png" alt="phone" className="brand-image" />
            <img src="images/brand2.png" alt="phone" className="brand-image" />
            <img src="images/brand3.png" alt="phone" className="brand-image" />
            <img src="images/brand4.png" alt="phone" className="brand-image" />
            <img src="images/brand5.png" alt="phone" className="brand-image" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
