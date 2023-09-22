import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Logo = require("../asset/logo.png");
const whiteLogoStyle = {
  filter: "brightness(0) invert(1)",
};
const img1 = require("../asset/india.png");
const img2 = require("../asset/america.png");
const img3 = require("../asset/mail.png");
const shopify = require("../asset/shopify.png");
const woo = require("../asset/woo.png");
const magento = require("../asset/magento.png");

const Footer = () => {
  return (
    <div className="products">
      <div
        className="back-dark container-fluid"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="py-3 container">
          <div className="footer-color mb-1 row">
            <div className="col-md-4">
              <div className="row">
                <div className="col-md-12">
                  <a href="/" style={whiteLogoStyle}>
                    <img src={Logo} height="80" alt="Logo"></img>
                    <br />
                  </a>
                  <p
                    className="mt-2 mb-1 eight-font-footer lh-md-small "
                    style={{ color: "white" }}
                  >
                    The World's First Decentralized Collaborative
                    <br />
                    Marketing Network
                  </p>
                </div>
                <div
                  className="mb-1 eigth-font-footer col-md-12"
                  style={{ color: "white" }}
                >
                  <strong>HQ</strong>
                  <br />
                  G-08, The Summit Business Bay by Omkar,
                  <br />
                  Andheri (East),
                  <br />
                  Mumbai - 400093
                </div>
                <div className="col-md-12" style={{ color: "white" }}>
                  <img className="me-1" src={img1} alt="img1" width="20" />
                  +91 9969 333 666
                  <br />
                  <img className="me-1" src={img2} alt="img2" width="20" />
                  +1 (936) 333 6363
                  <br />
                  <img className="me-1" src={img3} alt="img3" width="20" />
                  info@xircls.com
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="mb-1 col-md-12">
                  <p
                    className="text-blue sixth-font-blog mb-0 p-padding"
                    style={{ color: "#2e82cb", fontSize: "19px" }}
                  >
                    Products
                  </p>
                  <hr
                    className="text-blue w-75 mt-0"
                    style={{ widows: "75px", marginTop: "0", color: "#2e82cb" }}
                  />
                  <p style={{ fontSize: "15px" }}>
                    <a href="/" style={{ color: "white" }}>
                      Infiniti
                    </a>
                  </p>
                  <p style={{ fontSize: "15px" }}>
                    <a href="/" style={{ color: "white" }}>
                      Semper Fi
                    </a>
                  </p>
                  <p style={{ fontSize: "15px" }}>
                    <a href="/" style={{ color: "white" }}>
                      Sniper
                    </a>
                  </p>
                </div>
                <div className="col-md-12">
                  <a href="/">
                    <p
                      className="text-blue sixth-font-blog mb-0 p-padding"
                      style={{ color: "#2e82cb", fontSize: "19px" }}
                    >
                      Contact Us
                    </p>
                    <hr
                      className="text-blue w-75 mt-0"
                      style={{
                        widows: "75px",
                        marginTop: "0",
                        color: "#2e82cb",
                      }}
                    />
                  </a>
                </div>
                <div className="mt-2 col-md-12">
                  <div className="row">
                    <div className="col-md-3">
                      <img
                        src={shopify}
                        alt="shopi"
                        width="31"
                        height="31"
                      ></img>
                      <p style={{ color: "white" }}>Shopify</p>
                    </div>
                    <div className="col-md-3">
                      <img src={woo} alt="shopi" width="31" height="31"></img>
                      <p style={{ color: "white" }}>Woo Commerce</p>
                    </div>
                    <div className="col-md-3">
                      <img
                        src={magento}
                        alt="shopi"
                        width="31"
                        height="31"
                      ></img>
                      <p style={{ color: "white" }}>Magento</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row">
                <div className="mb-1 col-md-12">
                  <h2 className="fourth-fifth-font" style={{ color: "white" }}>
                    4481020
                  </h2>
                  <span
                    className="seventh-font"
                    style={{ color: "white", fontSize: "16px" }}
                  >
                    Real-Time Marketing Collaborations Enabled
                  </span>
                </div>
                <div className="mb-1 mt-1 col-md-12">
                  <h2
                    className="fourth-fifth-font m-0"
                    style={{ color: "white" }}
                  >
                    111
                  </h2>
                  <span
                    className="seventh-font"
                    style={{ color: "white", fontSize: "16px" }}
                  >
                    Partner Companies
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="ninth-font">
                XIRCLS is a registered trademark of ALTISSADVANCE TECH PVT. LTD.
              </div>
            </div>
            <div className="ninth-font text-center col-md-4">
              Copyright © 2022 All Rights Reserved. AltissAdvance Tech Private
              <br />
              Limited
              <div className="d-flex justify-content-center">
                <a className="a-color" href="/">
                  Terms Of Use
                </a>
                <a className="mx-1 a-color" href="/">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
