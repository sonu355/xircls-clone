import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Pagination, Autoplay, Navigation } from 'swiper';

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

const SmallSwi = () => {
  return (
    <>
        <div>
            <Swiper
                    spaceBetween={50}
                    slidesPerView={6}
                    pagination={false}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false
                    }}
                    navigation={false}
                    modules={[Pagination, Autoplay, Navigation]}
                    className='mySwiper'
            >
                <SwiperSlide>
                    <img src={image1} alt='img1' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt='img2' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt='img3' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt='img4' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt='img5' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image6} alt='img6' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image7} alt='img7' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image8} alt='img8' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image9} alt='img9' width='140px'></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image10} alt='img10' width='140px'></img>
                </SwiperSlide>
            </Swiper>
        </div>
    </>
  )
}

export default SmallSwi;
