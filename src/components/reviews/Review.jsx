import React, { useContext, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import AuthContext from '../../context/AuthContext';
import { Helmet } from 'react-helmet';
const Review = ({ review }) => {
  const { user } = useContext(AuthContext);
  const { data, email, name, ratings, reviewText, _id } = review;
  console.log(review);

  const [rating, setRating] = useState(ratings);
  return (
    <div className=" flex mt-6   justify-center">
      <Helmet>
        <title>ReviewSphere || Review</title>
      </Helmet>
      <div className=" lg:w-6/12  rounded-md shadow-xl border   bg-base-200 ">
        <div className="card-body">
          <div className="flex gap-3">
            {/* <img className="w-8 rounded-full" src={user?.photoURL} alt="" /> */}
            <h2 className='text-white py-2 rounded-full px-3 bg-slate-700'>{email.toUpperCase().slice(0, 1)}</h2>
            <h2 className="card-title ">{name}</h2>
          </div>
          <div className="border-b-2"></div>

          <div className="flex justify-start">
            <p className=" flex gap-2 items-center mt-2 text-gray-600">
              <Rating
                style={{ maxWidth: 130 }}
                value={ratings}
                readOnly
                onChange={setRating}
                required
              />
            </p>
          </div>
          <p className="">{reviewText}</p>
          <div className=" flex gap-3 text-gray-300 ">
            <span className="font-semibold text-gray-900">Date of experience:</span>
            <span className='text-gray-900'>{data}</span>
          </div>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Review;
