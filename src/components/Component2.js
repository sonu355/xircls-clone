import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const img1 = require('../asset/com2img1.png')
const img2 = require('../asset/com2img2.png')
const img3 = require('../asset/com2img3.png')

const Component2 = () => {
  return (
    <div className='py-6 my-5 container'>
      <h4 className='fourth-font text-dark text-center mb-4'>Leverage collaborations to transform your website sales funnel.</h4>
      <div className='my-5 px-md-3 row'>
        <div className='py-2 text-center col-md-4'>
            <img src={img1} width='64' alt='img' className='img-fluid'></img>
            <h4 style={{color:'#2e82cb'}}  className='text-blue mt-2 mb-1 fourth-font'>Reduce bounce rates</h4>
            <h5 className='seventh-font'>Get genuine, verified traffic from your partners to your e-commerce storefront.</h5>
        </div>
        <div className='py-2 text-center col-md-4'>
            <img src={img2} width='64' alt='img' className='img-fluid'></img>
            <h4 style={{color:'#2e82cb'}}  className='text-blue mt-2 mb-1 fourth-font'>Convert with instant rewards.</h4>
            <h5 className='seventh-font'>Incentivize actions and purchases with partner offers.</h5>
        </div>
        <div className='py-2 text-center col-md-4'>
            <img src={img3} width='64' alt='img' className='img-fluid'></img>
            <h4 style={{color:'#2e82cb'}} className='text-blue mt-2 mb-1 fourth-font'>Improve customer retention.</h4>
            <h5 className='seventh-font'>Promise partner offers on future actions & purchases.&nbsp;
            <u>Kick off a perpetual rewards loop!</u>
            </h5>
        </div>
      </div>
    </div>
  )
}

export default Component2
