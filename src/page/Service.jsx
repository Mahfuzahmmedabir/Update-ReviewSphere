import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, Description, category, Photourl, Price, ServiceTitle } = service;
  return (
    <div>
      <div className=" p-8 rounded-2xl max-w-80 bg-slate-300 hover:shadow-xl">
        <figure className="">
          <img
            className="w-52   rounded-2xl h-32 "
            src={Photourl}
            alt="Shoes"
          />
        </figure>
        <div className="">
          <h2 className="card-title text-2xl">{ServiceTitle}</h2>
          <p>{Description}</p>
          <p >Category: {category}</p>
          <p className="text-gray-500 text-xl">Price ${Price}</p>
          <div className="card-actions justify-center">
            <Link to={`/seedetails/${_id}`} className="badge badge-outline">
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
