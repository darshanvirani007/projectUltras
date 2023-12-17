import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const onLogin = async () => {
      setMessage("");

    await axios
      .post("http://localhost:3001/api/v1/auth/login", {
        email,
        password,
      })
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.data.status === "500") {
          return setMessage(response.data.message);
        }else {

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("login", true);
          return navigate("/");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    };
    const onSingUp = async () => {
      setMessage("");
      await axios
      .post("http://localhost:3001/api/v1/auth/signup", {
        email,
        password,
      })
      .then(function (response) {
        // handle success
        console.log(response);
        if (response.data.status === "500") {
          return setMessage(response.data.message);
        }else {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("login", true);
          return navigate("/");
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
      <section
        className="site-banner jarallax padding-large"
        style={{
          background: "url(images/hero-image.jpg) no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="page-title">Login</h1>
              <div className="breadcrumbs">
                <span className="item">
                  <a href="/">Home /</a>
                </span>
                <span className="item">Login</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="login-tabs padding-large no-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="tabs-listing">
              <nav>
                <div
                  className="nav nav-tabs d-flex justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-sign-in-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-sign-in"
                    type="button"
                    role="tab"
                    aria-controls="nav-sign-in"
                    aria-selected="true"
                    onClick={() => {
                      setPassword("");
                      setMessage("");
                    }}
                  >
                    Sign In
                  </button>
                  <button
                    className="nav-link"
                    id="nav-register-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-register"
                    type="button"
                    role="tab"
                    aria-controls="nav-register"
                    aria-selected="false"
                    onClick={() => {
                      setPassword("");
                      setMessage("");
                    }}
                  >
                    Register
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade active"
                  id="nav-sign-in"
                  role="tabpanel"
                  aria-labelledby="nav-sign-in-tab"
                >
                  {message && (
                    <div className="alert-danger alert" role="danger">
                      {message}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="sign-in">email address *</label>
                    <input
                      type="text"
                      minLength="2"
                      name="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Username"
                      className="u-full-width bg-light"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sign-in">Password *</label>
                    <input
                      type="password"
                      minLength="2"
                      name="password"
                      placeholder="Your Password"
                      className="u-full-width bg-light"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-dark btn-full btn-medium"
                    onClick={() => onLogin()}
                  >
                    Login
                  </button>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-register"
                  role="tabpanel"
                  aria-labelledby="nav-register-tab"
                >
                  {message && (
                    <div className="alert-danger alert" role="danger">
                      {message}
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="register">Your email address *</label>
                    <input
                      type="text"
                      minLength="2"
                      name="username"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email Address"
                      className="u-full-width bg-light"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="sign-in">Password *</label>
                    <input
                      type="password"
                      minLength="2"
                      name="password"
                      placeholder="Your Password"
                      className="u-full-width bg-light"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-dark btn-full btn-medium"
                    onClick={() => onSingUp()}
                  >
                    Register
                  </button>
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
