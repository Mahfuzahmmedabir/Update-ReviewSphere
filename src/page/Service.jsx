import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  console.log(service);

  const { _id, Description, category, Photourl, Price, ServiceTitle } = service;


// 
// https://i.ibb.co.com/6gYt37X/attachment-97838747.jpg
// https://i.ibb.co.com/j8zchcW/istockphoto-1125880278-612x612.jpg
// https://i.ibb.co.com/Jc2KLrf/depositphotos-369764632-stock-illustration-bulb-tech-logo-icon-idea.webp
//








  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="w-64 h-48 p-4" src={Photourl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {ServiceTitle}
            <div className="badge badge-secondary"></div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
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
