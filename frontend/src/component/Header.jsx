import React from "react";

export default function Header() {
  return (
    <header id="header">
      <div id="header-wrap">
        <nav className="primary-nav padding-small">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-lg-2 col-md-2">
                <div className="main-logo">
                  <a href="/">
                    <img src="/images/main-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-10 col-md-10">
                <div className="navbar">
                  <div
                    id="main-nav"
                    className="stellarnav d-flex justify-content-end right"
                  >
                    <ul className="menu-list">
                      <li className="menu-item has-sub">
                        <a
                          href="/"
                          className="item-anchor d-flex align-item-center"
                          data-effect="Home"
                        >
                          Home
                        </a>
                      </li>
                      <li className="menu-item has-sub">
                        <a
                          href="/shop"
                          className="item-anchor d-flex align-item-center"
                          data-effect="Home"
                        >
                          Shop
                        </a>
                      </li>

                      <li>
                        <a
                          href="/about"
                          className="item-anchor"
                          data-effect="About"
                        >
                          About
                        </a>
                      </li>

                      <li>
                        <a
                          href="/contact"
                          className="item-anchor"
                          data-effect="Contact"
                        >
                          Contact
                        </a>
                      </li>
                      {localStorage.getItem("login") === "true" ? (
                        <>
                          <li>
                            <a
                              href="/cart"
                              className="item-anchor"
                              data-effect="Contact"
                            >
                              cart
                            </a>
                          </li>
                          <li>
                            <a
                              href="/"
                              className="item-anchor"
                              data-effect="Contact"
                              onClick={() => {
                                localStorage.removeItem("token");
                                localStorage.removeItem("login");
                              }}
                              class="btn btn-primary"
                            >
                              logout
                            </a>
                          </li>
                        </>
                      ) : (
                        <li>
                          <a
                            href="/login"
                            className="item-anchor"
                            data-effect="Contact"
                          >
                            Login
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
