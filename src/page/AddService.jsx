import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import addServiceAnimation from '../../public/Animation - 1735165660947.json';
import Lottie from 'lottie-react';
import Swal from 'sweetalert2';

const AddService = () => {
  const { user } = useContext(AuthContext);
  const navegate = useNavigate();
  const handealSubmit = e => {
    e.preventDefault();
    const addService = new FormData(e.target);
    const service = Object.fromEntries(addService.entries());
    service;
    axios.post('http://localhost:5000/service', service).then(result => {
      result;
        Swal.fire(' add service successfully');
      navegate('/');
    });
  };
  return (
    <div className="  ">
      <div className="hero-content flex-col gap-7 lg:gap-40   lg:flex-row">
        <div className="lg:w-6/12 ">
          <Lottie animationData={addServiceAnimation}></Lottie>
        </div>
        <div className=" lg:w-6/12 bg-slate-100 rounded-lg p-5 ">
          <form onSubmit={handealSubmit} className=" ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-medium">
                  Service url
                </span>
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
                <span className="label-text text-[16px] font-medium">
                  {' '}
                  Service Title
                </span>
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
                <span className="label-text text-[16px] font-medium">
                  Company Name
                </span>
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
                <span className="label-text text-[16px] font-medium">
                  Category
                </span>
              </label>
              <select className="border py-3 rounded-lg" name="category" id="">
                <option value="saas">Healthcare</option>
                <option value="saas">Hospitality and Tourism</option>
                <option value="saas">e commerce</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[16px] font-medium">
                  Price
                </span>
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
                <span className="label-text text-[16px] font-medium">Date</span>
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
                <span className="label-text text-[16px] font-medium">
                  Email
                </span>
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
                <span className="label-text  text-[16px] font-medium">
                  Description
                </span>
              </label>

              <textarea
                className="border p-2 rounded-md"
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

