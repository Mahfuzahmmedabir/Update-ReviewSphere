import React from 'react';

const SliedImg = ({ text, image }) => {
  return (
    <div
      className=" lg:w-full  bg-center bg-cover h-[38rem]"
      style={{ backgroundImage: `url(${image})` }}>
      <div className="flex items-center justify-center w-full h-full bg-gray-900/20">
        <div className="text-center">
          <h1 className="text-3xl w-6/12 mx-auto font-semibold lg:text-4xl text-white">
            {text}
          </h1>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SliedImg;
