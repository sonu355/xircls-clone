import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Nav } from "react-bootstrap";
const Logo = require("../asset/logo12.jpeg");

const Why = () => {
  return (
    <div className="content-body">
        <Navbar />
        <div className="products text-dark bg-white">
            <div className="p-md-3 container">
                <div className="pt-2 mb-5 pb-5 row">
                    <div className="text-center mx-auto col-md-12">
                        <img src={Logo} className="page-logo" style={{ maxWidth: '220px'}}></img>
                        <h1 className="my-2 main-font text-dark fw-bold">
                            WHY
                            <span style={{ color:'#2e82cb'}}> Collaborative Marketing</span>
                            ?
                        </h1>
                        <p>We believe the future of marketing must be collaborative.</p>
                    </div>
                </div>
                <div className="my-5 py-5 row">
                    <div className="text-center mx-auto col-md-12">
                        <h2 className="my-3 second-font text-dark fw-bold">
                            XIRCLS is a
                            <span style={{color: '#2e82cb'}}>technology inspired</span>
                        </h2>
                        <p className="fifth-font mb-1 lh-base">“The journey to the self is through the other.”</p>
                        <p className="fifth-font mb-1 lh-base">
                            In the history of mankind, we see this principle expressed time and again, 
                            across ancient texts, philosophical doctrines and the world of literature.
                        </p>
                        <p className="fifth-font mb-1 lh-base">
                            Science too acknowledges all life as a complex network of cells in perpetual motion, 
                            operating in absolute harmony within themselves and with each other.
                        </p>
                        <p className="fifth-font mb-1 lh-base">
                            Science too acknowledges all life as a complex network of cells in perpetual motion, 
                            operating in absolute harmony within themselves and with each other.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Why;
