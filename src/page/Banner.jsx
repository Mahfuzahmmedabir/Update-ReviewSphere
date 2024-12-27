import React, { useEffect } from 'react';
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
                    Welcome to the ReviewSphere – your one-stop destination for
                    honest reviews and ratings
                  </h2>
                </div>

                <div className="flex justify-between mt-10">
                  {/* countup 1 */}
                  <div>
                    <CountUp start={0} end={10}>
                      {({ countUpRef, start }) => (
                        <div className="flex text-orange-500 flex-col-reverse">
                          <div className="flex flex-col   ">
                            <div className="flex ">
                              <span className="text-7xl" ref={countUpRef} />
                              <p className="text-7xl">k+</p>
                            </div>
                            <p className="text-start ">Reviews</p>
                          </div>
                        </div>
                      )}
                    </CountUp>
                  </div>
                  {/* countUp2 */}
                  <div>
                    <CountUp start={0} end={8}>
                      {({ countUpRef, start }) => (
                        <div className="flex flex-col-reverse">
                          <div className="flex flex-col ">
                            <div className="flex">
                              <span className="text-7xl" ref={countUpRef} />
                              <p className="text-7xl">k+</p>
                            </div>
                            <p className="text-start">Serviec</p>
                          </div>
                        </div>
                      )}
                    </CountUp>
                  </div>
                  {/* countup 3 */}
                  <div>
                    <CountUp start={0} end={15}>
                      {({ countUpRef, start }) => (
                        <div className="flex flex-col-reverse">
                          <div className="flex flex-col text-gray-900 ">
                            <div className="flex">
                              <span className="text-7xl" ref={countUpRef} />
                              <p className="text-7xl">k+</p>
                            </div>
                            <p className="text-start">User</p>
                          </div>
                        </div>
                      )}
                    </CountUp>
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
              'Welcome to the ReviewSphere – your one-stop destination for honest reviews and ratings. Find top services, share your experiences, and make informed choices with confidence'
            }
            image={img2}
          ></SliedImg>
        </SwiperSlide>
        <SwiperSlide>
          <SliedImg text={'hello world3'} image={img3}></SliedImg>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
