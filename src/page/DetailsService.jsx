import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../components/reviews/Review';

const DetailsService = () => {
  const [review, setReview] = useState([]);

  const details = useLoaderData();
  const { _id, Description, category, Photourl, Price, ServiceTitle } = details;

  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReview(data))
      .catch(err => {
        err;
      });
  }, []);

  return (
    <div>
      <div className=" bg-base-100 flex justify-center  m-10  w-full ">
        <div className="flex gap-4">
          <figure>
            <img className="w-64 h-48 p-4" src={Photourl} alt="Shoes" />
          </figure>
          <div>
            <h2 className="text-3xl">{ServiceTitle}</h2>
            <p className=" text-xl mt-4">Review</p>
            <Link to={`/review/${_id}`}>
              <Rating style={{ maxWidth: 180 }} value={5} readOnly />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gray-700 p-4">
        {review?.map(item => (
          <Review key={item._id} review={item}></Review>
        ))}
      </div>
    </div>
  );
};

export default DetailsService;
