import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Component9 = () => {
  return (
    <>
      <div className="py-5 container">
        <div className="mb-4 row">
          <div className="col-md-12">
            <h2 className="text-center" style={{ fontSize: "48px" }}>
              More Than&nbsp;
              <span className="font-monospace" style={{ color: "#2e82cb" }}>
                <span>7,60,000</span>
              </span>
              + transactions
              <br />
              rewarded. <br />
              Over
              <span className="font-monospace" style={{ color: "#2e82cb" }}>
                700,000
              </span>
              Genuine Customers
              <br />
              marketed to.
            </h2>
            <h5 className="text-dark text-center mb-5">
              With zero customer data shared.
            </h5>
            <div className="mt-5 w-50 mx-auto back-beige rounded-3">
              <div
                className="back-blue load-bar position-relative rounded-3"
                style={{
                  width: "80%",
                  height: "0.25rem",
                  transition: "all 1.5s ease-in-out 0s",
                }}
              >
                <span
                  style={{
                    top: "0px",
                    right: "0px",
                    position: "absolute",
                    transform: "translate(0px, -41px)",
                  }}
                >
                  <span className="position-relative d-flex justify-content-center">
                    <svg
                      width="97px"
                      height="41px"
                      viewBox="0 0 97 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="position-absolute"
                    ></svg>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "rgb(46, 130, 203)" , height:'100px', fontSize:'30px', }}>
        <div className="justify-content-center align-items-center text-dark text-center text-md-right d-flex" style={{ color:'white'}}>
          Join the XIRCLS network!
          <a
            className="container-clearfix ms-1"
            href="/"
            style={{
              color: "white",
              fontWeight: "lighter",
              borderBottom: "2px solid rgb(238 238 238)",
              lineHeight: "1",
            }}
          >
            Sign up here.
          </a>
        </div>
      </div>
    </>
  );
};

export default Component9;
