import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  const [rating, setRating] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/review?email=${user?.email}`)
      .then(data => {
        setMyReview(data.data);
        console.log(data.data);
      });
  }, [user?.email]);
  // ServiceTitle: 'Architecto possimus';
  // data: '2014-11-25';
  // email: 'dapy@mailinator.com';
  // name: '';
  // ratings: 3;
  // reviewText: 'Laboriosam cupidita';

  return (
    <div>
      <div>
        {myReview?.map(review => (
          <div key={review._id}>
            <div className=" w-full mt-8 rounded-2xl card-compact bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{review?.ServiceTitle}</h2>
                <p>{review?.reviewText}</p>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={review?.ratings}
                  isDisabled={true}
                  onChange={setRating}
                  required
                />

                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
