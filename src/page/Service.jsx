import React from 'react';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
  console.log(service);


  const {_id, Description,category, Photourl, Price, ServiceTitle } = service;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {ServiceTitle}
            <div className="badge badge-secondary"></div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <Link to={`/seedetails/${_id}`} className="badge badge-outline">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;