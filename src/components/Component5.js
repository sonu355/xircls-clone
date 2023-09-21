import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const img1 = require('../asset/Com5img1.jpg')
const img2 = require('../asset/Com5img2.jpg')
const img3 = require('../asset/com5img3.jpg')
const img4 = require('../asset/com5img4.jpg')


const Component5 = () => {
  return (
    <div className='py-5 px-md-5 container'>
      <h1 className='second-font text-center text-dark mt-5 mb-3'>
      Join a Global Network of Companies
      </h1>
      <div className='my-card row'>
        <div className='py-2 text-center col-md-3'>
          <img src={img1} width='64' alt='img-fluid'></img>
          <h4 className='text-blue mt-2 mb-1 fourth-font' style={{ color:'#2e82cb'}}>DECENTRALIZED</h4>
          <h5 className='fifth-font lh-sm'>Global network of companies with no third-party or central authority.</h5>
        </div>
        <div className='py-2 text-center col-md-3'>
          <img src={img2} width='64' alt='img-fluid'></img>
          <h4 className='text-blue mt-2 mb-1 fourth-font' style={{ color:'#2e82cb'}}>PEER-TO-PEER VERIFIED</h4>
          <h5 className='fifth-font lh-sm'>Real-time customer verification by companies.</h5>
        </div>
        <div className='py-2 text-center col-md-3'>
          <img src={img3} width='64' alt='img-fluid' ></img>
          <h4 className='text-blue mt-2 mb-1 fourth-font' style={{ color:'#2e82cb'}}>LEDGER-BASED</h4>
          <h5 className='fifth-font lh-sm'>A ledger-based verification model that encompasses transactions and actions.</h5>
        </div>
        <div className='py-2 text-center col-md-3'>
          <img src={img4} width='64' alt='img-fluid'></img>
          <h4 className='text-blue mt-2 mb-1 fourth-font' style={{ color:'#2e82cb'}}>NO DATA SHARING</h4>
          <h5 className='fifth-font lh-sm'>Customer data remains localized and 100% secure with built-in data protocols.</h5>
        </div>
      </div>
    </div>
  )
}

export default Component5
