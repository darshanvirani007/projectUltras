import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleProduct() {
  const [product, setProduct] = useState({});
  let { productId } = useParams();
  useEffect(() => {
    return async () => {
      await axios
        .get(`http://localhost:3001/api/v1/product/${productId}`)
        .then(function (response) {
          // handle success
          console.log(response);
          setProduct(response.data.data.product);
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
      <section className="site-banner padding-small bg-light-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumbs">
                <span className="item">
                  <a href="/">Home /</a>
                </span>
                <span className="item">
                  <a href="shop">Shop /</a>
                </span>
                <span className="item">Shop Single</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="single-product padding-large">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="product-preview">
                <div
                  thumbsSlider=""
                  className="swiper thumb-swiper col-md-3 col-xs-3"
                >
                  <div className="swiper-wrapper d-flex flex-wrap">
                    {product.images?.map((e) => {
                      return (
                        <div className="swiper-slide">
                          <img
                            src={`http://localhost:3001/image/${e}`}
                            alt=""
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="swiper large-swiper overflow-hidden col-md-9 col-xs-9">
                  <Swiper className="mySwiper">
                    {product.images?.map((e) => {
                      return (
                        <SwiperSlide>
                          <img
                            src={`http://localhost:3001/image/${e}`}
                            alt=""
                          />
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product-info">
                <div className="element-header">
                  <h2 itemprop="name" className="product-title">
                    {product.title}
                  </h2>
                  <div className="rating-container d-flex align-items-center">
                    <div className="rating" data-rating="1" onclick="rate(1)">
                      <i className="icon icon-star-full"></i>
                    </div>
                    <div className="rating" data-rating="2" onclick="rate(1)">
                      <i className="icon icon-star-full"></i>
                    </div>
                    <div className="rating" data-rating="3" onclick="rate(1)">
                      <i className="icon icon-star-full"></i>
                    </div>
                    <div className="rating" data-rating="4" onclick="rate(1)">
                      <i className="icon icon-star-half"></i>
                    </div>
                    <div className="rating" data-rating="5" onclick="rate(1)">
                      <i className="icon icon-star-empty"></i>
                    </div>
                    <span className="rating-count">(3.5)</span>
                  </div>
                </div>
                <div className="product-price">
                  <strong>${product.price}</strong>
                </div>
                <p>{product.description}</p>
                <div className="cart-wrap margin-small">
                  <div className="color-options product-select">
                    <div className="color-toggle" data-option-index="0">
                      <h4 className="item-title no-margin">Color:</h4>
                      <ul className="select-list list-unstyled d-flex">
                        {product?.color?.map((e) => {
                          return (
                            <li data-value={e} className="select-item">
                              {e}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="swatch product-select" data-option-index="1">
                    <h4 className="item-title no-margin">Size:</h4>
                    <ul className="select-list list-unstyled d-flex">
                      {product?.size?.map((e) => {
                        return (
                          <li data-value={e} className="select-item">
                            {e}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="product-quantity">
                    <div className="item-title">
                      <strong>2 in stock</strong>
                    </div>
                    <div className="stock-button-wrap">
                      <div className="product-quantity d-flex align-items-center">
                        <h4 className="item-title no-margin">Quantity:</h4>
                        <div className="qty-field d-flex">
                          <div className="qty-number d-flex justify-content-start align-items-center">
                            <button className="decrement-button">-</button>
                            <input
                              type="text"
                              id="quantity"
                              name="quantity"
                              className="spin-number-output"
                              value="1"
                              min="1"
                              max="100"
                            />
                            <button className="increment-button">+</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="action-buttons">
                    <button
                      type="submit"
                      name="add"
                      id="add-to-cart"
                      className="btn btn-medium btn-dark"
                      onClick={() => addToCart(product._id)}
                    >
                      <span id="add-to-cart">Add to cart</span>
                    </button>
                  </div>
                </div>
                <div className="meta-product margin-small">
                  <div className="meta-item d-flex flex-wrap align-items-baseline">
                    <h4 className="item-title no-margin">SKU:</h4>
                    <ul className="select-list list-unstyled d-flex">
                      <li data-value="S" className="select-item">
                        {product?.SKU}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-tabs">
        <div className="container">
          <div className="tabs-listing">
            <nav>
              <div
                className="nav nav-tabs d-flex justify-content-center"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Description
                </button>
                <button
                  className="nav-link"
                  id="nav-information-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-information"
                  type="button"
                  role="tab"
                  aria-controls="nav-information"
                  aria-selected="false"
                >
                  Additional information
                </button>
                <button
                  className="nav-link"
                  id="nav-shipping-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-shipping"
                  type="button"
                  role="tab"
                  aria-controls="nav-shipping"
                  aria-selected="false"
                >
                  Shipping & Return
                </button>
                <button
                  className="nav-link"
                  id="nav-review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-review"
                  type="button"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <p>Product Description</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                  dignissim pellentesque felis. Phasellus ultrices nulla quis
                  nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                  sem tristique cursus.
                  <ul>
                    <li>Donec nec justo eget felis facilisis fermentum.</li>
                    <li>Suspendisse urna viverra non, semper suscipit pede.</li>
                    <li>Aliquam porttitor mauris sit amet orci.</li>
                  </ul>{" "}
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                  dignissim pellentesque felis. Phasellus ultrices nulla quis
                  nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                  sem tristique cursus.{" "}
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-information"
                role="tabpanel"
                aria-labelledby="nav-information-tab"
              >
                <p>It is Comfortable and Best</p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-shipping"
                role="tabpanel"
                aria-labelledby="nav-shipping-tab"
              >
                <p>Returns Policy</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  eros justo, accumsan non dui sit amet. Phasellus semper
                  volutpat mi sed imperdiet. Ut odio lectus, vulputate non ex
                  non, mattis sollicitudin purus. Mauris consequat justo a enim
                  interdum, in consequat dolor accumsan. Nulla iaculis diam
                  purus, ut vehicula leo efficitur at.
                </p>
                <p>
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  In blandit nunc enim, sit amet pharetra erat aliquet ac.
                </p>
                <p>Shipping</p>
                <p>
                  Pellentesque ultrices ut sem sit amet lacinia. Sed nisi dui,
                  ultrices ut turpis pulvinar. Sed fringilla ex eget lorem
                  consectetur, consectetur blandit lacus varius. Duis vel
                  scelerisque elit, et vestibulum metus. Integer sit amet
                  tincidunt tortor. Ut lacinia ullamcorper massa, a fermentum
                  arcu vehicula ut. Ut efficitur faucibus dui Nullam tristique
                  dolor eget turpis consequat varius. Quisque a interdum augue.
                  Nam ut nibh mauris.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="nav-review"
                role="tabpanel"
                aria-labelledby="nav-review-tab"
              >
                <div className="review-box review-style d-flex flex-wrap justify-content-between">
                  <div className="review-item d-flex">
                    <div className="image-holder">
                      <img src="/images/review-image1.jpg" alt="review" />
                    </div>
                    <div className="review-content">
                      <div className="rating-container d-flex align-items-center">
                        <div className="rating">
                          <i className="icon icon-star-full"></i>
                        </div>
                        <div className="rating">
                          <i className="icon icon-star-full"></i>
                        </div>
                        <div className="rating">
                          <i className="icon icon-star-full"></i>
                        </div>
                        <div className="rating">
                          <i className="icon icon-star-half"></i>
                        </div>
                        <div className="rating">
                          <i className="icon icon-star-empty"></i>
                        </div>
                        <span className="rating-count">(3.5)</span>
                      </div>
                      <div className="review-header">
                        <span className="author-name">Tom Johnson</span>
                        <span className="review-date">– 07/05/2022</span>
                      </div>
                      <p>
                        Vitae tortor condimentum lacinia quis vel eros donec ac.
                        Nam at lectus urna duis convallis convallis
                      </p>
                    </div>
                  </div>
                  <div className="review-item d-flex">
                    <div className="image-holder">
                      <img src="/images/review-image2.jpg" alt="review" />
                    </div>
                    <div className="review-content">
                      <div className="rating-container d-flex align-items-center">
                        <div className="rating">
                          <i className="icon icon-star-full"></i>
                        </div>
                        <div className="rating">
                          <i className="icon icon-star-full"></i>
                        </div>
                        <div className="rating">
                          <i className="icon icon-star-full"></i>
                        </div>
                        <div className="rating">
                          <i className="icon icon-star-half"></i>
                        </div>
                        <div className="rating">
                          <i className="icon icon-star-empty"></i>
                        </div>
                        <span className="rating-count">(3.5)</span>
                      </div>
                      <div className="review-header">
                        <span className="author-name">Jenny Willis</span>
                        <span className="review-date">– 07/05/2022</span>
                      </div>
                      <p>
                        Vitae tortor condimentum lacinia quis vel eros donec ac.
                        Nam at lectus urna duis convallis convallis
                      </p>
                    </div>
                  </div>
                </div>
                <div className="add-review margin-small">
                  <h3>Add a review</h3>
                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="review-rating">
                    <span>Your rating *</span>
                    <div className="rating-container d-flex align-items-center">
                      <div className="rating" data-rating="1">
                        <i className="icon icon-star-empty"></i>
                      </div>
                      <div className="rating" data-rating="2">
                        <i className="icon icon-star-empty"></i>
                      </div>
                      <div className="rating" data-rating="3">
                        <i className="icon icon-star-empty"></i>
                      </div>
                      <div className="rating" data-rating="4">
                        <i className="icon icon-star-empty"></i>
                      </div>
                      <div className="rating" data-rating="5">
                        <i className="icon icon-star-empty"></i>
                      </div>
                    </div>
                  </div>
                  <input
                    type="file"
                    className="jfilestyle"
                    data-text="Choose your file"
                  />
                  <form id="form" className="padding-small">
                    <label>Your Review *</label>
                    <textarea
                      placeholder="Write your review here"
                      className="u-full-width"
                    ></textarea>
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Write your name here"
                      className="u-full-width"
                    />
                    <label>Your Email *</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Write your email here"
                      className="u-full-width"
                    />
                    <label>
                      <input type="checkbox" required="" />
                      <span className="label-body">
                        Save my name, email, and website in this browser for the
                        next time.
                      </span>
                    </label>
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-dark btn-medium"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="latest-#" className="padding-large">
        <div className="container">
          <div className="section-header d-flex flex-wrap align-items-center justify-content-between">
            <h2 className="section-title">our Journal</h2>
            <div className="btn-wrap align-right">
              <a href="#" className="d-flex align-items-center">
                Read All Articles <i className="icon icon icon-arrow-io"></i>
              </a>
            </div>
          </div>
          <div className="row d-flex flex-wrap">
            <article className="col-md-4 post-item">
              <div className="image-holder zoom-effect">
                <a href="single-post">
                  <img
                    src="/images/post-img1.jpg"
                    alt="post"
                    className="post-image"
                  />
                </a>
              </div>
              <div className="post-content d-flex">
                <div className="meta-date">
                  <div className="meta-day text-primary">22</div>
                  <div className="meta-month">Aug-2021</div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="single-post">
                      top 10 casual look ideas to dress up your kids
                    </a>
                  </h3>
                  <a href="#" className="#-categories">
                    Fashion
                  </a>
                </div>
              </div>
            </article>
            <article className="col-md-4 post-item">
              <div className="image-holder zoom-effect">
                <a href="single-post">
                  <img
                    src="/images/post-img2.jpg"
                    alt="post"
                    className="post-image"
                  />
                </a>
              </div>
              <div className="post-content d-flex">
                <div className="meta-date">
                  <div className="meta-day text-primary">25</div>
                  <div className="meta-month">Aug-2021</div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="single-post">
                      Latest trends of wearing street wears supremely
                    </a>
                  </h3>
                  <a href="#" className="#-categories">
                    Trending
                  </a>
                </div>
              </div>
            </article>
            <article className="col-md-4 post-item">
              <div className="image-holder zoom-effect">
                <a href="single-post">
                  <img
                    src="/images/post-img3.jpg"
                    alt="post"
                    className="post-image"
                  />
                </a>
              </div>
              <div className="post-content d-flex">
                <div className="meta-date">
                  <div className="meta-day text-primary">28</div>
                  <div className="meta-month">Aug-2021</div>
                </div>
                <div className="post-header">
                  <h3 className="post-title">
                    <a href="single-post">
                      types of comfortable clothes ideas for women
                    </a>
                  </h3>
                  <a href="#" className="#-categories">
                    Inspiration
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="brand-collection" className="padding-medium bg-light-grey">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-between">
            <img src="/images/brand1.png" alt="phone" className="brand-image" />
            <img src="/images/brand2.png" alt="phone" className="brand-image" />
            <img src="/images/brand3.png" alt="phone" className="brand-image" />
            <img src="/images/brand4.png" alt="phone" className="brand-image" />
            <img src="/images/brand5.png" alt="phone" className="brand-image" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
