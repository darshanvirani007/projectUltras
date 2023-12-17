import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

export default function Thankyou() {
  return (
    <>    
    <Header />
    <section id="thank-you" className="padding-large bg-light-grey">
      <div className="container">
        <div className="row">
          <div className="page-header col-md-6">
            <div className="section-header">
              <h1 className="page-title">Thank You!</h1>
              <p>We will get back to you as soon as possible.</p>
            </div>
          </div>
          <div className="contact-information">
            <div className="col-md-6">
              <div className="section-header">
                <h2 className="section-title">Get in touch</h2>
              </div>
              <div className="row">
                <div className="d-flex flex-wrap bg-light">
                  <div className="col-md-6 border-right border-bottom">
                    <div className="detail">
                      <h3>Phones</h3>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon icon-phone"></i>+1650-243-00023
                        </li>
                        <li>
                          <i className="icon icon-phone"></i>+1650-243-00021
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 border-bottom">
                    <div className="detail">
                      <h3>Emails</h3>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon icon-envelope"></i>
                          <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
                        </li>
                        <li>
                          <i className="icon icon-envelope"></i>
                          <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6 border-right">
                    <div className="address detail">
                      <h3>Address</h3>
                      <ul className="list-unstyled">
                        <li>
                          <i className="icon icon-location"></i>
                          <span>North Melbourne VIC 3051, Australia</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail">
                      <h3>Social Links</h3>
                      <ul className="social-links list-unstyled d-flex">
                        <li><a href="#" className="icon icon-facebook"></a></li>
                        <li><a href="#" className="icon icon-twitter"></a></li>
                        <li><a href="#" className="icon icon-youtube-play"></a></li>
                        <li><a href="#" className="icon icon-behance-square"></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    
    <section id="instagram" className="padding-large">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Follow our instagram</h2>
        </div>
        <p>Our official Instagram account <a href="#">@ultras</a> or <a href="#">#ultras_clothing</a>
        </p>
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image1.jpg" alt="instagram" className="insta-image" />
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image2.jpg" alt="instagram" className="insta-image" />
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image3.jpg" alt="instagram" className="insta-image" />
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image4.jpg" alt="instagram" className="insta-image" />
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image5.jpg" alt="instagram" className="insta-image" />
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <figure className="zoom-effect">
              <img src="images/insta-image6.jpg" alt="instagram" className="insta-image" />
              <i className="icon icon-instagram"></i>
            </figure>
          </div>
        </div>          
      </div>
    </section>

    <section id="shipping-information">
      <hr />
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
      <hr />
    </section>
    <Footer />
</>
  )
}
