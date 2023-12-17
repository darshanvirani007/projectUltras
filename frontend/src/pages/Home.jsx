import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    return async () => {
      await axios
        .get("http://localhost:3001/api/v1/products")
        .then(function (response) {
          // handle success
          console.log(response);
          setProducts(response.data.data.products.slice(0, 6));
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      };
    }, []);
    
    const addToCart = async (productId) => {
      await axios
        .post(
          "http://localhost:3001/api/v1/cart/add",
          {
            productId,
            quantity: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    
    return (
      <>
      <Header />
      <Swiper className="mySwiper">
        <SwiperSlide>
          <video height="100%" width="100%" autoPlay loop muted>
            <source
              src="videos/man_texting_on_the_street.mp4"
              type="video/mp4"
            />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/banner1.jpg" alt="" /> 
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/banner2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      {/* <section id="billboard" className="overflow-hidden">
        <button className="button-prev">
          <i className="icon icon-chevron-left"></i>
        </button>
        <button className="button-next">
          <i className="icon icon-chevron-right"></i>
        </button>
        <div className="swiper main-swiper">
          <div className="swiper-wrapper">
            <Swiper className="mySwiper">
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url('images/banner1.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="banner-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <h2 className="banner-title">Summer Collection</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu feugiat amet, libero ipsum enim
                            pharetra hac.
                          </p>
                          <div className="btn-wrap">
                            <a
                              href="shop"
                              className="btn btn-light btn-medium d-flex align-items-center"
                              tabIndex="0"
                            >
                              Shop it now <i className="icon icon-arrow-io"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  style={{
                    backgroundImage: "url('images/banner2.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="banner-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <h2 className="banner-title">Casual Collection</h2>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed eu feugiat amet, libero ipsum enim
                            pharetra hac.
                          </p>
                          <div className="btn-wrap">
                            <a
                              href="shop"
                              className="btn btn-light btn-light-arrow btn-medium d-flex align-items-center"
                              tabIndex="0"
                            >
                              Shop it now <i className="icon icon-arrow-io"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section> */}
      <section id="latest-collection">
        <div className="container">
          <div className="product-collection row">
            <div className="col-lg-7 col-md-12 left-content">
              <div className="collection-item">
                <div className="products-thumb">
                  <img
                    src="images/collection-item1.jpg"
                    alt="collection item"
                    className="large-image image-rounded"
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 product-entry">
                  <div className="categories">casual collection</div>
                  <h3 className="item-title">street wear.</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dignissim massa diam elementum.
                  </p>
                  <div className="btn-wrap">
                    <a href="/" className="d-flex align-items-center">
                      shop collection <i className="icon icon-arrow-io"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 right-content flex-wrap">
              <div className="collection-item top-item">
                <div className="products-thumb">
                  <img
                    src="images/collection-item2.jpg"
                    alt="collection item"
                    className="small-image image-rounded"
                  />
                </div>
                <div className="col-md-6 product-entry">
                  <div className="categories">Basic Collection</div>
                  <h3 className="item-title">Basic shoes.</h3>
                  <div className="btn-wrap">
                    <a href="/" className="d-flex align-items-center">
                      shop collection <i className="icon icon-arrow-io"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="collection-item bottom-item">
                <div className="products-thumb">
                  <img
                    src="images/collection-item3.jpg"
                    alt="collection item"
                    className="small-image image-rounded"
                  />
                </div>
                <div className="col-md-6 product-entry">
                  <div className="categories">Best Selling Product</div>
                  <h3 className="item-title">woolen hat.</h3>
                  <div className="btn-wrap">
                    <a href="/" className="d-flex align-items-center">
                      shop collection <i className="icon icon-arrow-io"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="selling-products"
        className="product-store bg-light-grey padding-large"
      >
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Best selling products</h2>
          </div>

          <div className="tab-content">
            <div id="all" data-tab-content className="active">
              <div className="row d-flex flex-wrap">
                {products.map((e, i) => {
                  return (
                    <div className="product-item col-lg-3 col-md-6 col-sm-6">
                      <div className="image-holder">
                        <img
                          src={`http://localhost:3001/image/${e.images[0]}`}
                          alt={e.title}
                          className="product-image"
                        />
                      </div>
                      <div className="cart-concern">
                        <div className="cart-button d-flex justify-content-between align-items-center">
                          <button
                            type="button"
                            className="btn-wrap cart-link d-flex align-items-center"
                            onClick={() => addToCart(e._id)}
                          >
                            add to cart <i className="icon icon-arrow-io"></i>
                          </button>
                          <button
                            type="button"
                            className="view-btn tooltip
                        d-flex"
                          >
                            <a href={`/single-product/${e._id}`}>
                              <i className="icon icon-screen-full"></i>
                              <span className="tooltip-text">Quick view</span>
                            </a>
                          </button>
                        </div>
                      </div>
                      <div className="product-detail">
                        <h3 className="product-title">
                          <a href={`/single-product/${e._id}`}>{e.title}</a>
                        </h3>
                        <div className="item-price text-primary">
                          ${e.price}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="shoes" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products13.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Orange white Nike</a>
                    </h3>
                    <div className="item-price text-primary">$55.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products14.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Running Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$65.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products15.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Tennis Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$80.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products16.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Nike Brand Shoe</a>
                    </h3>
                    <div className="item-price text-primary">$65.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tshirts" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products3.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Silk White Shirt</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products8.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">White Half T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products5.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Ghee Half T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products7.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Long Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="pants" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products1.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Half sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products4.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Grunge Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products7.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Long Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products2.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Stylish Grey Pant</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="hoodie" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products17.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">White Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products4.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Navy Blue Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$45.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products18.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Dark Green Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="outer" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products3.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Silk White Shirt</a>
                    </h3>
                    <div className="item-price text-primary">$ 35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products4.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Grunge Hoodie</a>
                    </h3>
                    <div className="item-price text-primary">$ 30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products6.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Grey Check Coat</a>
                    </h3>
                    <div className="item-price text-primary">$ 30.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products7.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Long Sleeve T-shirt</a>
                    </h3>
                    <div className="item-price text-primary">$ 40.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="jackets" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products5.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Full Sleeve Jeans Jacket</a>
                    </h3>
                    <div className="item-price text-primary">$40.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products2.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Stylish Grey Coat</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products6.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Grey Check Coat</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
              </div>
            </div>
            <div id="accessories" data-tab-content>
              <div className="row d-flex flex-wrap">
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products19.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Stylish Women Bag</a>
                    </h3>
                    <div className="item-price text-primary">$35.00</div>
                  </div>
                </div>
                <div className="product-item col-lg-3 col-md-6 col-sm-6">
                  <div className="image-holder">
                    <img
                      src="images/selling-products20.jpg"
                      alt="Books"
                      className="product-image"
                    />
                  </div>
                  <div className="cart-concern">
                    <div className="cart-button d-flex justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-wrap cart-link d-flex align-items-center"
                      >
                        add to cart <i className="icon icon-arrow-io"></i>
                      </button>
                      <button
                        type="button"
                        className="view-btn tooltip
                        d-flex"
                      >
                        <i className="icon icon-screen-full"></i>
                        <span className="tooltip-text">Quick view</span>
                      </button>
                      <button type="button" className="wishlist-btn">
                        <i className="icon icon-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-detail">
                    <h3 className="product-title">
                      <a href="/single-product">Stylish Gadgets</a>
                    </h3>
                    <div className="item-price text-primary">$30.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
