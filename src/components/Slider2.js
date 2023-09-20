import React from 'react'
import SmallSwi from './SmallSwi'

const Slider2 = () => {
  return (
    <>
      <div className='pb-md-5 mt-2 py-4 mb-5 back-beige' style={{backgroundColor:'whitesmoke'}}>
        <div className='container'>
          <div className='row'>
        <SmallSwi />
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <button style={{ fontSize:'20px', backgroundColor: '#2e82cb', color:'white', borderRadius: '30px', fontWeight: 'bolder', padding: '8px 26px', border: 'none'}}>Join The Network</button>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Slider2
