import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewForm = () => {
  const review = useLoaderData();
  const { _id, Description, category, Photourl, Price, ServiceTitle } = review;

  return (
    <div className="m-10   text-center ">
      <div className="flex justify-center gap-4">
        <img className="w-40" src={Photourl} alt="" />
        <h2 className="text-2xl">{ServiceTitle}</h2>
      </div>
      {/* Add Review */}
      <div className=" w-6/12 p-10 justify-center mx-auto mt-8    shrink-0 shadow-2xl">
        <form className="">
          <h2>Rate your recent experience</h2>

          <div className="">
            <label className="label">
              <span className=" text-xl font-bold">
                Tell us more about your experience
              </span>
            </label>
            <label for="w3review"></label>

            <textarea
              className="border p-2  "
              id="w3review"
              name="w3review"
              rows="6"
              cols="80"
            >
              At w3schools.com you will learn how to make a website. They offer
              free tutorials in all web development technologies.
            </textarea>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
