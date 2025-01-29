import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Swal from 'sweetalert2';
const MyReviews = ({ myReviews }) => {
  console.log(myReviews);
  const { ServiceTitle, reviewText, ratings, _id, Photourl } = myReviews;
  const [rating, setRating] = useState();

  const handealDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`https://review-sphere-server.vercel.app/review/${id}`, {
          method: 'Delete',
        })
          .then(res => res.json())
          .then(data => {});
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };
  return (
    <div>
      <div className=" w-full mt-8 rounded-2xl card-compact bg-base-100 shadow-xl">
        <div className=" lg:flex justify-between p-10">
          <div className=" lg:flex gap-10 justify-center items-center">
            <img className="w-48" src={Photourl} alt="" />
            <div>
              <h2 className="card-title mt-10">{ServiceTitle}</h2>
              <p>{reviewText}</p>
              <Rating
                style={{ maxWidth: 130 }}
                value={ratings}
                isDisabled={true}
                onChange={setRating}
                required
              />
            </div>
          </div>

          <div className="card-actions flex lg:flex-col lg:justify-end justify-center mt-7">
            <button className="border font-semibold hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
              Updeat
            </button>
            <button
              onClick={() => handealDelete(_id)}
              className="border font-semibold  rounded-md px-4 py-2 hover:bg-red-600 hover:text-white "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
