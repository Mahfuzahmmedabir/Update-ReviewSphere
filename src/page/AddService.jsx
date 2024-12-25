import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
  const { user } = useContext(AuthContext);
  const navegate = useNavigate();
  const handealSubmit = e => {
    e.preventDefault();
    const addService = new FormData(e.target);
    const service = Object.fromEntries(addService.entries());
    console.log(service);
    axios.post('http://localhost:5000/service', service).then(result => {
      console.log(result);
      // navegate('/');
    });
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handealSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Service Image</span>
              </label>
              <input
                type="url"
                placeholder="Photo url"
                name="Photourl"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Service Title</span>
              </label>
              <input
                type="text"
                placeholder="Service Title"
                name="ServiceTitle"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Company Name</span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                name="CompanyName"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select className="border" name="category" id="">
                <option value="saas">Healthcare</option>
                <option value="saas">Hospitality and Tourism</option>
                <option value="saas">e commerce</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                name="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                placeholder="Date"
                name="date"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                defaultValue={user?.email}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>

              <textarea
                className="border"
                name="Description"
                placeholder="Enter You Description"
                rows="4"
                cols="50"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary"> Add Service</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
