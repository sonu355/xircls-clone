import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const image1 = require('../asset/img1.png')
const image2 = require('../asset/image2.png')
const image3 = require('../asset/image3.png')
const image4 = require('../asset/image4.png')
const image5 = require('../asset/image5.png')
const image6 = require('../asset/image6.png')
const image7 = require('../asset/image7.png')
const image8 = require('../asset/image8.png')
const image9 = require('../asset/image9.png')
const image10 = require('../asset/image10.png')

const Slider2 = () => {
  return (
    <div className='pb-md-5 py-4 mt-2 mb-5 back-beige'>
        <div className='container'>
            <div className='row'> 
        <Carousel>
            <Carousel.Item style={{ width: '187.5px',marginRight: '6px'}}>
                <img src={image1} width="140px" alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item >
                <img width='140px' src={image2} alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image3} alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image4} alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image5} alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image6} alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img width='' src={image7} alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image8} alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image9} alt='img1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={image10} alt='img1'></img>
            </Carousel.Item>
        </Carousel>
        {/* <div className='text-center' style={{ backgroundColor:'#2e82cb'}}>
            <a className='btn sixth-font px-2 text-white button-1'  href='/'>JOIN THE NETWORK</a>
        </div> */}
        <Button style={{ backgroundColor: '#2e82cb', borderRadius: '500px', padding: '8px 26px!important'}}>Join The Network</Button>
        </div>
        </div>
    </div>
    
  )
}

export default Slider2
