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
  const [countup, setCountup] = useState(10);
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
              <div>
                {/* text */}
                <div>
                  <h2 className="text-black">
                    Welcome to the{' '}
                    <span className="text-orange-500">ReviewSphere</span>
                  </h2>
                </div>
                <div className=" lg:flex lg:justify-between gap-10 mt-10  ">
                  {/* countup 1 */}
                  <div className="text-[#efca08]  ">
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
                  <div className="lg:text-slate-950 text-white  ">
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
          <SliedImg
            text={
              'Welcome to the ReviewSphere – your one-stop destination for honest reviews and ratings.'
            }
            image={img2}
          ></SliedImg>
        </SwiperSlide>
        <SwiperSlide>
          <SliedImg text={''} image={img3}></SliedImg>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
