import React from "react";
import NavbarThing from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="body-content">
        <NavbarThing />
        <div className="mt-5 mb-5 container">
            <div className="row">
            <div className="mx-auto px-2 col-md-6">
                <div className="border p-3">
                <div>
                    <h3 className="third-font text-center font-three mb-2">
                    Login to your Account
                    </h3>
                </div>
                <div className="mb-2 mt-2">
                    <label className="font-three font-label">USERNAME:</label>
                    <input
                    type="text"
                    className="w form-control"
                    name="email"
                    ></input>
                    <p className="text-danger m-0 p-0 validMessage"></p>
                </div>
                <div className="mb-3">
                    <label className="font-three font-label">PASSWORD:</label>
                    <input
                    type="text"
                    className="w form-control"
                    name="email"
                    ></input>
                    <p className="text-danger m-0 p-0 validMessage"></p>
                </div>
                <div>
                    <button
                    type="button"
                    className="btn bg-black text-white me-1 form-btn"
                    ></button>
                    <a className="text-blue" href="/">
                    Forgotten Password
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Footer />
    </div>
  );
};

export default Login;
