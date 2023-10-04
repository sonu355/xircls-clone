import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarThing from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {
  return (
    <div className="body-content">
      <NavbarThing />
      <div className="products bg-white ">
        <div className="mb-5 mt-5 container">
          <div className="row">
            <div className="mx-auto px-2 col-lg-6">
              <div className="border p-1 p-md-3">
                <div>
                  <h3 className="third-font font three mb-2">
                    Sign Up for a New Merchant Account
                  </h3>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-2">
                      <label className="font-three font-label label" for>
                        First Name:
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        placeholder="FIRST NAME: *"
                      ></input>
                      <p className="text-danger m-0 p-0 validMessage"></p>
                    </div>
                    <div className="mt-2 mb-2">
                      <label className="font-three font-label label" for>
                        Last Name:
                      </label>
                      <input
                        autoComplete="off"
                        type="text"
                        placeholder="Last NAME: *"
                      ></input>
                      <p className="text-danger m-0 p-0 validMessage"></p>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label className="font-three font-label label">
                    STORE URL: *
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Store Name"
                  ></input>
                  <p className="text-danger m-0 p-0 validMessage"></p>
                </div>
                <div className="mb-2">
                  <label className="font-three font-label label">
                    EMAIL ADDRESS: *
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Store Name"
                  ></input>
                  <p className="text-danger m-0 p-0 validMessage"></p>
                </div>
                <div className="mb-2 mt-2">
                  <label>Phone Number: </label>
                  <div className="row">
                    <div className="col-md-3 mb-md-0 mb-2">
                        <div className="css-"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
