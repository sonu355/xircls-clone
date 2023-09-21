import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const img1 = require('../asset/com7img1.jpeg')
const img2 = require('../asset/com7img2.jpeg')
const img3 = require('../asset/com7img3.jpeg')
const img4 = require('../asset/com7img4.jpeg')
const img5 = require('../asset/com7img5.jpeg')
const img6 = require('../asset/com7img6.jpeg')


const Component7 = () => {
  return (
    <div className="py-5 container">
      <div className="mb-2 row">
        <div className="col-md-12">
          <h2 className="second-font text-center text-dark" style={{ fontSize: '48px'}}>
            For You.
            <br />
            No Matter Who You Are.
          </h2>
          <h5 className="fifth font text-dark text-center" style={{ fontSize: '22px'}}>A one-of-its-kind marketing platform that has something for everyone.</h5>
        </div>
      </div>
      <div className="row">
        <div className="py-2 text-center col-md-4">
            <img src={img1} alt='abc' width='88' className="my-1"></img>
            <h4 className="mt-2 mb-1 fourth-font text-blue" style={{color:'#2e82cb'}}>Manufacturers & Retailers</h4>
            <h5 className="fifth-font">Implement real-time contextual marketing at a hyperlocal level.</h5>
        </div>
        <div className="py-2 text-center col-md-4">
            <img src={img2} alt='abc' width='88' className="my-1"></img>
            <h4 className="mt-2 mb-1 fourth-font text-blue" style={{color:'#2e82cb'}}>Service Providers</h4>
            <h5 className="fifth-font">Reward every transaction with offers matched to customer profile.</h5>
        </div>
        <div className="py-2 text-center col-md-4">
            <img src={img3} alt='abc' width='88' className="my-1"></img>
            <h4 className="mt-2 mb-1 fourth-font text-blue" style={{color:'#2e82cb'}}>Startups & Local Businesses</h4>
            <h5 className="fifth-font">Market to target customers at low cost. Delight customers with big ticket rewards.</h5>
        </div>
        <div className="py-2 text-center col-md-4">
            <img src={img4} alt='abc' width='88' className="my-1"></img>
            <h4 className="mt-2 mb-1 fourth-font text-blue" style={{color:'#2e82cb'}}>Govt. Bodies</h4>
            <h5 className="fifth-font">Give tangible, locally-sourced incentives to citizens for diverse actions.</h5>
        </div>
        <div className="py-2 text-center col-md-4">
            <img src={img5} alt='abc' width='88' className="my-1"></img>
            <h4 className="mt-2 mb-1 fourth-font text-blue" style={{color:'#2e82cb'}}>Organisations</h4>
            <h5 className="fifth-font">Reward people for doing good with offers sourced from brands & local businesses.</h5>
        </div>
        <div className="py-2 text-center col-md-4">
            <img src={img6} alt='abc' width='88' className="my-1"></img>
            <h4 className="mt-2 mb-1 fourth-font text-blue" style={{color:'#2e82cb'}}>Communities</h4>
            <h5 className="fifth-font">Perpetually reward community members who follow best civic & social practices.</h5>
        </div>
      </div>
    </div>
  );
};

export default Component7;
