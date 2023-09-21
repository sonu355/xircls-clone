import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const img1 = require('../asset/com8img1.jpeg')
const img2 = require('../asset/com8img2.jpeg')
const img3 = require('../asset/com8img3.jpeg')
const img4 = require('../asset/com8img4.jpeg')
const img5 = require('../asset/com8img5.jpeg')
const img6 = require('../asset/com8img6.jpeg')


const Component8 = () => {
  return (
    <div className='py-5 container'>
      <div className='mb-3 row'>
        <div className='col-md-12'>
            <h2 className='second-font text-center text-dark' style={{fontSize:'48px'}}>
            How can you promote through XIRCLS?
            </h2>
            <h5 className='fifth-font text-center text-dark'>Choose a marketing message ideal for your target/existing customers</h5>
        </div>
      </div>
      <div className='row'>
        <div className='py-2 text-center col-md-4'>
            <img src={img1} width='88' alt='abc' className='p-1 border-dark rounded-circle'></img>
            <h4 className='text-blue mt-2 mb-1 fourth-font' style={{color: '#2e82cb'}}>Coupons & discounts</h4>
        </div>
        <div className='py-2 text-center col-md-4'>
            <img src={img2} width='88' alt='abc' className='p-1 border-dark rounded-circle'></img>
            <h4 className='text-blue mt-2 mb-1 fourth-font' style={{color: '#2e82cb'}}>Rewards & incentivess</h4>
        </div>
        <div className='py-2 text-center col-md-4'>
            <img src={img3} width='88' alt='abc' className='p-1 border-dark rounded-circle'></img>
            <h4 className='text-blue mt-2 mb-1 fourth-font' style={{color: '#2e82cb'}}>Contests & Polls</h4>
        </div>
        <div className='py-2 text-center col-md-4'>
            <img src={img4} width='88' alt='abc' className='p-1 border-dark rounded-circle'></img>
            <h4 className='text-blue mt-2 mb-1 fourth-font' style={{color: '#2e82cb'}}>Product / Service Informations</h4>
        </div>
        <div className='py-2 text-center col-md-4'>
            <img src={img5} width='88' alt='abc' className='p-1 border-dark rounded-circle'></img>
            <h4 className='text-blue mt-2 mb-1 fourth-font' style={{color: '#2e82cb'}}>Samples & Freebies</h4>
        </div>
        <div className='py-2 text-center col-md-4'>
            <img src={img6} width='88' alt='abc' className='p-1 border-dark rounded-circle'></img>
            <h4 className='text-blue mt-2 mb-1 fourth-font' style={{color: '#2e82cb'}}>Exclusive Access / VIP Invite</h4>
        </div>
      </div>
    </div>
  )
}

export default Component8
