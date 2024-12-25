import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const MyReviews = ({ myReviews }) => {
  const { ServiceTitle, reviewText, ratings } = myReviews;
  const [rating, setRating] = useState();
  return (
    <div>
      <div className=" w-full mt-8 rounded-2xl card-compact bg-base-100 shadow-xl">
        <div className="flex justify-between p-10">
          <div className="">
            <h2 className="card-title">{ServiceTitle}</h2>
            <p>{reviewText}</p>
            <Rating
              style={{ maxWidth: 130 }}
              value={ratings}
              isDisabled={true}
              onChange={setRating}
              required
            />
          </div>

          <div className="card-actions flex flex-col justify-end">
            <button className="border font-semibold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
              Updeat
            </button>
            <button className="border font-semibold  rounded-md px-4 py-2 hover:bg-red-600 hover:text-white ">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
