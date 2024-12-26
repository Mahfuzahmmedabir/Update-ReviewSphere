import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../assets/fullwidthslide2.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SliedImg from './SliedImg';

const Banner = () => {
  return (
    <div className="z-10">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliedImg
            text={
              'Welcome to the ReviewSphere – your one-stop destination for honest reviews and ratings. Find top services, share your experiences, and make informed choices with confidence'
            }
            image={img1}
          ></SliedImg>
        </SwiperSlide>

        <SwiperSlide>
          <SliedImg text={'hello world2'} image={img2}></SliedImg>
        </SwiperSlide>
        <SwiperSlide>
          <SliedImg text={'hello world3'} image={img3}></SliedImg>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
