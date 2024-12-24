import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DetailsService = () => {
  const details = useLoaderData()
  
   const { _id, Description, category, Photourl, Price, ServiceTitle } =
     details;

  
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

export default DetailsService;