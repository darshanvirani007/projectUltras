import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import axios from "axios";

export default function Checkout() {
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
        
        setTotal(response.data.data.totalAmount);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
}, []);


  return (
    <>
      <Header />
      <section className="site-banner padding-small bg-light-grey">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="breadcrumbs">
                <span className="item">
                  <a href="index">Home /</a>
                </span>
                <span className="item">
                  <a href="shop">Shop /</a>
                </span>
                <span className="item">Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="shopify-cart checkout-wrap padding-large">
        <div className="container">
          <form action="http://localhost:3001/api/v1/order" method="post">
            <input
              type="hidden"
              name="token"
              value={localStorage.getItem("token")}
              required
            />
            <input type="hidden" name="amout" value={total} required />
            <div className="form-group">
              <div className="row d-flex flex-wrap">
                <div className="col-lg-6">
                  <h2 className="section-title">Billing Details</h2>
                  <div className="billing-details">
                    <label htmlFor="fname">First Name*</label>
                    <input
                      type="text"
                      id="fname"
                      name="firstName"
                      className="form-control"
                      required
                    />
                    <label htmlFor="lname">Last Name*</label>
                    <input
                      type="text"
                      id="lname"
                      name="lastName"
                      className="form-control"
                      required
                    />
                    <label htmlFor="cname">Company Name(optional)*</label>
                    <input
                      type="text"
                      id="cname"
                      name="companyName"
                      className="form-control"
                    />
                    <label htmlFor="cname">Country / Region*</label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      name="CountryOrRegion"
                    >
                      <option selected="" hidden="">
                        United States
                      </option>
                      <option value="1">UK</option>
                      <option value="2">Australia</option>
                      <option value="3">Canada</option>
                    </select>
                    <label htmlFor="address">Street Address*</label>
                    <input
                      type="text"
                      id="adr"
                      name="streetAddress1"
                      placeholder="House number and street name"
                      className="form-control"
                      required
                    />
                    <input
                      type="text"
                      id="adr"
                      name="streetAddress2"
                      placeholder="Appartments, suite, etc."
                      className="form-control"
                      required
                    />
                    <label htmlFor="city">Town / City *</label>
                    <input
                      type="text"
                      id="city"
                      name="TownOrCity"
                      className="form-control"
                      required
                    />
                    <label htmlFor="state">State *</label>
                    <select
                      className="form-select form-control"
                      aria-label="Default select example"
                      name="state"
                    >
                      <option selected="" hidden="">
                        Florida
                      </option>
                      <option value="1">New York</option>
                      <option value="2">Chicago</option>
                      <option value="3">Texas</option>
                      <option value="3">San Jose</option>
                      <option value="3">Houston</option>
                    </select>
                    <label htmlFor="zip">Zip Code *</label>
                    <input
                      type="text"
                      id="zip"
                      name="zipCode"
                      className="form-control"
                      required
                    />
                    <label htmlFor="email">Phone *</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className="form-control"
                      required
                    />
                    <label htmlFor="email">Email address *</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h2 className="section-title">Additional Information</h2>
                  <div className="billing-details">
                    <label htmlFor="fname">Order notes (optional)</label>
                    <textarea
                      className="form-control"
                      placeholder="Notes about your order. Like special notes for delivery."
                    ></textarea>
                  </div>
                  <div className="your-order">
                    <h2 className="section-title">Cart Totals</h2>
                    <div className="total-price">
                      <table cellSpacing="0" className="table">
                        <tbody>
                          <tr className="order-total">
                            <th>Total</th>
                            <td data-title="Total">
                              <span className="price-amount amount text-primary">
                                <bdi>
                                  <span className="price-currency-symbol">
                                    $
                                  </span>
                                  {total}
                                </bdi>
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="list-group mt-5 mb-3">
                        <label className="list-group-item d-flex">
                          <input
                            className="form-check-input flex-shrink-0"
                            type="radio"
                            name="listGroupRadios"
                            id="listGroupRadios1"
                            value="Direct bank transfer"
                            checked
                            onChange={() => console.log("as")}
                          />
                          <div>
                            <strong>Direct bank transfer</strong>
                            <p>
                              Make your payment directly into our bank account.
                              Please use your Order ID. Your order will shipped
                              after funds have cleared in our account.
                            </p>
                          </div>
                        </label>
                        <label className="list-group-item d-flex">
                          <input
                            className="form-check-input flex-shrink-0"
                            type="radio"
                            name="listGroupRadios"
                            id="listGroupRadios2"
                            value="Check payments"
                          />
                          <div>
                            <strong>Check payments</strong>
                            <p>
                              Please send a check to Store Name, Store Street,
                              Store Town, Store State / County, Store Postcode.
                            </p>
                          </div>
                        </label>
                        <label className="list-group-item d-flex">
                          <input
                            className="form-check-input flex-shrink-0"
                            type="radio"
                            name="listGroupRadios"
                            id="listGroupRadios3"
                            value="Cash on delivery"
                          />
                          <div>
                            <strong>Cash on delivery</strong>
                            <p>Pay with cash upon delivery.</p>
                          </div>
                        </label>
                        <label className="list-group-item d-flex">
                          <input
                            className="form-check-input flex-shrink-0"
                            type="radio"
                            name="listGroupRadios"
                            id="listGroupRadios3"
                            value="Paypal"
                          />
                          <div>
                            <strong>Paypal</strong>
                            <p>
                              Pay via PayPal; you can pay with your credit card
                              if you don’t have a PayPal account.
                            </p>
                          </div>
                        </label>
                      </div>
                      <a href="thankyou">
                        <button
                          //   type="submit"
                          name="submit"
                          className="btn btn-dark btn-full btn-medium"
                          disabled={total === 0}
                        >
                          Place an order
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
      <Footer />
    </>
  );
}
