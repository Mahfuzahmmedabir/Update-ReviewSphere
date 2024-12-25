import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const Review = ({ review }) => {
  const { data, email, name, ratings, reviewText } = review;
  const [rating, setRating] = useState(ratings);
  return (
    <div className=" flex mt-6  justify-center">
      <div className=" w-6/12  rounded-md shadow-xl border  bg-slate-500 ">
        <div className="card-body">
          <h2 className="card-title text-white">{name}</h2>
          <div className="border-b-2"></div>
          <div className="flex justify-start">
            <p className=" flex gap-2 items-center mt-2 text-gray-600">
              <Rating
                style={{ maxWidth: 130 }}
                value={ratings}
                isDisabled={true}
                onChange={setRating}
                required
              />
            </p>
          </div>
          <p className="text-white">{reviewText}</p>
          <div className=" flex gap-3 text-gray-300 ">
            <span className="font-semibold">Date of experience:</span>
            <span>{data}</span>
          </div>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
