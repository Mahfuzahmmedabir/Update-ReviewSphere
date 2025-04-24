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
              <td>
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
