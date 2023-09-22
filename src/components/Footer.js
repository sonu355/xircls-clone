import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Logo = require("../asset/logo.png");
const whiteLogoStyle = {
  filter: "brightness(0) invert(1)",
};


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
                  <p className="mt-2 mb-1 eight-font-footer lh-md-small " style={{ color: "white" }}>
                    The World's First Decentralized Collaborative
                    <br />
                    Marketing Network
                  </p>
                </div>
                <div className="mb-1 eigth-font-footer col-md-12"  style={{ color: "white" }}>
                  <strong>HQ</strong>
                  <br />
                  G-08, The Summit Business Bay by Omkar,
                  <br />
                  Andheri (East),
                  <br />
                  Mumbai - 400093
                </div>
                <div className="col-md-12">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
