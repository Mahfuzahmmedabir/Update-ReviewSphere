import React from 'react';

const Review = ({ review }) => {
  const { data, email, name, ratings, reviewText } = review;

  return (
    <div className=" flex mt-10  justify-center">
      <div className=" w-6/12 bg-base-100  shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
