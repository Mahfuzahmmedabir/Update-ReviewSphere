import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const HomeCard = ({ service }) => {
  const { _id, Description, category, Photourl, Price, ServiceTitle } = service;

  const handealDelete = id => {
    axios.delete(`http://localhost:5000/service/${id}`).then(data => data.data);
    alert('delete');
  };

  return (
    <div>
      <div className=" p-8  rounded-2xl bg-slate-300 hover:shadow-xl">
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
          <p className="text-gray-500 text-xl">Price ${Price}</p>
          <div className="card-actions justify-center">
            <Link to={`/seedetails/${_id}`} className="badge badge-outline">
              See Details
            </Link>
            <button onClick={() => handealDelete(_id)}>deldat</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
