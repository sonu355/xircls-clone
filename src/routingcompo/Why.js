import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Logo = require('../asset/logo12.jpeg')

const Why = () => {
  return (
    <div className='products'>
        <div className='px-md-5 pb-6 container'>
            <div className='pt-2 pb-1 row'>
                <div className='text-center mx-auto ol-md-12'>
                    <img src={Logo} alt='img'></img>
                    <h1 className='my-2 main-font text-dark fw-bold'>
                        Why&nbsp;
                        <span style={{color:''}}></span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why
