import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, Description, category, Photourl, Price, ServiceTitle } = service;
  return (
    <div>
      <div className=" p-3 lg:p-3 rounded-2xl max-w-80 border hover:shadow-xl">
        <figure className="">
          <img className="w-52 rounded-2xl h-32 " src={Photourl} alt="Shoes" />
        </figure>
        <div className="">
          <h2 className="card-title text-2xl mt-2">{ServiceTitle}</h2>
          <p className="mt-2">{Description}</p>
          <p className="mt-1">Category: {category}</p>
          <p className="text-gray-500 mt-1 text-xl">Price ${Price}</p>
          <div className="card-actions mt-2 justify-center">
            <Link
              to={`/seedetails/${_id}`}
              className="badge badge-outline py-4"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
