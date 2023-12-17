import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

export default function Shop() {
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
      <section
        className="site-banner jarallax min-height300 padding-large"
        style={{
          background: "url(images/hero-image.jpg) no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Shop page</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="/">Home /</a>
                </span>
                <span className="item">Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="shopify-grid padding-large">
        <div className="container">
          <div className="row">
            <section id="selling-products" className="col-md-9 product-store">
              <div className="container">
                <div className="tab-content">
                  <div id="all" data-tab-content className="active">
                    <div className="row d-flex flex-wrap">
                      {products.map((e, i) => {
                        return (
                          <div className="product-item col-lg-4 col-md-6 col-sm-6">
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
                                  add to cart
                                  <i className="icon icon-arrow-io"></i>
                                </button>
                                <button
                                  type="button"
                                  className="view-btn tooltip
                              d-flex"
                                >
                                  <a href={`/single-product/${e._id}`}>
                                    <i className="icon icon-screen-full"></i>
                                    <span className="tooltip-text">
                                      Quick view
                                    </span>
                                  </a>
                                </button>
                              </div>
                            </div>
                            <div className="product-detail">
                              <h3 className="product-title">
                                <a href={`/single-product/${e._id}`}>
                                  {e.title}
                                </a>
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
                </div>
                
              </div>
            </section>

            <aside className="col-md-3">
              <div className="sidebar">
                <div className="widgets widget-menu">
                  <div className="widget-search-bar">
                    <form role="search" method="get" className="d-flex">
                      <input
                        className="search-field"
                        placeholder="Search"
                        type="text"
                      />
                      <button className="btn btn-dark">
                        <i className="icon icon-search"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="widgets widget-product-tags">
                  <h5 className="widget-title">Tags</h5>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">
                      <a href="">White</a>
                    </li>
                    <li className="tags-item">
                      <a href="">Cheap</a>
                    </li>
                    <li className="tags-item">
                      <a href="">Branded</a>
                    </li>
                    <li className="tags-item">
                      <a href="">Modern</a>
                    </li>
                    <li className="tags-item">
                      <a href="">Simple</a>
                    </li>
                  </ul>
                </div>
                <div className="widgets widget-product-brands">
                  <h5 className="widget-title">Brands</h5>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">
                      <a href="">Nike</a>
                    </li>
                    <li className="tags-item">
                      <a href="">Adidas</a>
                    </li>
                    <li className="tags-item">
                      <a href="">Puma</a>
                    </li>
                    <li className="tags-item">
                      <a href="">Spike</a>
                    </li>
                  </ul>
                </div>
                <div className="widgets widget-price-filter">
                  <h5 className="widget-title">Filter By Price</h5>
                  <ul className="product-tags sidebar-list list-unstyled">
                    <li className="tags-item">
                      <a href="">Less than $10</a>
                    </li>
                    <li className="tags-item">
                      <a href="">$10- $20</a>
                    </li>
                    <li className="tags-item">
                      <a href="">$20- $30</a>
                    </li>
                    <li className="tags-item">
                      <a href="">$30- $40</a>
                    </li>
                    <li className="tags-item">
                      <a href="">$40- $50</a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <hr />
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
                    src="images/post-img1.jpg"
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
                    src="images/post-img2.jpg"
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
                    src="images/post-img3.jpg"
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
