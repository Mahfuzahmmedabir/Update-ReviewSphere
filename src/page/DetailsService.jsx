import React, { useEffect } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

import { Link, useLoaderData } from 'react-router-dom';

const DetailsService = () => {

  const details = useLoaderData();
  const { _id, Description, category, Photourl, Price, ServiceTitle } = details;


  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => console.log(data))


      .catch(err => {
        console.log(err)
      })
    
    
    

  },[])



  return (
    <div>
      <div className=" bg-base-100  m-10  w-full ">
        <div className="flex gap-4">
          <figure>
            <img className="w-64 h-48 p-4" src={Photourl} alt="Shoes" />
          </figure>
          <div>
            <h2 className="text-3xl">{ServiceTitle}</h2>
            <p className=" text-xl mt-4">Review</p>
            <Link to={`/review/${_id}`}>
              <Rating style={{ maxWidth: 180 }} value={3} readOnly />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsService;
