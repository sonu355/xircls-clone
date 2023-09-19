import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Image = require('../asset/logo12.jpeg')

const Slider = () => {
  return (
    <>
    <Carousel data-bs-theme="dark" indicators={false}>
      <Carousel.Item>
        <div className='row align-items-start flex-md-row-reverse main-heading'>
            <div className='col-lg-3 text-left mb-4 flex-shrink-0'>
                <img
                    style={{ width: '250px', height: 'auto'}}
                className="d-block"
                src={Image}
                alt="First slide"
                />
            </div>
            <div className='col-lg-9 mb-md-0'>
                <h1 style={{ fontSize: '60px'}}>
                    The <br />
                    <span style={{ color: '#2e82cb'}}>
                        World's First Decentralised, 
                        <br />
                        Collaborative
                    </span>
                    Marketing Network
                </h1>
            </div>
            <div className='row text-left py-3'>
                <h2  style={{ fontStyle: 'italic'}}>
                    Building the Web3 Of Marketing
                </h2>
            </div>
            <div className='row text-left pt-4 pb-5'>
                <div className='col-lg-3 text-left' style={{ width: '31%'}}>
                    <div className='counter fw-bold text-left' style={{ color:'#333333 !important'}}>
                        <span style={{ fontSize:'46px'}}>100</span>
                        <abbr className='h1'>%</abbr>
                        <h6 style={{ fontWeight: 'bold'}}>
                            Verified Customer
                            <br />
                            Engagement
                        </h6>
                    </div>
                </div>
                <div className='col-lg-3 text-left' style={{ width: '30%'}}>
                    <div className='counter fw-bold text-left' style={{ color:'#333333 !important'}}>
                        <span style={{ fontSize:'46px'}}>3</span>
                        <abbr className='h1'>%</abbr>
                        <h6 style={{ fontWeight: 'bold'}}>
                            Average Click Through
                        </h6>
                    </div>
                </div>
                <div className='col-lg-3 text-left' style={{ width: '29%'}}>
                    <div className='counter fw-bold text-left' style={{ color:'#333333 !important'}}>
                        <span style={{ fontSize:'46px'}}>13</span>
                        <abbr className='h1'>%</abbr>
                        <h6 style={{ fontWeight: 'bold'}}>
                            Conversion Rate
                        </h6>
                    </div>
                </div>
            </div>
            <div className='row align-items-stretch grid-border clearfix' style={{ fontSize: '20px'}}>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Instant Marketing Collaboration</div>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Legder-based Verification</div>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Real-Time Customer Reach</div>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Instant Customer Gratification</div>
                <div className='col-lg-2 col-md-6'>No Sharing Data</div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='row align-items-start flex-md-row-reverse main-heading'>
            <div className='col-lg-3 text-left mb-4 flex-shrink-0'>
                <img
                    style={{ width: '250px', height: 'auto'}}
                className="d-block"
                src={Image}
                alt="First slide"
                />
            </div>
            <div className='col-lg-9 mb-md-0'>
                <h1 style={{ fontSize: '60px'}}>
                    Say Hello To Always-On 
                    <span style={{ color: '#2e82cb'}}>
                        Marketing
                    </span>
                    .
                </h1>
            </div>
            <div className='row text-left py-3'>
                <h2  style={{ fontStyle: 'italic'}}>
                    Beacause Customers Shop When They Want To.
                    <br/>
                    No When You Want Them To.
                </h2>
            </div>
            <div className='row align-items-stretch grid-border clearfix' style={{ fontSize: '20px'}}>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Stop Driving Customers To Your Competition</div>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Create Sustainable Option To Hardful Discounting</div>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Cultivate Loyality For Your Buisness, Not Third-party Platforms</div>
            </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='row align-items-start flex-md-row-reverse main-heading'>
            <div className='col-lg-3 text-left mb-4 flex-shrink-0'>
                <img
                    style={{ width: '250px', height: 'auto'}}
                className="d-block"
                src={Image}
                alt="First slide"
                />
            </div>
            <div className='col-lg-9 mb-md-0'>
                <h1 style={{ fontSize: '60px'}}>
                    The <br />
                    <span style={{ color: '#2e82cb'}}>
                        World's First Decentralised, 
                        <br />
                        Collaborative
                    </span>
                    Marketing Network
                </h1>
            </div>
            <div className='row text-left py-3'>
                <h2  style={{ fontStyle: 'italic'}}>
                    Building the Web3 Of Marketing
                </h2>
            </div>
            <div className='row text-left pt-4 pb-5'>
                <div className='col-lg-3 text-left' style={{ width: '31%'}}>
                    <div className='counter fw-bold text-left' style={{ color:'#333333 !important'}}>
                        <span style={{ fontSize:'46px'}}>100</span>
                        <abbr className='h1'>%</abbr>
                        <h6 style={{ fontWeight: 'bold'}}>
                            Verified Customer
                            <br />
                            Engagement
                        </h6>
                    </div>
                </div>
                <div className='col-lg-3 text-left' style={{ width: '30%'}}>
                    <div className='counter fw-bold text-left' style={{ color:'#333333 !important'}}>
                        <span style={{ fontSize:'46px'}}>3</span>
                        <abbr className='h1'>%</abbr>
                        <h6 style={{ fontWeight: 'bold'}}>
                            Average Click Through
                        </h6>
                    </div>
                </div>
                <div className='col-lg-3 text-left' style={{ width: '29%'}}>
                    <div className='counter fw-bold text-left' style={{ color:'#333333 !important'}}>
                        <span style={{ fontSize:'46px'}}>13</span>
                        <abbr className='h1'>%</abbr>
                        <h6 style={{ fontWeight: 'bold'}}>
                            Conversion Rate
                        </h6>
                    </div>
                </div>
            </div>
            <div className='row align-items-stretch grid-border clearfix' style={{ fontSize: '20px'}}>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Instant Marketing Collaboration</div>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Legder-based Verification</div>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Real-Time Customer Reach</div>
                <div className='col-lg-2 col-md-6' style={{ borderRight: '1px solid #282828'}}>Instant Customer Gratification</div>
                <div className='col-lg-2 col-md-6'>No Sharing Data</div>
            </div>
        </div>
      </Carousel.Item>
      
        </Carousel>
    </>
  )
}

export default Slider
