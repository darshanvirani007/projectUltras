import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";

export default function Cart() {
  const [carts, setCarts] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    return async () => {
      await axios
        .get("http://localhost:3001/api/v1/carts", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then(function (response) {
          // handle success
          console.log(response);
          setCarts(response.data.data.carts);
          setTotal(response.data.data.totalAmount);
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
        if (response.data.status === "200") {
          let objIndex = carts.findIndex(
            (obj) => obj.productsId._id == productId
          );
          console.log(objIndex);
          let oldCarts = [...carts];
          oldCarts[objIndex].quantity = oldCarts[objIndex].quantity + 1;
          setCarts(oldCarts);
          setTotal(response.data.data.totalAmount);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const removeToCart = async (productId) => {
    await axios
      .post(
        "http://localhost:3001/api/v1/cart/remove",
        {
          productId,
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
        if (response.data.status === "200") {
          let objIndex = carts.findIndex(
            (obj) => obj.productsId._id == productId
          );
          console.log(objIndex);
          let oldCarts = [...carts];
          if(oldCarts[objIndex].quantity > 1){

            oldCarts[objIndex].quantity = oldCarts[objIndex].quantity - 1;
          }
          setCarts(oldCarts);
          setTotal(response.data.data.totalAmount);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  const deleteToCart = async (productId) => {
    await axios
      .post(
        "http://localhost:3001/api/v1/cart/delete",
        {
          productId,
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
        if (response.data.status === "200") {
          setCarts(response.data.data.carts);
          setTotal(response.data.data.totalAmount);

        }
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
                  <a href="index.html">Home /</a>
                </span>
                <span className="item">
                  <a href="shop.html">Shop /</a>
                </span>
                <span className="item">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shopify-cart padding-large">
        <div className="container">
          <div className="cart-table">
            <div className="cart-header border-bottom ">
              <div className="row d-flex">
                <h3 className="cart-title col-lg-4">Product</h3>
                <h3 className="cart-title col-lg-3">Quantity</h3>
                <h3 className="cart-title col-lg-4">Subtotal</h3>
              </div>
            </div>
            {carts?.map((e) => {
              return (
                <div className="cart-item border-bottom padding-small">
                  <div className="row">
                    <div className="col-lg-4 col-md-3">
                      <div className="row cart-info d-flex flex-wrap">
                        <div className="col-lg-5">
                          <div className="card-image">
                            <img
                              src={`http://localhost:3001/image/${e.productsId.images[0]}`}
                              alt="cloth"
                              className="img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="card-detail">
                            <h3 className="card-title">
                              <a href="#">{e.productsId.title}</a>
                            </h3>
                            <div className="card-price">
                              <span
                                className="money text-primary"
                                data-currency-usd="$1200.00"
                              >
                                ${e.productsId.price}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                      <div className="row d-flex">
                        <div className="col-lg-6">
                          <div className="qty-number d-flex align-items-center justify-content-start">
                            <button
                              className="decrement-button"
                              onClick={() => removeToCart(e.productsId._id)}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              name="quantity"
                              className="spin-number-output"
                              value={e.quantity}
                              min="1"
                              max="100"
                            />
                            <button
                              className="increment-button"
                              onClick={() => addToCart(e.productsId._id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="total-price">
                            <span className="money text-primary">
                              ${e.productsId.price * e.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-1 col-md-2">
                      <div
                        className="cart-remove"
                        onClick={() => deleteToCart(e.productsId._id)}
                      >
                        <i className="icon icon-close"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-totals">
            <h2 className="section-title">Cart Totals</h2>
            <div className="total-price">
              <table cellspacing="0" className="table">
                <tbody>
                  <tr className="order-total">
                    <th>Total</th>
                    <td data-title="Total">
                      <span className="price-amount amount text-primary">
                        <bdi>
                          <span className="price-currency-symbol">$</span>
                          {total}
                        </bdi>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="button-wrap">
              <a href="/shop">
                <button className="btn btn-dark btn-medium">
                  Continue Shopping
                </button>
              </a>
              <a href="/checkout">
                <button className="btn btn-dark btn-medium">
                  Proceed to checkout
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe" className="bg-light-grey padding-large">
        <div className="container">
          <div className="row">
            <div className="block-text col-md-6">
              <div className="section-header">
                <h2 className="section-title">Get 25% off Discount Coupons</h2>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Dictumst amet, metus, sit massa posuere maecenas. At tellus ut
                nunc amet vel egestas.
              </p>
            </div>
            <div className="subscribe-content col-md-6">
              <form id="form" className="d-flex justify-content-between">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email addresss here"
                />
                <button className="btn btn-dark">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="instagram" className="padding-large">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Follow our instagram</h2>
          </div>
          <p>
            Our official Instagram account <a href="#">@ultras</a> or{" "}
            <a href="#">#ultras_clothing</a>
          </p>
          <div className="row d-flex flex-wrap justify-content-between">
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image1.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image2.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image3.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image4.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image5.jpg"
                  alt="instagram"
                  className="insta-image"
                />
                <i className="icon icon-instagram"></i>
              </figure>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <figure className="zoom-effect">
                <img
                  src="images/insta-image6.jpg"
                  alt="instagram"
                  className="insta-image"
                />
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
  );
}
