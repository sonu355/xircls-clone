import React from 'react'
import NavbarThing from '../components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
const Logo = require("../asset/logo12.jpeg");

const Vision = () => {
  return (
    <div className='content-body'>
      <NavbarThing />
        <div className='products text-dark bg-white'>
            <div className='container'>
                <div className='pt-2 pb-1 row'>
                    <div className='text-center mx-auto ol-md-12'>
                        <img src={Logo} style={{maxWidth:'220px'}} className='page-logo'/>
                        <h1 className='my-2 main-font text-dark fw-fold'>
                            Our 
                            <span className='text-blue' style={{color:'#2e82cb'}}>
                                Vision & Mission
                            </span>
                        </h1>
                        <h3 className='third-font lh-base'>
                            To build a world where businesses, globally, 
                            can instantly connect to
                            <br />
                            fulfill their mutually compatible marketing goals - 
                            with no third-party
                            <br />
                            involvement or personal data violations.
                        </h3>
                    </div>
                </div>
                <div className='pt-2 px-md-5 mb-5 row'>
                    <h4 className='mb-3 fourth-font text-dark d-flex justify-content-center'>
                        We aim to be:
                    </h4>
                    <div className='text-center mx-auto col-md-12'>
                        <div className='row'>
                            <div className='border-end-dark col-md-4'>
                                <p className='fourth-font text-dark lh-base pdleft'>
                                A global, verified network of companies, businesses,
                                 marketers & content publishers.
                                </p>
                            </div>
                            <div className='border-end-dark col-md-4'>
                                <p className='fourth-font text-dark lh-base pdleft'>
                                A transparent marketing platform that they can trust.
                                </p>
                            </div>
                            <div className='col-md-4'>
                                <p>Affordable, yet hyper-precise.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='d-flex justify-content-center pt-3 pb-5'>
                            <a className='button-1 seventh-font'>
                                DOWNLOAD OUR VISION AND MISSION DOCUMENT
                            </a>
                        </div>
                        <div className='d-flex justify-content-center p-5'>
                            <h1 className='main-font p-1'>
                                What We
                                <span className='text-blue' style={{color:'#2e82cb'}}>Believe</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Vision
