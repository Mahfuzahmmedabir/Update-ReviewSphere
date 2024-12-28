import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrUpdate } from 'react-icons/gr';
import AuthContext from '../context/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DeleteAndUpdetService = ({ services }) => {
  const { user } = useContext(AuthContext);
  console.log(services);
  const {
    CompanyName,
    Description,
    ServiceTitle,
    Photourl,
    Price,
    category,
    date,
    _id,
  } = services;
  console.log(services);
  const navegate = useNavigate();
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
        fetch(`https://review-sphere-server.vercel.app/service/${id}`, {
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
  // updet
  const handealSubmit = e => {
    console.log(_id);
    e.preventDefault();
    const addService = new FormData(e.target);
    const service = Object.fromEntries(addService.entries());
    service;
    console.log(service);
    axios
      .put(
        `https://review-sphere-server.vercel.app/service/${_id}`,
        service
      )
      .then(result => {
        result;
        navegate('/');
        Swal.fire('Update successful');
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="w-3/12 text-xl">Company</th>
              <th className="w-7/12 text-xl">Title</th>
              <th className="w-3/12 text-xl ">Update</th>
              <th className="w-3/12 text-xl">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={Photourl} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{CompanyName}</div>
                  </div>
                </div>
              </td>
              <td className="text-xl font-semibold">{ServiceTitle}</td>
              {/* <td>Updeat</td> */}
              <td>
                {/* modal */}
                {/* The button to open modal */}
                <label htmlFor="my_modal_7" className="btn">
                  {/* <UpdeatModal services={services}></UpdeatModal> */}
                  <span className="  text-xl font-bold hover:text-xl ">
                    <GrUpdate></GrUpdate>
                  </span>
                </label>
                {/* Put this part before </body> tag */}
                <input
                  type="checkbox"
                  id="my_modal_7"
                  className="modal-toggle"
                />
                {/* updet form */}
                <div className="modal " role="dialog">
                  <div className="modal-box ">
                    <div className="  bg-slate-100 rounded-lg p-5 ">
                      <form onSubmit={handealSubmit} className=" ">
                        <h2 className="text-center font-semibold text-2xl">
                          Update Your Service
                        </h2>
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
                            defaultValue={Photourl}
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-[16px] font-medium">
                              Service Title
                            </span>
                          </label>
                          <input
                            type="text"
                            placeholder="Service Title"
                            name="ServiceTitle"
                            defaultValue={ServiceTitle}
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
                            defaultValue={CompanyName}
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
                          <select
                            className="border py-3 rounded-lg"
                            name="category"
                            defaultValue={category}
                            id=""
                          >
                            <option value="saas">Healthcare</option>
                            <option value="saas">
                              Hospitality and Tourism
                            </option>
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
                            defaultValue={Price}
                            className="input input-bordered"
                            required
                          />
                        </div>
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-[16px] font-medium">
                              Date
                            </span>
                          </label>
                          <input
                            type="date"
                            placeholder="Date"
                            name="date"
                            defaultValue={date}
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
                            defaultValue={Description}
                            placeholder="Enter You Description"
                            rows="4"
                            cols="50"
                          ></textarea>
                        </div>
                        <div className="form-control mt-6">
                          <button className="btn btn-primary">
                            {' '}
                            Update Service
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <label className="modal-backdrop" htmlFor="my_modal_7">
                    Close
                  </label>
                </div>

                {/* Updet form */}
              </td>
              <td>
                <button
                  onClick={() => handealDelete(_id)}
                  className=" text-red-700 ml-6 text-xl"
                >
                  <RiDeleteBin6Line></RiDeleteBin6Line>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteAndUpdetService;
