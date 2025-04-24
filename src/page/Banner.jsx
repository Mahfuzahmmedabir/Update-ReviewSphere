import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import img3 from '../assets/fullwidthslide2.jpg';
import img2 from '../assets/img2.jpg';
import img1 from '../assets/img3.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SliedImg from './SliedImg';
import CountUp from 'react-countup';

const Banner = () => {
  return (
    <div className="z-10 inset-0 bg-black/ ">
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
              <div>
                {/* text */}
                <div>
                  <h2 className=" ">
                    Welcome to the
                    <span className="text-[#353b48] font-bold"> ReviewSphere</span>
                  </h2>
                </div>
                <div className=" lg:flex lg:justify-between gap-10 mt-10  ">
                  {/* countup 1 */}
                  <div className="text-[#353b48]  ">
                    <div className="flex justify-center  ">
                      <CountUp
                        className="text-7xl"
                        delay={2}
                        end={10}
                      ></CountUp>
                      <div className="flex  text-5xl   ">
                        <div className="flex ">
                          <p className="text-7xl">k+</p>
                        </div>
                      </div>
                    </div>
                    <p className="">Reviews</p>
                  </div>
                  {/* countUp2 */}
                  <div className=" ">
                    <div className="flex justify-center  ">
                      <CountUp className="text-7xl" delay={2} end={8}></CountUp>
                      <div className="flex  text-5xl   ">
                        <div className="flex ">
                          <p className="text-7xl">k+</p>
                        </div>
                      </div>
                    </div>
                    <p className=" ">Service</p>
                  </div>
                  {/* countup 3 */}
                  <div className="lg:text-slate-950   text-white  ">
                    <div className="flex justify-center">
                      <CountUp
                        className="text-7xl "
                        delay={2}
                        end={15}
                      ></CountUp>
                      <div className="flex">
                        <div className="flex ">
                          <p className="text-7xl">k+</p>
                        </div>
                      </div>
                    </div>
                    <p className="">User</p>
                  </div>
                </div>
              </div>
            }
            image={img1}
          ></SliedImg>
        </SwiperSlide>
        <SwiperSlide>
          <div className='inset-0 bg-black/25'>
          <SliedImg
            text={
              <p className="lg:w-[1000px]">
                Your opinion matters! Share your experiences, explore authentic
                insights, and help others make better choices. Join ReviewSphere
                and be a part of a transparent and informed community.
              </p>
            }
            image={img2}
          ></SliedImg>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
          <SliedImg
            text={
              <p className="lg:w-[1000px]">
                Share your experiences, explore honest reviews, and make
                informed decisions. ReviewSphere empowers you to voice your
                opinions and influence the community with real insights.
              </p>
            }
            image={img3}
          ></SliedImg>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
