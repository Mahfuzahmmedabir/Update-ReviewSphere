import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ service }) => {
  const { _id, Description, category, Photourl, Price, ServiceTitle } = service;



  return (
    <div>
      <div className=" p-3   rounded-2xl  border hover:shadow-xl">
        <figure className="">
          <img className="w-52  rounded-2xl h-32 " src={Photourl} alt="Shoes" />
        </figure>
        <div className="">
          <h2 className="card-title text-2xl mt-3">{ServiceTitle}</h2>
          <p className="mt-1">{Description}</p>
          <p className="text-gray-500  mt-1">Price: ${Price}</p>
          <div className="card-actions mt-6   justify-center">
            <Link
              to={`/seedetails/${_id}`}
              className="badge badge-outline font-semibold py-4 text-[16px]"
            >
              See Details
            </Link>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
