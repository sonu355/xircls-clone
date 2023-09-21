import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const img1 = require("../asset/com6img1.jpeg");
const img2 = require("../asset/com6img2.jpeg");
const img3 = require("../asset/com6img3.jpeg");
const img4 = require("../asset/com6img4.jpeg");
const img5 = require("../asset/com6img5.jpeg");
const img6 = require("../asset/com6img6.jpeg");

const Component6 = () => {
  return (
    <>
      <div className="my-5 py-5 container">
        <div className="mb-4 row">
          <div className="col-md-12">
            <h2 className="second-font text-center text-dark">
              Why Collaboration Makes Sense
            </h2>
            <h5 className="fifth-fobt text-center text-dark">
              Partnerships Make Marketing Smarter, Cost-Efficient &
              Personalised.
            </h5>
          </div>
          <div className="row">
            <div className="py-2 text-center col-md-4">
              <img
                src={img1}
                width="88"
                alt="abc"
                className="my-1 p-1"
                style={{
                  border: "black 1px solid",
                  borderRadius: "50%",
                  padding: "0.25rem",
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              ></img>
              <h4
                className="text-blue mt-2 mb-1 fourth-font"
                style={{ color: "#2e82cb" }}
              >
                Reach Real Customers
              </h4>
              <h5 className="fifth-font">
                Reach 100% real people, verified by genuine transactions or
                actions in real-time, in your chosen categories.
              </h5>
            </div>
            <div className="py-2 text-center col-md-4">
              <img
                src={img2}
                width="88"
                alt="abc"
                className="my-1 p-1"
                style={{
                  border: "black 1px solid",
                  borderRadius: "50%",
                  padding: "0.25rem",
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              ></img>
              <h4
                className="text-blue mt-2 mb-1 fourth-font"
                style={{ color: "#2e82cb" }}
              >
                Expand Your Reach
              </h4>
              <h5 className="fifth-font">
                Exponentially. Just a few strategic partnerships can expose you
                to hundreds of thousands of new prospects every year.
              </h5>
            </div>
            <div className="py-2 text-center col-md-4">
              <img
                src={img3}
                width="88"
                alt="abc"
                className="my-1 p-1"
                style={{
                  border: "black 1px solid",
                  borderRadius: "50%",
                  padding: "0.25rem",
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              ></img>
              <h4
                className="text-blue mt-2 mb-1 fourth-font"
                style={{ color: "#2e82cb" }}
              >
                Reward Perpetually
              </h4>
              <h5 className="fifth-font">
                Source unlimited rewards from other businesses. Keep customers
                hooked without blowing up your budget.
              </h5>
            </div>
            <div className="py-2 text-center col-md-4">
              <img
                src={img4}
                width="88"
                alt="abc"
                className="my-1 p-1"
                style={{
                  border: "black 1px solid",
                  borderRadius: "50%",
                  padding: "0.25rem",
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              ></img>
              <h4
                className="text-blue mt-2 mb-1 fourth-font"
                style={{ color: "#2e82cb" }}
              >
                Get Noticed
              </h4>
              <h5 className="fifth-font">
                Directly reach a customer’s inbox when they’re most likely to be
                engaged. Make an impression.
              </h5>
            </div>
            <div className="py-2 text-center col-md-4">
              <img
                src={img5}
                width="88"
                alt="abc"
                className="my-1 p-1"
                style={{
                  border: "black 1px solid",
                  borderRadius: "50%",
                  padding: "0.25rem",
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              ></img>
              <h4
                className="text-blue mt-2 mb-1 fourth-font"
                style={{ color: "#2e82cb" }}
              >
                Gain Trust
              </h4>
              <h5 className="fifth-font">
                When your partners recommend you in real-time to their
                customers, your message gains depth, utility and value!
              </h5>
            </div>
            <div className="py-2 text-center col-md-4">
              <img
                src={img6}
                width="88"
                alt="abc"
                className="my-1 p-1"
                style={{
                  border: "black 1px solid",
                  borderRadius: "50%",
                  padding: "0.25rem",
                  marginTop: "0.25rem",
                  marginBottom: "0.25rem",
                }}
              ></img>
              <h4
                className="text-blue mt-2 mb-1 fourth-font"
                style={{ color: "#2e82cb" }}
              >
                Access Rich Data
              </h4>
              <h5 className="fifth-font">
                Gain valuable insights on your customers – what they buy, what
                makes them happy.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="back-blue py-2 mt-3 b-5" style={{ backgroundColor:'#2e82cb'}}>
        <div className="py-5 container">
            <h3 className="second-font text-center text-white">
            Enhance Your Inbound Marketing Efforts.
            <br />
            Increase Conversions. Reduce Your CAC!
            </h3>
        </div>
      </div>
    </>
  );
};

export default Component6;
